import React, { useState } from 'react'
import axios from '../axios/instance'
import { Grid, Paper, TextField, Button, } from "@mui/material";
import NavBar from '../components/Navbar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = ()=>{
    const [category,setCategory] = useState('')
    const handleCategory = async(e)=>{
        e.preventDefault()
        console.log('category',category)
        const response =await axios({
            method:'post',
            url:'/addcategory',
            data:{
                category:category
            }
        })
        console.log("response after adding category",response)
      
          toast("category added to database")
        
    }
    const paperStyle = {
        height: "45vh",
        width: "26vw",
        padding: 20,
        margin: "20px auto",
      };

      const BtnStyle = { margin: "6px 0" };

    return(<>
    <Grid>
     < NavBar/>
    <Paper elevation={10} style={paperStyle}>
    <Grid align="center" sx={{marginTop:'3px'}}>
          <h2>Add Category</h2>
        </Grid>
    
    <form onSubmit={handleCategory}>
    <TextField
          size="small"
          label="Add Category"
          fullWidth
          required
          onChange={(e) => setCategory(e.target.value)}
          style={BtnStyle}
          value={category}
        />
        <Button variant="contained" color="primary" fullWidth style={BtnStyle} type="submit">
          Submit
        </Button>
    
    </form>
    <ToastContainer />
    </Paper>
    </Grid>
    </>)
}

export default Category