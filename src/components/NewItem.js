import ListInput from './ListInput';

const NewItem = props => {
    const saveItemDataHandler = (enteredData) => {
        const data = {
            ...enteredData,
            id: Math.random().toString(),
        };
        props.onAddItem(data);
        console.log({enteredData});
        console.log({data});
    };

    return (
        <div>
            <ListInput onSaveData={saveItemDataHandler}/>
        </div>
    );
};

export default NewItem;