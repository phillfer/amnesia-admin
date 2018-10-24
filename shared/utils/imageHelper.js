export const getImageUrl = imageable => {
  const { image } = imageable;
  if (!image) return null;
  return image;
};
