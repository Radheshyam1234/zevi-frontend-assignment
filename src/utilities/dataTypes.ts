type ratingType = {
  rate: number;
  count: number;
};

export type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: ratingType;
};
