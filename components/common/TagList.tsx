import { FaSlackHash } from "react-icons/fa"
import classes from "./TagList.module.css"

interface TagListProps {
    tags: string[]
}

function TagList({tags}:TagListProps) {

    return (

        <div className={classes.block}>
            {tags.map((tag, index) =>  (
                <a href="#0" key={index}>
                    <FaSlackHash/>
                    <i>{tag}</i>
                </a>
            ))}
        </div>

    )
}


export default TagList