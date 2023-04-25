import { useSelector, useDispatch } from "react-redux"
import { closeModal } from '../stores/modal'
import modals from "../modals"

function Modal() {

    const dispatch = useDispatch();
    const { name, data } = useSelector(state => state.modal);
    const modal = modals.find(m => m.name === name);

    const close = () => {
        dispatch(closeModal());
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: `rgba(0,0,0,.5)` }}>
            <div className="bg-white p-4">
                <modal.element data={data} close={close} />
            </div>
        </div >
    )
}

export default Modal