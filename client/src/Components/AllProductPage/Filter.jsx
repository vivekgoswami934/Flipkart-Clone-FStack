import { Box, Typography } from '@mui/material'
import React from 'react'

const Filter = () => {
  const filterObject = [
    {
      id : 1,
      title : "Mobile",
    },
    {
      id : 2,
      title : "Laptop",
    },
    {
      id : 3,
      title : "Kitchen",
    },
    {
      id : 4,
      title : "Watches",
    },
    {
      id : 5,
      title : "Earphone",
    },
  ]
  return (
    <Box>

     { filterObject.map((el)=>(
      <Box display="flex" margin="20px 40px">
      <input type="checkbox" /> <Typography>{el.title}</Typography>
      </Box>
     ))}
      
    </Box>
  )
}

export default Filter
