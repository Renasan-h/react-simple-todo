import React, {ChangeEvent, ReactHTMLElement, useState, useCallback} from 'react'
import {Progress , Input, Text, List, ListItem, Button, Box, Container} from '@chakra-ui/react'
import { MdDeleteForever } from "react-icons/md"
import TodoList from './component/TodoList'
import {useTodo} from './Hooks/useTodo'
import ToDoPercentage from './component/ToDoPercentage'
import { Todo } from './types/Todo'

const App = () => {

  const {todos, AddTodo, DeleteTodo, UpdateTodoisCompleate } = useTodo();
  const [contents, setContents] = useState<string>('')

  const ChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value)
  }

  const OnClickAddTodo = () =>{
    if(contents){
      AddTodo({taskNumber: todos.length + 1, todo:contents, isCompleate:false} as Todo)
      setContents('')
    }
  }

  const deleteHandler = useCallback((index:number) => {
    DeleteTodo(index)
  }, [todos])

  const updateHandler = useCallback((index: number, e:ChangeEvent<HTMLInputElement>) =>{
    UpdateTodoisCompleate(index, e)
  }, [todos])

  return (
    <Container width="100%" display="contents">
      <Box mt="10px" pl="20%" alignItems="center" width="80%" display="flex">
        <Input onChange={ChangeHandler} value={contents}/><Button colorScheme={'blue'} onClick={OnClickAddTodo} >Entry</Button>
      </Box>
      <ToDoPercentage todos={todos} />
      <TodoList todos={todos} DeleteHandler={deleteHandler} UpdateHandler={updateHandler}/>
    </Container>
  )
}
export default App

// hidden={todo.isCompleate} or <Text as="del"></Text>
//<TodoList todoList={todos} deleteHandler={DeleteTodo}/>