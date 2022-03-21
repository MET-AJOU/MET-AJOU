export const TEST_SERVER = `${process.env.REACT_APP_GET_TEST_SERVER_DOMAIN}${process.env.REACT_APP_GET_SERVER_PORT}`;
export const REAL_SERVER = `${process.env.REACT_APP_GET_SERVER_DOMAIN}${process.env.REACT_APP_GET_SERVER_PORT}`;
export const SOCKET_SERVER = `${process.env.REACT_APP_SOCKET_SERVER_URL}:${process.env.REACT_APP_SOCKET_SERVER_PORT}`;

const servers = [TEST_SERVER, REAL_SERVER];
const SERVER = servers[0];

export const GOOGLE_URL = `${SERVER}${process.env.REACT_APP_GET_GOOGLE_URL}`;
export const CHECK_TOKEN = `${SERVER}/api/token/mine`;
export const GET_VERIFY_EMAIL = `${SERVER}/api/verify/send/ajouemail`;
export const CHECK_EXPIRED = `${SERVER}/api/token/expiredtime`;
export const CHECK_EMAIL_VERIFY = `${SERVER}/api/verify`;

export const CHECK_VERIFY_EMAIL = `${SERVER}/api/verify`;
