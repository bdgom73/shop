import React, { useEffect, useState } from 'react';
function ProductList(props) {
    const [product,setProduct] = useState([
        {
            productImg :"https://previews.123rf.com/images/bluezace/bluezace1303/bluezace130300026/18758837-%EC%9A%B4%EC%9D%B4-%EC%A2%8B%EC%9D%80-%EA%B3%A0%EC%96%91%EC%9D%B4-%EB%A7%88%EC%BC%80-%EB%8B%88-%EB%84%A4%EC%BD%94-.jpg",
            id : 1,
            product : "neco",
            explain : 'neco is ...',
            quantity : 50,
            price : 150,
            creator : {
                name : 'kij'
            }
        },
        {
            productImg :"data:image/jpeg;base64,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",
            id : 2,
            product : "enu",
            explain : 'enu is ...',
            quantity : 120,
            price : 500,
            creator : {
                name : 'kij'
            }
        }
    ])
    return (   
         
        <>   
        <div className="product-List_wrap">
            <div className="product-List" >
                <table className="table table-hover">   
                <thead>
                    <tr>
                        <th>상품이미지</th>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>상품설명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>판매자</th>
                    </tr>
                </thead>     
                <tbody>
                {
                    product.map((p)=>{
                        return(
                            <tr key={p.id+p.product} onClick={()=>{
                                props.history.push("/")
                            }}>  
                                <td> <img src={p.productImg} alt={p.explain} className="img-thumbnail" style={{minWidth:'80px',minHeight:'80px', width:'80px',height:'80px'}} /> </td>                                       
                                <td>{p.id}</td>
                                <td>{p.product}</td>
                                <td>{p.explain}</td>
                                <td>{p.quantity}</td>
                                <td>{p.price}</td>
                                <td>{p.creator.name}</td>      
                            </tr>  
                        );
                    })
                }
                </tbody>         
                
                </table>
            </div>
        </div>  
        </>
    );
}

export default ProductList;