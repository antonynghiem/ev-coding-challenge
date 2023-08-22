import { FC, useContext } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchContext } from "@/context/searchContext";

export const SearchInput: FC = () => {
    const { search, setSearch } = useContext(SearchContext);

    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none">
                <SearchIcon color="grey.dark" />
            </InputLeftElement>
            <Input
                placeholder="Search"
                bg="white"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </InputGroup>
    );
};
