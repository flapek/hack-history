import { Container, Box, SpeedDial, SpeedDialIcon, SpeedDialAction, Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions, TextField } from "@mui/material";
import { GameTimeline } from "../features/timeline";
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";


export default function Game() {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const actions = [
    { icon: <EditIcon  />, name: 'Change username', onClick: ()=>{handleOpen()}},
    { icon: <InfoIcon />, name: 'About', onClick: ()=>{handleOpen()}},
  ];

  return (
  <Box>
    <Container disableGutters fixed>
      <GameTimeline></GameTimeline>
    </Container>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        // onClose={handleClose}
        // onOpen={handleOpen}
        // open={open}
      >
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
