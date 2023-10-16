const CreatePost = () => {
    return (
        <>
            <div className="card bg-light shadow mb-5">
                <div className="card-body">
                    <p className="card-title fw-bold">Post Something</p>
                    <form>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Leave a post here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                            <label htmlFor="floatingTextarea2">What did you read today?</label>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-danger me-1"><i class="fa-solid fa-camera"></i></button>
                            <button className="btn btn-success">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePost