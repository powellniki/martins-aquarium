// Import the function that returns a copy of the fish array
import { getFish } from '/database.js'


export const sortFish = () => {

    const fishes = getFish()
    
    //define new variable to store data
    const sortedFish = {
        holyFish: [],
        soldiers: [],
        regularFish: []
    }
    
    //sift through data to find holyFish, soldiers, and regularFish
        for (const fish of fishes) {
    
            if (fish.length % 3 === 0) {
                sortedFish.holyFish.push(fish)
    
            } else if (fish.length % 5 === 0) {
                sortedFish.soldiers.push(fish)
    
            } else {
                sortedFish.regularFish.push(fish)
    
            } 

        }
        return sortedFish
}


export const FishList = () => {
    // Invoke the function that you imported from the database module
    const sortedFish = sortFish()


    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    for ( const fishType in sortedFish ) {

    // Create HTML representations of each fish here
        for (const fish of sortedFish[fishType]) {
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
    }
    return htmlString
}
