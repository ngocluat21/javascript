console.log('--------------------LAB 3.2--------------------');
const checkDogs = function(dogsJulia, dogsKate) {
    const copyDogsJulia = dogsJulia.slice(0);
    copyDogsJulia.splice(0, 2);
    copyDogsJulia.splice(-2);
    // console.log(copyDogsJulia);
    
    const dogs = copyDogsJulia.concat(dogsKate);
    // console.log(dogs);
    
    dogs.forEach(function(age, i) {
        if (age >= 3) {
            console.log(`Con chó số ${i + 1} là trưởng thành và ${age} tuổi.`);
        } else {
            console.log(`Con chó số ${i + 1} vẫn là chó con 🐕`);
        }
    });
}
console.log('----DATA TEST 1----');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('----DATA TEST 2----');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

console.log('--------------------LAB 3.3--------------------');

const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map(function(age) {
        if (age <= 2) {
            return age * 2;
        } else {
            return 16 + age * 4;
        }
    });
    console.log(humanAges);
    
    const adults = humanAges.filter(function(age) {
        if(age >= 18) {
            return age;
        }
    })
    console.log(adults);
    
    const average = adults.reduce(function(acc, age) {
        return acc + age;
    }, 0) / adults.length;
    
    return average
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

console.log('--------------------LAB 3.4--------------------');


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8 , curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
    `Sarah's dog is eating too ${
        dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
    }`
);

// 3.
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

