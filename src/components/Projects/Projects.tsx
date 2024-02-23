"use client";
import { Carousel } from "@mantine/carousel";
import {
  Title,
  Text,
  Group,
  Card,
  Image,
  Container,
  Anchor,
  Badge,
  Accordion,
  AccordionControl,
} from "@mantine/core";
import classes from "./Projects.module.css";
import {
  IconCircleArrowLeftFilled,
  IconCircleArrowRightFilled,
} from "@tabler/icons-react";
import { CardProps } from "./Projects.types";

const data = [
  {
    image: "/GAAD.png",
    alt: "Global Accessibility Awareness Day website screenshot",
    title: "Currently working on: Global Accessibility Awareness Day",
    description:
      "Assiting in the migration of the Global Accessibility Awareness Day website from WordPress to NextJS.",
    tech: [
      "NextJs",
      "TypeScript",
      "tRPC",
      "Prisma",
      "NodeJs",
      "Jest",
      "Husky",
      "Mantine",
      "GitHub Actions",
      "Linear",
    ],
    deploy: "https://accessibility.day/",
  },
  {
    image: "/thrifty-pet-cropped.gif",
    alt: "thrifty pet application gif",
    title: "Thrifty Pet",
    description:
      "Thrifty Pet is a web application that tracks Chewy product prices over time and show their lowest, highest, and average prices. Users can add, edit, and delete notes. All data is saved to a NoSQL database.",
    tech: ["NextJs", "TypeScript", "Cypress", "NodeJS", "ExpressJs", "MongoDB"],
    repo: "https://github.com/judy0ye/thrifty-pet-fe",
    beRepo: "https://github.com/judy0ye/thrifty-pet-be",
    deploy: "https://thrifty-pet-fe.vercel.app/",
  },
  {
    image: "/EscapeLink.gif",
    alt: "escape link application gif",
    title: "Escape Link",
    description:
      "This is an gaming web application that mimics a virtual escape room. Users have to solve puzzles and riddles to escape. This game could be played with others at the same time, and a leaderboard reflects the top 10 teams.",
    tech: ["React", "React Router", "WebSocket", "Github Actions", "Vercel"],
    repo: "https://github.com/escape-link/escapelink-fe",
    beRepo: "https://github.com/escape-link/escapelink-be",
    deploy: "https://escapelink-fe.vercel.app/",
  },
  {
    image: "/rancid1.gif",
    alt: "rancid tomatillos application gif",
    title: "Rancid Tomatillos",
    description:
      "This application simulates a movie library, like Rotten Tomatoes, in which users can search through and find the movies they want to view more details on. The movies can be sorted from highest or lowest ratings",
    tech: ["React", "React Router", "Cypress", "CSS", "HTML", "Vercel"],
    repo: "https://github.com/judy0ye/rancid-tomatillos",
    deploy: "https://rancid-tomatillos-jysb.vercel.app/",
  },
];

function Cards({
  image,
  alt,
  title,
  description,
  tech,
  repo,
  beRepo,
  deploy,
}: CardProps) {
  return (
    <Card padding="sm" radius="md" bg={"black"}>
      <Card.Section className={classes.cardSection}>
        <Image
          src={image}
          width={600}
          alt={alt}
          height={415}
          style={{ objectFit: "contain", justifySelf: "center" }}
          bg={"gray"}
          className={classes.image}
        />
      </Card.Section>
      <Text c={"white"} fz={{ base: "sm", xs: "lg" }} fw={600} pt={4}>
        {title}
      </Text>
      <Group gap={3}>
        <Text c={"white"} fz={{ base: "sm", xs: "md" }}>
          Technology:
        </Text>
        {tech.map((techItem, index) => (
          <Badge
            key={index}
            color={"lightgray"}
            c={"black"}
            size="md"
            radius={3}
            mr="xs"
            fz={{ base: "compact-xs", xs: "sm" }}
          >
            {techItem}
          </Badge>
        ))}
      </Group>
      <Text
        c={"white"}
        style={{ wordBreak: "break-word", whiteSpace: "word-wrap" }}
        size="sm"
        fz={{ base: "xs", xs: "md" }}
      >
        {description}
      </Text>
      <Group justify="center" align="center">
        <Accordion
          c="#175A8E"
          variant="contained"
          mt={"3px"}
          styles={{
            item: {
              border: "1px solid white",
            },
            content: { padding: 5, alignContent: "center" },
            control: { padding: "0 3px", height: "30px" },
          }}
        >
          <Accordion.Item value="Repository">
            <AccordionControl
              className={classes.Accordion}
              px={3}
              c={"white"}
              fz={{ base: "11px", xs: "16px" }}
              bg="#175A8E"
            >
              Repository
            </AccordionControl>
            <Accordion.Panel pt={1}>
              {" "}
              {repo ? (
                <Anchor
                  href={repo}
                  fz={{ base: "11px", xs: "16px" }}
                  c={"white"}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="never"
                  bg="#175A8E"
                  p={6}
                  style={{ borderRadius: "8px", justifyContent: "center" }}
                >
                  Frontend Repo
                </Anchor>
              ) : (
                <Text>In progess</Text>
              )}
            </Accordion.Panel>
            <Accordion.Panel>
              {" "}
              {beRepo && (
                <Anchor
                  href={beRepo}
                  fz={{ base: "11px", xs: "16px" }}
                  c={"white"}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="never"
                  bg="#175A8E"
                  p={6}
                  style={{ borderRadius: "8px", justifyContent: "center" }}
                >
                  Backend Repo
                </Anchor>
              )}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Anchor
          href={deploy}
          fz={{ base: "11px", xs: "16px" }}
          c={"white"}
          target="_blank"
          rel="noopener noreferrer"
          underline="never"
          bg="#175A8E"
          mt="3px"
          px={3}
          py={{ base: 6, xs: 2.5, sm: 3 }}
          style={{ border: "1px solid white", borderRadius: "4px" }}
        >
          Deployed Link
        </Anchor>
      </Group>
    </Card>
  );
}

export default function Projects() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Cards {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Title px={20} pt={24} order={2} fz={{ base: "sm", xs: "xl" }}>
        Some of My Projects
      </Title>
      <Container pt={32} size={"xl"} mt={0} className={classes.container}>
        <Carousel
          slideSize={{ base: "100%" }}
          slideGap={2}
          align="start"
          classNames={classes}
          previousControlProps={{
            "aria-label": "Previous",
            role: "button",
          }}
          nextControlProps={{
            "aria-label": "Next",
            role: "button",
          }}
          nextControlIcon={
            <IconCircleArrowRightFilled
              className={classes.icon}
              style={{
                color: "black",
                background: "white",
                borderRadius: "50%",
              }}
            />
          }
          previousControlIcon={
            <IconCircleArrowLeftFilled
              className={classes.icon}
              style={{
                color: "black",
                background: "white",
                borderRadius: "50%",
              }}
            />
          }
        >
          {slides}
        </Carousel>
      </Container>
    </>
  );
}
