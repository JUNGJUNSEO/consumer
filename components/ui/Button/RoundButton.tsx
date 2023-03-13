import React, { PropsWithChildren } from 'react';
import classes from './RoundButton.module.css'


const RoundButton = (props: PropsWithChildren) => {

    return (
        <div className={classes['round-button']}>
            {props.children}
        </div>
    )
}

export default React.memo(RoundButton)