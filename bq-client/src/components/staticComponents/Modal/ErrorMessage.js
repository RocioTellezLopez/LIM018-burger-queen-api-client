import './style.css'

function ErrorMessageModal(props) {
    return (
        <div className='messageModal'>
            <div className='contentModal'>
                <p>{props.message}</p>
                <button className='button' onClick={() => props.setExisteError(false)}>Aceptar</button>
            </div>
        </div>
    )
};

export default ErrorMessageModal;