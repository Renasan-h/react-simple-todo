import React from 'react'
import {Progress, Box, Text} from '@chakra-ui/react'
import { Todo } from '../types/Todo'

interface Props {
  todos: Todo[]
}
const ToDoPercentage = (props: Props) =>{
  const todos = props.todos

  const GetCompleateTaskCountPer = () => {
    const todoResult = Math.round(todos.filter(todo => todo.isCompleate).length / todos.length * 100)
    return todoResult
  }

  return (
    <Box margin={1} pt="10px" alignItems="center" pl="20%" width="80%" height="100px">
      {todos.length !== 0 ?
        <Progress hasStripe value={GetCompleateTaskCountPer()} colorScheme={GetCompleateTaskCountPer() === 100 ? 'green' : 'blue'}/> :
        <Progress hasStripe value={0} />
      }
      {GetCompleateTaskCountPer() === 100 ? <Text align="center" fontSize='50px'>Task All Compleate !!</Text> : ''}
    </Box>
  )
}

export default ToDoPercentage