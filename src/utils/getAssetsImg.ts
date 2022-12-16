const getAssetsImg = (path: any): any => {
  return new URL(`../assets/img/${path}`, import.meta.url).href;
};

export default getAssetsImg;
