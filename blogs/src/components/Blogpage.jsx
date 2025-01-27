import { Button, TextField } from '@mui/material'
import React from 'react'
const Blogpage = () => {
  return (
    <div>
      <h1>Add Detials</h1>
      <TextField label="Blog Name" variant="filled" /><br /><br />
      <TextField label="Description" variant="filled" /><br /><br />
      <TextField label="Author Name" variant="filled" /><br /><br />
      <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Blogpage