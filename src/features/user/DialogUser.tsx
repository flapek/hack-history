import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../../app';
import { getUsername } from './userSlice';

export default function DialogUser({
  open,
  setOpen,
  rename,
}: {
  open: boolean;
  setOpen: () => void;
  rename: () => void;
}) {
  const [username, setUsername] = useState(useAppSelector(getUsername));

  function onChange(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setUsername(e.currentTarget.value);
  }

  return (
    <Dialog open={open} onClose={setOpen}>
      <DialogTitle>Rename</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="Username"
          value={username}
          type="text"
          fullWidth
          variant="standard"
          onChange={onChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={setOpen}>Cancel</Button>
        <Button onClick={rename}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}
