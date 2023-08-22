export const SortOption = {
    price: 'price',
    title: 'title',
};
export type SortOption = (typeof SortOption)[keyof typeof SortOption];

export const SortOrder = {
    asc: 'asc',
    desc: 'desc',
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
