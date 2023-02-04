import { Grid } from '@mui/material'
import React from 'react'
import Filter from './Filter'
import Product from './Product'

const AllProducts = () => {
  return (
    <Grid container>

        <Grid item lg={2}   sx={{border : "2px solid black" , height:"91vh"}} >  <Filter />   </Grid>
        <Grid item lg={10} sx={{border : "2px solid red"}}    >  <Product />  </Grid>
      
    </Grid>
  )
}

export default AllProducts
