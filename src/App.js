import React, {useState} from 'react';
import ListInput from './components/ListInput';
import List from './components/List';
import './App.css';

let counter = 0;
const defaultData = [
    {id: `field_${counter++}`, text: `This is the ${counter} field`},
    {id: `field_${counter++}`, text: `This is the ${counter} field`},
    {id: `field_${counter++}`, text: `This is the ${counter} field`},
];

const App = () => {
    const [items, setItems] = useState(defaultData);

    let content = (
        <li><p>Sorry, no fields found.</p></li>
    );

    if (items.length > 0) {
        return (
            content = <List items={items}/>
        );
    }

    return (
        <div>
            <div>
                <ListInput/>
            </div>
            <div>
                {content}
            </div>
        </div>
    );
};

export default App;