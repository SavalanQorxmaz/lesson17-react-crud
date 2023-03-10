

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import axios from 'axios'


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    editable: true,
  },

];



const Products = () => {

  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false)
  const [searchValue, setSearchValue] = useState('')
const searchInput = document.getElementById('search')

  useEffect(()=>{
   
    axios.get(`https://fakestoreapi.com/products/`)
    .then(res=>res.data)
    .then(res =>res.filter(row =>
      row.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ))
      .then(res=> setData(res))
    
  }, [flag])

 


  const findRow = ()=>{
  
      setSearchValue(searchInput.value)
      setFlag(!flag)
  }




  return (
    <div className='products'>
      <div className='container'>
      <Box sx={{  width: '100%' }}>
      <TextField onChange={findRow} style={{marginTop: '20px', marginBottom: '20px', width: '100%'}} id="search" label="Axtar" variant="standard" />
      <DataGrid
        rows={data}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[20]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
      </div>
    </div>
  )
}


export  {Products}