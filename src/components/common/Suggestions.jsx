import React, { useState } from 'react';

const Suggestions = () => {
    const [followStatus, setFollowStatus] = useState('Follow');

    const handleFollowClick = () => {
        if (followStatus === 'Follow') {
            setFollowStatus('Following');
        } else {
            setFollowStatus('Follow');
        }
    };


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <p className="card-title fw-bold">People you may know:</p>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3 suggestion">
                        <div className="d-flex align-items-center">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle" width={40} alt="user" />
                            <p className="card-text ms-2"><strong>John Doe</strong>
                                <small className="d-block"><i className="fa-solid fa-fire text-warning"></i> 15</small>
                            </p>
                        </div>
                        <button className="btn border-0" onClick={
                            handleFollowClick
                        }><span className="badge text-bg-primary">{followStatus}</span></button>
                    </div>
                    <div className="d-flex justify-content-between mb-3 suggestion">
                        <div className="d-flex align-items-center">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle" width={40} alt="user" />
                            <p className="card-text ms-2"><strong>John Doe</strong>
                                <small className="d-block"><i className="fa-solid fa-fire text-warning"></i> 15</small>
                            </p>
                        </div>
                        <button className="btn"><span className="badge text-bg-primary">Follow</span></button>
                    </div>
                    <div className="d-flex justify-content-between mb-3 suggestion">
                        <div className="d-flex align-items-center">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle" width={40} alt="user" />
                            <p className="card-text ms-2"><strong>John Doe</strong>
                                <small className="d-block"><i className="fa-solid fa-fire text-warning"></i> 15</small>
                            </p>
                        </div>
                        <button className="btn"><span className="badge text-bg-primary">Follow</span></button>
                    </div>
                    <div className="text-center">
                        <a href="#" className="text-decoration-none text-danger">See more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suggestions