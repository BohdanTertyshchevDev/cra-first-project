import React from 'react';

const FlexContainer = (props) => {
    const {flexDirection, alignItems, justifyContent, backgroundColor} = props;

    const inlineStyles = {
        display: 'flex',
        flexDirection,
        alignItems,
        justifyContent,
        backgroundColor
    }

    return (
        <div style={inlineStyles}>
            {props.children}
        </div>
    );
}

export default FlexContainer;


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