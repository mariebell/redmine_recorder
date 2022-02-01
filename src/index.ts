import postEntry, { Entry } from './postEntry'

const entries: Entry[] = [
  {
    issue_id: "18015",
    spent_on: "2022-02-01",
    hours: "1"
  },
]

entries.map((entry: Entry) => postEntry(entry))
