import React from 'react';
import Test from 'src/components/test/test.component';
import styles from './app.module.scss';

const list = [
    { id: 2, name: 'Ivan', sirname: 'Saveliev', age: 22 },
    { id: 3, name: 'John', sirname: 'Smith', age: 12 },
    { id: 4, name: 'Vladimir', sirname: 'Putin', age: 69 },
];

const App = () => {
    return (
        <>
            <Test />
            <ul className={styles.list}>
                {list.map((el, index) => (
                    <li key={index}>{`${el.name} ${el.sirname} ${el.age}`}</li>
                ))}
            </ul>
        </>
    );
};

export default App;
