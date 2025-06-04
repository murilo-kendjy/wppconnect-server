export const SECRET_KEY = process.env.SECRET_KEY || 'THISISMYSECURETOKEN';
export const DEVICE_NAME = process.env.DEVICE_NAME || 'WppConnect';
export const POWERED_BY = process.env.POWERED_BY || 'WPPConnect-Server';
export const HOST = process.env.HOST || 'http://localhost';
export const PORT = parseInt(process.env.PORT || '21465');
export const MAX_LISTENERS = parseInt(process.env.MAX_LISTENERS || '15');
