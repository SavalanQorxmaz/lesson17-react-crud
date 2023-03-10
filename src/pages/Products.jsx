

import React, { useEffect, useState } from 'react'
import {Data} from '../components/Data'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';


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
  const [flag, setflag] = useState(false)

  useEffect(()=>{
    setData(Data)
  }, [flag])





  return (
    <div className='products'>
      <div className='container'>
      <Box sx={{  width: '100%' }}>
      <TextField id="standard-basic" label="Axtar" variant="standard" />
      <DataGrid
        rows={Data}
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