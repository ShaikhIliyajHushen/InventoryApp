import React from 'react';
import { Paper, Button, Box, TextField, Card } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { DataGrid } from '@mui/x-data-grid';
import './index.css';

const Index = (props) => {
    const { imageUpload, name } = props
    const columns = [
        { field: 'id', headerName: 'Id', width: 120 },

        { field: 'OrderDate', headerName: 'Order Date', width: 150 },
        { field: 'Ordertype', headerName: 'Order Type', width: 130 },
        {
            field: 'UnitPrice',
            headerName: 'Unit Price',
            type: 'number',
            width: 130,
        },
        {
            field: 'Qty',
            headerName: 'Qty',
            width: 130,
        },
        {
            field: 'Discount',
            headerName: 'Discount',
            type: 'number',
            width: 130,
        },
        {
            field: 'OrderTotal',
            headerName: 'Order Total',
            width: 120,
        },
        {
            field: 'Status',
            headerName: 'Status',
            width: 100,
            renderCell: (params) => (
                <span
                    className="badge rounded-pill"
                    style={{
                        color: params.value === 'Completed' ? 'green' : 'black',
                        backgroundColor: params.value === 'Completed' ? '#DEEEE8' : '#FFF2E2'
                    }}
                >
                    {params.value}
                </span>
            ),
        },
    ];

    const rows = [
        { id: 1, OrderDate: '12 Aug 2022- 12:25', Ordertype: 'Home Delivery', UnitPrice: "25,0000.00", Qty: 2, Discount: 0.00, TotalValue: '50,000.00', Action: 'Publish', Status: 'Completed' },
    ];


    return (
        <div class="container-fluid" style={{ backgroundColor: '#F6F7FB', paddingTop: '15px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span><strong>{name} Date Added</strong>  12 Sep 2022-12:55</span>
                <span><strong>Product URL</strong> 1nancystore.com/polot-shirt  <i class="bi bi-copy " style={{ color: '#5570F1' }}></i></span>
                <Box
                    sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    <Button sx={{ borderRadius: '10px', backgroundColor: 'black', color: 'white', textTransform: 'none' }} size="small">
                        Edit product <i class="bi bi-chevron-down" style={{ fontSize: '1em', marginRight: '4px', color: 'white' }}></i>
                    </Button>
                    <Button sx={{ borderRadius: '10px', backgroundColor: '#CC5F5F', color: 'white', textTransform: 'none' }} size="small">
                        Upublish product
                    </Button>
                </Box>
            </div>

            <div class="row ">
                <div class="col-12 col-md-4 col-lg-auto mb-3">
                    <div class="card h-100 p-3" style={{ width: '170px' }}>
                        <div className='d-flex justify-content-center'><img src={imageUpload} alt="" style={{ width: '100px', height: 'auto' }} /></div>
                    </div>
                </div>

                <div class="col-12 col-md-8 col-lg-3 mb-3">
                    <Card
                        className='card-box'
                        elevation={0}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box>
                                    <span style={{ color: 'gray', fontSize: '10px' }}>Last order <strong>12 sep 2022</strong></span>
                                </Box>
                                <span
                                    className="badge rounded-pill"
                                    style={{
                                        backgroundColor: '#DEEEE8',
                                        color: 'green'
                                    }}
                                >
                                    Published
                                </span>

                            </Box>
                            <Box
                                className='custm-flex-container mt-5'
                            >
                                <Box>
                                    <h6 className='font_Size gray_color' >Price</h6>
                                    <span style={{ color: 'black', fontSize: '15px' }}>$25,000.00</span>
                                </Box>
                                <Box>
                                    <h6 className='font_Size gray_color'>In stock</h6>
                                    <span style={{ color: 'black', fontSize: '15px' }}>20</span>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </div>

                <div class="col-12 col-md-6 col-lg-3 mb-3">
                    <Card
                        className='card-box'
                        elevation={0}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box
                                    className='icon_Bacg_Color backgroundColor'
                                >
                                    <i class="bi bi-pie-chart" style={{ color: '#5570F1' }}></i>
                                </Box>
                                <Box>
                                    <span style={{ color: 'gray', fontSize: '10px' }}>All-time <i class="bi bi-chevron-down" style={{ fontSize: '1em', marginRight: '4px' }}></i></span>
                                </Box>
                            </Box>
                            <Box
                                className='custm-flex-container'
                            >
                                <Box>
                                    <h6 className='font_Size'>Total Order</h6>
                                    <span style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>$50,000.00</span>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </div>

                <div class="col-12 col-md-6 col-lg-3 mb-3">
                    <Card
                        className='card-box'
                        elevation={0}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box
                                    className='icon_Bacg_Color'
                                >
                                    <i class="bi bi-eye"></i>
                                </Box>
                                <Box>
                                    <span style={{ color: 'gray', fontSize: '10px' }}>All-time <i class="bi bi-chevron-down" style={{ fontSize: '1em', marginRight: '4px' }}></i></span>
                                </Box>
                            </Box>
                            <Box
                                className='custm-flex-container'

                            >
                                <Box>
                                    <h6 className='font_Size'>Views</h6>
                                    <span style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>1,200</span>
                                </Box>
                                <Box>
                                    <h6 className='font_Size gray_color'>Favroit</h6>
                                    <span style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>23</span>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </div>

            </div>

            <div className="row mb-2">
                <div className="col-md-6 mb-3 mb-md-0 ">
                    <Card
                        className="h-100"
                        elevation={0}
                        style={{
                            height: '150px',
                            padding: '15px',
                            borderRadius: '12px',
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box

                                    className='icon_Bacg_Color'
                                >
                                    <LockOutlinedIcon fontSize='small' />
                                </Box>
                                <Box>
                                    <span className='font_Size gray_color'>All-time <i class="bi bi-chevron-down" style={{ fontSize: '1em', marginRight: '4px' }}></i></span>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <h6 className='font_Size'>All order</h6>
                                    <span >1</span>
                                </Box>
                                <Box
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <h6 className='font_Size'>Pending</h6>
                                    <span >0 </span>
                                </Box>
                                <Box
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <h6 className='font_Size'>Completed</h6>
                                    <span >1</span>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card
                        className="h-100"
                        elevation={0}
                        style={{
                            height: '150px',
                            padding: '15px',
                            borderRadius: '12px',
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box

                                    className='icon_Bacg_Color'
                                >
                                    <LockOutlinedIcon fontSize='small' />
                                </Box>
                                <Box>
                                    <span className='font_Size gray_color'>All-time <i class="bi bi-chevron-down" style={{ fontSize: '1em', marginRight: '4px' }}></i></span>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}
                            >
                                <Box>
                                    <h6 className='font_Size'>Canceled</h6>
                                    <span style={{ color: 'black' }}>0</span>
                                </Box>
                                <Box>
                                    <h6 className='font_Size gray_color'>Return</h6>
                                    <span style={{ color: 'black' }}>0</span>
                                </Box>
                                <Box>
                                    <h6 className='font_Size gray_color'>Damage</h6>
                                    <span style={{ color: 'black' }}>0</span>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </div>
            </div>

            <div>
                <Paper sx={{ height: 'auto', width: '100%', p: 1, mt: 2 }}>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 2, gap: 2, p: 2 }}>
                        <Box>
                            <h6>Purchases</h6>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                            <TextField
                                label="Search..."
                                size="small"
                                variant="outlined"
                                sx={{
                                    backgroundColor: '#F8F9FA', minWidth: { xs: '100%', sm: 'auto' },
                                    '& .MuiInputBase-root': {
                                        height: '30px',
                                        padding: '0 14px',
                                    },
                                    '& .MuiInputBase-input': {
                                        padding: '8px 0',
                                    },
                                    '& .MuiInputLabel-root': {
                                        top: '-5px',
                                    }
                                }}
                            />
                            <button className="btn btn-outline-secondary btn-sm d-flex align-items-center" style={{ fontSize: '12px', height: '30px', minWidth: 'auto', color: '#333', borderColor: '#c4c4c4' }}>
                                <i class="bi bi-funnel" style={{ fontSize: '1em', marginRight: '4px' }}></i> Filter
                            </button>
                            <button className="btn btn-outline-secondary btn-sm d-flex align-items-center" style={{ fontSize: '12px', height: '30px', minWidth: 'auto', color: '#333', borderColor: '#c4c4c4' }}>
                                <i class="bi bi-calendar-day" style={{ fontSize: '1em', marginRight: '4px' }}></i> Filter
                            </button>
                            <button className="btn btn-outline-secondary btn-sm" style={{ fontSize: '12px', height: '30px', minWidth: 'auto', color: '#333', borderColor: '#c4c4c4' }}>
                                <i class="bi bi-send" style={{ fontSize: '1em', marginRight: '4px' }}></i>   Share
                            </button>
                            <button className="btn btn-outline-secondary btn-sm" style={{ fontSize: '12px', height: '30px', minWidth: 'auto', color: '#333', borderColor: '#c4c4c4' }}>
                                Bulk Action<i class="bi bi-chevron-down" style={{ fontSize: '1em', marginRight: '4px' }}></i>
                            </button>
                        </Box>
                    </Box>


                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
        </div>

    );
};

export default Index;




