/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
import { useTexture } from "@react-three/drei";
import { useHeightfield } from "@react-three/cannon";
import { useAsset } from "use-asset";

import type { Texture } from "three";
import type { HeightfieldArgs, HeightfieldProps } from "@react-three/cannon";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
if (context) context.imageSmoothingEnabled = false;

/**
 * Returns matrix data to be passed to heightfield.
 * set elementSize as `size` / matrix[0].length (image width)
 * and rotate heightfield to match (rotation.x = -Math.PI/2)
 */
function createHeightfieldMatrix(image: HTMLImageElement): number[][] {
  if (!context) {
    throw new Error("Heightfield could not be created");
  }
  const width = image.width;
  const height = image.height;
  const matrix: number[][] = Array(width);
  const row: number[] = Array(height);
  const scale = 20; // determines the vertical scale of the heightmap
  let p: number;

  canvas.width = width;
  canvas.height = height;
  context.drawImage(image, 0, 0, width, height);

  const { data } = context.getImageData(0, 0, width, height);

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // pixel data is [r, g, b, alpha]
      // since image is in b/w -> any rgb val
      p = (data[4 * (y * width + x)] * scale) / 255;
      row[y] = Number(Math.max(0, p).toPrecision(2)) / 4;
    }
    matrix[x] = [...row];
  }
  context.clearRect(0, 0, width, height);
  return matrix;
}

type HeightmapProps = Required<Pick<HeightfieldProps, "position" | "rotation">> & Required<Pick<HeightfieldArgs["1"], "elementSize">>;

const HeightMap = ({ elementSize, position, rotation }: HeightmapProps) => {
  const heightmap = useTexture("/models/HeightMap/ajou_heightmap_1024.png");
  const heights = useAsset<number[][], Texture[]>(async () => createHeightfieldMatrix(heightmap.image), heightmap).map((items) => items.map((item) => item * 1.9));
  useHeightfield(() => ({ type: "Static", args: [heights, { elementSize }], position, rotation }), undefined, [elementSize, position, rotation]);

  return null;
};

export default HeightMap;
