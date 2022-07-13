export function formatPrice(price: number) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    currency: "BRL",
  }).format(price);
  return formattedPrice;
}
