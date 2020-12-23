import React, { useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Content from "./template/content"
import Login from "./page/login"
import Join from "./page/join"
import Home from './page/home';
import Product from './page/product';
import { useCookies } from 'react-cookie';



function Main(props){
    const [cookie, setCookie] = useCookies();
    useEffect(()=>{
        setCookie('uid','a')
    },[])
    return(
        <>
        {
            cookie.uid  ? (
                <div className="app">
                <Switch>
                    <Route exact path="/" render={({...props})=>{return <Content {...props} component={<Home {...props}/>} />}} />
                    <Route exact path="/login" render={({...props})=>{return <Content {...props} component={<Login {...props}/>}/>}} />
                    <Route exact path="/join" render={({...props})=>{return <Content {...props} component={<Join {...props}/>}/>}} />
                    <Route exact path="/product/post" render={({...props})=>{return <Content {...props} component={<Product {...props}/>}/>}} />
                </Switch>       
            </div>
            ) : (
                <>
                    <h1>로그인후 이용할 수 있습니다.</h1>
                    <Login/>
                </>
            )
        }
       
        </>
    );  
}

export default Main;