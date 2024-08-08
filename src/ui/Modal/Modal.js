import React from "react";
import "./Modal.css"
 
const Modal = (props) => {
    if (!props.isOpen) return null;

    return (
        <div
            className="background"
        >
            <div className="modal-content">
                {props.children}
            </div>
        </div>
    );
};
 
export default Modal;