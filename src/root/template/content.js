import React from 'react';
import Header from "./header";
import Footer from "./footer";

function content(props) {
    return (
        <>
        <Header {...props}/>       
        <div className="content_container">
            <div className="content_wrap">
                {props.component ? props.component : "component가 설정되지 않았습니다."}
            </div>  
        </div>  
        <Footer/>
        </>
    );
}

export default content;