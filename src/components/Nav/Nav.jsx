import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // DropdownItem,
  // Dropdown,
  // DropdownTrigger,
  // Avatar,
  // DropdownMenu
} from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";

export const Nav = () => {

  return (
    <Navbar className="bg-color-dark">
      <NavbarBrand>
        <RouterLink to={"/"} className="text-white hover:text-primary font-bold transition duration-300 cursor-pointer">
          Coder ecommerce 
        </RouterLink>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>
          <RouterLink to={"sessions/register"} className="text-white hover:text-primary transition duration-300" href="#" aria-current="page">
            Register
          </RouterLink>
        </NavbarItem>
        <NavbarItem isActive>
          <RouterLink to={"sessions/login"} aria-current="page" className="text-white hover:text-primary transition duration-300">
            Login
          </RouterLink>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="dark"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">user@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My orders</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Signout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent> */}
    </Navbar>
  );
};
