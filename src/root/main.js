import React, { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Content from "./template/content"
import Login from "./page/login"
import Join from "./page/join"
import Home from './page/home';
import Product from './page/product';
import { useCookies } from 'react-cookie';

function Main(props){
    const [cookie, setCookie] = useCookies();
    console.log(cookie)
    return(
        <>
        {
            cookie.uid  ? (
                <div className="app">
                <Switch>
                    <Route exact path="/" render={({...props})=>{return <Content {...props} component={<Home/>} />}} />
                    <Route exact path="/login" render={({...props})=>{return <Content {...props} component={<Login/>}/>}} />
                    <Route exact path="/join" render={({...props})=>{return <Content {...props} component={<Join/>}/>}} />
                    <Route exact path="/product/post" render={({...props})=>{return <Content {...props} component={<Product/>}/>}} />
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