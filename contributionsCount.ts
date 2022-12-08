import { writeFileSync } from 'fs'
import axios from 'axios'
import 'dotenv/config'

const dateSelector = new Date()
const to = new Date(
  dateSelector.setDate(dateSelector.getDate() - 1)
).toISOString()
const from = new Date(
  dateSelector.setDate(dateSelector.getDate() - 30)
).toISOString()

const fetchData = async () => {
  const url = 'https://api.github.com/graphql'

  const data = {
    query: `
              query {
                user(login: "${process.env.GH_USERNAME}") {
                  contributionsCollection(from: "${from}" to: "${to}") {
                    contributionCalendar {
                      weeks {
                        contributionDays {
                          contributionCount
                        }
                      }
                    }
                  }
                }
              }
            `,
  }

  const headers = {
    Authorization: `bearer ${hexToString(
      process.env.GH_PERSONAL_ACCESS_TOKEN!
    )}`,
  }

  try {
    const res = await axios.post(url, data, { headers })
    saveFile('./data/contributionsCount.json', JSON.stringify(res.data))
  } catch (err: any) {
    saveFile('fetchError.txt', String(err))
  }
}

const hexToString = (hex: string) => {
  let string = ''
  for (let i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16))
  }

  return string
}

const saveFile = (fileName: string, content: string) => {
  try {
    writeFileSync(fileName, content, {
      encoding: 'utf8',
    })
  } catch (err: any) {
    saveFile('fsError.txt', String(err))
  }
}

;(async () => {
  await fetchData()
})()
