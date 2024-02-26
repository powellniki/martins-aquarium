import { getFish } from './scripts/fish/database.js'
import { FishList } from './scripts/fish/FishList.js'
import { getHolyFish } from './scripts/fish/FishList.js'
import { soldierFish } from './scripts/fish/FishList.js'
import { nonHolyFish } from './scripts/fish/FishList.js'



const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

//const holyFish = getHolyFish()
//const soldiers = soldierFish()
//const otherfish = nonHolyFish()




const parentHTMLElement = document.querySelector('.div_fish-list')
parentHTMLElement.innerHTML = FishList()