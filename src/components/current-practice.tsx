import {
  Stack,
  Group,
  Title,
  Badge,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { PracticeSession } from "../App";
import { Metronome, MetronomeProps } from "./metronome";
import { PracticeCard } from "./practice-card";
const click = require("../static/click.mp3");

export const CurrentPractice = (props: { session: PracticeSession }) => {
  const [metronome, setMetronome] = useState<MetronomeProps>({
    isStarted: false,
    tempo: 60,
  });
  let interval: MutableRefObject<NodeJS.Timer | undefined> = useRef();
  const theme = useMantineTheme();

  useEffect(() => {
    const audio = new Audio(click);

    if (metronome.isStarted) {
      interval.current = undefined;

      interval.current = setInterval(() => {
        audio.play();
      }, 60_000 / metronome.tempo);
    } else {
      return clearInterval(interval.current);
    }
  }, [metronome]);

  return (
    <Stack
      style={{
        paddingLeft: "25px",
        paddingRight: "25px",
      }}
    >
      <Group position="apart">
        <Stack>
          <Title>{props.session.title}</Title>
          <Group>
            {props.session.tags?.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </Group>
        </Stack>
        <Metronome metronome={metronome} updateMetronome={setMetronome} />
      </Group>
      <Stack style={{ overflow: "scroll" }}>
        <Group>
          <Button color="green">New log</Button>
        </Group>

        {props.session.logs.map((log) => {
          return (
            <PracticeCard
              key={log.id}
              title={log.title}
              tags={[]}
              sections={log.sections}
              updateTempo={(val: number) =>
                setMetronome((prev) => ({
                  tempo: val,
                  isStarted: prev.isStarted,
                }))
              }
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
