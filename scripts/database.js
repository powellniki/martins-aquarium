
const database = {
    fish: [
    { 
        id: 1, 
        name: "Rainbow", 
        species: "Oncorhynchus mykiss", 
        length: 12, 
        location: "River A", 
        food: "Insects" 
    },
    { 
        id: 2, 
        name: "Bluey", 
        species: "Paracanthurus hepatus", 
        length: 5, 
        location: "Coral Reef B", 
        food: "Algae" 
    },
    { 
        id: 3, 
        name: "Pike", 
        species: "Esox lucius", 
        length: 24, 
        location: "Lake C",
        food: "Fish" 
    },
    { 
        id: 4, 
        name: "Perchy", 
        species: "Perca flavescens", 
        length: 8, 
        location: "Lake D", 
        food: "Insects" 
    },
    { 
        id: 5, 
        name: "Striper", 
        species: "Morone saxatilis", 
        length: 18, 
        location: "Ocean E", 
        food: "Fish" },
    { 
        id: 6, 
        name: "Needle", 
        species: "Xiphias gladius", 
        length: 100, 
        location: "Ocean F", 
        food: "Fish" 
    },
    { 
        id: 7, 
        name: "Kitty", 
        species: "Siluriformes", 
        length: 15, 
        location: "River G", 
        food: "Insects" 
    },
    { 
        id: 8, 
        name: "Gup", 
        species: "Poecilia reticulata", 
        length: 1, 
        location: "Aquarium H", 
        food: "Algae" 
    },
    { 
        id: 9, 
        name: "Mack", 
        species: "Scombridae", 
        length: 14, 
        location: "Ocean I", 
        food: "Fish" 
    },
    { 
        id: 10, 
        name: "Sal", 
        species: "Salmo salar", 
        length: 22, 
        location: "River J", 
        food: "Insects" 
    },
    { 
        id: 11, 
        name: "Angel", 
        species: "Pterophyllum scalare", 
        length: 6, 
        location: "Aquarium K", 
        food: "Insects" 
    },
    { 
        id: 12, 
        name: "Cuda", 
        species: "Sphyraena barracuda", 
        length: 30, 
        location: "Ocean L", 
        food: "Fish" 
    },
    { 
        id: 13, 
        name: "Carpy", 
        species: "Cyprinus carpio", 
        length: 20, 
        location: "Pond M", 
        food: "Insects" 
    },
    { 
        id: 14, 
        name: "Dolly", 
        species: "Coryphaena hippurus", 
        length: 48, 
        location: "Ocean N", 
        food: "Fish" 
    },
    { 
        id: 15, 
        name: "Bolt", 
        species: "Electrophorus electricus", 
        length: 36, 
        location: "River O", 
        food: "Fish" 
    },
    { 
        id: 16, 
        name: "Fu", 
        species: "Takifugu rubripes", 
        length: 10, 
        location: "Ocean P", 
        food: "Fish" 
    },
    { 
        id: 17, 
        name: "Goldy", 
        species: "Carassius auratus", 
        length: 4, 
        location: "Aquarium Q", 
        food: "Algae" 
    },
    { 
        id: 18, 
        name: "Hock", 
        species: "Melanogrammus aeglefinus", 
        length: 16, 
        location: "Ocean R", 
        food: "Fish" 
    },
    { 
        id: 19, 
        name: "Lord", 
        species: "Hemilepidotus hemilepidotus", 
        length: 14, 
        location: "Ocean S", 
        food: "Insects" 
    },
    { 
        id: 20, 
        name: "Jelly", 
        species: "Medusozoa", 
        length: 8, 
        location: "Ocean T", 
        food: "Plankton" 
    },
    { 
        id: 21, 
        name: "Ko-Ko", 
        species: "Cyprinus rubrofuscus", 
        length: 18, 
        location: "Pond U", 
        food: "Algae" 
    },
    { 
        id: 22, 
        name: "Lioness", 
        species: "Pterois volitans", 
        length: 10, 
        location: "Coral Reef V", 
        food: "Fish" 
    },
    { 
        id: 23, 
        name: "Mandy", 
        species: "Synchiropus splendidus", 
        length: 3, 
        location: "Coral Reef W", 
        food: "Small Crustaceans" 
    },
    { 
        id: 24, 
        name: "Napoleon Dynamite", 
        species: "Cheilinus undulatus", 
        length: 72, 
        location: "Coral Reef X", 
        food: "Fish" 
    },
    { 
        id: 25, 
        name: "Oscar", 
        species: "Astronotus ocellatus", 
        length: 12, 
        location: "Aquarium Y", 
        food: "Small Fish" 
    }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}