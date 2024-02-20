import { Stack, Title } from "@mantine/core";
import classes from "./Contact.module.css";

export default function Contact() {
  return (
    <Stack gap={0}>
      <Title pl={20} pt={20} order={2} fz={{ base: "sm", xs: "xl" }}>
        Contact or connect with me
      </Title>
      <svg
        className={classes.svg}
        width="63"
        height="49"
        viewBox="0 0 63 49"
        fill="none"
      >
        <g clip-path="url(#clip0_2_30)">
          <path
            d="M44.987 31.5688C48.0085 36.0813 51.03 40.5937 54.0515 45.1062H49.7342C52.1395 41.1374 54.5448 37.1686 56.9502 33.1999C57.2937 32.6331 57.6372 32.0662 57.9808 31.4994C58.68 30.3457 60.2228 29.9133 61.4012 30.6025C62.5554 31.2776 63.0006 32.8639 62.2981 34.023C59.8928 37.9918 57.4875 41.9606 55.0821 45.9293C54.7386 46.4961 54.3951 47.063 54.0515 47.6298C53.0375 49.3029 50.7733 49.1816 49.7342 47.6298C46.7126 43.1173 43.6911 38.6049 40.6696 34.0924C39.9181 32.9701 40.4517 31.324 41.5665 30.672C42.7942 29.9539 44.2337 30.4438 44.987 31.5688Z"
            fill="#01010C"
          />
          <path
            d="M2.5 0.29923C12.4848 1.40735 21.7318 7.31281 26.527 16.2326C29.1066 21.031 30.6555 27.3533 27.5834 32.313C24.8215 36.7719 18.8001 39.1776 14.2053 35.885C9.55483 32.5526 8.79799 26.6488 10.036 21.4213C10.6698 18.7453 11.6887 16.1301 12.7126 13.5815C13.6388 11.2757 14.6482 8.97003 16.0655 6.91733C19.0227 2.63463 23.5058 -0.256189 28.8573 0.0179605C34.2584 0.294651 39.1309 3.17692 42.5223 7.30299C46.4981 12.1401 48.9404 18.1406 50.8747 24.0397C52.9983 30.516 54.255 37.2512 54.7645 44.0439C54.8657 45.3919 53.5431 46.5439 52.2645 46.5439C50.8275 46.5439 49.8659 45.3958 49.7645 44.0439C49.0435 34.4312 46.6526 24.5951 42.2282 15.991C40.2813 12.2047 37.7272 8.54596 33.8923 6.49093C30.5588 4.70462 26.3969 4.32254 23.1788 6.55323C20.1329 8.66461 18.4859 12.4313 17.1942 15.7737C15.6871 19.6736 13.4861 24.4251 14.8458 28.6465C15.8678 31.8196 19.0472 33.6504 21.8933 31.3439C25.2217 28.6466 24.5262 23.8531 23.003 20.3623C19.4706 12.2666 11.2726 6.27283 2.5 5.29924C1.1582 5.15032 0 4.25682 0 2.79924C0 1.5633 1.14939 0.14934 2.5 0.29923Z"
            fill="#01010C"
          />
        </g>
      </svg>
    </Stack>
  );
}
