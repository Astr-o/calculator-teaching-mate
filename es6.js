//scope

var x // global

let y // block 

// arrow functions

function test() {

}

const test = function(x) {

}

const test2 = (x, y) => {
    return x + y
}

const test3 = x => {

}

const test4 = x => x + y

const list = [1, 3, 4, 5, 2, 5]

console.log([1, 3, 4, 5, 2, 5].filter(i => i % 2 == 0))

[1, 2, 3, 4, 6, 7, 8].map(x => x * x).filter(x => x < 8)

while (list[x], (x = x * x / 2) % 2 == 0) {
    x = x;
    var outputArray = function() {
        outputArray.append x;
    }
}

let i = 0

let squared = []

while (i < list.length) {
    const x = list[i]
    const x2 = x * x
    squared.push(x2)
    i++
}

for (var i = 0; i < list.length; i++) {
    const x = list[i]
    const x2 = x * x
    squared.push(x2)
}

for (var i of squared) {
    const x = i * i
    squared.push(x2)
}

list.forEach(x => {
    const x = i * i
    squared.push(x2)
})


const adder = function(y) {
    return x => x + y
}

const adder2 = adder(2)
const adder10 = adder(10)

const list2 = [1, 2, 3, 4, 5]

console.log(list.map(addr2))
console.log(list.map(adder10))


const addr = function(y) {
    return x => x + y
}

const addr2 = addr(2)
const addr10 = addr(9)

const list = [1, 2, 3, 4, 5]

console.log(list.map(addr2))
console.log(list.map(addr10))