import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userReservations from "../../data/Data";
import './ReservationDetails.css';

const primaryColor = '#326DD9';

const DetailRow = (props: any) => {
    return (
        <Stack sx={{ width: '100%' }} alignItems='center' direction='row' spacing={1}>
            <Typography sx={{ width: '50%', display: 'flex', justifyContent: 'flex-end', fontSize: '14px', fontWeight: 'bold' }} variant="h6">
                {`${props.columnName} :`}
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: '12px' }} component="div">
                {props.columnData}
            </Typography>
        </Stack>
    );
}

const DetailHeader = (props: any) => {
    return (
        <Stack sx={{ width: '100%' }} alignItems='center' direction='row' spacing={2}>
            <Typography sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', mr: '40px', color: primaryColor }} variant="h4">
                {props.heading}
            </Typography>
        </Stack>
    );
}

const ReservationDetails = () => {
    const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
    
    let navigate = useNavigate();
    let params = useParams();
    let resId = (!params.reservationId) ? 1 : params.reservationId;
    const details = userReservations.filter(res => res.id === (+resId))[0];



    const closeDialog = () => {
        setCancelDialogOpen(false);
    }

    const onCancelReservation = () => {
        setCancelDialogOpen(true);
    }

    const cancelConfirmationSnackbar = () => {
        navigate('/my-reservations', {state: {snackbar: true}});
    }

    return (
        <div className="App">
            <Box sx={{ width: '100%', mt: '20px' }}>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    {/* Image Grid */}
                    <Grid item xs={12} md={4} sm={6}>
                        <Card sx={{ margin: '20px', width: '90%', height: '90%', justifyContent: 'center' }} elevation={6}>
                            <img className='Image' src={`../${details.equipmentImg}`} alt="" />
                        </Card>
                    </Grid>
                    {/* Primary Reservation Grid */}
                    <Grid item xs={12} md={4} sm={6}>
                        <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                            <Stack sx={{ my: '30px' }} alignItems='center' spacing={2.5} divider={<Divider orientation="horizontal" variant="middle" flexItem />}>
                                <DetailHeader heading='Reservation Details' />
                                <DetailRow columnName='Reference ID' columnData={details.id} />
                                <DetailRow columnName='Reservation Start' columnData={details.reservationFrom} />
                                <DetailRow columnName='Reservation End' columnData={details.reservationTo} />
                                <DetailRow columnName='Reservation Date' columnData={details.reservationDate} />
                                <DetailRow columnName='Reservation By' columnData={details.reservedBy} />
                                <DetailRow columnName='Reservation For' columnData={details.reservedFor} />
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <Card sx={{ margin: '20px', width: '90%', height: '90%' }} elevation={6}>
                            <Stack sx={{ my: '30px' }} alignItems='center' spacing={3} divider={<Divider orientation="horizontal" variant="middle" flexItem />}>
                                <DetailHeader heading='Property Details' />
                                <DetailRow columnName="Property Name" columnData={details.equipmentName} />
                                <DetailRow columnName="Property Location" columnData={details.equipmentLoc} />
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={12} sm={6} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Button sx={{
                            color: '#000000',
                            backgroundColor: '#ffffff',
                            ':hover': {
                                backgroundColor: '#000000',
                                color: '#ffffff'
                            },
                            mr: '10px',
                            height: '36.5px'
                        }}
                            variant='contained'
                            onClick={() => {
                                navigate("/my-reservations");
                            }}
                        >
                            Back
                        </Button>
                        <Button sx={{
                            ml: '10px',
                            backgroundColor: '#d9534f',
                            color: '#ffffff',
                            borderColor: '#d43f3a',
                            ':hover': {
                                backgroundColor: '#d43f3a'
                            },
                            height: '36.5px'
                        }}
                            onClick={onCancelReservation}
                        >
                            Cancel Reservation
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Dialog
                open={cancelDialogOpen}
                onClose={closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Cancel Confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure, want to cancel the reservation?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelConfirmationSnackbar}>Yes</Button>
                    <Button variant="contained" onClick={closeDialog} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export { ReservationDetails, DetailRow, DetailHeader };