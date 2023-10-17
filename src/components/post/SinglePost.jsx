const SinglePost = () => {
    return (
        <>
            <div className="card bg-light mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between post-header mb-2">
                        <div className="d-flex align-items-center">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle" width={40} alt="user" />
                            <p className="card-text ms-2"><strong>John Doe</strong>
                                <small className="d-block"><i className="fa-solid fa-fire text-warning"></i> 15</small>
                            </p>
                        </div>
                        <button className="btn"><span className="badge text-bg-primary">Follow</span></button>
                    </div>
                    <div className="post-contents mb-3">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
                        <img src="https://picsum.photos/500/300" className="img-fluid w-100" alt="post" />
                    </div>
                    <div className="post-footer d-flex">
                        <button className="btn"><i className="fa fa-heart text-danger fs-4"></i></button>
                        <button type="button" className="btn position-relative">
                            <i className="fa fa-comment fs-4"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                15
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePost