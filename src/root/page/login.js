import React from 'react';

function Login(props) {
    return (
        <>   
        <div className="login-wrap">
            <div className="login">
                <form style={{display:'flex',flexDirection:'column'}}>
                    <div class="form-group">
                        <label for="userid">아이디</label>
                        <input type="text" name="userid" placeholder="your ID" class="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label for="password">암호</label>
                        <input type="password" name="password" placeholder="password"  class="form-control"></input>
                    </div>
                    
                    <input type="submit" value="로그인" class="btn btn-default"></input>
                </form>
            </div>  
        </div>  
        </>
    );
}

export default Login;