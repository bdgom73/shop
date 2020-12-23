import React from 'react';

function Login(props) {
    return (
        <>   
        <div className="login-wrap">
            <div className="login">
                <form style={{display:'flex',flexDirection:'column'}}>
                    <input type="text" name="userid" placeholder="your ID"></input>
                    <input type="password" name="password" placeholder="password"></input>
                    <input type="submit" value="로그인"></input>
                </form>
            </div>  
        </div>  
        </>
    );
}

export default Login;