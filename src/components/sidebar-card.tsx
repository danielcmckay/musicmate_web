import { Badge, Card, Group, Stack, Title } from "@mantine/core";
import { PracticeSession } from "../App";

export const SidebarCard = (props: {
  session: PracticeSession;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <Card
      onClick={props.onClick}
      withBorder
      style={
        props.selected ? { backgroundColor: "#d9d9d9" } : { background: "none" }
      }
    >
      <Stack>
        <Title order={4}>{props.session.title}</Title>
        <Group>
          {props.session.tags.map((t) => (
            <Badge>{t}</Badge>
          ))}
        </Group>
      </Stack>
    </Card>
  );
};
