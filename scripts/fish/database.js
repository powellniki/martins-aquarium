
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
    /*
    { 
        id: 11, 
        image: "",
        name: "Angel", 
        species: "Pterophyllum scalare", 
        length: 6, 
        location: "Aquarium K", 
        food: "Insects" 
    },
    { 
        id: 12, 
        image: "",
        name: "Cuda", 
        species: "Sphyraena barracuda", 
        length: 30, 
        location: "Ocean L", 
        food: "Fish" 
    },
    { 
        id: 13,
        image: "",
        name: "Carpy", 
        species: "Cyprinus carpio", 
        length: 20, 
        location: "Pond M", 
        food: "Insects" 
    },
    { 
        id: 14,
        image: "",
        name: "Dolly", 
        species: "Coryphaena hippurus", 
        length: 48, 
        location: "Ocean N", 
        food: "Fish" 
    },
    { 
        id: 15,
        image: "",
        name: "Bolt", 
        species: "Electrophorus electricus", 
        length: 36, 
        location: "River O", 
        food: "Fish" 
    },
    { 
        id: 16,
        image: "",
        name: "Fu", 
        species: "Takifugu rubripes", 
        length: 10, 
        location: "Ocean P", 
        food: "Fish" 
    },
    { 
        id: 17,
        image: "",
        name: "Goldy", 
        species: "Carassius auratus", 
        length: 4, 
        location: "Aquarium Q", 
        food: "Algae" 
    },
    { 
        id: 18,
        image: "",
        name: "Hock", 
        species: "Melanogrammus aeglefinus", 
        length: 16, 
        location: "Ocean R", 
        food: "Fish" 
    },
    { 
        id: 19,
        image: "",
        name: "Lord", 
        species: "Hemilepidotus hemilepidotus", 
        length: 14, 
        location: "Ocean S", 
        food: "Insects" 
    },
    { 
        id: 20,
        image: "",
        name: "Jelly", 
        species: "Medusozoa", 
        length: 8, 
        location: "Ocean T", 
        food: "Plankton" 
    },
    { 
        id: 21,
        image: "",
        name: "Ko-Ko", 
        species: "Cyprinus rubrofuscus", 
        length: 18, 
        location: "Pond U", 
        food: "Algae" 
    },
    { 
        id: 22,
        image: "",
        name: "Lioness", 
        species: "Pterois volitans", 
        length: 10, 
        location: "Coral Reef V", 
        food: "Fish" 
    },
    { 
        id: 23,
        image: "",
        name: "Mandy", 
        species: "Synchiropus splendidus", 
        length: 3, 
        location: "Coral Reef W", 
        food: "Small Crustaceans" 
    },
    { 
        id: 24,
        image: "",
        name: "Napoleon Dynamite", 
        species: "Cheilinus undulatus", 
        length: 72, 
        location: "Coral Reef X", 
        food: "Fish" 
    },
    { 
        id: 25,
        image: "",
        name: "Oscar", 
        species: "Astronotus ocellatus", 
        length: 12, 
        location: "Aquarium Y", 
        food: "Small Fish" 
    }
    */
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}