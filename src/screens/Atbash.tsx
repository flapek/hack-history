import { Paper, Typography, Box, TextField, Button } from '@mui/material';
import { BaseGameScreen } from '../shared/components';
import { useAppSelector } from '../app';
import { getUsername } from '../features/user/userSlice';
import { styled } from '../theme';
import { Cipher } from '../shared/functions';
import { translation } from '../features/atbash';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  elevation: 10,
  variant: 'outlined',
}));

export default function Atbash() {
  let username = useAppSelector(getUsername);
  const [input, setInput] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  // let decryptedUsername = Cipher.encrypt('ATBASH', username);
  let decryptedUsername = Cipher.encrypt('ATBASH', username);

  const handleClick = () => {
    input.trim().toLocaleLowerCase() === username
      ? enqueueSnackbar('This is a success message!', {
          variant: 'success',
        })
      : enqueueSnackbar('This is a error message!', {
          variant: 'error',
        });
  };

  function onChange(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInput(e.currentTarget.value);
  }

  return (
    <BaseGameScreen history={translation.history} hints={translation.hints}>
      <Box sx={{ flexGrow: 1 }}>
        <Item>
          <Typography variant="h4">Decrypt the encoded text</Typography>
          <Typography variant="body1">Used alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ</Typography>
        </Item>
        <Item>
          <Typography>{decryptedUsername}</Typography>
          <TextField size="small" onChange={onChange} />
          <Button onClick={handleClick} variant="outlined">
            Check
          </Button>
        </Item>
      </Box>
    </BaseGameScreen>
  );
}
