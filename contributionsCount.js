"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
// consts
const from = new Date();
const to = new Date();
from.setDate(to.getDate() - 30);
// methods
const hexToString = (hex) => {
    let string = '';
    for (let i = 0; i < hex.length; i += 2) {
        string += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16));
    }
    return string;
};
const saveFile = (fileName, content) => {
    fs_1.default.writeFile(fileName, content, 'utf8', function (error) {
        if (error) {
            saveFile('fsError.txt', String(error));
        }
        if ('contributionsCount.json' === fileName) {
            saveFile('fsSuccess.txt', new Date().toUTCString());
        }
    });
};
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://api.github.com/graphql';
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
    };
    const headers = {
        Authorization: `bearer ${hexToString(process.env.GH_PERSONAL_ACCESS_TOKEN)}`,
    };
    // fetch data from github
    try {
        return JSON.stringify(yield (yield axios_1.default.post(url, data, { headers })).data);
    }
    catch (error) {
        saveFile('fetchError.txt', String(error));
        return null;
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetchData();
    if (data) {
        saveFile('./data/index/contributionsCount.json', data);
    }
}))();
