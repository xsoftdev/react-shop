export const api = async (endpoint, options = {}) => {
    const baseUrl = 'https://your-api-url.com';
    const url = `${baseUrl}${endpoint}`;

    try {
        const response = await fetch(url, {
            method: options.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {}),
            },
            body: options.body ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
            throw new Error(`Ошибка при запросе: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API запрос не удался:', error);
        throw error;
    }
};
export const getProducts = async () => {

    const options = {
        method: 'GET',
        headers: {
            'X-ACCESS-TOKEN': `${localStorage.getItem('token')}`,
        },
    };

    return await api('/api/products', options);
};