import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'

const SingleLayout = ({src,title}) => {
  return (
   
         <Box sx={container}>
            <img src={src} alt="product" style={{width : "60%" , objectFit : "cover" , minHeight :"200px" , margin : "12px 0px" }} />
            <Typography>{title}</Typography>
            <Box  sx={{margin : "10px 0px"}}>
                <Button variant='contained' >Add To Cart</Button>
                <Button sx={{backgroundColor : "#ff9f00" , marginLeft : "5px" }} variant='contained'>Buy Now</Button>
            </Box>
         </Box>
   
  )
}

// {{ marginRight: 14, background: "#ff9f00" }}

export default SingleLayout

const container = {width : "58%", minHeight : "250px" , margin : "auto"  , display : "flex" , justifyItems : "center" , alignItems : "center" , flexDirection : "column" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , borderRadius : "10px"}
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;