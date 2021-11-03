import { Container, Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { GameTimeline } from '../features/timeline';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import { DialogUser } from '../features/user';

export default function Game() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const actions = [
    {
      icon: <EditIcon />,
      name: 'Change username',
      onClick: () => {
        handleOpen();
        handleOpenDialog();
      },
    },
    {
      icon: <InfoIcon />,
      name: 'About',
      onClick: () => {
        handleOpen();
        handleOpenDialog();
      },
    },
  ];

  return (
    <Box>
      <Container disableGutters fixed>
        <GameTimeline></GameTimeline>
      </Container>
      <DialogUser
        open={openDialog}
        setOpen={handleOpenDialog}
      />
      <SpeedDial
        ariaLabel="Game information and options"
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
    </Box>
  );
}
