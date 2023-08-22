import { Property } from "@/interfaces/Property";
import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<Property[], string> = (...args) =>
  fetch(...args).then((res) => res.json());


export const useProperties = () => {
    const { data, error, isLoading } = useSWR<Property[]>(
        process.env.NEXT_PUBLIC_API_URL+'/properties',
        fetcher
    );
    
    return {
        properties: data,
        isError: error,
        isLoading,
    };
};
