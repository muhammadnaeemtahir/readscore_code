import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'

const Header = () => {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <>
            <header>
                <nav className='bg-body-tertiary py-3 mb-5'>
                    <div className="container-fluid d-flex align-items-center justify-content-center">
                        <Link to="/posts" className='d-md-block d-none'>
                            <img src={Logo} alt="logo" className='img-fluid' width={100} />
                        </Link>
                        <ul class="nav ms-md-auto">
                            <li class="nav-item mx-md-4 mx-2">
                                <Link to="/posts" className='nav-link '>
                                    <i class={`fa-solid fa-house text-success fs-1 ${currentPath === '/posts' ? 'active' : ''}`}></i>
                                </Link>
                            </li>
                            <li class="nav-item mx-md-4 mx-2">
                                <Link to="/posts" className='nav-link'>
                                    <i class="fa-solid fa-book text-success fs-1"></i>
                                </Link>
                            </li>
                            <li class="nav-item mx-md-4 mx-2">
                                <Link to="/posts" className='nav-link'>
                                    <i class="fa-solid fa-user text-success fs-1"></i>
                                </Link>
                            </li>
                            <li class="nav-item mx-md-4 mx-2">
                                <Link to="/" className='nav-link'>
                                    <i class="fa-solid fa-right-from-bracket text-success fs-1"></i>
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