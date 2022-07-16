interface FormatPriceProps {
  price: number;
  checkout?: boolean;
}

export function formatPrice({ price, checkout }: FormatPriceProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    style: checkout ? "currency" : "decimal",
    currency: "BRL",
  }).format(price);
  return formattedPrice;
}
