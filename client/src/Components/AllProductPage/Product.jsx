import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Product = () => {
    const {products} = useSelector(state => state.getProducts)
    console.log(products)
  return (
    <Grid container >
      {
        products?.map(item => {
            return <Grid item lg={3}> 
              
               <Box sx ={{height : "15vh"}}>
                <img src={item.url} alt="productpage"  height="200px" width="200px"/>
                <Typography>{item.title.shortTitle} </Typography>
               </Box>

             </Grid>
        })
      }
    </Grid>
  )
}

export default Product
