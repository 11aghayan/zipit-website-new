export default function formatPrice(price: number | null) {
  if (!price) return null;
  if (price < 1000) return price;
  
  const priceStr = price.toString();

  const formattedPrice = [];

  for (let i = priceStr.length - 1, j = 1; i >= 0; i--, j++) {
    if (j === 3) {
      formattedPrice.push(priceStr[i]);

      if (i - 1 >= 0) {
        formattedPrice.push(',');
      }

      j = 0;
      continue;
    }

    formattedPrice.push(priceStr[i]);
  }

  return formattedPrice.reverse().join('');
}