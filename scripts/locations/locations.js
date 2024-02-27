//import function getFish to use database from database.js
import { getFish } from '/database.js'


//define new function that iterates through locations
export const getLocation = () => {
const fishes = getFish()


let htmlString = `<article class="harvest-locations-article">`

    for (const fish of fishes) {
    htmlString += `<ul class ="">
        <li class="">${fish.location}</li>
    </ul>
    `
    }

htmlString += `</article>`
return htmlString
}

//return HTML of locations