import React, { useState } from "react";
import Modal from "../../ui/Modal/Modal";


const AddView = (props) => {
    const [name, setName] = useState();
    const [count, setCount] = useState();
    const [weight, setWeight] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    
    const submitHandler = (event) => {
        event.preventDefault();
        
        props.setData((prevState) => {
            return [{"id": Math.random(), "name": name, "imageUrl": "", "count": count, "size": {"width": width, "height": height}, "weight": weight, "comments": []}, ...prevState];
        });
    }

    if (!props.isOpen) return null;
    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
                <>
                    <h1>Add new product</h1>
                    <form onSubmit={submitHandler}>
                        <input required type="text" placeholder="Product name" onChange={(event) => {setName(event.target.value);}} />
                        <input required type="number" placeholder="Count" onChange={(event) => {setCount(event.target.value);}} />
                        <input required type="text" placeholder="Weight" onChange={(event) => {setWeight(event.target.value);}} />
                        <input required type="number" placeholder="Width" onChange={(event) => {setWidth(event.target.value);}} />
                        <input required type="number" placeholder="Height" onChange={(event) => {setHeight(event.target.value);}} />
                        <button onClick={props.onClose}>Cancel</button>
                        <button onClick={props.submitHandler}>Accept</button>
                    </form>
                
                </>
            </Modal>
        </>
    );
}

export default AddView;