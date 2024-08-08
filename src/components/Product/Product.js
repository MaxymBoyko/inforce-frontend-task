import React, { useState } from "react";
import Card from "../../ui/Card/Card";
import './Product.css';
import Modal from "../../ui/Modal/Modal";


const Product = (props) => {
    const key = props.product.id;
    const [name, setName] = useState();
    const [count, setCount] = useState();
    const [weight, setWeight] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [isEdit, setIsEdit] = useState(false);
    
    const comments = props.product.comments.map((comment) => <p>{comment.description}</p>)

    const setEdit = () => {
        setIsEdit(true);
    }

    const acceptEdit = (event) => {
        event.preventDefault();
        const dataToEdit = props.product.find(prod => prod.id.toString() === key);
        const newData = props.product.map((prop) => {
            if (prop === dataToEdit) {
                return {"id": props.product.id, "name": name, "imageUrl": props.product.imageUrl, "count": count, "size": {"width": width, "height": height}, "weight": weight, "comments": props.product.comments};
            };
            return prop;
        });

        props.onEditSubmit(props.id, newData);
    };

    return <>
        <h3>Product edit</h3>
        <Card>
            <h3>{props.product.name}</h3>
            <p>In Stock: {props.product.count}</p>
            <p>Weight: {props.product.weight}</p>
            <p>Width: {props.product.size.width}</p>
            <p>Height: {props.product.size.height}</p>
            <h4>Comments:</h4>
            {comments}
            <button onClick={() => setEdit()} >Edit product</button>
        </Card>
        <Modal isOpen={isEdit} onClose={props.onClose}>
                <>
                    <h1>Edit product</h1>
                    <form onSubmit={acceptEdit}>
                        <input required value={props.product.name} type="text" placeholder="Product name" onChange={(event) => {setName(event.target.value);}} />
                        <input required value={props.product.count} type="number" placeholder="Count" onChange={(event) => {setCount(event.target.value);}} />
                        <input required value={props.product.weight} type="text" placeholder="Weight" onChange={(event) => {setWeight(event.target.value);}} />
                        <input required value={props.product.size.width} type="number" placeholder="Width" onChange={(event) => {setWidth(event.target.value);}} />
                        <input required value={props.product.size.height} type="number" placeholder="Height" onChange={(event) => {setHeight(event.target.value);}} />
                        <button onClick={() => setEdit(false)}>Cancel</button>
                        <button onClick={acceptEdit}>Accept</button>
                    </form>
                
                </>
        </Modal>
    </>;
}

export default Product;