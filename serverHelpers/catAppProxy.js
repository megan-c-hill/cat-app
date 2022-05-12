export const catAppGet = async (endpoint, method) => {
    const response = await fetch(`${process.env.catAppUrl}${endpoint}`, {
        method,
        headers: {
            'x-api-key': process.env.catApiKey
        }
    });

    // in production apps you'd want to do some error checking here and ensure you get a 200 or handle errors accordingly
    return await response.json();
}