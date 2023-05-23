import React, { useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useMutation, useQuery, useQueryClient } from "react-query";
//import { queryClient } from '../..';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Paper, CircularProgress } from "@mui/material";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './adminProduct.css'
import Draggable from 'react-draggable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AdminSidebar from '../../Components/AdminSideBar/AdminSidebar';
const AdminProduct = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 3
    };

    function PaperComponent(props) {
        return (
            <Draggable
                handle="#draggable-dialog-title"
                cancel={'[class*="MuiDialogContent-root"]'}
            >
                <Paper {...props} />
            </Draggable>
        );
    }

    const [editTitle, seteditTitle] = useState('');
    const [editPrice, seteditPrice] = useState(0);
    const [editId, seteditId] = useState(0)

    const [addTitle, setaddTitle] = useState('');
    const [addPrice, setaddPrice] = useState(0);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openadd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);


    const [openDelete, setOpenDelete] = React.useState(false);
    const handleClickOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
    const [deletId, setdeletId] = useState(0)


    const { data, isLoading, error, refetch } = useQuery("adminproductData", () => {
        return axios.get('https://fakestoreapi.com/products');
    })

    const mutation = useMutation({
        mutationFn: async (params) => {
            const { data } = await axios.put('https://fakestoreapi.com/products/' + editId, params);
            return data
        },
        onSuccess: (res) => {
            console.log('Success!!');
            refetch();
        },
        onError: () => {
            console.log('Error!!');

        }
    })

    const mutationadd = useMutation({
        mutationFn: async (params) => {
            const { data } = await axios.post('https://fakestoreapi.com/products', params);
            return data
        },
        onSuccess: (res) => {
            console.log('Success!!');
            refetch();
        },
        onError: () => {
            console.log('Error!!');

        }
    })

    const mutationdelete = useMutation({
        mutationFn: async (params) => {
            const { data } = await axios.delete('https://fakestoreapi.com/products/' + deletId);
            return data
        },
        onSuccess: (res) => {
            console.log('Success!!');
            refetch();
        },
        onError: () => {
            console.log('Error!!');

        }
    })
    const edit = (item) => {
        handleOpen()
        seteditTitle(item.title)
        seteditPrice(item.price)
        seteditId(item.id)

    }
    const editSave = () => {
        mutation.mutate({ title: editTitle, price: editPrice })
        handleClose()
    }

    const add = () => {
        handleOpenAdd()
    }
    const addSave = () => {
        mutationadd.mutate({ title: addTitle, price: addPrice })
        handleCloseAdd()

    }

    const delet = (id) => {
        setdeletId(id)
        handleClickOpenDelete()
    }
    const deletOk = () => {
        handleCloseDelete()
        mutationdelete.mutate()
    }
    return (
        <div className='adminproduct'>
            <AdminSidebar/>
            <Button
                variant="contained"
                color="success"
                sx={{ margin: "100px 150px 30px" }}
                onClick={add}
            >
                <AddIcon />    Add data
      </Button>

            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move', display: "flex", alignItems: "center", color: "red" }} id="draggable-dialog-title">
                    <div>Warning!!!</div> <HighlightOffIcon />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this product?
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseDelete}>
                        Cancel
          </Button>
                    <Button variant="contained" onClick={deletOk}>Delete</Button>
                </DialogActions>
            </Dialog>

            <Modal
                open={openadd}
                onClose={handleCloseAdd}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form action="">
                        <div className="input-item">
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text" placeholder="Title"  onChange={(e) => setaddTitle(e.target.value)} />
                        </div>
                        <div className="input-item">
                            <label htmlFor="price">Price</label>
                            <input id="price" type="text" placeholder="Price"  onChange={(e) => setaddPrice(e.target.value)} />
                        </div>
                    </form>
                    <Button variant="contained" onClick={addSave}> Save </Button>
                </Box>
            </Modal>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form action="">
                        <div className="input-item">
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text" placeholder="Title"  value={editTitle} onChange={(e) => seteditTitle(e.target.value)} />
                        </div>
                        <div className="input-item">
                            <label htmlFor="price">Price</label>
                            <input id="price" type="text" placeholder="Price"  value={editPrice} onChange={(e) => seteditPrice(e.target.value)} />
                        </div>
                    </form>
                    <Button variant="contained" onClick={editSave}> Save </Button>
                </Box>
            </Modal>

            <TableContainer
                sx={{ width: "80%", margin: "0 auto 30px" }}
                component={Paper}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Edit button</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Delete button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data &&
                            data?.data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ fontWeight: "bold" }}>{row.id}</TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>${row.price}</TableCell>
                                    <TableCell>
                                        <img
                                            src={row.image}
                                            alt={row.title}
                                            width={50}
                                            height={50}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" onClick={() => edit(row)}><EditIcon />Edit</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => delet(row.id)}
                                        >
                                            <DeleteIcon />  Delete
                      </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AdminProduct
