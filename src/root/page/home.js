import React, { useState } from 'react';
import ProductList from './productList';

function Home(props) {
    return (    
        <>   
        <div className="home-wrap">
            <div className="home">
                <ProductList {...props}/>        
            </div>
        </div>  
        </>
    );
}

export default Home;