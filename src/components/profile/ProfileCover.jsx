const ProfileCover = () => {
    return (
        <>
            <div className="profile-cover position-relative pb-5 mb-5">
                <img src="https://picsum.photos/1200/1000" loading="layz" alt="" className="img-fluid cover-img" />
                <div className="profile-img position-absolute translate-middle start-50">
                    <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle border border-white border-5" loading="layz" width={200} alt="user" />
                </div>
                <div className="position-absolute translate-middle" style={{
                    left: '93%',
                    top: '75%'
                }}>
                    <button className="btn btn-success btn-sm">
                        <i className="fa fa-camera fs-3"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProfileCover