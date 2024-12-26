import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Paper, Box, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import polo from '../../../Assets/polo_Tshirt.jpg';
import iphone12 from '../../../Assets/iphone12.webp';
import iphone13 from '../../../Assets/iphon13.jpg';

const Index = (props) => {
    const { setToggleBtn } = props
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'Productname',
            headerName: 'Product Name',
            width: 160,
            renderCell: (params) => (
                <Box display="flex" alignItems="center" gap={1}>
                    <img
                        src={params.row.ProductImage}
                        alt={params.value}
                        style={{ width: 24, height: 24, borderRadius: '10%' }}
                    />
                    {params.value}
                </Box>
            ),
        },
        { field: 'category', headerName: 'Category', width: 130 },
        {
            field: 'UnitPrice',
            headerName: 'Unit Price',
            type: 'number',
            width: 150,
        },
        {
            field: 'InStock',
            headerName: 'In-Stock',
            width: 150,
        },
        {
            field: 'Discount',
            headerName: 'Discount',
            type: 'number',
            width: 150,
        },
        {
            field: 'TotalValue',
            headerName: 'Total Value',
            width: 150,
        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <span
                    className="badge rounded-pill"
                    style={{
                        backgroundColor: '#5F6366'
                    }}
                >
                    {params.value}
                </span>
            ),
        },
        {
            field: 'Status',
            headerName: 'Status',
            width: 150,
            renderCell: (params) => (
                <span
                    className="badge rounded-pill"
                    style={{
                        color: params.value === 'Published' ? '#5570F1' : 'black',
                        backgroundColor: params.value === 'Published' ? '#E2E6FF' : '#FFF2E2'
                    }}
                >
                    {params.value}
                </span>
            ),
        },
    ];

    const rows = [
        { id: 1, category: 'Gadgets', ProductImage: iphone13, Productname: 'iPhone 13 Pro', UnitPrice: 35, InStock: 4, Discount: 0.00, TotalValue: '50,000.00', Action: 'Publish', Status: 'Published' },
        { id: 2, category: 'Gadgets', ProductImage: iphone12, Productname: 'iPhone 12 pro', UnitPrice: 42, InStock: 12, Discount: 0.00, TotalValue: '50,000.00', Action: 'Publish', Status: 'Published' },
        { id: 3, category: 'Gadgets', ProductImage: polo, Productname: 'Polo T-shirt', UnitPrice: 45, InStock: 300, Discount: 0.00, TotalValue: '50,000.00', Action: 'Publish', Status: 'Published' },
        { id: 4, category: 'Fashion', ProductImage: polo, Productname: 'Polo T-shirt', UnitPrice: 16, InStock: 'Out of Stock', Discount: 0.00, TotalValue: '0.00', Action: 'Publish', Status: 'Published' },
        { id: 5, category: 'Gadgets', ProductImage: polo, Productname: 'Polo T-shirt', UnitPrice: 0, InStock: 'Out of Stock', Discount: 0.00, TotalValue: '0.00', Action: 'UnPublish', Status: 'UnPublished' },
        { id: 6, category: 'Gadgets', ProductImage: iphone13, Productname: 'iPhone 13 pro', UnitPrice: 150, InStock: 'Out of Stock', Discount: 0.00, TotalValue: '50,000.00', Action: 'UnPublish', Status: 'UnPublished' },
        { id: 7, category: 'Gadgets', ProductImage: iphone12, Productname: 'iPhone 12 pro', UnitPrice: 44, InStock: 30, Discount: 0.00, TotalValue: '50,000.00', Action: 'Publish', Status: 'Published' },
        { id: 8, category: 'Fashion', ProductImage: iphone13, Productname: 'iPhone 13 pro', UnitPrice: 36, InStock: 66, Discount: 0.00, TotalValue: '50,000.00', Action: 'Publish', Status: 'Published' },
        { id: 9, category: 'Fashion', ProductImage: iphone12, Productname: 'iPhone 12 pro', UnitPrice: 65, InStock: 144, Discount: 0.00, TotalValue: '50,000.00', Action: 'Publish', Status: 'Published' },
        { id: 10, category: 'Gadgets', ProductImage: polo, Productname: 'Polo T-shirt', UnitPrice: 150, InStock: 'Out of Stock', Discount: 0.00, TotalValue: '50,000.00', Action: 'UnPublish', Status: 'UnPublished' },
    ];

    const handleAddNewItem = () => {
        setToggleBtn(true);
    }

    return (<>
        <div className="container-fluid" style={{ backgroundColor: '#F6F7FB', paddingTop: '10px' }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <Typography variant="h7">Inventory Summary</Typography>
                <Button onClick={handleAddNewItem} sx={{ backgroundColor: '#5570F1' }} size="sm"><AddIcon fontSize='small' />Add a new Product</Button>
            </div>

            <div className="row mb-2">
                <div className="col-md-6 mb-2 mb-md-0">
                    <Card
                        className="h-100"
                        elevation={0}
                        style={{
                            height: '150px',
                            backgroundColor: '#5570F1',
                            padding: '15px',
                            borderRadius: '12px',
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 30,
                                    height: 30,
                                    borderRadius: '30%',
                                    mb: 2,
                                    color: 'white'
                                }}
                            >
                                <FolderOpenOutlinedIcon />
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
                                    <h6 style={{ color: '#FFFFFF', fontSize: '10px' }}>All Product</h6>
                                    <span style={{ color: '#FFFFFF' }}>350</span>
                                </Box>
                                <Box
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <h6 style={{ color: '#FFFFFF', fontSize: '10px' }}>Active</h6>
                                    <span style={{ color: '#FFFFFF' }}>316 <span style={{ fontSize: '10px' }}>86%</span> </span>
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
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 30,
                                        height: 30,
                                        borderRadius: '30%',
                                        backgroundColor: '#FFF2E2',
                                        mb: 2,
                                    }}
                                >
                                    <PeopleOutlineOutlinedIcon />
                                </Box>
                                <Box>
                                    <span style={{ color: 'gray', fontSize: '10px' }}>This-week <i class="bi bi-chevron-down" style={{ fontSize: '1em', marginRight: '4px' }}></i></span>
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
                                    <h6 style={{ color: 'red', fontSize: '10px' }}>Low Stock Alert</h6>
                                    <span style={{ color: 'black' }}>23</span>
                                </Box>
                                <Box>
                                    <h6 style={{ color: 'gray', fontSize: '10px' }}>Expired</h6>
                                    <span style={{ color: 'black' }}>3</span>
                                </Box>
                                <Box>
                                    <h6 style={{ color: 'gray', fontSize: '10px' }}>1 Start Rating</h6>
                                    <span style={{ color: 'black' }}>2</span>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </div>
            </div>

            <div>
                <Paper sx={{ height: 'auto', width: '100%', p: 1 }}>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 2, p: 2, gap: 2 }}>
                        <Box>
                            <h6>Inventory Items</h6>
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
    </>
    );
};

export default Index;
