import TagList from "../common/TagList"
import classes from "./PostHead.module.css"

function PostHead(){

    return (
        <div className={classes.block}>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>내가 사용한 세탁 세제 전격 비교</h1>
                <div className={classes.info}>
                    <div>By <a>JungJunSeo</a></div>
                    <div style={{ borderLeft: "2px solid",  height: "16px", margin: "0 1rem"}} />
                    <span>어제 작성</span>
                </div>
                <TagList tags = {['빛나라 세탁 세제', '솔티드 카라멜 세탁 세제', '찌든떄 팍팍 세제']}/>

            </div>
                

        </div>
    )
}

export default PostHead