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
import image from "./image2.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 1)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  content: {
    maxWidth: rem(480),
    marginLeft: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginLeft: 0,
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

export function HeroBulletsMentor() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <Image
            src={image.src}
            className={classes.image}
            alt="Person on laptop"
          />
          <div className={classes.content}>
            <Title className={classes.title}>
              What can <span className={classes.highlight}>AlumNUS</span> do for{" "}
              <span className={classes.highlight}>alumni</span>?
            </Title>
            <Text color="dimmed" mt="md">
              Want to contribute back to the NUS community? Join us as a mentor
              and help out your juniors. Get enough mentees and you can even
              earn some money on the side!
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
                <b>Chat with Mentees</b> – Our mentees will be able to see your
                profile and chat with you!
              </List.Item>
              <List.Item>
                <b>Compensation</b> – Once you cross our threshold, you can
                start earning money!
              </List.Item>
            </List>
          </div>
        </div>
      </Container>
    </div>
  );
}
