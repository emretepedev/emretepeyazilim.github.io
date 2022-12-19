import { writeFileSync } from 'fs'
import fetch from 'node-fetch'
import 'dotenv/config'

const dateSelector = new Date()
const to = new Date(
  dateSelector.setDate(dateSelector.getDate() - 1)
).toISOString()
const from = new Date(
  dateSelector.setDate(dateSelector.getDate() - 29)
).toISOString()

const fetchContributions = async () => {
  const url = 'https://api.github.com/graphql'

  const options = {
    method: 'POST',
    headers: {
      Authorization: `bearer ${hexToString(
        process.env.GH_PERSONAL_ACCESS_TOKEN
      )}`,
    },
    body: JSON.stringify({
      query: `query {
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
              }`,
    }),
  }

  const res = await fetch(url, options)
  const contributions = await res.json()
  writeFileSync('./data/contributions.json', JSON.stringify(contributions))
}

const hexToString = (hex) => {
  let string = ''
  const len = hex.length
  for (let i = 0; i < len; i += 2) {
    string += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16))
  }

  return string
}

;(async () => {
  try {
    await fetchContributions()
  } catch (err) {
    writeFileSync('error.txt', String(err))
  }
})()
