import jwt from 'jsonwebtoken';

export const checkAuthz = (request) => {
    const {authorization} = request.headers;
    const token = authorization.split(' ')[1];
    const decodedJwt = jwt.verify(token, process.env.signingSecret);

    if(decodedJwt.scopes.includes('cat-app')) {
        return true
    }

    return false;
};