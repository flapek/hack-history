import {
  IconButton,
  Container,
  Divider,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Grid,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 240;

export default function BaseGameScreen({ children }: { children: React.ReactNode }) {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const redirect = () => {
    history.goBack();
  };

  const actions = [
    {
      icon: <ArrowBackIosNewSharpIcon />,
      name: 'Back',
      onClick: () => {
        redirect();
      },
    },
    {
      icon: <InfoIcon />,
      name: 'About',
      onClick: () => {
        handleDrawerOpen();
      },
    },
  ];

  return (
    <Container maxWidth={false}>
      {children}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={openDrawer}>
        <Grid>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Divider />
      </Drawer>
      <SpeedDial
        ariaLabel="Game helper"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleOpen}
        onOpen={handleOpen}
        open={open}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Container>
  );
}
