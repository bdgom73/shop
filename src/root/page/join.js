import React from 'react';

function Join(props) {
    return (
        <>   
        <div className="join-wrap">
            <div className="join">
                <form style={{display:'flex',flexDirection:'column'}}>
                    <div class="form-group">
                        <label for="userid">아이디</label>
                        <input type="text" name="userid" placeholder="id" className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label for="name">이름</label>
                        <input type="text" name="name" placeholder="name" className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label for="password1">비밀번호</label>
                        <input type="password" name="password1" placeholder="password" className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label for="password2">비밀번호 확인</label>
                        <input type="password" name="password2" placeholder="confirm password" className="form-control"></input>
                    </div>
                    <input type="submit" value="회원가입"  class="btn btn-default"></input>
                </form>
            </div>  
        </div>  
        </>
    );
}

export default Join;