import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';

export default function HintPanel({ open, hints }: { open: boolean; hints: string[] }) {
  const [actualOpen, setOpen] = useState(open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={actualOpen}
      onClose={handleClose}
      aria-labelledby="hint-dialog-title"
      aria-describedby="hint-dialog-description">
      <DialogTitle id="hint-dialog-title">Hints</DialogTitle>
      <DialogContent>
        <DialogContentText id="hint-dialog-description">{hints[1]}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
