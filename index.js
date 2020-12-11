const fs = require("fs")

// const example = fs.readFileSync('welcome.txt') //sync
// console.log(example.toString());

fs.readFile('welcome.txt', function (error, value) { //async
    if (error) {
        return console.log(error);
    }
    console.log("succesfull", value.toString());//ascii
})

fs.writeFile('welcome.txt', 'hello World', function (error) {
    if (error) throw error;
    console.log('changed');
})

//file system
console.log("hello");
