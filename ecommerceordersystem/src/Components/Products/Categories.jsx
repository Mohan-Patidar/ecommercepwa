import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


import Typography from '@mui/material/Typography';



function Categories() {
   const [category, setCategory] = useState([])

  const fetchData = () => {

    const options = {
      method: 'POST',
      url: 'https://navtark.dev/ecommerceordersystem/api/category_merchant',
      params: { merchant_id: 'eyJpdiI6IjZpeFVTRzRlS1lGNWNxUkpoNGVyYXc9PSIsInZhbHVlIjoiaU9NQTNDR0paZjZGVzZiNjh1V3ZQdz09IiwibWFjIjoiMmE1OWY1OTgwZjZlYWY3ZmY2ZGExNjdjMWUxYzhjZmVkMzMyM2ExNzAyNGJmOWRkZjJjMTk1MmRjOWY4MTEwOSIsInRhZyI6IiJ9' },
    }
    axios.request(options).then((response) => {
      const data=response.data.data.details.data;
      console.log(data)
      setCategory(data)
   
    });
  }

  useEffect(() => {
    fetchData()
  }, [])

  
  return (
    <Container fixed>
    <div><h3>Categories</h3>
    {category.length > 0 && (
    <div>
    {category.map(user => (
    <Card  sx={{ minWidth: 345 }} key={user.id}>
       <CardMedia className="cardimage"
          component="img"
          height="140"
          image={user.cat_image}
          alt="Cat image"
      
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" >Click</Button> */}
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    
    ))}

</div>
)}
</div>
</Container>
    
  )


}

export default Categories;