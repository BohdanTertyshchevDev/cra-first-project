import React, { Component } from 'react';
import Child from './Child';

class List extends Component {
    render() {
        return (
            <Child >
                <h1>Header</h1>
                <p>Hello, Child!</p>
            </Child>
        );
    }
}


/* 
Створити компоненту FlexContainer.
FlexContainer відображає всі їй передані елементи. Відображає як флекс-дітей.
Передавати компоненті FlexContainer пропсами стилі, яка компонента має застосувати до своїх дітей.
Передавати компоненті такі стилі:
flex-direction, align-items, justify-content

<Component someProp={value1}>

</Component>

style = {
    someProp: value1
}
*/

export default List;
