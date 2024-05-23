const BASE_URL = 'http://127.0.0.1:8000';

export async function getWithAuth(url) {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function postWithAuth(url, data) {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function postWithoutAuth(url, data) {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function putWithAuth(url, data) {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function deleteWithAuth(url) {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return 0;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function patchWithAuth(url, data) {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
