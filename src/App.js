import React, {useState} from 'react';
import List from './components/List';
import NewItem from './components/NewItem';
import './App.css';

const App = () => {
    const [items, setItems] = useState([]);

    const saveData = (item) => {
        setItems(prevData => {
            return [item, ...prevData];
        });
    };

    let content = (
        <li><p>Sorry, no fields found.</p></li>
    );

    if (items.length > 0) {
        content = <List items={items}/>;
    }

    return (
        <div>
            <div>
                <NewItem onAddItem={saveData}/>
                {content}
            </div>
        </div>
    );
};

export default App;