import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'

const Header = () => {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <>
            <header>
                <nav className={`bg-body-tertiary py-3 ${currentPath === '/profile' ? '' : 'mb-5'}`}>
                    <div className="container-fluid d-flex align-items-center justify-content-center">
                        <Link to="/posts" className='d-md-block d-none'>
                            <img src={Logo} alt="logo" className='img-fluid' width={100} />
                        </Link>
                        <ul className="nav ms-md-auto">
                            <li className="nav-item mx-md-4 mx-2">
                                <Link to="/posts" className='nav-link '>
                                    <i className={`fa-solid fa-house text-success fs-1 ${currentPath === '/posts' ? 'active' : ''}`}></i>
                                </Link>
                            </li>
                            <li className="nav-item mx-md-4 mx-2">
                                <Link to="/books" className='nav-link'>
                                    <i className={`fa-solid fa-book text-success fs-1 ${currentPath === '/books' ? 'active' : ''}`}></i>
                                </Link>
                            </li>
                            <li className="nav-item mx-md-4 mx-2">
                                <Link to="/profile" className='nav-link'>
                                    <i className={`fa-solid fa-user text-success fs-1 ${currentPath === '/profile' ? 'active' : ''}`}></i>
                                </Link>
                            </li>
                            <li className="nav-item mx-md-4 mx-2">
                                <Link to="/" className='nav-link'>
                                    <i className="fa-solid fa-right-from-bracket text-success fs-1"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default Header