import React from 'react';

export default function LabelCustom(props) {

    var styles = {
        fontSize: props.textSize + 'px',
        color: props.textColor,
    };

    if (props.inline === 'true') {
        // styles.push({display: 'inline'});
        styles.display = 'inline';
    }

    return (
        <div style={styles}>
            {props.text}
        </div>
    );
}