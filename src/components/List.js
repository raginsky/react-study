import ListItem from './ListItem';
import styles from './List.module.css'

const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <ListItem key={item.id} text={item.text} age={item.age} />
      ))}
    </ul>
  );
};

export default List;