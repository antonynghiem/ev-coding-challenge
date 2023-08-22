'use client'

import { Header } from "@/components/Header/Header";
import { PropertyList } from "@/components/PropertyList/PropertyList";
import { PropertyListHeader } from "@/components/PropertyListHeader/PropertyListHeader";
import { Box, StackDivider, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      minHeight="100vh"
    >
      <Header />
      <VStack
        padding={{ base: 4, md: 8 }}
        align='stretch'
        spacing='6'
        divider={<StackDivider />}
        flex={1}
      >
        <PropertyListHeader />
        <PropertyList />
      </VStack>
    </Box>
  )
}
