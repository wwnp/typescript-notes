function add(a: number, b: number): number {
  return a + b
}
function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}


// function test(item:number): number
// function test(a:string | number) {
//   return a
// }
// console.log(test(5))

// interface MyPosition {
//   x: number | undefined
//   y: number | undefined
// }

// interface MyPositionWithDefault extends MyPosition {
//   default: string
// }

// // ПЕРЕГРУЗКА ФУНКЦИЙ
// // function position(): MyPosition
// function position(a: number): MyPositionWithDefault
// // function position(a: number, b: number): MyPosition

// function position(a?: number, b?: number) {
//   if (a === undefined && b === undefined) {
//     console.log(123)
//     return { x: undefined, y: undefined }
//   }
//   if (b === undefined) {
//     console.log(456)
//     return { x: a, y: undefined, default: 'string' }
//   }
//   console.log(678)
//   return { x: a, y: b, default: 'string' }
// }
// // 
// console.log('Empty: ', position())
// console.log('One param: ', position(69))
// console.log('Two params: ', position(10, 15))