import { Filter } from "@/interfaces/FilterTypes";
import { createContext } from "react";

export const FilterContext = createContext({
    filter: '',
    setFilter: (filter: Filter) => {},
});
