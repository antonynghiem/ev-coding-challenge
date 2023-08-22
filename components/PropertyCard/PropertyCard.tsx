import { Property } from "@/interfaces/Property";
import { Card, CardBody, Stack, Text, HStack, Box, StackDivider, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { DeletePropertyButton } from "../DeletePropertyButton/DeletePropertyButton";


interface PropertyCardProps {
    property: Property
}

export const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
    return (
        <Card size="sm">
        <CardBody>
          <Stack spacing={2}>
            <HStack justify="space-between">
              <Text size="sm">{property.title}</Text>
              <DeletePropertyButton id={property.id} />
            </HStack>
            <HStack align="stretch">
              <Box position="relative" width={120}>
                <Image
                  src='/propImg.png'
                  alt="Property image"
                  priority={true}
                  fill={true}
                />
              </Box>
              <Stack divider={<StackDivider />} spacing="2" flex={1}>
                <SimpleGrid spacing={2} columns={2}>
                  <Text textAlign="left" color="gray.600">
                    Rooms
                  </Text>
                  <Text textAlign="right">{property.rooms}</Text>
                  {property.type === "apartment" && (
                    <>
                      <Text textAlign="left" color="gray.600">
                        Floor
                      </Text>
                      <Text textAlign="right">{property.floor}</Text>
                    </>
                  )}
                  {property.type === "house" && (
                    <>
                      <Text textAlign="left" color="gray.600">
                        Plot size
                      </Text>
                      <Text textAlign="right">{property.plotSize}</Text>
                    </>
                  )}
                </SimpleGrid>
                <SimpleGrid spacing={2} columns={2}>
                  <Text textAlign="left" color="gray.600">
                    Price
                  </Text>
                  <Text size="lg" textAlign="right">
                    {property.price}{" "}
                    <Text size="sm" as="span">
                      EUR
                    </Text>
                  </Text>
                </SimpleGrid>
              </Stack>
            </HStack>
          </Stack>
        </CardBody>
      </Card>
    );
};
