import { Avatar, Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import Link from "next/link";

export function Header() {

  return (
    <Flex
      w="100%"
      h="20"
      mx="auto"
      mb="10"
      px="6"
      align="center"
      as="header"
      bg="brand.500"
    >
      <Link href="/" passHref>
        <Box as="a">
          <Image src="/logo-white.svg" alt="logo" height={50} />
        </Box>
      </Link>
    </Flex>
  );
}
