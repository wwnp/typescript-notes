// Аннотация ----------------------------------------------------
let str: string; // Аннотация
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
// ARR , TUPLE
// in arr all els have one type; any length 
const arr: string[] = ['a', 'b', 'c', 1]; // els in arr should be string
arr.push(5) //err

const arr1: Array<number> = [1, 4, 'abc'] //err
arr1.push('123') //err

const arr2: string[][] = [] // только массивы в массиве
arr2.push(['1'])
arr2.push('123') //err

const arr3: (string | number)[] = []

type MyType = (string | number)
const arr4: MyType[] = []

// in tuple all els have differen type; fixed length
const tuple1: [string, boolean, number] = ['abc', true, 5]

const tuple2: [string, boolean, number] = [true, 5, 5] //err
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

// INTERFACES  -----------------------------------------------------
interface MyObject {
  a: number;
  c: string;
  d?: string // optional
  readonly e: string
  print(): number // new method
  print2: () => string // old method
  [key: string]: string | number | Function // сколько хочешь ключ-значение
}
const obj3: MyObject = { a: 1, c: "str", d: '1123', e: 'dqweqwe' } //err
const obj4: MyObject = { a: 1, c: '123', e: 'dqweqwe', 'sex': '123' } //err
obj3.e = 5 //err


// UNION INTERFACES -----------------------------------------------------
interface Person {
  name: string
}
interface Person {
  age: number
}
const john: Person = {
  name: 'John',
  age: 23,
}
// добавить I (если назв интерфейсов совпадают)----
interface IAccount {
  login: string
}
const acc: IAccount = {
  login: 'asdLOG'
}
// Union interface
interface PersonDEV {
  name: string
}
interface PersonDEV {
  age: number
}
interface AccountDEV {
  email: string
  login: string
  active: boolean
}

interface IDeveloper extends PersonDEV, AccountDEV {
  skills: string[]
  level?: string // ? необязательно
}
const johnDeveloper: IDeveloper = {
  name: 'John',
  age: 24,
  email: 'string@qweq.ru',
  login: 'johnLOG',
  active: true,
  skills: ['123', 'JS', 'CSS'],
  // level: 'active',
}
// UNION TYPES------------------------------
type TPerson = {
  name: string;
  age: number;
}
type TMYAccount = {
  email: string
  login: string
  active: boolean
}
type TDeveloper = {
  skills: string[]
  level?: string // ? необязательно
}
type TFrontendDeveloper = TPerson & TMYAccount & TDeveloper // сложносоставной
const frontEndDEVELOPRES: TFrontendDeveloper[] = [
  {
    name: 'front1',
    age: 23,
    email: 'string@dasd',
    login: 'asdLOG',
    active: true,
    skills: ['asd', 'asd'],
    // level?: '57' // ? необязательно
  },
  {
    name: 'front2',
    age: 23,
    email: 'string@dasd',
    login: 'asdLOG',
    active: true,
    skills: ['asd', 'asd'],
    // level?: '57' // ? необязательно
  },
  {
    name: 'front',
    age: 23,
    email: 'string@dasd',
    login: 'asdLOG',
    active: true,
    skills: ['asd', 'asd'],
    // level?: '57' // ? необязательно
  }
]
// FUNCTION------------------------------
const fn1 = (num: number): string => {
  return String(num)
}// get nubmer return string
//------------
type Callback = (num: number) => string
function fn2(cb: Callback) {
  return '123'
}
//------------
function fn3(cb?: Callback) {
  if (cb === undefined) {
    cb = String
  }
  cb(12)
}
//------------
function createPoint(x: number = 0, y: number = 0): [number, number] {
  return [x, y]
}
createPoint(10)
//------------
function fn4(...nums: number[]): string {
  return nums.join('-')
}
//------------
interface Printable {
  label: string
}
function printReport(obj: Printable): void {
  console.log(obj.label);
}// void when no return; 
const drink = {
  label: 'pepsi',
  price: 90
}
const tel = {
  label: 'huawei',
  price: 123123
}
printReport(drink) // pepsi ; Printable in case fn work as Минимальный Сценарий, price can be 
printReport(tel)  // huawei
printReport({ label: 'Sex', price: '1230' }) // err 




// ПЕРЕГРУЗКА ФУНКЦИЙ
function pickCard0(x: number | { suit: string; card: number }[]): { suit: string; card: number } | number {
  return 1
}
// or (better below)
function pickCard(x: number): { suit: string; card: number }
function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x): any {
  if(typeof x === 'object'){
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  }
  else if(typeof x === 'number'){
    let pickedCard
    //...
    return pickedCard
  }
}
pickCard([{ suit: 'string', card: 123 }])
pickCard(69)


function test(a: number, b: string): {a:number}
function test(a,b): any {
  return a + parseInt(b)
}
test(1,'13')

// Example:: First Lesson ------------------------------
import axios from 'axios'
const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
  id: number
  title: string
  completed: boolean
}
axios.get(url).then(response => {
  const todo = response.data as Todo
  const id = todo.id
  const title = todo.title
  const finished = todo.completed
  logTodo(id, title, finished)
})
function logTodo(id: number, title: string, finished: boolean) {
  console.log(`
    TODO ID ${id}
    TODO title ${title}
    TODO finished ${finished}
    `);
}

// GENERICS- обощения
const valueFactory = (x: number) => x;
const myVal = valueFactory(11)

type TypeFactory<X> = X;
type MyType = TypeFactory<number>;
// TypeFactory<number> ; in <> - generic (number) 

// ---
interface ValueCotainer<Value> {
  value: Value
}
type StringContainer = ValueCotainer<string> // 
const x: StringContainer = {
  value: 'String'
}
//  ValueCotainer<string>; in <> - generic (string) 

// example generic---
class ArrayOfNums {
  constructor(public collection: number[]) {
    // this.collection = collection // don't need
  }
  get(index: number): number {
    return this.collection[index]
  }
}
class ArrayOfStrings {
  constructor(public collection: string[]) {
  }
  get(index: string): string {
    return this.collection[index]
  }
}
// with generics (<T>)
class ArrayOfAnything<T, K> {
  constructor(public collection: T[]) {
  }
  get(index: number): T {
    return this.collection[index]
  }
}
new ArrayOfAnything<string, number>(['123', '456']) // <string,number> === <T, K>
new ArrayOfAnything<number, number>([1, 2, 3])
new ArrayOfAnything([31, 22, 33])

// ----------
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printNums(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
//with generics (<T>)
function printAny<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// printAny<number>([1, 2, 3])
// printAny<string>(['123', '12322'])

// -----
function fillArray<T>(len: number, element: T) {
  return new Array<T>(len).fill(element)
}
const a = fillArray<string>(5, '123')
// console.log(a); // [ '123', '123', '123', '123', '123' ]

// -----
interface ArrayZ<T> {
  concat(...items: Array<T[] | T>): T[]
  // reduce<U>(
  //   callback: (state: U, element: T, index: number, array: T[]) => U,
  //   firstState?: U
  // ): U
}

interface Test<T> {
  test(name: T)
}
const t:Test<string> = {
  test(name) {
    return name
  }
}
// console.log(t.test('sex'));
type TypeFactory<T> = T;

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3