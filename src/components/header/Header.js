import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <h4><NavLink to="#">Cart - {0}</NavLink></h4>
            </nav>
        </header>
    )
}

export default Header;