import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../stores/todo';


function AddTodo() {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const [todo, setTodo] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo({
            title: todo,
            done: false,
            id: nanoid(),
            user: user.username,
            userid: user.id
        }))
        setTodo('');
    }

    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-6 px-4 shadow rounded  sm:px-10' >
                <form className='mb-0 space-y-6 w-full' onSubmit={(e) => handleSubmit(e)}>
                    <input type='text' placeholder='Add Todo' className='label' value={todo} onChange={e => setTodo(e.target.value)} />
                    <button disabled={!todo || !user} type='submit' className='btn w-full'>Add</button>
                </form>
            </div>

        </div>
    )
}

export default AddTodo