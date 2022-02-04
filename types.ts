const str: string = 'Hello'
const isFetching: boolean = false
const int: number = 69
const float: number = 6.9
const num: number = 3e10
const arrNums: number[] = [0, 1, 1, 2, 3, 5]
const arrNums2: Array<number> = [0, 1, 1, 2, 3, 5] // generic
const arrStrs: string[] = ['123', '222']
const tuple: [string, number] = ['Vlad', 89182312312]

// переинициалция
let variable: any = 69
variable = 'NEW'

function sayName(name: string): void {
  console.log(name);
} // void - return none
sayName('sex')

// Never
function throwError(msg: string): never {
  throw new Error(msg)
}
function infinite(): never {
  while (true) {

  }
}

// Type  (like Allias)
type Login = string
const login: Login = 'admin'
// const login2: Login = 2 // err

type ID = string | number
const id: ID = '1234'
const id2: ID = 5678
// const id3: ID = false // err

type SomeType = string | null | undefined
// null undefined for variables; void for function