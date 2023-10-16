

import { Box,Card, CardActionArea ,CardMedia,CardContent,Typography} from "@mui/material";


const Productlist = ({item})=>{
  return (
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',margin:'10px'}}>
      <Card sx={{maxWidth:'355px',display:'flex',m:2}}>
        <CardActionArea>
          <CardMedia sx={{minHeight:'200px'}} component={'img'} src={item.image.secure_url} />
          <CardContent >
            <Typography variant="h6"  >
            {item.name} 
            </Typography>
            <Typography variant="body2">
            Rate: {item.price}
            </Typography>
          </CardContent>
          </CardActionArea>
      </Card>
    </Box>
  )
}

export default Productlist
