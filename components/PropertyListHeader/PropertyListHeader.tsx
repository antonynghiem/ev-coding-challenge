import { HStack } from "@chakra-ui/react";
import { FC } from "react";
import { SortSelect } from "../SortSelect/SortSelect";
import { AddPropertyButton } from "../AddPropertyButton/AddPropertyButton";
import { SearchInput } from "../SearchInput/SearchInput";
import { FilterSelect } from "../FilterSelect/FilterSelect";

export const PropertyListHeader: FC = () => {
    return (
        <HStack justify="space-between" shouldWrapChildren wrap="wrap">
            <SearchInput />
            <FilterSelect />
            <SortSelect />
            <AddPropertyButton />
        </HStack>
    );
};
