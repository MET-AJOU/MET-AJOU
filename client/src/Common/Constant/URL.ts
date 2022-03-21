export const TEST_SERVER = `${process.env.REACT_APP_GET_TEST_SERVER_DOMAIN}${process.env.REACT_APP_GET_TEST_SERVER_PORT}`;
export const REAL_SERVER = `${process.env.REACT_APP_GET_SERVER_DOMAIN}${process.env.REACT_APP_GET_SERVER_PORT}`;
export const SOCKET_SERVER = `${process.env.REACT_APP_SOCKET_SERVER_URL}:${process.env.REACT_APP_SOCKET_SERVER_PORT}`;

const SERVER = TEST_SERVER;

export const TEST_GOOGLE_URL = `${TEST_SERVER}${process.env.REACT_APP_GET_GOOGLE_URL}`;
export const GOOGLE_URL = `${SERVER}${process.env.REACT_APP_GET_GOOGLE_URL}`;

export const CHECK_TOKEN = `${SERVER}/api/token/mine`;

export const VERIFY_EMAIL = `${SERVER}/api/verify/send/ajouemail`;

export const CHECK_EXPIRED = `${SERVER}/api/token/expiredtime`;
export const CHECK_EMAIL_VERIFY = `${SERVER}/api/verify`;
