export const capitalize = (str) => {
  const newStr = `${str}`.split('');
  const finalStr = newStr.map((item, index) => {
    if (index === 0) {
      return item.toUpperCase();
    }
    return item.toLowerCase();
  });
  return finalStr.join('');
};
