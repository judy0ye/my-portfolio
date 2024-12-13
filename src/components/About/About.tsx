"use client";
import { Container, Group, Paper, Text, Title } from "@mantine/core";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import classes from "./About.module.css";

export default function About() {
  return (
    <section>
      <Title
        className={classes.title}
        pt={32}
        pb={{ base: 32, sm: 0 }}
        px={20}
        fz={{ base: "sm", xs: "xl" }}
        order={2}
      >
        About Me
      </Title>
      <Group
        justify="space-around"
        wrap="nowrap"
        className={classes.aboutContainer}
      >
        <Slide direction="left" triggerOnce>
          <Container className={classes.imageContainer}>
            <Image
              src={"/mee.jpg"}
              width={400}
              height={500}
              alt="something"
              style={{
                objectFit: "contain",
                maxHeight: "500px",
                outline: "2px",
              }}
              className={classes.image}
            />
          </Container>
        </Slide>
        <Slide direction="right" triggerOnce>
          <Container className={classes.aboutTextContainer}>
            <Paper shadow="xl" withBorder p="md">
              <Text fz={{ base: "xs", sm: "md" }}>
                If I had a time machine- who knows, maybe they&apos;ll invent
                one in 50 years- I would use it to travel back in time to persue
                a software development career sooner.
              </Text>
              <br></br>
              <Text fz={{ base: "xs", sm: "md" }}>
                As a former dental assistant, I bring years of customer service
                experience, communication and collaboration skills through my
                time working at a dental office. On the technical side, I enjoy
                making intuitive and accessible user inferaces for everyone. I
                enjoy bringing ideas to life and seeing pieces come together (I
                have so many framed jigsaw puzzles laying around my house.) If I
                sound like someone who might be a good fit for your team or you
                just want to chat, feel free to reach out!
              </Text>
            </Paper>
          </Container>
        </Slide>
      </Group>
    </section>
  );
}
