
const database = {
    fish: [
    { 
        id: 1, 
        image: "fish-images/rainbow.jpeg",
        name: "Rainbow", 
        species: "Oncorhynchus mykiss", 
        length: 12, 
        location: "River A", 
        food: "Insects" 
    },
    { 
        id: 2, 
        image: "fish-images/bluey.jpeg",
        name: "Bluey", 
        species: "Paracanthurus hepatus", 
        length: 5, 
        location: "Coral Reef B", 
        food: "Algae" 
    },
    { 
        id: 3, 
        image: "fish-images/pike.jpeg",
        name: "Pike", 
        species: "Esox lucius", 
        length: 24, 
        location: "Lake C",
        food: "Fish" 
    },
    { 
        id: 4, 
        image: "fish-images/perchy.jpeg",
        name: "Perchy", 
        species: "Perca flavescens", 
        length: 8, 
        location: "Lake D", 
        food: "Insects" 
    },
    { 
        id: 5, 
        image: "fish-images/striper.jpeg",
        name: "Striper", 
        species: "Morone saxatilis", 
        length: 18, 
        location: "Ocean E", 
        food: "Fish" },
    { 
        id: 6, 
        image: "fish-images/needle.jpeg",
        name: "Needle", 
        species: "Xiphias gladius", 
        length: 100, 
        location: "Ocean F", 
        food: "Fish" 
    },
    { 
        id: 7, 
        image: "fish-images/kitty.jpeg",
        name: "Kitty", 
        species: "Siluriformes", 
        length: 15, 
        location: "River G", 
        food: "Insects" 
    },
    { 
        id: 8, 
        image: "fish-images/gup.jpeg",
        name: "Gup", 
        species: "Poecilia reticulata", 
        length: 1, 
        location: "Aquarium H", 
        food: "Algae" 
    },
    { 
        id: 9, 
        image: "fish-images/mack.jpeg",
        name: "Mack", 
        species: "Scombridae", 
        length: 14, 
        location: "Ocean I", 
        food: "Fish" 
    },
    { 
        id: 10, 
        image: "fish-images/sal.jpeg",
        name: "Sal", 
        species: "Salmo salar", 
        length: 22, 
        location: "River J", 
        food: "Insects" 
    }
    ],
    careTips: [
        {
            id: 1,
            tip: "Use a heater to keep the water temperature stable within the recommended range for your fish."
        },
        {
            id: 2,
            tip: "Set up a suitable filtration system to maintain water quality."
        },
        {
            id: 3,
            tip: "Regularly test water parameters such as pH, ammonia, nitrite, and nitrate."
        },
        {
            id: 4,
            tip: "Perform partial water changes (10-20%) regularly to remove waste and replenish essential minerals."
        },
        {
           id: 5,
           tip: "Feed a balanced and species-appropriate diet."
       },
       {
           id: 6,
           tip: "Avoid overfeeding, as uneaten food can lead to water quality issues."
       },
        {
           id: 7,
           tip: "Clean the aquarium glass regularly to remove algae buildup."
       },
       {
           id: 8,
           tip: "Vacuum the substrate during water changes to remove debris and uneaten food."
       }
    ]
}




export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}