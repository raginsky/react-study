import ListInput from "./ListInput";

const NewItem = (props) => {
  const saveItemDataHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toFixed(0).toString(),
    };
    props.onAddItem(data);
  };

  return (
    <div>
      <ListInput onSaveData={saveItemDataHandler} />
    </div>
  );
};

export default NewItem;
