import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  HStack,
  Spinner,
  useToast,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  Text,
  Icon,
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { db } from '../../firebase_config';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function DragHandle() {
  return (
    <Box
      as="span"
      cursor="grab"
      color="#7B7B7B"
      _hover={{ color: '#222222' }}
      fontSize="lg"
      px={2}
    >
      ⠿
    </Box>
  );
}

function SortableRow({ project, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    backgroundColor: isDragging ? '#F8F8F8' : 'transparent',
  };

  return (
    <Tr ref={setNodeRef} style={style} _hover={{ bg: '#F8F8F8' }}>
      <Td>
        <HStack spacing={2}>
          <Box {...attributes} {...listeners}>
            <DragHandle />
          </Box>
          <Text color="#7B7B7B" fontSize="sm" w="24px">
            {project.order}
          </Text>
        </HStack>
      </Td>
      <Td fontWeight="medium">{project.title}</Td>
      <Td color="#7B7B7B">{project.category}</Td>
      <Td>
        <HStack spacing={2}>
          <Button
            as={RouterLink}
            to={`/root/projects/${project.id}/edit`}
            size="sm"
            variant="outline"
            borderColor="#222222"
          >
            Edit
          </Button>
          <Button
            size="sm"
            variant="ghost"
            color="red.500"
            onClick={() => onDelete(project.id)}
          >
            Delete
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const fetchProjects = async () => {
    try {
      const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
    } catch (error) {
      console.error('Error:', error);
      toast({ title: 'Error loading projects', status: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'projects', deleteId));
      setProjects(projects.filter((p) => p.id !== deleteId));
      toast({ title: 'Project deleted', status: 'success' });
    } catch (error) {
      toast({ title: 'Error deleting project', status: 'error' });
    }
    onClose();
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = projects.findIndex((p) => p.id === active.id);
      const newIndex = projects.findIndex((p) => p.id === over.id);

      const newProjects = arrayMove(projects, oldIndex, newIndex);
      setProjects(newProjects);

      try {
        for (let i = 0; i < newProjects.length; i++) {
          await updateDoc(doc(db, 'projects', newProjects[i].id), {
            order: i + 1,
          });
        }
        toast({ title: 'Order updated', status: 'success', duration: 1500 });
      } catch (error) {
        toast({ title: 'Error updating order', status: 'error' });
        fetchProjects();
      }
    }
  };

  const openDeleteDialog = (id) => {
    setDeleteId(id);
    onOpen();
  };

  if (loading) {
    return (
      <Box textAlign="center" py={20}>
        <Spinner size="xl" color="#222222" />
      </Box>
    );
  }

  return (
    <Box>
      <HStack justify="space-between" mb={8}>
        <Heading size="lg" color="#222222">
          Projects
        </Heading>
        <Button
          as={RouterLink}
          to="/root/projects/new"
          bg="#222222"
          color="white"
          _hover={{ bg: '#7B7B7B' }}
        >
          + Add Project
        </Button>
      </HStack>

      <Box
        overflowX="auto"
        bg="white"
        borderRadius="lg"
        border="1px solid"
        borderColor="#E0E0E0"
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <Table>
            <Thead bg="#F8F8F8">
              <Tr>
                <Th color="#7B7B7B" w="100px">Order</Th>
                <Th color="#7B7B7B">Title</Th>
                <Th color="#7B7B7B">Category</Th>
                <Th color="#7B7B7B">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <SortableContext
                items={projects.map((p) => p.id)}
                strategy={verticalListSortingStrategy}
              >
                {projects.map((project) => (
                  <SortableRow
                    key={project.id}
                    project={project}
                    onDelete={openDeleteDialog}
                  />
                ))}
              </SortableContext>
            </Tbody>
          </Table>
        </DndContext>
      </Box>

      <Text mt={4} fontSize="sm" color="#7B7B7B">
        Drag rows to reorder projects
      </Text>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Delete Project</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? This action cannot be undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
