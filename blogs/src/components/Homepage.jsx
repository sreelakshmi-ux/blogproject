import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';

const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <div>
            <h1>List</h1>
            <Table sx={{ minWidth: 650,  border: '1px solid black' }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell align="center" sx={{ border: '1px solid black',fontWeight:'bold' , fontSize:'20px' }}>Title</TableCell>
                        <TableCell align="center" sx={{ border: '1px solid black',fontWeight:'bold', fontSize:'20px' }}>Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="center" sx={{ border: '1px solid black' }}>{row.title}</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid black' }}>{row.body}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Homepage;