export const formatPriceNumber = (value: string) => {
    return `$${value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

