import Image from "next/image";
import classes from "./page.module.css";
import Animation from "@/components/Animation/Animation";
import { Box, Group, Text } from "@mantine/core";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className={classes.container}>
      <Box className={classes.sectionOne}>
        <Animation />
      </Box>
      <Box id="projects" tabIndex={0} className={classes.sectionTwo}>
        <Projects />
      </Box>
      <Box id="about" tabIndex={0} className={classes.sectionThree}>
        <About />
      </Box>
      <Box id="contact" tabIndex={0} className={classes.sectionFour}>
        <Contact />
      </Box>
      <Box tabIndex={0} className={classes.footer}>
        <Footer />
      </Box>
    </main>
  );
}
