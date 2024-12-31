import { Anchor, Container, Flex, Group, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCopyright,
  IconMail,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <Flex h={110} justify={"space-between"} align={"center"}>
      <Group>
        <Container>
          <Anchor
            c={"black"}
            href="https://github.com/judy0ye"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to Judy Ye's GitHub"
            px={5}
          >
            <IconBrandGithub className={classes.icon} />
          </Anchor>
          <Anchor
            c={"black"}
            href="https://www.linkedin.com/in/judy0ye/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to Judy Ye's LinkedIn"
            px={5}
          >
            <IconBrandLinkedin className={classes.icon} />
          </Anchor>
          <Anchor
            c={"black"}
            href="mailto:judyy.ye@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to Judy Ye's e-mail"
            px={5}
          >
            <IconMail className={classes.icon} />
          </Anchor>
        </Container>
      </Group>
      <Group pr={16} gap={4}>
        <Text fz={{ base: "xs", xs: "md" }}>Handmade by Judy Ye</Text>
        <IconCopyright className={classes.copyright} />
        <Text fz={{ base: "xs", xs: "md" }}>{new Date().getFullYear()}</Text>
      </Group>
    </Flex>
  );
}
