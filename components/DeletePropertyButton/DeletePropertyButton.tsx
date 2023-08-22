import { useSortedProperties } from "@/hooks/useSortedProperties";
import { Property } from "@/interfaces/Property";
import { CloseButton } from "@chakra-ui/react";
import { FC } from "react";
import { useSWRConfig } from "swr";

interface DeletePropertyButtonProps {
    id: Property["id"];
}

export const DeletePropertyButton: FC<DeletePropertyButtonProps> = ({ id }) => {
    const { mutate } = useSWRConfig();
    const { sortFilteredProperties } = useSortedProperties();

    const handleDelete = async () => {
        const optimisticData = sortFilteredProperties?.filter((property) => property.id !== id);
        const options = { optimisticData, rollbackOnError: true };
        mutate(
            process.env.NEXT_PUBLIC_API_URL+'/properties',
            deleteProperty(id),
            options
        );
    };

    const deleteProperty = async (id: string) => {
        return fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/properties/${id}`,
            {
                method: 'DELETE'
            }
            )
                .then((response) => response.text())
                .then((result) => console.log('delete', result))
                .catch((error) => console.log('error', error));
    };

    return (
        <CloseButton
            size="md"
            margin="-2"
            onClick={handleDelete}
        />
    );
};
