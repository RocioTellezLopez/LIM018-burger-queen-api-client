function ErrorMessageModal(props) {
    return (
        <div>
            <p>{props.message}</p>
            <button onClick={() => props.setExisteError(false)}>Aceptar</button>
        </div>
    )
};

export default ErrorMessageModal;