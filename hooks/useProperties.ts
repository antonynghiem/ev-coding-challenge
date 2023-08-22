import { Property } from "@/interfaces/Property";
import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<Property[], string> = (...args) =>
  fetch(...args).then((res) => res.json());


export const useProperties = () => {
    const { data, error, isLoading } = useSWR<Property[]>(
        process.env.NEXT_PUBLIC_API_URL+'/properties',
        fetcher
    );

    const filteredProperties = data?.filter((property) => !!property.price);
    
    return {
        properties: filteredProperties,
        isError: error,
        isLoading,
    };
};
