export const DATA_SERVER = `${process.env.REACT_APP_GET_SERVER_DOMAIN}${process.env.REACT_APP_GET_DATA_SERVER_PORT}${process.env.REACT_APP_GET_DATA_SERVER_URL}`;
// export const SOCKET_SERVER = `${process.env.REACT_APP_SOCKET_SERVER_URL}:${process.env.REACT_APP_SOCKET_SERVER_PORT}`;
export const SOCKET_SERVER = `${process.env.REACT_APP_SOCKET_SERVER_URL}:${process.env.REACT_APP_SOCKET_SERVER_PORT}`;

export const GET_SELECT_CHARACTER_URL = `${process.env.REACT_APP_CHARACTER_URL}`;
export const GET_USER_CHARACTER_URL = `${process.env.REACT_APP_USER_CHARACTER_URL}`;
export const GET_VIDEO_URL = `${process.env.REACT_APP_CHARACTER_URL}`;

export const GET_PROFILE = `${DATA_SERVER}/profile`;
export const GET_CHARACTER = `${DATA_SERVER}/character`;
export const POST_CHARACTER = `${DATA_SERVER}/character`;

export const CHANNEL = "/Channel";
export const MAP = "/map";
export const DEBATE = "/debate";
export const GYM = "/gym";
export const TALK = "/talk";
