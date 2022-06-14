import { PracticeSession } from "./App";

export const fetchMockSessions = (): PracticeSession[] => {
  return [
    {
      id: 1,
      title: "11/04/2022",
      tags: ["warm up", "cliffs of dover"],
      logs: [
        {
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
      id: 2,
      title: "11/05/2022",
      tags: ["warm up", "cliffs of dover"],
      logs: [
        {
          title: "Warm up",
          sections: [{ name: "Scales", content: [] }],
        },
        {
          title: "Cliffs of Dover",
          sections: [{ name: "Solo", content: [] }],
        },
      ],
    },
    {
      id: 3,
      title: "11/06/2022",
      tags: ["warm up", "cliffs of dover"],
      logs: [
        {
          title: "Warm up",
          sections: [{ name: "Scales", content: [] }],
        },
        {
          title: "Cliffs of Dover",
          sections: [{ name: "Solo", content: [] }],
        },
      ],
    },
  ];
};
