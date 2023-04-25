import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../stores/auth"


function Header() {

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogin = user => {
        dispatch(login(user));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (

        <header className='fixed top-0 sm:mx-auto sm:w-full sm:max-w-md'>

            <div className='flex py-5 justify-between items-center w-full'>
                <h2 className='text-stone-100 font-extrabold text-3xl'>ToDo</h2>

                {
                    !user && (
                        <nav>
                            <button className='bg-white text-sky-900/100 font-sans text-md me-4 px-3 py-1 rounded-lg' onClick={() => handleLogin({ id: 1, username: 'user1' })}>User-1</button>
                            <button className='bg-white text-sky-900/100 font-sans text-md px-3 py-1 rounded-lg' onClick={() => handleLogin({ id: 2, username: 'user2' })}>User-2</button>
                        </nav>
                    )
                }

                {
                    user && (
                        <nav>
                            <span className="text-white text-lg">Wellcome {user.username}</span>
                            <button onClick={() => handleLogout()} className='bg-white text-sky-900/100 font-sans text-md px-3 py-1 rounded-lg'>Logout</button>
                        </nav>
                    )
                }

            </div>

        </header >
    )
}

export default Header