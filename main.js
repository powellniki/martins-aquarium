import { getFish } from './database.js'
import { FishList } from './scripts/fish/FishList.js'



const allFish = getFish()

/*
for (const fish of allFish) {
    console.log(fish)
} 
*/





const parentHTMLElement = document.querySelector('.div_fish-list')
parentHTMLElement.innerHTML = FishList()