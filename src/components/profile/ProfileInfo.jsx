import SinglePost from "../post/SinglePost"
import Suggestions from "../common/Suggestions"

const ProfileInfo = () => {
    return (
        <>
            <div className="container">
                <div className="pt-5 mb-5">
                    <div className="col-md-6 mx-auto">
                        <div className="card bg-light">
                            <div className="card-body d-flex gap-3">
                                <span class="btn btn-warning">
                                    <i className="fa fa-fire"></i> 15, 870
                                </span>
                                <span class="btn btn-info">
                                    <i className="fa fa-book"></i> Top Contributor
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="personal-info mb-5">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <section className="mb-3">
                                        <h3>About Me <button className="btn btn-sm btn-primary"><i className="fa fa-pen"></i></button> </h3>
                                        <p>
                                            I am a passionate software developer with a strong zeal to work with emerging startups. I have a strong belief in learning by doing and that's why I always love to work on new projects to explore new domains.
                                        </p>
                                    </section>
                                    <section className="mb-3">
                                        <h3>Recents Potos</h3>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src="https://picsum.photos/500/300" class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src="https://picsum.photos/500/300" class="d-block w-100" alt="..." />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src="https://picsum.photos/500/300" class="d-block w-100" alt="..." />
                                                        </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <SinglePost />
                                    <SinglePost />
                                    <SinglePost />
                                    <SinglePost />
                                    <SinglePost />
                                    <SinglePost />
                                    <SinglePost />
                                    <SinglePost />
                                    <SinglePost />
                                    <SinglePost />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ms-auto">
                        <Suggestions />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo