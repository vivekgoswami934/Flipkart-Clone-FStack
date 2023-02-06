import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import SingleLayout from './SingleLayout'

const Product = () => {
    const {products} = useSelector(state => state.getProducts)
    console.log(products)
  return (
    <Grid container gap={"40px"} style={{width : "95%", margin : "auto" , boxShadow : "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}} >
      
      {
        products?.map(item => {
            return <Grid lg={5.7} item > <SingleLayout src={item.url} title={item.title.shortTitle}  /></Grid>
        })
      }
    </Grid>
  )
}

export default Product
