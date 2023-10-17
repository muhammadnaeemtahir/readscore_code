
const Books = () => {

    const submitHandle = (e) => {
        e.preventDefault()
        console.log("submit")
    }

    return (
        <>
            <div className="container">
                <form onSubmit={submitHandle}>
                    <div className="row">
                        <h1 className="text-center">Know About Books!</h1>
                        <div className="col-12 mb-5">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light" placeholder="Enter keyword" />
                                <button type="submit" className="btn btn-danger"><i className="fa-brands fa-searchengin text-white fs-1"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Books