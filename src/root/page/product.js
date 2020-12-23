import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

function Product(props) {
    const [sure, setSure] = useState(false);
    const [cookie , setCookie] = useCookies();
    const [text,setText] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
    useEffect(()=>{
        if(!cookie.Conagree){
            setSure(false)
        }else{
            setSure(true)
        }
    },[])
    return (    
        <>   
        {
            !cookie.Conagree ? (
                <>
                <h1>약관동의</h1>
                <p>{text}</p>
                <button type="button" onClick={()=>{
                    setSure(true)
                    setCookie('Conagree', true)
                }} >수락하고 상품 등록하기</button>
                </>
            ): (
                <div className="product-wrap">
                    <div className="product">
                        <form>
                            <div className="form-group">
                            <select name="kind" class="form-control">
                                <option value="none">--상품게시판을 선택해주세요--</option>
                                <option value="doll">인형</option>
                            </select>
                            </div>

                            <div className="productImg form-group">
                                <label for="exampleInputFile" >상품이미지를 올려주세요</label>
                                <input type="file" accept="image/*" id="exampleInputFile"/>
                            </div>  
                            <div className="form-group">
                                <label for="productName">상품명</label>
                                <input type="text" name="productName" placeholder="상품명" class="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="expaln" className="control-label">상품설명</label>
                                <textarea placeholder="상품설명" name="expaln" class="form-control"></textarea>
                            </div>
                            <div className="form-group">
                            <label for="price">가격</label>
                            <div class="input-group">
                            <div class="input-group-addon">₩</div>                 
                                <input type="number" name="price" placeholder="가격" class="form-control"/>
                                <div class="input-group-addon">.00</div>
                            </div>
                            </div>
                            <div className="form-group">
                                <label for="quantity">수량</label>
                                <input type="number" name="quantity" placeholder="수량" class="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="상품등록" class="btn btn-default"/>
                            </div>
                        </form>
                    </div>
                </div>  
            )
        }
        
        </>
    );
}

export default Product;