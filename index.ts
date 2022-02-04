//Boolean Type
let isCompleted: boolean = false;
//Number Type
const decimal: number = 6;
//String Type
const name1: string = 'Yauhen';
//Null & Undefined Types
const u: undefined = undefined;
const n: null = null;
//Void Type
const greetUser = (): void => {
  alert("Hello, nice to see you!");
};
//Array Type
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // generic type
//Tuple Type
// One line
let y: [string, number] = ["goodbuy", 42];
// Multiple lines
let x: [string, number];
x = ["hello", 10];
//Any Type
let s: any = 1
let a2: [any, any] = [1, '2']
let z: Array<any> = [10, "hello"]; // generic type
//Enum Type 
enum Directions {
  Up,
  Down,
  Left,
  Right
}
// Directions.Up // 0
// -------------------------
enum Directions {
  Up = 2,
  Down = 4,
  Left = 6,
  Right
}
Directions.Up;      // 2
Directions.Down;    // 4
Directions.Left;    // 6
Directions.Right;   // 7
//Never Type
const msg = 'hello'
const error = (msg: string): never => {
  throw new Error(msg)
}
// --------------
const infiniteLoop = (): never => {
  while (true) {
  }
};
//Object Type


//Type aka alias(псевдоним)
type StrOrNum = string | number
const a: StrOrNum = 5
const b: StrOrNum = '5'
// const c: StrOrNum = [2] //error