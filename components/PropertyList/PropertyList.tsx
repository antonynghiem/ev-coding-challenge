import {
    SimpleGrid,
    Skeleton,
    Text,
  } from "@chakra-ui/react";
import { FC } from "react";
import { PropertyCard } from "../PropertyCard/PropertyCard";
import { useSortedProperties } from "@/hooks/useSortedProperties";
  
  interface PropertyListProps {}
  
  export const PropertyList: FC<PropertyListProps> = () => {
    const { properties, isError, isLoading } = useSortedProperties();
  
    if (isLoading) return(
      <SimpleGrid
        spacing={4}
        templateColumns='repeat(auto-fill, minmax(360px, 1fr))'
      >
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </SimpleGrid>
    );
  
    if (isError) return <Text>Error fetching properties: {JSON.stringify(isError)}</Text>;
  
    return (
      <SimpleGrid
        spacing={4}
        templateColumns='repeat(auto-fill, minmax(360px, 1fr))'
      >
        {properties?.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </SimpleGrid>
    );
  };
  