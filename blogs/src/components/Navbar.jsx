import React from 'react';
import { blueGrey, brown } from '@mui/material/colors';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const primary = brown[300];
  const buttonColor = brown[200]; 

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: primary }} 
      >
        <Toolbar>
            <Link to='/'>
            <Button
            sx={{
              color: 'Black', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: brown[100],
              },
            }}
          >
            Homes
          </Button>
            </Link>
            <Link to='/Add'>
            <Button
            sx={{
              color: 'Black', 
              backgroundColor: buttonColor, 
              '&:hover': {
                backgroundColor: brown[100],
              },
            }}
          >
            Add New Blogs
          </Button>

            </Link>
         

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;