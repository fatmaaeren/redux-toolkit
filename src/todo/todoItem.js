import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../stores/todo";
import { openModal } from "../stores/modal";

function TodoItem({ todo, setModal }) {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleEdit = () => {
        dispatch(openModal({
            name: 'edit-todo',
            data: todo
        }))
    }


    return (
        <li className='text-left flex justify-between p-4 bg-indigo-500 text-white mt-5 rounded'>
            <span style={{ textDecoration: todo.done ? 'line-through' : false }}>
                {todo.title} - {todo.user}
            </span>

            {todo.userid === user.id && (
                <div>
                    <button onClick={handleEdit} className='bg-white text-sky-900/100 font-sans text-md me-2 px-3 py-1 rounded-lg'>Edit</button>
                    <button onClick={handleDelete} className='bg-white text-sky-900/100 font-sans text-md px-3 py-1 rounded-lg'>Delete</button>
                </div>
            )

            }

        </li>
    )
}

export default TodoItem