export const hello = () => "hello";

export const getSlope = (yTop: number, yBottom: number, zTop: number, zBottom: number): number => Math.abs(zTop - zBottom) / Math.abs(yTop - yBottom);

export const getRadianBySlope = (slope: number): number => Math.atan(slope);

export const getRadian = (yTop: number, yBottom: number, zTop: number, zBottom: number): number => getRadianBySlope(getSlope(yTop, yBottom, zTop, zBottom));

export const getDxDy = (dyRadian: number, dxRadian: number) => [Math.cos(dxRadian) * Math.cos(dyRadian), Math.cos(dxRadian) * Math.sin(dyRadian), Math.sin(dxRadian)];
