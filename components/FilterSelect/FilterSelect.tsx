import { FC, useContext } from "react";
import { HStack, Select } from "@chakra-ui/react";
import { Filter } from "@/interfaces/FilterTypes";
import { FilterContext } from "@/context/filterContext";

export const FilterSelect: FC = () => {
  const { filter, setFilter } = useContext(FilterContext);
  return (
    <HStack>
      <label>Type: </label>
      <Select
        placeholder="All"
        value={filter}
        variant="unstyled"
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value={Filter.Apartment}>Apartment</option>
        <option value={Filter.House}>House</option>
      </Select>
    </HStack>
  );
};
