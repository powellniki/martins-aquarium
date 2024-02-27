// Import the function that returns a copy of the fish array
import { getTips } from '/database.js'



export const tipList = () => {

    // Invoke the function that you imported from the database module to access array
    const tipsList = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = `<article class="tips-article">`

    // Create HTML representations of each tip here
    for (const tip of tipsList) {
        htmlString += `<ul class="care-tip-list>
            <li class="care-tip">${tip.tip}</li>
        </ul>
        `
    }
    htmlString += `</article>`
    return htmlString
}