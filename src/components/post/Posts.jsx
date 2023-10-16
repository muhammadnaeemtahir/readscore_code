import CreatePost from "./CreatePost"
import SinglePost from "./SinglePost"
import Suggestions from "../common/Suggestions"

const Posts = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <CreatePost />
                        <SinglePost />
                        <SinglePost />
                    </div>
                    <div className="col-md-4 ms-auto d-md-block d-none">
                        <Suggestions />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts