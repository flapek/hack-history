import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app';
import { getUsername, rename } from './userSlice';

export default function DialogUser({ open, setOpen }: { open: boolean; setOpen: () => void }) {
  const dispatch = useAppDispatch();
  const actualUsername = useAppSelector(getUsername);
  const [username, setUsername] = useState(actualUsername);

  function onChange(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setUsername(e.currentTarget.value);
  }

  function confirm() {
    dispatch(rename(username));
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
        <Button onClick={confirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}
