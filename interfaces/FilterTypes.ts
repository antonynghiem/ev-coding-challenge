export const Filter = {
    Apartment: "apartment",
    House: "house",
  };
  export type Filter = (typeof Filter)[keyof typeof Filter];
