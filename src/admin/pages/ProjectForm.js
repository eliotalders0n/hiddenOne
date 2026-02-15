import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  HStack,
  Image,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db, storage } from '../../firebase_config';
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Predefined project color presets
const projectColorPresets = {
  ngwee: { bg: "#E5A030", text: "#222222", name: "NGWEE" },
  slushy: { bg: "#D94A4A", text: "#FFFFFF", name: "SLUSHY" },
  kamba: { bg: "#5FBFBF", text: "#222222", name: "KAMBA" },
  sellr: { bg: "#1A2B4A", text: "#FFFFFF", name: "SELLR" },
  digiport: { bg: "#E07B53", text: "#FFFFFF", name: "DIGIPORT" },
  academia: { bg: "#7B68EE", text: "#FFFFFF", name: "ACADEMIA" },
  narative: { bg: "#2D5A4A", text: "#FFFFFF", name: "NARATIVE" },
  pia: { bg: "#E84A7F", text: "#FFFFFF", name: "PIA" },
  "git-switcher": { bg: "#E5A030", text: "#222222", name: "GIT SWITCHER" },
  eati: { bg: "#1A2B4A", text: "#FFFFFF", name: "EATI" },
};

export default function ProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const [form, setForm] = useState({
    title: '',
    category: '',
    tagline: '',
    story: '',
    features: '',
    image: '',
    bgColor: '#5FBFBF',
    textColor: '#222222',
    link: '',
    order: 1,
  });

  const handlePresetSelect = (presetKey) => {
    const preset = projectColorPresets[presetKey];
    if (preset) {
      setForm((prev) => ({
        ...prev,
        bgColor: preset.bg,
        textColor: preset.text,
      }));
    }
  };

  useEffect(() => {
    if (isEditing) {
      const fetchProject = async () => {
        try {
          const docRef = doc(db, 'projects', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setForm({
              ...data,
              features: Array.isArray(data.features)
                ? data.features.join(', ')
                : data.features || '',
            });
            setImagePreview(data.image || '');
          }
        } catch (error) {
          console.error('Error fetching project:', error);
          toast({ title: 'Error loading project', status: 'error' });
        }
        setLoading(false);
      };
      fetchProject();
    } else {
      const getNextOrder = async () => {
        try {
          const q = query(
            collection(db, 'projects'),
            orderBy('order', 'desc')
          );
          const snapshot = await getDocs(q);
          const maxOrder = snapshot.docs[0]?.data()?.order || 0;
          setForm((prev) => ({ ...prev, order: maxOrder + 1 }));
        } catch (error) {
          console.error('Error getting order:', error);
        }
      };
      getNextOrder();
    }
  }, [id, isEditing, toast]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      let imageUrl = form.image;

      if (imageFile) {
        const storageRef = ref(
          storage,
          `projects/${Date.now()}_${imageFile.name}`
        );
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      const projectData = {
        ...form,
        image: imageUrl,
        features: form.features
          .split(',')
          .map((f) => f.trim())
          .filter(Boolean),
        order: Number(form.order),
      };

      if (isEditing) {
        await setDoc(doc(db, 'projects', id), projectData);
        toast({ title: 'Project updated', status: 'success' });
      } else {
        await addDoc(collection(db, 'projects'), projectData);
        toast({ title: 'Project created', status: 'success' });
      }

      navigate('/root/projects');
    } catch (error) {
      console.error('Error:', error);
      toast({ title: 'Error saving project', status: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" py={20}>
        <Spinner size="xl" color="#222222" />
      </Box>
    );
  }

  return (
    <Box maxW="800px">
      <Heading size="lg" mb={8} color="#222222">
        {isEditing ? 'Edit Project' : 'New Project'}
      </Heading>

      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <FormControl isRequired>
            <FormLabel color="#222222">Title</FormLabel>
            <Input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              borderColor="#7B7B7B"
              _focus={{ borderColor: '#222222' }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="#222222">Category</FormLabel>
            <Input
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="e.g., WEB APPLICATION"
              borderColor="#7B7B7B"
            />
          </FormControl>

          <FormControl>
            <FormLabel color="#222222">Tagline</FormLabel>
            <Input
              value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
              placeholder="Short uppercase tagline"
              borderColor="#7B7B7B"
            />
          </FormControl>

          <FormControl>
            <FormLabel color="#222222">Story</FormLabel>
            <Textarea
              value={form.story}
              onChange={(e) => setForm({ ...form, story: e.target.value })}
              rows={4}
              borderColor="#7B7B7B"
              placeholder="Describe the project..."
            />
          </FormControl>

          <FormControl>
            <FormLabel color="#222222">Features (comma-separated)</FormLabel>
            <Input
              value={form.features}
              onChange={(e) => setForm({ ...form, features: e.target.value })}
              placeholder="React, Firebase, Chakra UI"
              borderColor="#7B7B7B"
            />
          </FormControl>

          <FormControl>
            <FormLabel color="#222222">Project Image</FormLabel>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              p={1}
            />
            {imagePreview && (
              <Image
                src={imagePreview}
                alt="Preview"
                maxH="200px"
                mt={2}
                borderRadius="md"
              />
            )}
          </FormControl>

          <FormControl>
            <FormLabel color="#222222">Color Presets</FormLabel>
            <HStack spacing={2} flexWrap="wrap" mb={4}>
              {Object.entries(projectColorPresets).map(([key, preset]) => (
                <Box
                  key={key}
                  as="button"
                  type="button"
                  onClick={() => handlePresetSelect(key)}
                  bg={preset.bg}
                  color={preset.text}
                  px={3}
                  py={2}
                  borderRadius="md"
                  fontSize="xs"
                  fontWeight="bold"
                  border={form.bgColor === preset.bg ? '3px solid #222222' : '3px solid transparent'}
                  _hover={{ opacity: 0.8 }}
                  transition="all 0.2s"
                >
                  {preset.name}
                </Box>
              ))}
            </HStack>
          </FormControl>

          <HStack spacing={4}>
            <FormControl>
              <FormLabel color="#222222">Background Color</FormLabel>
              <HStack>
                <Input
                  type="color"
                  value={form.bgColor}
                  onChange={(e) => setForm({ ...form, bgColor: e.target.value })}
                  w="60px"
                  h="40px"
                  p={1}
                  cursor="pointer"
                />
                <Input
                  value={form.bgColor}
                  onChange={(e) => setForm({ ...form, bgColor: e.target.value })}
                  placeholder="#FFFFFF"
                  borderColor="#7B7B7B"
                />
              </HStack>
            </FormControl>

            <FormControl>
              <FormLabel color="#222222">Text Color</FormLabel>
              <HStack>
                <Input
                  type="color"
                  value={form.textColor}
                  onChange={(e) => setForm({ ...form, textColor: e.target.value })}
                  w="60px"
                  h="40px"
                  p={1}
                  cursor="pointer"
                />
                <Input
                  value={form.textColor}
                  onChange={(e) => setForm({ ...form, textColor: e.target.value })}
                  placeholder="#222222"
                  borderColor="#7B7B7B"
                />
              </HStack>
            </FormControl>
          </HStack>

          <Box
            p={4}
            borderRadius="md"
            bg={form.bgColor}
            color={form.textColor}
          >
            <Box fontSize="sm" fontWeight="bold">Preview</Box>
            <Box fontSize="lg">{form.title || 'Project Title'}</Box>
          </Box>

          <FormControl>
            <FormLabel color="#222222">Project Link</FormLabel>
            <Input
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              placeholder="https://..."
              borderColor="#7B7B7B"
            />
          </FormControl>

          <FormControl>
            <FormLabel color="#222222">Display Order</FormLabel>
            <Input
              type="number"
              value={form.order}
              onChange={(e) => setForm({ ...form, order: e.target.value })}
              borderColor="#7B7B7B"
            />
          </FormControl>

          <HStack spacing={4} pt={4}>
            <Button
              type="submit"
              bg="#222222"
              color="white"
              isLoading={saving}
              _hover={{ bg: '#7B7B7B' }}
            >
              {isEditing ? 'Update Project' : 'Create Project'}
            </Button>
            <Button variant="outline" onClick={() => navigate('/root/projects')}>
              Cancel
            </Button>
          </HStack>
        </VStack>
      </form>
    </Box>
  );
}
