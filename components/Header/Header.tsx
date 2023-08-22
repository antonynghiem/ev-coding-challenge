import { FC } from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { EVLogo } from "../EVLogo/EVLogo";

export const Header: FC = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      shadow="base"
      padding={4}
      zIndex="sticky"
      bg="white"
    >
      <div>
        <Link href="/">
          <EVLogo />
        </Link>
      </div>
    </Box>
  );
};
