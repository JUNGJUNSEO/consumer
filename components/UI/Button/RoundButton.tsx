import React from 'react';
import classes from './RoundButton.module.css'

type RoundButtonProps = {
    children: React.ReactNode;
}

const RoundButton: React.FC<RoundButtonProps> = ({children}) => {

    return (
        <div className={classes['round-button']}>
            {children}
        </div>
    )
}

export default React.memo(RoundButton)