const myArr = [4,5,8,7,2];

// console.log(myArr[1]);

const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[2]);

// methods

myArr.push(6);
// console.log(myArr);
myArr.pop();
// console.log(myArr);

const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);
