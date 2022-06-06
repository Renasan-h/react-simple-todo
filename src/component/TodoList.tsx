import { filterProps } from 'framer-motion'
import React, { ChangeEvent } from 'react'
import {Todo} from '../types/Todo'
import {Text, Button, Box,TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Checkbox, IconButton} from '@chakra-ui/react'
import {MdDeleteForever} from 'react-icons/md'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  todos: Todo[]
  DeleteHandler: (index: number) => void
  UpdateHandler: (index: number, e:ChangeEvent<HTMLInputElement>) => void
}

const TodoList = (props:Props) => {
  const todoList: Todo[] = props.todos.sort(todo => todo.taskNumber)
  const deleteHandler = props.DeleteHandler
  const updateHandler = props.UpdateHandler

  const OnClickDeleteHandler = (index: number) => {
    const newTodo = [...todoList]
    newTodo.splice(index, 1)
    deleteHandler(index)
  }

  const OnClickUpdateHandler = (index: number, e:ChangeEvent<HTMLInputElement>) =>{
    updateHandler(index, e)
  }

  const filterEvent = (fileterType: string) =>{
    if (fileterType === "done")
      return "todo.isCompleate === true"
    if (fileterType === "done")
      return "todo.isCompleate === false"
    if (fileterType === "done")
      return "todo.isCompleate === true || todo.isCompleate === false"
  }

  return (
    <Box display="block" pl="20%" pr="50%" alignItems="center" width="50%" >
        <Table size="lg" variant='simple'>
          <TableCaption>TodoList.</TableCaption>
          <Tbody>
            {todoList.map((todo, index) => (
              <Tr key={index}>
                <Td width="10%"><Checkbox onChange={(e:ChangeEvent<HTMLInputElement>) => OnClickUpdateHandler(index, e)} checked={todo.isCompleate}/></Td>
                <Td width="70%"><Text as={todo.isCompleate?'del':'samp'}>{todo.todo}</Text></Td>
                <Td width="20%"><Button mt={5} ml={5} leftIcon={<MdDeleteForever />} colorScheme='blackAlpha' onClick={()=>OnClickDeleteHandler(index)}>delete</Button></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
  )
}

export default TodoList