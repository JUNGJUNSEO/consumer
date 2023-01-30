import React from 'react';
import classes from './RoundButton.module.css'

type RoundButtonProps  = {
    children: React.ReactNode;
}

const RoundButton = (props: RoundButtonProps) => {

    return (
        <div className={classes.button}>
            {props.children}
        </div>
    )
}

export default RoundButton