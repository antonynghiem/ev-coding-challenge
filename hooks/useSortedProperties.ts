import { SortContext } from "@/context/sortContext";
import { useContext } from "react";
import { useProperties } from "./useProperties";
import { SearchContext } from "@/context/searchContext";
import { SortOption, SortOrder } from "@/interfaces/SortTypes";

export const useSortedProperties = () => {
    const { sort } = useContext(SortContext);
    const { search } = useContext(SearchContext);
    const { properties, isError, isLoading } = useProperties();


    // ------------- Search & Filter -----------------------
    const sortFilteredProperties =
        properties &&
        properties.filter((property) => {
            if (search) {
              return property.title
                ? property.title.toLowerCase().includes(search.toLowerCase())
                : false;
            }
            return true;
        })


    // ------------- Sort -----------------------
    if (sort.key === SortOption.title) {
        sortFilteredProperties?.sort((a, b) => {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
    }

    if (sort.key === SortOption.price) {
        sortFilteredProperties?.sort((a, b) => parseFloat(a.price.toString()) - parseFloat(b.price.toString()));
    }

    if (sort.order === SortOrder.desc) sortFilteredProperties?.reverse();

    return {
        sortFilteredProperties,
        isError,
        isLoading,
    };
}
