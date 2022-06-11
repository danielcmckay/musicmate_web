import {
  Button,
  Card,
  Center,
  Group,
  Slider,
  Stack,
  Title,
} from "@mantine/core";
import { useState } from "react";

export interface MetronomeProps {
  isStarted: Boolean;
  tempo: number;
}

export const Metronome = (props: {
  updateTempo: (val: number) => void;
  updateMetronome: (isOn: boolean) => void;
  metronome: MetronomeProps;
}) => {
  const [sliderVal, setSliderVal] = useState<number>(props.metronome.tempo);

  function setTempo(val: number) {
    setSliderVal(val);
    props.updateTempo(val);
  }

  function toggleMetronome() {
    console.log(props.metronome);

    props.updateMetronome(!props.metronome.isStarted);
  }

  return (
    <Card style={{ width: 250 }}>
      <Stack>
        <Center>
          <Title>{props.metronome.tempo} bpm</Title>
        </Center>
        <Group position="center">
          <Button onClick={() => toggleMetronome()}>
            {props.metronome.isStarted ? "Stop" : "Start"}
          </Button>
        </Group>
        <Slider
          min={40}
          max={220}
          value={sliderVal}
          onChange={setTempo}
        ></Slider>
      </Stack>
    </Card>
  );
};
