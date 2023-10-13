import {
  Box,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ColorModeSwitch from "../colorMode";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Box
      display="flex"
      // justifyContent="center"
      // alignItems="center"
      padding="10px"
    >
      <Link mr="2rem" fontWeight="semibold" p="1rem">
        Home
      </Link>
      <Link mr="2rem" fontWeight="semibold" p="1rem">
        About
      </Link>
      <Menu>
        <MenuButton bg="none" as={Button} rightIcon={<ChevronDownIcon />}>
          Contact
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <ColorModeSwitch />
    </Box>
  );
}

export default Navbar;
