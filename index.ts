

// --------------------------------------------------------------

let str: string;
str = 'abc'
// str = 1

// Аннотация нужна:
// 1 Когда функция возвращает тип any и надо уточнить значение
let x: number = JSON.parse('6');
let stJSON: string = JSON.parse('{"result":true, "count":42}')

// 2 Когда обявление пере-ой и иниц-я значения проис=ят на разных строчках
let isOdd: boolean;
// isOdd = x % 2 === 0 ? false : true
if (x % 2 === 0) {
  isOdd = false
} else {
  isOdd = true
}
// 3 Когда нужен тип сложносоставной и не опр автоматически
type Score = number | string // Score псевдоним(алиас) с большой буквы
const scoreMy: Score = 7
// or 
let myScore: number | string; // union
myScore = 5

//------------------------------------------------

// arr , tuple
// in arr all els have one type; any length 
const arr: string[] = ['a', 'b', 'c', 1]; // els in arr must be string
arr.push(5)

const arr1: Array<number> = [1, 4, 'abc']
arr1.push('123')

const arr2: string[][] = [] // только массивы в массиве
arr2.push(['1'])
arr2.push('123')

const arr3: (string | number)[] = []

type MyType = (string | number)
const arr4: MyType[] = []

// in tuple all els have differen type; fixed length
const tuple1: [string, boolean, number] = ['abc', true, 5]

const tuple2: [string, boolean, number] = [true, 5, 5]
//csv
type SimpleCSV = [string, string, number]
const example: SimpleCSV[] = [
  ['str', 'stasd', 32]
]

//OBJECT
// var1 -------
const obj: {
  a: number
  b: number
  c: string
} = { a: 1, b: 2, c: "str", }

//var 2 -------
type MyObjType = {
  a: number
  b: number
  c: string
}
const obj1: MyObjType = { a: 1, b: 2, c: "str", }

//var 3 -------
const obj2: object = { a: 1, b: 2, c: "str", }

//var 4 -------
interface MyObject {
  a: number;
  c: string;
  d?: string // optional
  readonly e: string
  print(): number // new method
  print2: () => string // old method
  [key: string]: string | number | Function // сколько хочешь ключ-значение
}
const obj3: MyObject = { a: 1, c: "str", d: '1123', e: 'dqweqwe' }
const obj4: MyObject = { a: 1, c: '123', e: 'dqweqwe', 'sex':'123' }
obj3.e = 5 //err






// Example:: First Lesson ------------------------------
import axios from 'axios'
const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
  id: number
  title: string
  completed: boolean
} // уточнить типы

axios.get(url).then(response => {
  const todo = response.data as Todo
  const id = todo.id
  const title = todo.title
  const finished = todo.completed
  logTodo(id,title,finished)
})

function logTodo(id:number,title:string,finished:boolean){
  console.log(`
    TODO ID ${id}
    TODO title ${title}
    TODO finished ${finished}
    `);
}