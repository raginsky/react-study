const ListItem = props => {

    return (
        <li>
            <div>{props.text}</div>
            <div>{props.age}</div>
        </li>
    );
};

export default ListItem;