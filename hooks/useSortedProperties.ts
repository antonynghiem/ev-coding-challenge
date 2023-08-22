import { SortContext } from "@/context/sortContext";
import { useContext } from "react";
import { useProperties } from "./useProperties";
import { SearchContext } from "@/context/searchContext";

export const useSortedProperties = () => {
    const { sort } = useContext(SortContext);
    const { search } = useContext(SearchContext);
    const { properties, isError, isLoading } = useProperties();

    // ------------- Sort -----------------------
    if (sort.key === 'name') {
        properties?.sort((a, b) => {
            if (!a.name && !b.name) {
                return 0;
            }
            if (!a.name) {
                return 1;
            }
            if (!b.name) {
                return -1;
            }
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        });
    }

    if (sort.key === 'price') {
        properties?.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }

    if (sort.order === 'desc') properties?.reverse();
    
    // ------------- Search -----------------------


    // ------------- Filter -----------------------
    

    return {
        properties,
        isError,
        isLoading,
    };
}
