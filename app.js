// console.log(global);

global.setTimeout(() => {
    console.log("Set Time Out with global");
}, 3000);

setTimeout(() => {
    console.log('Set Time Out without global');
}, 3000);

console.log(__dirname);
console.log(__filename);