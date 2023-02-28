import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '0px solid gray', height: '1000px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;