import {
  Button,
  Card,
  Center,
  Group,
  Slider,
  Stack,
  Title,
} from "@mantine/core";

export interface MetronomeProps {
  isStarted: Boolean;
  tempo: number;
}

export const Metronome = (props: {
  updateMetronome: (val: MetronomeProps) => void;
  metronome: MetronomeProps;
}) => {
  function updateMetronome(val: MetronomeProps) {
    props.updateMetronome(val);
  }

  return (
    <Card style={{ width: 400 }}>
      <Stack>
        <Center>
          <Title>{props.metronome.tempo} bpm</Title>
        </Center>
        <Group position="center">
          <Button
            onClick={() =>
              updateMetronome({
                isStarted: !props.metronome.isStarted,
                tempo: props.metronome.tempo,
              })
            }
          >
            {props.metronome.isStarted ? "Stop" : "Start"}
          </Button>
        </Group>
        <Slider
          min={60}
          max={150}
          value={props.metronome.tempo}
          onChange={(val) =>
            updateMetronome({
              ...props.metronome,
              tempo: val,
            })
          }
        />
      </Stack>
    </Card>
  );
};
