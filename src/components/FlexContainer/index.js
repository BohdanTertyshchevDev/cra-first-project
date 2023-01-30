import React from 'react';

const FlexContainer = (props) => {
    const  {flexDirection, alignItems, justifyContent, backgroundColor} = props;

    const inlineStyles = {
        display: "flex",
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
