import fs from 'fs'
import axios from 'axios'
import 'dotenv/config'

// consts
const from: Date = new Date()
const to: Date = new Date()
from.setDate(to.getDate() - 30)

// methods
const hexToString = (hex: string): string => {
    let string = ''
    for (let i = 0; i < hex.length; i += 2) {
        string += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16))
    }

    return string
}

const saveFile = (fileName: string, content: string): void => {
    fs.writeFile(fileName, content, 'utf8', function (error) {
        if (error) {
            saveFile('fsError.txt', String(error))
        }

        if ('contributionsCount.json' === fileName) {
            saveFile('fsSuccess.txt', new Date().toUTCString())
        }
    })
}

const fetchData = async (): Promise<string | null> => {
    const url = 'https://api.github.com/graphql'

    const data = {
        query: `
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
            `,
    }

    const headers = {
        Authorization: `bearer ${hexToString(
            process.env.GH_PERSONAL_ACCESS_TOKEN!
        )}`,
    }

    // fetch data from github
    try {
        return JSON.stringify(
            await (
                await axios.post(url, data, { headers })
            ).data
        )
    } catch (error: any) {
        saveFile('fetchError.txt', String(error))
        return null
    }
}

;(async () => {
    const data = await fetchData()
    if (data) {
        saveFile('./data/index/contributionsCount.json', data)
    }
})()
