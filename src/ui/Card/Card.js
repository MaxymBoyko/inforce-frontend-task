import './Card.css';

function Card (props) {
    return <div onClick={props.onClick} className={`card ${props.className}`} style={props.style}>
        {props.children}
    </div>
}

export default Card;