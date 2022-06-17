import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function Banner() {
    return (
        <Card sx={{ minWidth: 200 ,minHeight:200}}>
          <CardContent>

    <img className="bannerimg" style={{"height":"350px","width":"650px"}} src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80"
      alt="new"
    />
          </CardContent>
        </Card>
      );
}

export default Banner;