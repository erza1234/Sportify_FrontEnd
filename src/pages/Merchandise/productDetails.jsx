import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, Button } from '@mui/material';
import { Grid } from '@mui/material';
import Sportify from '../../assets/images/Sportify.png'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { primaryColor, whiteThemeColor } from "../../Theme/colors";
import { getUser } from "../../components/getLocalStorage";

function Products() {
    const [product, setProduct] = useState({});
    const { state } = useLocation();
    const navigate = useNavigate();

    const onDeleteProductClick = () => {

    }

    const onBack = () => {
        navigate('/store')
    }

    let params = useParams();
    let productId = params.productId;

    useEffect(() => {
        axios.get("http://localhost:5000/api/merchandise/display-merchandise/" + productId).then((res) => {
            console.log(res)
            setProduct(res.data.data)
        }).then((err) => {
            console.log(err);
        });
    }, [])

    return (

        <>
            <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                <Button
                    sx={{ m: '10px', color: whiteThemeColor, backgroundColor: primaryColor }}
                    variant="contained"
                    onClick={onBack}>
                    <ArrowBackIcon sx={{ mr: '3px' }} /> Back
                </Button>
                <div class="space">
                </div>
                <Button
                    sx={{ m: '10px', color: whiteThemeColor, backgroundColor: primaryColor }}
                    variant="contained"
                    onClick={onDeleteProductClick}>
                    <DeleteIcon sx={{ mr: '3px' }} /> Delete Product
                </Button>
            </div>
            <Grid
                container
                style={{ padding: 20 }}
                // height="100%"
                alignItems="center"
                justifyContent="center"
                // className="bg-gray padding-ub"
                rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 7 }}
                columnSpacing={{ xs: 1, sm: 2, md: 5, lg: 6, xl: 8 }}>
                {product ?
                    <Grid item xl={3} lg={4} md={6} sm={6} xs={11}>
                        <Card elevation={7}>
                            <CardMedia
                                component="img"
                                height="300"
                                width="300"
                                margin="15px auto 15px auto"
                                image={product.product_image ?? Sportify}
                                alt={product.product_id}
                            />
                            <CardContent>
                                <Typography align="center" gutterBottom variant="h6" component="div"
                                    style={{ textTransform: 'capitalize' }}>
                                    {product.product_name}
                                </Typography>
                                <Typography align="center" gutterBottom variant="subtitle1" component="div"
                                    style={{ textTransform: 'capitalize' }}>
                                    {product.product_price}
                                </Typography>
                                <Typography align="center" gutterBottom variant="body2" component="div"
                                    style={{ textTransform: 'capitalize' }}>
                                    {product.product_description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    : <div>Loading</div>
                }
            </Grid>
        </>
    )
}

export default Products