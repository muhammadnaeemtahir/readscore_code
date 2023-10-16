import { Link } from 'react-router-dom'

import AppInfo from '../data/AppInfo.json'

const Login = () => {
    const { logo, name } = AppInfo

    const SubmitHandle = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="login auth min-vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 d-md-block d-none auth-cover">
                        </div>
                        <div className="col-md-5">
                            <div className="auth-form-wrapper px-md-5 px-4">
                                <div className="auth-form w-100">
                                    <div className="text-center">
                                        <img src={logo} alt={name} className="img-fluid w-50" />
                                    </div>
                                    <form className='mb-5' onSubmit={SubmitHandle}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className='form-label'>Email</label>
                                            <input type="email" id="email" className="form-control" placeholder="Enter your email" autoComplete='off' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className='form-label'>Password</label>
                                            <input type="password" id="password" className="form-control" placeholder="Enter your password" autoComplete='off' />
                                        </div>
                                        <div className="mb-3">
                                            <Link to="/posts" className="btn btn-lg btn-primary w-100">Login</Link>
                                        </div>
                                        <div className="text-center">
                                            <p className="mb-0">Don't have an account? <Link to="/register">Register</Link></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login