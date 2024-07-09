import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import TotalItemsCounter from '../Components/TotalItemsCounter'; // Import TotalItemsCounter component

const drawerWidth = 240;

const DefaultLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            POS
          </Typography>
          <TotalItemsCounter /> {/* Display total items counter */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', bgcolor: 'background.default' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[
              { text: 'Home', icon: <HomeIcon />, to: '/' },
              { text: 'Items', icon: <InventoryIcon />, to: '/items' },
              { text: 'Bills', icon: <ReceiptIcon />, to: '/bills' },
              { text: 'Customers', icon: <PeopleIcon />, to: '/customers' },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.to}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: 'text.primary' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
