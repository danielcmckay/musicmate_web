import { useEffect, useState } from "react";
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
  ActionIcon,
  Loader,
  Center,
  MantineProvider,
  Switch,
} from "@mantine/core";
import { CurrentPractice } from "./components/current-practice";
import {
  LayoutSidebarRightExpand,
  LayoutSidebarRightCollapse,
} from "tabler-icons-react";
import { SidebarCard } from "./components/sidebar-card";
import { fetchMockSessions } from "./mock-data";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { DatePicker } from "@mantine/dates";
import { useLocalStorage } from "@mantine/hooks";

export interface PracticeSession {
  id: string;
  title: string;
  date?: Date;
  tags: string[];
  logs: {
    id: string;
    title: string;
    sections: [
      {
        name: string;
        content: {
          bpm?: number;
          description: string;
        }[];
      }
    ];
  }[];
}

export default function App() {
  const theme = useMantineTheme();
  const [usesDarkTheme, setUsesDarkTheme] = useLocalStorage({
    key: "usesDarkTheme",
    defaultValue: false,
  });
  const [opened, setOpened] = useState(false);
  const [asideOpened, setAsideOpened] = useState(false);
  const [selectedSession, setSelectedSession] = useState<number | undefined>();
  const [sessions, setSessions] = useState<PracticeSession[]>();

  useEffect(() => {
    setTimeout(() => {
      setSessions(fetchMockSessions());
      setSelectedSession(0);
    }, 500);
  }, []);

  return (
    <MantineProvider
      theme={{ colorScheme: usesDarkTheme ? "dark" : "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Router>
        <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 100, lg: 200 }}
            >
              <Stack>
                <Anchor component={Link} to="/practice">
                  Practice logs
                </Anchor>
                <Anchor component={Link} to="/notes">
                  Notes
                </Anchor>
                <Anchor component={Link} to="/stats">
                  Stats
                </Anchor>
                <Anchor component={Link} to="/settings">
                  Settings
                </Anchor>
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
                <ActionIcon
                  onClick={() => setAsideOpened((p) => !p)}
                  style={{ marginBottom: 15 }}
                >
                  {!asideOpened ? (
                    <LayoutSidebarRightExpand />
                  ) : (
                    <LayoutSidebarRightCollapse />
                  )}
                </ActionIcon>
                {asideOpened && sessions && (
                  <Stack>
                    <DatePicker
                      locale="en"
                      value={sessions[selectedSession ?? 0]?.date ?? undefined}
                      onChange={(val) => {
                        const found = sessions.filter(
                          (s) => s.date?.toDateString() === val?.toDateString()
                        )[0];
                        setSelectedSession(
                          found ? sessions.indexOf(found) : undefined
                        );
                      }}
                    />
                    {sessions.map((session, i) => (
                      <SidebarCard
                        key={session.id}
                        onClick={() => setSelectedSession(i)}
                        session={session}
                        selected={selectedSession === i}
                      />
                    ))}
                  </Stack>
                )}
              </Aside>
            </MediaQuery>
          }
          header={
            <Header height={70} p="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
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
          <Routes>
            <Route
              path="/practice"
              element={
                sessions ? (
                  <CurrentPractice session={sessions[selectedSession ?? 0]} />
                ) : (
                  <Center
                    style={{
                      background:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[8]
                          : theme.colors.gray[0],
                    }}
                  >
                    <Loader />
                  </Center>
                )
              }
            />
            <Route
              path="/settings"
              element={
                <Stack>
                  <Title>User settings</Title>
                  <Switch
                    label="Dark theme"
                    checked={usesDarkTheme}
                    onChange={(event) =>
                      setUsesDarkTheme(event.currentTarget.checked)
                    }
                  />
                </Stack>
              }
            />
            <Route
              path="/stats"
              element={
                <Stack>
                  <Title>User statistics</Title>
                </Stack>
              }
            />
            <Route
              path="/notes"
              element={
                <Stack>
                  <Title>Notes</Title>
                </Stack>
              }
            />
          </Routes>
        </AppShell>
      </Router>
    </MantineProvider>
  );
}
