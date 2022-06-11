import {
  Card,
  Stack,
  Title,
  List,
  Button,
  Group,
  Badge,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

export const PracticeCard = (props: {
  title: string;
  tags: string[];
  sections: [
    {
      name: string;
      content: string[];
    }
  ];
}) => {
  const [editing, setEditing] = useState(false);

  return (
    <Card>
      <Stack style={{ padding: 15 }}>
        <Group position="apart">
          {!editing ? (
            <Title order={3}>{props.title}</Title>
          ) : (
            <TextInput value={props.title} />
          )}
          <Button onClick={() => setEditing(!editing)}>
            {!editing ? "Edit" : "Save"}
          </Button>
        </Group>
        <Group>
          {props.tags.map((t) => (
            <Badge>{t}</Badge>
          ))}
        </Group>
        <List>
          {props.sections.map(({ name, content }) => {
            return !editing ? (
              <List.Item>{name}</List.Item>
            ) : (
              <TextInput value={name} />
            );
          })}
        </List>
      </Stack>
    </Card>
  );
};
