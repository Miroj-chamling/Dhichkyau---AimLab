export const randomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getLeftCoordinate = () => {
  return randomNumber(0, 90);
};

export const getRightCoordinate = () => {
  return randomNumber(0, 90);
};
