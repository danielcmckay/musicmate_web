import { Stack, Group, Title, Badge, Card, List } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Metronome, MetronomeProps } from "./metronome";
import { PracticeCard } from "./practice-card";
const click = require("../static/click.mp3");

export const CurrentPractice = (props: { title?: string; tags?: string[] }) => {
  const [metronome, setMetronome] = useState<MetronomeProps>({
    isStarted: false,
    tempo: 60,
  });
  let interval: MutableRefObject<NodeJS.Timer | undefined> = useRef();

  useEffect(() => {
    const audio = new Audio(click);

    console.log(60000 / metronome.tempo);

    if (metronome.isStarted) {
      interval.current = setInterval(() => {
        audio.play();
      }, 60000 / metronome.tempo);
    } else {
      return clearInterval(interval.current);
    }
  }, [metronome]);

  return (
    <Stack style={{ padding: "25px" }}>
      <Group position="apart">
        <Stack>
          <Title>{props.title}</Title>
          <Group>
            {props.tags?.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </Group>
        </Stack>
        <Metronome
          metronome={metronome}
          updateMetronome={(isOn: boolean) =>
            setMetronome((prev) => ({ isStarted: isOn, tempo: prev.tempo }))
          }
          updateTempo={(val: number) =>
            setMetronome((prev) => ({ tempo: val, isStarted: prev.isStarted }))
          }
        />
      </Group>
      <Stack style={{ overflow: "scroll" }}>
        <PracticeCard
          title="Warm up"
          tags={["piece1", "piece2"]}
          sections={[
            { name: "Scales", content: ["3x @ 120bpm", "3x @ 150bpm"] },
          ]}
        />
        <PracticeCard
          title="Cliffs of Dover"
          tags={["piece1", "piece2"]}
          sections={[
            { name: "Section 1", content: ["3x @ 120bpm", "3x @ 150bpm"] },
          ]}
        />
      </Stack>
    </Stack>
  );
};
