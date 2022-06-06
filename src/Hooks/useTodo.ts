import { useCallback, useState, ChangeEvent } from "react";
import {Todo} from '../types/Todo'

export const useTodo = () =>{
  const [todos, setTodos] = useState<Todo[]>([])

  const AddTodo = useCallback((todo: Todo) => {
    const newTodo = [...todos]
    newTodo.push(todo)
    setTodos(newTodo)
    console.log("add Todo")
  }, [todos])

  const DeleteTodo = useCallback((index: number) => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(newTodo)
    console.log("delete todo")
  }, [todos])

  const UpdateTodoisCompleate = useCallback((index: number, e:ChangeEvent<HTMLInputElement>) =>{
    const newTodo = [...todos]
    if(newTodo[index].isCompleate !== e.target.checked)
    newTodo[index].isCompleate = e.target.checked
    setTodos(newTodo)
    console.log("update todo")
  }, [todos])

  return {todos, AddTodo, DeleteTodo, UpdateTodoisCompleate }
}