"use client";

import { createStyles, Header, Container, Image, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    fontWeight: 800,
    fontSize: rem(28),
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
    },
  },
  titleHighlight: {
    fontWeight: 800,
    fontSize: rem(28),
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
    },
  },
}));

export function HeaderSimple() {
  const { classes, cx } = useStyles();

  return (
    <Header height={60} mb={60} display={"flex"}>
      <Container className={classes.header}>
        <Image src="./logo.svg" alt="Logo" height={28} width={28} />
        <p className={classes.title}>
          Alum<span className={classes.titleHighlight}>NUS</span>
        </p>
      </Container>
    </Header>
  );
}
