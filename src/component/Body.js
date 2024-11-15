import React, { useEffect, useState } from 'react'
import Card, { withHederCard } from '../commonComponent/Card'
// import products from '../util/mockData'
import Shimmer from '../commonComponent/Shimmer'
import { apple } from '../util/constents/contextapi'
import { useContext } from 'react';
// import axios from 'axios';

function Body() {
    const [productsData, setProductsData] = useState([])
    const [tempData, setTempData] = useState([])
    const [inputText, setInputText] = useState("")
    const { dataName, changeData } = useContext(apple)
    const CardHenhanced = withHederCard(Card)
    const [render, setRender] = useState(false)
    // const [productsDatas,setProduct]= useState(products)


    const data = async () => {

        // axios.get("https://dummyjson.com/carts")
        // here we need to use try catch block chec once synax in resources
        // .then((resp)=>{
        // // return resp;
        // console.log(resp);
        // }) //easiest way to fetch data..
         
        const myData = await fetch("https://dummyjson.com/carts");
        const respData = await myData.json()
        const actualData = respData.carts.map((ele) => {
            return ele.products
        })
        const cartsData = actualData.flat()
        setProductsData(cartsData)
        setTempData(cartsData)
    }

    useEffect(() => {
        data();
    }, [render]);

    if (!productsData.length > 0) {
        return (
            <>
                <div className='smainContainer'>
                    {Array(12).fill().map(() => <Shimmer />)}
                </div>
            </>
        )
    }
    else {
        return (
            <div className='body'>
                <div className=''>
                    <label>This is to update the context value</label>
                    <input value={dataName}
                        className='p-2 m-2 border'
                        type='text'
                        onChange={(e) => {
                            changeData(e.target.value)
                        }} />
                </div>

                <article className='search'>
                    {/* <h2>search</h2> */}
                    {/* <button onClick={() => {
                    if (render) {
                        setRender(false)
                    }
                    else {
                        setRender(true)
                    }
                }}>
                    Data
                </button> */}
                    <input type="text" value={inputText} onChange={(event) => {
                        setInputText(event.target.value)
                        // console.log(inputText);
                    }} />

                    <button onClick={() => {
                        const inputT = inputText.toLowerCase();
                        let filteredD = tempData.filter((ele) => {
                            return ele.title.toLowerCase().includes(inputT)
                        })
                        setProductsData(filteredD)

                    }}>Search</button>

                    <button onClick={(() => {
                        let filteredData = tempData.filter((ele) => {
                            return ele.price < 500
                        })
                        setProductsData(filteredData)
                        // console.log(filteredData.length, ' length');
                    })}>
                        Price less than 500/-
                    </button >
                    <button onClick={() => {
                        let filteredData = tempData.filter((ele) => {
                            return ele.price > 1000
                        })
                        setProductsData(filteredData)
                        // console.log(filteredData.length, ' length');
                    }}>
                        Price more than 1000/-
                    </button>
                </article>
                <article className='cardHolder'>
                    {/* {productsData.map(ele  => <Card key={ele.id} myData={ele}/>)} */}
                    {/* {console.log(productsData.length, ' final length')} */}
                    {productsData.map((ele, index) => (index % 2 === 1) ? <CardHenhanced key={`${index}${ele.id}`} myData={ele} /> : <Card key={`${index}${ele.id}`} myData={ele} />)}
                </article>
            </div>
        )
    }
}
export default Body
