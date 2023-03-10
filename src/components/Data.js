

import axios from 'axios'


const Data =  []
 
   axios.get(`https://fakestoreapi.com/products/`)
   .then(res=>res.data)
   .then(res =>Data.splice(0, Data.length-1, ...res) )

    





export {Data}