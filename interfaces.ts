// types for variables
// interface for classes and object
interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}
const rect1: Rect = {
  id: '#qwe12312wqe1',
  size: {
    width: 20,
    height: 30
  }
}
const rect2: Rect = {
  id: '#xcasd12312',
  size: {
    width: 50,
    height: 10
  }
}
rect2.color = 'black'

const rect3 = {} as Rect

const rect4 = <Rect>{}

// // =================
interface RectWithArea extends Rect {
  getArea: () => number
}
const rect5: RectWithArea = {
  id: '#w123qw22',
  size: {
    width: 30,
    height: 30
  },
  getArea(): number {
    return this.size.width * this.size.height
  }

}


interface IClock {
  time: Date
  setTime(date: Date): void
}
class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}
// const clock = new Clock()
// console.log(clock.setTime(new Date()));

// Динамический interface ==================
interface Styles {
  [key:string]: string
}
const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}

























// interface Test<T> {
//   test:T
// }
// type StringTest = Test<string>
// type NumberTest = Test<number>
// type ArrayStringTest = Test<string[]>
// type ArrayNumberTest = Test<number[]>

// const test: NumberTest = {
//   test: 123
// }
// console.log(test.test);

// let a: number[][] = [[123],[123123]]
// console.log(a);

// interface Test<T> {
//   test(name: T): T
//   concat(...items: T[][]): T[][]
// }
// const t:Test<string> = {
//   test(name: string) {
//     return name
//   },
//   concat(...items: string[][]) {
//     return [...items]
//   }
// }
// console.log(t.concat(['123'],['2313']));
