import { Property } from "@/interfaces/Property";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Stack,
    FormLabel,
    Select,
    InputGroup,
    InputRightElement,
    DrawerFooter,
    Button,
    Text,
    Input,
    FormControl,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";

const initialState: Omit<Property, 'id' | 'createdAt'> = {
    title: '',
    type: '',
    price: '',
    address: '',
    name: '',
    plotSize: 0,
    rooms: 0,
};

interface AddPropertyFormDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}
  
export const AddPropertyFormDrawer: FC<AddPropertyFormDrawerProps> = ({ isOpen, onClose, }) => {
    const { mutate } = useSWRConfig();

    const [newProperty, setNewProperty] = useState<Omit<Property, 'id' | 'createdAt'>>(initialState);

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        mutate(
            process.env.NEXT_PUBLIC_API_URL+'/properties',
            createProperty(newProperty)
        );
    };

    const createProperty = (newData: Omit<Property, 'id' | 'createdAt'>) => {
        const body = JSON.stringify({
            id: '1',
            createdAt: new Date().toISOString(),
            ...newData,
        });

        console.log('body', JSON.parse(body));
        

        return fetch(process.env.NEXT_PUBLIC_API_URL+'/properties', {
            method: 'POST',
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body,
        })
            .then((response) => response.text())
            .then((result) => {
                setNewProperty(initialState);
                onClose();
                return console.log('result', JSON.parse(result))
            })
            .catch((error) => console.log('error', error));
    };

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">New Property</DrawerHeader>

                <DrawerBody>
                    <Stack spacing={4}>
                        <Text as="b" size="sm">
                            Property Details
                        </Text>
                        <FormControl isRequired>
                            <FormLabel htmlFor="title">Property Title</FormLabel>
                            <Input
                                id="title"
                                placeholder="Title"
                                value={newProperty.title}
                                onChange={(event) =>
                                setNewProperty((property) => ({
                                    ...property,
                                    title: event.target.value,
                                }))
                                }/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor="type">Type</FormLabel>
                            <Select
                                id="type"
                                value={newProperty.type}
                                placeholder="Type"
                                onChange={(event) =>
                                    setNewProperty((property) => ({
                                        ...property,
                                        type: event.target.value,
                                    }))
                                }>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                            </Select>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor="price">Price</FormLabel>
                            <InputGroup>
                                <Input
                                isRequired
                                type="number"
                                onChange={(event) =>
                                    setNewProperty((property) => ({
                                    ...property,
                                    price: String(event.target.value),
                                }))}/>
                                <InputRightElement
                                    pointerEvents="none"
                                    color="gray.300"
                                    fontSize="1.2em">
                                        €
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="rooms">Rooms</FormLabel>
                            <Input
                                type="number"
                                id="rooms"
                                onChange={(event) =>
                                setNewProperty((property) => ({
                                    ...property,
                                    rooms: Number(event.target.value),
                                }))}/>
                        </FormControl>

                        {newProperty.type === "house" && (
                            <FormControl>
                                <FormLabel htmlFor="plotsize">Plot Size</FormLabel>

                                <InputGroup>
                                <Input
                                    type="number"
                                    onChange={(event) =>
                                    setNewProperty((property) => ({
                                        ...property,
                                        plotSize: Number(event.target.value),
                                    }))}/>
                                <InputRightElement
                                    pointerEvents="none"
                                    color="gray.300"
                                    fontSize="0.8em">
                                    m²
                                </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        )}

                        {newProperty.type === "apartment" && (
                            <FormControl>
                                <FormLabel htmlFor="floor">Floor</FormLabel>
                                <Input
                                type="number"
                                id="floor"
                                onChange={(event) =>
                                    setNewProperty((property) => ({
                                    ...property,
                                    floor: parseInt(event.target.value) || 0,
                                    }))}/>
                            </FormControl>
                        )}
                    </Stack>
                </DrawerBody>

                <DrawerFooter borderTopWidth="1px" justifyContent="start">
                    <Button
                        bg="red.500"
                        color="white"
                        onClick={handleSubmit}>
                        Create property
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
