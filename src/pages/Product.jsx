

import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Product = () => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  const {id} = useParams()
  

useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.data)
  .then(item => {
    setProduct(item)
    console.log(item)
  })

},[])

const deleteProduct =() => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {

     
        axios.delete(`https://fakestoreapi.com/products/${id}`, {
          method: "delete"
        })
   
   
      .then(res=>{
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        })
      })
      .then(res=>{
        navigate("/products")
      })
     
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}


  return (
    <div className='product'>
      <div className='container'>
        <div className='card-box'>
        <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={product.image} alt="" style={{width: '100%'}}/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete" size='large'>
          <DeleteIcon onClick = {deleteProduct}/>
        </IconButton>
        <IconButton aria-label="share">
          <NavigateBeforeIcon onClick={()=>navigate(`/products`)}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
           {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        </div>
      </div>
    </div>
  )
}


export {Product}