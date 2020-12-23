import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    console.log(props)
    const [user, setUser] = useState('s');
    return (
        <>
        <header>
            <div className="header ">
                <div className="header-logo text-center" >
                    <Link to="/"><h2>Coin Shop 🐳</h2></Link>
                </div>
                <nav  className="row">
                <ul className="list-unstyled ">
                {
                    user ? <NavUser {...props}/> : <NavNonUser {...props}/>
                    
                } 
                </ul>
                </nav>
               
            </div>
        </header>  
        </>
    );
}

function NavUser(props) {
    return (
            <>
            <li className="col-xs-4 col-md-4  text-center"><Link to="/product/post">상품등록</Link></li>
            <li className="col-xs-4 col-md-4  text-center"><Link to="/">장바구니</Link></li>
            <li className="col-xs-4 col-md-4 text-center"><Link to="/">관심상품</Link></li>
            </>
    );
}
function NavNonUser(props) {
    return (
        <>
            <li className="col-xs-6 col-md-6 text-center"><Link to="/login">Login</Link></li>
            <li className="col-xs-6 col-md-6 text-center" ><Link to="/join">join</Link></li>
        </>
    );
}
export default Header;