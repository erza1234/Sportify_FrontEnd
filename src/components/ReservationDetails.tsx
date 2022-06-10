import { Box, Button, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import userReservations from "../Data";
import Navbar from "./Navbar";
import './ReservationDetails.css';


const DetailRow = (props: any) => {
    return (
        <Stack sx={{ width: '100%' }} alignItems='center' direction='row' spacing={2}>
            <Typography sx={{ width: '50%', display: 'flex', justifyContent: 'flex-end', fontSize: '14px', fontWeight: 'bold' }} variant="h6">
                {props.columnName}
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: '12px' }} component="div">
                {props.columnData}
            </Typography>
        </Stack>
    );
}

const ReservationDetails = (props: any) => {
    let navigate = useNavigate();
    let params = useParams();
    let resId = (!params.reservationId) ? 1 : params.reservationId;
    const details = userReservations.filter(res => res.id === (+resId))[0];
    return (
        <div className="App">
            <Navbar />
            <Box sx={{ width: '100%', mt: '20px' }}>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    {/* Image Grid */}
                    <Grid item xs={12} md={4} sm={6}>
                        <Card sx={{ margin: '20px', width: '90%', height: '90%', justifyContent: 'center' }} elevation={6}>
                            <img className='Image' src={details.equipmentImg} alt="" />
                        </Card>
                    </Grid>
                    {/* Primary Reservation Grid */}
                    <Grid item xs={12} md={4} sm={6}>
                        <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                            <Stack sx={{ my: '30px' }} alignItems='center' spacing={3} divider={<Divider orientation="horizontal" variant="middle" flexItem />}>
                                <DetailRow columnName='Reference ID :' columnData={details.id} />
                                <DetailRow columnName='Reservation Start :' columnData={details.reservationFrom} />
                                <DetailRow columnName='Reservation End :' columnData={details.reservationTo} />
                                <DetailRow columnName='Reservation Date :' columnData={details.reservationDate} />
                                <DetailRow columnName='Reservation By :' columnData={details.reservedBy} />
                                <DetailRow columnName='Reservation For :' columnData={details.reservedFor} />
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                            <Stack sx={{ my: '30px' }} alignItems='center' spacing={3} divider={<Divider orientation="horizontal" variant="middle" flexItem />}>
                                <DetailRow columnName="Property Name :" columnData={details.equipmentName} />
                                <DetailRow columnName="Property Location :" columnData={details.equipmentLoc} />
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={12} sm={6}>
                        <Button sx={{
                            color: '#000000',
                            backgroundColor: '#ffffff',
                            ':hover': {
                                backgroundColor: '#000000',
                                color: '#ffffff'
                            },
                            mr: '10px'
                        }}
                            variant='contained'
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Back
                        </Button>
                        <Button sx={{
                            ml: '10px',
                            backgroundColor: '#d9534f',
                            color: '#0000',
                            borderColor: '#d43f3a',
                            ':hover': {
                                backgroundColor: '#d43f3a'
                            },
                            ':disabled': {
                                color: '#ffff'
                            }
                        }}
                            disabled
                        >
                            Cancel Reservation
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
export {ReservationDetails, DetailRow};