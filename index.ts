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