"use client";

import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import image from "./image.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 1)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(28),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(6)}`,
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              What can <span className={classes.highlight}>AlumNUS</span> do for{" "}
              <span className={classes.highlight}>students</span>?
            </Title>
            <Text color="dimmed" mt="md">
              We&apos;re here to redefine your career experience. Worried about
              <b> finding jobs</b> in this tough economy? Can&apos;t seem to{" "}
              <b>find an internship</b>? Unsure about your <b>career path</b>?{" "}
              <br />
              We&apos;ve got you covered in just 3 simple steps.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCircleCheckFilled />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Register</b> – Fill in some basic details, and make sure to
                use your NUSNet email address!
              </List.Item>
              <List.Item>
                <b>Pick a Mentor</b> – Our mentors are all NUS alumni, and
                they&apos;re here to help you!
              </List.Item>
              <List.Item>
                <b>Start Chatting</b> – Ask away and get the answers you need!
              </List.Item>
            </List>
          </div>
          <Image
            src={image.src}
            className={classes.image}
            alt="Person on laptop"
          />
        </div>
      </Container>
    </div>
  );
}
