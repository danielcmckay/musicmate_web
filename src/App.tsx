import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  MediaQuery,
  Burger,
  useMantineTheme,
  Stack,
  Anchor,
  Title,
  Button,
  ActionIcon,
} from "@mantine/core";
import { CurrentPractice } from "./components/current-practice";
import {
  LayoutSidebarRightExpand,
  LayoutSidebarRightCollapse,
} from "tabler-icons-react";

export default function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [asideOpened, setAsideOpened] = useState(false);

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
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Stack>
            <Anchor>Practice logs</Anchor>
            <Anchor>Notes</Anchor>
            <Anchor>Stats</Anchor>
            <Anchor>Settings</Anchor>
          </Stack>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside
            p="md"
            hiddenBreakpoint="sm"
            width={asideOpened ? { sm: 200, lg: 300 } : { sm: 50, lg: 50 }}
          >
            <ActionIcon onClick={() => setAsideOpened((p) => !p)}>
              {!asideOpened ? (
                <LayoutSidebarRightExpand />
              ) : (
                <LayoutSidebarRightCollapse />
              )}
            </ActionIcon>
            <Stack></Stack>
          </Aside>
        </MediaQuery>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Title>MusicMate</Title>
          </div>
        </Header>
      }
    >
      <CurrentPractice
        title={new Date().toLocaleTimeString()}
        tags={["piece1", "piece2"]}
      />
    </AppShell>
  );
}
