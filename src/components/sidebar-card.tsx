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
        props.selected
          ? { backgroundColor: "#b6a4db", color: "#000" }
          : { background: "none" }
      }
    >
      <Stack>
        <Title order={4}>{props.session.title}</Title>
        <Group>
          {props.session.tags.map((t) => (
            <Badge key={`sidebar-card-${t}`}>{t}</Badge>
          ))}
        </Group>
      </Stack>
    </Card>
  );
};
