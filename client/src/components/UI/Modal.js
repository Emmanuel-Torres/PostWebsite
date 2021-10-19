import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
    return (
        <div className="modal fade" id="modal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Modal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlays'))}
        </>
    )
}

export default Modal;