import React from "react";
import AddView from "../AddView/AddView";
import Card from "../../ui/Card/Card";
import ListItem from "../ListItem/ListItem";

const List = (props) => {
    const [add, setAdd] = React.useState(false);
  
    const handleAddClose = () => {
      setAdd(false);
    };
  
    const handleAdd = () => {
      setAdd(true);
    };

    const handleDelete = (key) => {
        const itemToRemove = props.data.find(prod => prod.id.toString() === key.toString());
        const index = props.data.indexOf(itemToRemove, 0);

        if (index > -1) {
            return props.setData(props.data.toSpliced(index, 1));
        }
    }

    const listProd = props.data.sort((a,b) => a.name.localeCompare(b.name)).map((product) => <ListItem handleDelete={handleDelete} setData={props.setData} key={product.id} product={product} setEdit={props.setEdit} />)

    return <>
        <h2>List component</h2>
        <Card>
            <button type="button" onClick={handleAdd}>
                Add product
            </button>
            {listProd}
        </Card>
        <AddView isOpen={add} onClose={handleAddClose} setData={props.setData} />
    </>
}

export default List;
