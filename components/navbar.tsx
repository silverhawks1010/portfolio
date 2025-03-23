"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { addToast } from "@heroui/toast";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image alt="Logo" height={64} src="/logo.png" width={64} />
            <p className="font-bold text-inherit">Kévin Maublanc</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="X" href="https://x.com/_SilverHawks_">
            <FaXTwitter className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Linkdin"
            href="https://www.linkedin.com/in/kevinmaublanc/"
          >
            <FaLinkedinIn className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Github"
            href="https://github.com/silverhawks1010"
          >
            <FaGithub className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            className="text-sm font-normal text-default-600 bg-default-100"
            href="/"
            startContent={<GrContact className="text-danger" />}
            variant="flat"
            onPress={() =>
              addToast({
                title: "Erreur",
                description: "Le formulaire de contact est en développement !",
                color: "danger",
              })
            }
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="X" href="https://x.com/_SilverHawks_">
          <FaXTwitter className="text-default-500" />
        </Link>
        <Link
          isExternal
          aria-label="Linkdin"
          href="https://www.linkedin.com/in/kevinmaublanc/"
        >
          <FaLinkedinIn className="text-default-500" />
        </Link>
        <Link
          isExternal
          aria-label="Github"
          href="https://github.com/silverhawks1010"
        >
          <FaGithub className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
