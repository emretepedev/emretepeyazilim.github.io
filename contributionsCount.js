const fs = require('fs')
const fetch = require('node-fetch')
require('dotenv').config()

// consts
const from = new Date()
const to = new Date()
from.setDate(to.getDate() - 30)

const query = `
                query {
                  user(login: "${process.env.GH_USERNAME}") {
                    contributionsCollection(from: "${from.toISOString()}" to: "${to.toISOString()}") {
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
              `

// methods
const hexToString = (hex) => {
    let string = ''
    for (let i = 0; i < hex.length; i += 2) {
        string += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
    }

    return string
}

const saveFile = (fileName, content) => {
    fs.writeFile(fileName, content, 'utf8', function (error) {
        if (error) {
            saveFile('fsError.txt', String(error))
        }

        if ('contributionsCount.json' === fileName) {
            saveFile('fsSuccess.txt', new Date().toUTCString())
        }
    })
}

// fetch data from github
fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
        Authorization: `Bearer ${hexToString(
            process.env.GH_PERSONAL_ACCESS_TOKEN
        )}`,
    },
})
    .then((res) => res.text())
    .then((body) => saveFile('./data/index/contributionsCount.json', body)) // {"data":{"user":{"contributionsCollection":{"contributionCalendar":{"weeks":[{"contributionDays":[{"contributionCount": 0}, {"contributionCount":1}, ...]}]}}}}}
    .catch((error) => saveFile('fetchError.txt', String(error)))
