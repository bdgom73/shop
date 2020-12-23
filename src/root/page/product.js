import React, { useState } from 'react';

function Product(props) {
    return (    
        <>   
        <div className="product-wrap">
            <div className="product">
                <form style={{display:'flex',flexDirection:'column'}}>
                    <select name="kind">
                        <option value="none">--상품게시판을 선택해주세요--</option>
                        <option value="doll">인형</option>
                    </select>
                    <div className="productImg">
                        <label for="img">상품이미지를 올려주세요</label>
                        <input type="file" name="img" accept="image/*"/>
                    </div>  
                    <input type="text" name="productName" placeholder="상품명"/>
                    <textarea placeholder="상품설명" name="expaln"></textarea>
                    <input type="number" name="price" placeholder="가격"/>
                    <input type="number" name="quantity" placeholder="수량"/>
                    <input type="submit" value="상품등록"/>
                </form>
            </div>
        </div>  
        </>
    );
}

export default Product;