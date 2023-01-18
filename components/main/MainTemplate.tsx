import React from "react"


type MainTemplateProps  = {
    children: React.ReactNode;
}


function MainTemplate(props: MainTemplateProps) {

    return (
        <div>
            {props.children}
        </div>
    )
}


export default MainTemplate