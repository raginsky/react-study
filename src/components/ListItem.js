import styles from './ListItem.module.css';

const ListItem = props => {
    return (
        <li className={styles['list-item']}>
            <div>{props.text}</div>
            <div>{props.age}</div>
        </li>
    );
};

export default ListItem;