import React from "react";
import classes from './Login.module.css'

function Login(){

    return (
        <React.Fragment>
            <div className={classes.title}>Login</div>
            <form>
                <div className={classes.control}>
                    <input placeholder="Email" type="email" />
                </div>
                <div className={classes.actions}>
                    <input type="submit" value ="Login"/>
                </div>
                
                    
            </form>
        </React.Fragment>
            

    )
}


export default Login