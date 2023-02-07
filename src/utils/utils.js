import { CONST } from "@/constants/constants";

export function importImages(src, data) {
  let images = [];
  const rotateImages = CONST.rotateImages;

  data.keys().forEach((key) => {
    const name = key.split('/').at(-1);
    images.push({
      src: src,
      title: name,
      path: key.replace("./", ""),
      isRotate: Object.keys(rotateImages).includes(name),
      rotate: undefined !== rotateImages[name] ? rotateImages[name].rotate : 0,
    })
  });

  return images;
}