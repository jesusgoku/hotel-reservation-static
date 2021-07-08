function getPriceRange(price) {
  if (price <= 2000) return '$';
  else if (price > 2000 && price <= 3000) return '$$';
  else if (price > 3000 && price <= 4000) return '$$$';
  else return '$$$$';
}

function getSizeRange(size) {
  if (size <= 10) return 'small';
  else if (size > 10 && size <= 20) return 'medium';
  else return 'large';
}

function isSizeRange(size, selectedSize) {
  return getSizeRange(size) === selectedSize;
}

function isPriceRange(price, selectedPrice) {
  return getPriceRange(price) === selectedPrice;
}

export {
  getPriceRange, //
  getSizeRange,
  isPriceRange,
  isSizeRange,
};
