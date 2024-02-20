"use client";
import { Anchor, AppShell, Burger, Group } from "@mantine/core";

import classes from "./MainLayout.module.css";
import MainLayoutTypes from "./MainLayout.types";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

export default function MainLayout({ children }: MainLayoutTypes) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      bg={"#f5faff"}
    >
      <AppShell.Header id="home" className={classes.header} bg={"aliceblue"}>
        <Group h="100%" px="md">
          <Burger
            aria-label="Toggle navigation links"
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group ml="xl" gap={16} visibleFrom="sm">
              <Anchor
                href="/#home"
                component={Link}
                underline="hover"
                className={classes.link}
              >
                Home
              </Anchor>
              <Anchor
                href="/#projects"
                component={Link}
                underline="hover"
                className={classes.link}
              >
                Projects
              </Anchor>
              <Anchor
                href="/#about"
                component={Link}
                underline="hover"
                className={classes.link}
              >
                About Me
              </Anchor>
              <Anchor
                href="/#contact"
                component={Link}
                underline="hover"
                className={classes.link}
              >
                Contact
              </Anchor>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4} onClick={toggle}>
        <Anchor
          href="/#home"
          component={Link}
          underline="never"
          className={classes.link}
          p={16}
        >
          Home
        </Anchor>

        <Anchor
          href="/#projects"
          component={Link}
          underline="never"
          className={classes.link}
          p={16}
        >
          Projects
        </Anchor>

        <Anchor
          href="/#about"
          component={Link}
          underline="never"
          className={classes.link}
          p={16}
        >
          About Me
        </Anchor>

        <Anchor
          href="/#contact"
          component={Link}
          underline="never"
          className={classes.link}
          p={16}
        >
          Contact
        </Anchor>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
