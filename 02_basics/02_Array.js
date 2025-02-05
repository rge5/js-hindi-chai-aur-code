const maarvel_heroes =["thor", "ironman","spiderman"]
const dc_heroes = ["superman", "batman", "flash"]
// maarvel_heroes.push(dc_heroes)

// console.log(maarvel_heroes) 
// console.log(maarvel_heroes[3] [1])

// const all_heroes = maarvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

// const all_new_heroes =[...maarvel_heroes, ...dc_heroes]
// console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [7, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array .isArray("Ayush"))
console.log(Array .from("Ayush"))
console.log(Array .from({name: "Ayush"})) //Intersting output

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3))