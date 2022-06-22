const ListItem = props => {
    const deleteHandler = (e) => {
        const element = e.target;
        element.remove();
    };

    return (
        <li onClick={deleteHandler}>
            {props.text}
        </li>
    );
};

export default ListItem;