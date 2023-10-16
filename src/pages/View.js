import { useParams } from "react-router-dom"
import React,{useState,useEffect} from "react"
import axios from '../axios/instance'
import { Grid,Typography } from "@mui/material"
import NavBar from "../components/Navbar"
import Productlist from "../components/Productlist"

const View = ()=>{
    const {id} = useParams()
    const [subcategory,setSubCategory] = useState([])
    const [products,setProducts] = useState([])

    const getData = async()=>{
        const response =await axios({
            method:'get',
            url:`/getdetail/${id}`
        })
        console.log("data of subcategory",response)
        setSubCategory(response.data.data)
    }

    const getProducts = async()=>{
        const result = await axios({
            method:'get',
            url:`getproducts/${id}`
        })
        console.log("products",result)
        setProducts(result.data.products)
    }

    useEffect(()=>{
        getData()
        getProducts()
    },[])
    return (<>
    <NavBar/>
    <Grid>

        <h2>{id}</h2>
    </Grid>
    {subcategory.map((item)=>(
        <div><h4>{item.name}</h4></div>
    ))}
    <h2>products</h2>
    <div style={{padding:'20px',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
        {products.map((item)=>(
           <Productlist key={item._id} item={item} />
        ))}
        </div>
    </>)
}

export default View