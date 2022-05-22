import jwt from 'jsonwebtoken';

const generateJwt = () =>
    jwt.sign({
        scopes: ['cat-app']
    }, process.env.signingSecret);

export const get = async (path) => {
    const response = await fetch(path, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${generateJwt()}`
        }
    });

    return response.json();
}

