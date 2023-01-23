import { PracticeSession } from "./App";

export const fetchMockSessions = (): PracticeSession[] => {
  return [
    {
      id: "1",
      title: "11/04/2022",
      date: new Date(),
      tags: ["warm up", "cliffs of dover"],
      logs: [
        {
          id: "log1",
          title: "Warm up",
          sections: [
            {
              name: "Scales",
              content: [
                {
                  bpm: 50,
                  description: "All segovia scales",
                },
              ],
            },
          ],
        },
        {
          title: "Cliffs of Dover",
          id: "log2",
          sections: [
            {
              name: "Solo",
              content: [
                {
                  bpm: 145,
                  description: "3x section",
                },
                {
                  bpm: 150,
                  description: "3x section",
                },
                {
                  bpm: 155,
                  description: "3x section",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "11/05/2022",
      date: new Date("2022-11-05T00:09:07+0000"),
      tags: ["warm up", "cliffs of dover"],
      logs: [
        {
          id: "log3",
          title: "Warm up",
          sections: [{ name: "Scales", content: [] }],
        },
        {
          id: "log4",
          title: "Cliffs of Dover",
          sections: [{ name: "Solo", content: [] }],
        },
      ],
    },
    {
      id: "3",
      title: "11/06/2022",
      date: new Date("2022-11-06T00:09:07+0000"),
      tags: ["warm up", "cliffs of dover"],
      logs: [
        {
          id: "log5",
          title: "Warm up",
          sections: [{ name: "Scales", content: [] }],
        },
        {
          id: "log6",
          title: "Cliffs of Dover",
          sections: [{ name: "Solo", content: [] }],
        },
      ],
    },
  ];
};
