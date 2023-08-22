import { SortContext } from "@/context/sortContext";
import { SortOption, SortOrder } from "@/interfaces/SortTypes";
import { Select } from "@chakra-ui/react";
import { FC, useContext } from "react";

export const SortSelect: FC = () => {
    const { sort, setSort } = useContext(SortContext);

    return (
        <Select
            variant='unstyled'
            value={JSON.stringify(sort)}
            onChange={(e) => setSort(JSON.parse(e.target.value))}>
                <option value={JSON.stringify({ key: SortOption.price, order: SortOrder.desc })}>Price Descending</option>
                <option value={JSON.stringify({ key: SortOption.price, order: SortOrder.asc })}>Price Ascending</option>
                <option value={JSON.stringify({ key: SortOption.title, order: SortOrder.desc })}>Title Descending</option>
                <option value={JSON.stringify({ key: SortOption.title, order: SortOrder.asc })}>Title Ascending</option>
        </Select> 
    );
}
