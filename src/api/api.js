const BASE_URL = 'http://127.0.0.1:8000';

export async function getWithAuth(url) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
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
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
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

export async function patchWithAuth(url, data) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localStorage');
        }

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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
