import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    const [user, setUser] = useState("D");
    return (
        <>
        <header>
            <div className="header">
                <div className="header-logo">
                    <Link to="/"><span>Chat 🐳</span></Link>
                </div>
                {
                    user ? <NavUser {...props}/> : <NavNonUser {...props}/>
                    
                } 
            </div>
        </header>  
        </>
    );
}

function NavUser(props) {
    return (
       <nav>
        <ul>
            <li><Link to="/">상품등록</Link></li>
            <li><Link to="/">장바구니</Link></li>
            <li><Link to="/">관심상품</Link></li>
        </ul>
    </nav>
    );
}
function NavNonUser(props) {
    return (
       <nav>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/join">join</Link></li>
        </ul>
    </nav>
    );
}
export default Header;