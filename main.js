import { getFish } from './database.js'
import { FishList } from './scripts/fish/FishList.js'
import { tipList } from './scripts/tips/CareTips.js'
import { getLocation } from './scripts/locations/locations.js'

const allFish = getFish()

/*
for (const fish of allFish) {
    console.log(fish)
} 
*/





const parentHTMLElement = document.querySelector('.div_fish-list')
parentHTMLElement.innerHTML = FishList()

const articleHTMLElement = document.querySelector('.div_fish-care-tips')
articleHTMLElement.innerHTML = tipList()

const harvestLocHTMLElement = document.querySelector('.section_location')
harvestLocHTMLElement.innerHTML = getLocation()

