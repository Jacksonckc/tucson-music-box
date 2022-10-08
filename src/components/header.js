import Link from 'next/link';
import style from './comps.module.scss';
import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import AdbIcon from '@mui/icons-material/Adb';
import DiamondIcon from '@mui/icons-material/Diamond';
import { useRouter } from 'next/router';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import { selectProducts } from '../slices/basketSlice';

let pages;
const productsLink = 
<div className={style.navcontainer}>
  <Link href='/shop'><a className={style.links}> Gems and Minerals</a></Link>
  <br></br>
            <Link href='/shop'>
            <a className={style.links}>
                Fossils and Specimen
              </a>
            </Link>
            <br></br>
            <Link href='/'>
            <a className={style.links}>
                Lamps and Trees
              </a>
            </Link>
            <br></br>
            
            <Link href='/'>
              <a className={style.links}>
                Keepsake Boxes
              </a>
            </Link>
            <br></br>
            
            <Link href='/'>
              <a className={style.links}>
                Accessories 
              </a>
            </Link>
            <br></br>
            
          <Link href='/profile'>
            <a>Login </a>
          </Link>
          </div>;

const pagesLoggedOut = [productsLink];
const pagesLoggedIn = [productsLink, 'My Orders'];

export default function ButtonAppBar() {
  const router = useRouter();
  const products = useSelector(selectProducts);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  if (true) {
    pages = pagesLoggedIn;
  } else {
    pages = pagesLoggedOut;
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    if (e.target.textContent == 'Products') {
      router.push('/shop');
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar className={style.header}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/'>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <DiamondIcon />
              </Button>
            </Link>

            <Link href='/contact'>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Contact
              </Button>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
