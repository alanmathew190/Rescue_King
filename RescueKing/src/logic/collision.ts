export const isColliding = (a: any, b: any) => {
  return a.x < b.x + 40 && a.x + 40 > b.x && a.y < b.y + 40 && a.y + 40 > b.y;
};
