export const SortOption = {
    price: 'price',
    name: 'name',
} as const;
export type SortOption = (typeof SortOption)[keyof typeof SortOption];

export const SortOrder = {
    asc: 'asc',
    desc: 'desc',
} as const;
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
