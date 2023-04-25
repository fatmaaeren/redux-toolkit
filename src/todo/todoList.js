import TodoItem from './todoItem'
import { useSelector } from 'react-redux'

function TodoList() {

    const { todos } = useSelector(state => state.todo);

    return (
        <div className='flex justify-center align-items-center sm:mx-auto sm:w-full sm:max-w-md'>
            <ul className='flex-1'>
                {
                    todos.map((todo, key) => <TodoItem key={key} todo={todo} />)
                }

            </ul>
        </div>
    )
}

export default TodoList