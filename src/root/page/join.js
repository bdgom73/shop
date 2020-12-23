import React from 'react';

function Join(props) {
    return (
        <>   
        <div className="join-wrap">
            <div className="join">
                <form style={{display:'flex',flexDirection:'column'}}>
                    <input type="text" name="userid" placeholder="id"></input>
                    <input type="text" name="name" placeholder="name"></input>
                    <input type="password" name="password1" placeholder="password"></input>
                    <input type="password" name="password2" placeholder="confirm password"></input>
                    <input type="submit" value="회원가입"></input>
                </form>
            </div>  
        </div>  
        </>
    );
}

export default Join;