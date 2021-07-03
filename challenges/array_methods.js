const zooAnimals = [
    {
      animal_name: "Jackal, asiatic",
      population: 5,
      scientific_name: "Canis aureus",
      state: "Kentucky",
    },
    {
      animal_name: "Screamer, southern",
      population: 1,
      scientific_name: "Chauna torquata",
      state: "Alabama",
    },
    {
      animal_name: "White spoonbill",
      population: 8,
      scientific_name: "Platalea leucordia",
      state: "Georgia",
    },
    {
      animal_name: "White-cheeked pintail",
      population: 1,
      scientific_name: "Anas bahamensis",
      state: "Oregon",
    },
    {
      animal_name: "Black-backed jackal",
      population: 2,
      scientific_name: "Canis mesomelas",
      state: "Washington",
    },
    {
      animal_name: "Brolga crane",
      population: 9,
      scientific_name: "Grus rubicundus",
      state: "New Mexico",
    },
    {
      animal_name: "Common melba finch",
      population: 5,
      scientific_name: "Pytilia melba",
      state: "Pennsylvania",
    },
    {
      animal_name: "Pampa gray fox",
      population: 10,
      scientific_name: "Pseudalopex gymnocercus",
      state: "Connecticut",
    },
    {
      animal_name: "Hawk-eagle, crowned",
      population: 10,
      scientific_name: "Spizaetus coronatus",
      state: "Florida",
    },
    {
      animal_name: "Australian pelican",
      population: 5,
      scientific_name: "Pelecanus conspicillatus",
      state: "West Virginia",
    },
  ];

  /* Request 1: .forEach()
The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
*/

// const displayNames =  []

// zooAnimals.forEach((animal) => {
//     displayNames.push(animal.animal_name)
// })
// console.log(displayNames)

const popTotal = zooAnimals.reduce((acc, item) => {
    return acc += item.population
})
console.log("pop",popTotal)