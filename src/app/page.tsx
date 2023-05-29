"use client";

import { useState } from "react";
import {
  AppShell,
  Navbar,
  Footer,
  Aside,
  Text,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import UnauthHeader from "../components/UnauthHeader";

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section grow mt="lg">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text>Navbar</Text>
            </div>
          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      header={<UnauthHeader />}
    >
      <Text>Welcome!</Text>
    </AppShell>
  );
}
