export function importImages(src, data) {
  let images = [];
  data.keys().forEach((key) => {
    images.push({
      src: src,
      title: key.split('/').at(-1),
      path: key.replace("./", ""),
    })
  });

  return images;
}