"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, -5, -6, 45, 69, 420, 500])
// numbersCollection.sort()
// console.log(numbersCollection.data)
// const charactersCollection = new CharactersCollection('xAAbFjRCqPzLmg')
// charactersCollection.sort()
// console.log(charactersCollection.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(2);
linkedList.add(-6);
linkedList.add(600);
linkedList.add(42);
linkedList.sort();
linkedList.print();
