// Import the function that returns a copy of the fish array
import { getFish } from './database.js'


export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            <div class="fish-image"><img  class="fish_image" src="${fish.image}" style="border-radius: 100px"/></div>
            <section class="card-text">
                <div class="fish__name" style="color: blue">${fish.name}</div>
                <div class="fish__species">Species: ${fish.species}</div>
                <div class="fish__length">Length: ${fish.length} inches</div>
                <div class="fish__location">Harvest Location: ${fish.location}</div>
                <div class="fish__diet">Diet: ${fish.food}</div>
            </section>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}


export const getHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const fishes = getFish()
    const holyFish = []

    for (fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    } 
    return holyFish
}


export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const fishes = getFish()
    const soldiers = []

    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const fishes = getFish()
    const regularFish = []

    for (const fish of fishes) {
        if (fish.length % 3 != 0 && fish.length % 5 != 0) {
            regularFish.push(fish)
        }
    }
    // Any fish not a multiple of 3 or 5
    return regularFish
}
