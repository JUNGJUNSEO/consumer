import React from 'react';
import classes from './RoundButton.module.css'

type RoundButtonProps  = {
    children: React.ReactNode;
}

const RoundButton = (props: RoundButtonProps) => {

    return (
        <button className={classes.button}>
            {props.children}
        </button>
    )
}

export default RoundButton