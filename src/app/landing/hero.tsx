"use client";

import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
} from "@mantine/core";
import { Dots } from "./Dots";
import { useRouter } from "next/navigation";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Build your{" "}
          <Text component="span" className={classes.highlight} inherit>
            network.
          </Text>{" "}
          Build your{" "}
          <Text component="span" className={classes.highlight} inherit>
            future.
          </Text>
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            AlumNUS is a platform that connects students and alumni from NUS
            together for <b>career guidance</b> and <b>a better future</b>.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button
            className={classes.control}
            size="lg"
            onClick={() => router.push("/signup")}
          >
            Register
          </Button>
        </div>
      </div>
    </Container>
  );
}
