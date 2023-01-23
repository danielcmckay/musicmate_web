import {
  Card,
  Stack,
  Title,
  List,
  Button,
  Group,
  Badge,
  TextInput,
  Code,
} from "@mantine/core";
import { useState } from "react";

export const PracticeCard = (props: {
  title: string;
  tags: string[];
  sections: {
    name: string;
    content: {
      bpm?: number;
      description: string;
    }[];
  }[];
  updateTempo?: (val: number) => void;
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
            <Badge key={t}>{t}</Badge>
          ))}
        </Group>
        <List>
          {props.sections.map(({ name, content }) => {
            return !editing ? (
              <List.Item key={`${name}-${content}`}>
                {name}
                <List withPadding>
                  {content.map((c) => {
                    return (
                      <List.Item
                        key={`practice-content-${c.description}-${c.bpm}`}
                      >
                        {c.description}
                        {c.bpm && (
                          <Code
                            onClick={() => {
                              if (props.updateTempo) {
                                props.updateTempo(c.bpm!);
                              }
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            @ {c.bpm} bpm
                          </Code>
                        )}
                      </List.Item>
                    );
                  })}
                </List>
              </List.Item>
            ) : (
              <TextInput value={name} />
            );
          })}
        </List>
      </Stack>
    </Card>
  );
};
