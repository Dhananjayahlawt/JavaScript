// /*Array Literals
// Object Literals
// Fuction argument
// */
// let countryPop = {
//   Germany: 78,
//   India: 335,
//   pakistan: 301,
// };
// // let countryPopExtends = {};  //One Way of doing that another one is to use spread operator
// // for (let entries of Object.entries(countryPop)) {
// //   const country = entries[0];
// //   const pop = entries[1];
// //   countryPopExtends[country] = pop;
// // }
// // countryPopExtends["Englnad"]=98;

// let countryPopExtends = {
//   ...countryPop,
//   Indonesia: 78,
// };
// // console.log(countryPop);
// // console.log(countryPopExtends);

// let array = [[1, 2], 2, 3, 4, 56, 7];
// let copyArray = [...array];
// copyArray.push(20);
// // console.log(array);
// // console.log(copyArray);

// /*
//     1. Create an variable called "points" that points at this array:
//        [10, 15, 20, 30, 5]
//     2. Create another variable called "pointsCopy" that creates a
//        copy of "points" using the spread operator, but also adds
//        2 extra values at the end: 50 and 75
//     3. Print out both "pointsCopy" and "points"
// */
// let points = [10, 15, 20, 30, 5];
// let pointsCopy = [...points, 50, 75];
// // console.log(points);
// // console.log(pointsCopy);

// /*
//     1. Create an variable called "views" that points at this array:
//        [ [5, 10, 20], [10, 20, 30] ]
//     2. Create another variable called "viewsCopy" that creates a
//        copy of "views" using the spread operator
//     3. Print out "views" and "viewsCopy"
//     4. Add the number 40 to the end of the second array inside "viewsCopy"
//        and delete the last number (20) inside the first array
//     5. Add the array [100, 200] to the end of "viewsCopy"
//     6. Print out "views" and "viewsCopy"
//     *Explain this behaviour
// */

// let views = [
//   [5, 10, 20],
//   [10, 20, 30],
// ];
// let viewsCopy = [...views];
// console.log(views);
// console.log(viewsCopy);
// viewsCopy[1].push(40);
// viewsCopy[0].pop();
// viewsCopy.push([100, 200]);
// console.log(views);
// console.log(viewsCopy);

// /*
//     1. Create a variable called "animal" that points at this Object:
//         { name: "Koala", kingdom: "Australia", cute: true,
//           friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] }
//     2. Create a variable called "koala" that points at a COPY of
//        "animal" using the spread operator for Objects, but add the
//        following property as well: "tail": false
//     3. Print out both "animal" as well as "koala"
//     4. Change "cute" to be false inside of "animal". Print out both
//        "animal" and "koala" again and observe the change. Does this
//        make sense?
//     5. Add a "cute" property initialized to be false inside of the
//        "kangaroo" object, inside of the "friends" array in "animal".
//        Print out both "animal" and "koala" again and observe the change.
//        Does this make sense?
// */
// let animal = {
//   name: "Koala",
//   kingdom: "Australia",
//   cute: true,
//   friends: [{ name: "Kangaroo", kingdom: "Australia" }],
// };

// let koala = {
//   ...animal,
//   tail: false,
// };
// console.log("animal", animal);
// console.log("koala", koala);
// animal.cute = false;
// console.log("animal", animal);
// console.log("koala", koala);
// animal.friends[0].cute = false;
// console.log("animal", animal);
// console.log("koala", koala);

// /*
//     1. Create a variable called "superhero" that points at this Object:
//         {   name: "Bruce Wayne", alias: "Batman", universe: "DC",
//             happy: false, enemies: ["Joker", "Catwoman", "Bane"],
//             bestMovie: {title: "The Dark Knight", rating: 95}   }
//     2. How would you create a COPY of the Object pointed to by
//        "superhero" INCLUDING COPIES of "enemies" and "bestMovie".
//     3. Once you've created a total copy, modify the following:
//        - add "Poison Ivy" to the copy's array of "enemies"
//        - add { year: 2008 } to the copy's "bestMovie" Object
//     4. Print out both "superhero" and it's copy to ensure that
//        "superhero"'s "enemies" and "bestMovie" were NOT modified.
//     *This can be done MANY different ways but is also quite challenging!
// */

// const superhero = {
//   name: "Bruce Wayne",
//   alias: "Batman",
//   universe: "DC",
//   happy: false,
//   enemies: ["Joker", "Catwoman", "Bane"],
//   bestMovie: { title: "The Dark Knight", rating: 95 },
// };

// const superheroCopy = {
//   ...superhero,
//   enemies: [...superhero.enemies, "Poison Ivy"],
//   bestMovie: { ...superhero.bestMovie, year: 2008 },
// };

// superheroCopy.enemies.push("Poison Ivy");
// superheroCopy.bestMovie.year = 2008;

// console.log(superhero);
// console.log(superheroCopy);

let object = [
  { id:1,name: "Dhananjay", place: "Meerut",colorid:2 },
  { id:1,name: "pranav", place: "Meerut" , colorid:1 },
  { id:2,name: "Abhishek", place: "Jammu" ,colorid:2},
  { id:2,name: "Abhishek", place: "Jammu",colorid:23},
  { id:2,name: "Abhishek", place: "Jammu",colorid:23 },
  { id:3,name: "Abhishek", place: "Jammu",colorid:23 },
  { id:3,name: "Abhishek", place: "Jammu",colorid:2 },
];


let idCounts = {};

object.forEach(item => {
  if (idCounts[item.colorid] === undefined) {
    idCounts[item.colorid] = 1;
  } else {
    idCounts[item.colorid]++;
  }
});
console.log(idCounts);

function getDistinctIds(objectList, key){
    const distinctIds = objectList
        .map((obj) => obj[key]) // Extract the IDs
        .filter((value, index, self) => self.indexOf(value) === index); // Filter out duplicates
    return distinctIds;
}
let result=getDistinctIds(object,"id");
console.log(result);

// function find(object,key){

// }
// let result=find(object,1);
// console.log(result);
// function find(object, key) {
//   let data = new Map(object.map((item) => [item[key], item])).values();
//   return [...data];
// }
// let arr1 = find(object, "place");
// console.log(arr1);
// console.log(JSON.stringify(arr1));
