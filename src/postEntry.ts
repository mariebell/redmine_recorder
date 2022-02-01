import axios from 'axios'
import 'dotenv/config'

export interface Entry {
  issue_id: string,
  spent_on: string,
  hours: string
}

const postEntry = (entry: Entry) => {
  axios
    .post(
      `${process.env.API_ENDPOINT}?key=${process.env.API_KEY}`,
      JSON.stringify({
        time_entry: entry
      }),
      { headers: {
        'Content-Type': 'application/json'
      }}
    ).then(res => {
      console.log(res.data)
    })
}

export default postEntry
