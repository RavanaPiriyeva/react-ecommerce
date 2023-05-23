import React, { useContext } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Paper, CircularProgress } from "@mui/material";
import './adminOrder.css'
import { OrderContext } from '../../Components/Order/OrderContext';
import AdminSidebar from '../../Components/AdminSideBar/AdminSidebar';
const AdminOrder = () => {
    const { orders, addOrder } = useContext(OrderContext);

    return (
        <div className="adminorder">
            <AdminSidebar />
            <TableContainer
                sx={{ width: "80%", margin: "0 auto 30px" }}
                component={Paper}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Addres</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Count</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>


                            {/* <TableCell sx={{ fontWeight: "bold" }}>Edit button</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Delete button</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders &&
                            orders.map((row , index) => (
                                <TableRow key={index} >
                                    {/* <TableCell sx={{ fontWeight: "bold" }}>{row.id}</TableCell> */}
                                    <TableCell>{index}</TableCell>
                                    <TableCell>{row.user.name}</TableCell>
                                    <TableCell>{row.user.email}</TableCell>
                                    <TableCell>{row.address}</TableCell>
                                    <TableCell>{row.count}</TableCell>
                                    <TableCell>${row.total}</TableCell>

                                    {/* <TableCell>
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
                                    </TableCell> */}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AdminOrder
