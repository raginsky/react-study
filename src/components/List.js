import ListItem from './ListItem';
import styles from './List.css'

const List = props => {
    if (props.items.length === 0) {
        return (
            <p>Nothing found.</p>
        );
    }

    return (
        <ul>
            {props.items.map(item =>
                <ListItem
                    key={item.id}
                    text={item.text}
                    age={item.age}
                />
            )}
        </ul>
    );
};

export default List;