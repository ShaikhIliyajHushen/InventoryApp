import React, { useState } from 'react';
import './index.css';
import { Typography, Button, Box, TextField, Card, Grid } from '@mui/material';
import CKEditorComponent from '../CkEditor';

const Index = (props) => {
    const { setViewToggleBtn, setToggleBtn, setUploadImage, setName } = props
    const [image, setImage] = useState(null);
    const [additionalImage, setAdditionalImage] = useState(null);
    const [checked, setChecked] = useState(false);
    const [checkedExpire, setCheckedExpire] = useState(false);
    const [itemName, setItemName] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAdditionalImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAdditionalImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleName = (e) =>{
        let text = e.target.value
        setItemName(text)
    }
   

    const handleChecked = (e) => {
        setChecked(e.target.checked)
    }
    const handleCheckedExpire = (e) => {
        setCheckedExpire(e.target.checked)
    }

    const handleViewInvetory = () => {
        setViewToggleBtn(true)
        setToggleBtn(false)
        setUploadImage(image)
        setName(itemName)
    }

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: '#F6F7FB', paddingTop: '10px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Typography variant="h7"> New Inventory Items</Typography>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        <Button sx={{ backgroundColor: 'black', color: 'white', textTransform: 'none' }} size="small">
                            Save as Draft<i class="bi bi-chevron-down" style={{ fontSize: '1em', marginRight: '4px', color: 'white' }}></i>
                        </Button>
                        <Button onClick={handleViewInvetory} sx={{ backgroundColor: '#5570F1', color: 'white', textTransform: 'none' }} size="small">
                            Save & Publish
                        </Button>
                    </Box>
                </div>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Card
                            elevation={0}
                            sx={{
                                padding: 3,
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: { xs: 4, sm: 10 },
                                borderRadius: 3,
                                // boxShadow: 3,
                            }}>
                            <Box sx={{ flex: 1 }}>
                                <Box>
                                    <TextField
                                        fullWidth
                                        label="Product Name"
                                        variant="outlined"
                                        margin="normal"
                                        onChange={handleName}
                                        sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                            },
                                        }}
                                    />
                                </Box>

                                <Box >
                                    <TextField
                                        fullWidth
                                        label="Salacet Product Category"
                                        variant="outlined"
                                        margin="normal"
                                        sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                            },
                                        }}
                                    />
                                </Box>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <TextField
                                                fullWidth
                                                label="Selling Price"
                                                variant="outlined"
                                                margin="normal"
                                                sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                                InputProps={{
                                                    sx: {
                                                        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <TextField
                                                fullWidth
                                                label="Cost Price"
                                                variant="outlined"
                                                margin="normal"
                                                sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                                InputProps={{
                                                    sx: {
                                                        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Box >
                                    <TextField
                                        fullWidth
                                        label="Quantity in Stock"
                                        variant="outlined"
                                        type='number'
                                        margin="normal"
                                        sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                            },
                                        }}
                                    />
                                </Box>

                                <Box >
                                    <TextField
                                        fullWidth
                                        label="Order Type"
                                        variant="outlined"
                                        margin="normal"
                                        select
                                        sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                            },
                                        }}
                                    >
                                    </TextField>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1">Discount</Typography>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" onChange={handleChecked} type="checkbox" id="flexSwitchCheckChecked" />
                                    </div>
                                </Box>
                                {checked ? (
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Box>
                                                <TextField
                                                    fullWidth
                                                    label="Type"
                                                    variant="outlined"
                                                    margin="normal"
                                                    sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                                    InputProps={{
                                                        sx: {
                                                            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <Box>
                                                <TextField
                                                    fullWidth
                                                    label="Value"
                                                    variant="outlined"
                                                    margin="normal"
                                                    sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                                    InputProps={{
                                                        sx: {
                                                            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ) : ''}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1">Expire Date</Typography>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" onChange={handleCheckedExpire} type="checkbox" id="flexSwitchCheckChecked" />
                                    </div>
                                </Box>
                                {checkedExpire ? (
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                       <TextField
                                        fullWidth
                                         type='date'
                                        variant="outlined"
                                        margin="normal"
                                        onChange={handleName}
                                        sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                            },
                                        }}
                                    />
                                        </Box>
                                    </Grid>
                                ) : ''}
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <Box>
                                    <TextField
                                        fullWidth
                                        label="Start Description"
                                        variant="outlined"
                                        margin="normal"
                                        multiline
                                        rows={4}
                                        sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                            },
                                        }}
                                    />
                                </Box>

                                <Box>
                                    <Typography variant="subtitle2">Product Long description</Typography>
                                    <CKEditorComponent />
                                    <Typography variant="subtitle2">Add a Long description for your Product</Typography>
                                </Box>

                                <Box mt={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1">Return Policies</Typography>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                    </div>
                                </Box>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Box >
                                            <TextField
                                                fullWidth
                                                label="Date"
                                                type="datetime-local"
                                                variant="outlined"
                                                margin="normal"
                                                sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                                InputProps={{
                                                    sx: {
                                                        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <TextField
                                                fullWidth
                                                label="Time"
                                                type="time"
                                                variant="outlined"
                                                margin="normal"
                                                sx={{ backgroundColor: '#F6F7FB', borderRadius: 2 }}
                                                InputProps={{
                                                    sx: {
                                                        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Card>
                    </Grid>


                    <Grid item xs={12} md={3}>
                        <Card

                            sx={{ padding: 3, borderRadius: 3 }}
                            elevation={0}
                        >
                            <div className="upload-container p-3 text-center">
                                {image ? (
                                    <div className="image-wrapper">
                                        <img src={image} alt="Uploaded" className="uploaded-image" />
                                        <div className='delete-icon'>
                                            <i className="icon delete  bi bi-cloud-arrow-up fs-6 me-2" ></i>
                                            <i className="icon delete  bi bi-trash fs-6" ></i>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="icon-placeholder">
                                        <input type="file" onChange={handleImageUpload} />
                                        <div className="icon"><i className="bi bi-images fs-1" style={{ color: '#5570F1' }}></i></div>
                                        <h6>Upload Image</h6>
                                        <span style={{ fontSize: '10px' }}>Upload cover image for your product</span>
                                        <span style={{ fontSize: '10px' }}>File format <strong>jpeg, png</strong>. Recommended size <strong>600x600 (1:1)</strong></span>
                                    </div>
                                )}
                            </div>
                            <h5 className="mt-3">Additional images</h5>
                            <div className="d-flex justify-content-between flex-wrap">
                                <div className="image-boxes">
                                    <div className="image-box">
                                        {image ? (<>
                                            <img src={image} className="uploaded-small-image" />
                                            <div className='delete-icon'>
                                                <i className="icon delete  bi bi-cloud-arrow-up fs-6 me-2" ></i>
                                                <i className="icon delete  bi bi-trash fs-6" ></i>
                                            </div>
                                        </>) : ''}
                                    </div>
                                </div>
                                <div className="image-boxes">
                                    <div className="image-box">
                                        {additionalImage ? (
                                            <div className="border-dashed empty-box">
                                                <i className="bi bi-images fs-2" style={{ color: '#5570F1' }}></i>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="border-dashed empty-box">
                                                    <input type="file" onChange={handleImageUpload} />
                                                    <i className="bi bi-images fs-2" style={{ color: '#5570F1' }}></i>
                                                </div>
                                            </>
                                        )}
                                        <input type="file" onChange={handleAdditionalImageUpload} />
                                    </div>
                                </div>
                                <div>
                                    {(additionalImage || image) && (
                                        <div className="image-boxes mt-4">
                                            <div className="image-box">
                                                <img src={additionalImage ? additionalImage : ''} className="uploaded-small-image" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Index;
