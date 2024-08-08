import React from "react";
import Card from "../../ui/Card/Card";
import "./ListItem.css";

const ListItem = (props) => {

    const handleDelete = (key) => {
        props.handleDelete(key);
    }

    const comments = props.product.comments.map((comment) => <p>{comment.description}</p>)

    return (
        <Card>
            <h3 onClick={() => props.setEdit(props.product.id)}>{props.product.name}</h3>
            <p>In Stock: {props.product.count}</p>
            <p>Weight: {props.product.weight}</p>
            <p>Width: {props.product.size.width} | Height: {props.product.size.height}</p>
            <h4>Comments:</h4>
            {comments}
            <button onClick={() => handleDelete(props.product.id)} className="delete-button">Delete product</button>
        </Card>
    );
}

export default ListItem;