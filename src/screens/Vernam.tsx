import { useAppSelector } from '../app';
import { translation } from '../features/vernam';
import { getHints } from '../features/vernam/vernamSlice';
import { BaseGameScreen, StyledItem } from '../shared/components';
import { Typography, TextField, Button } from '@mui/material';
import { getUsername } from '../features/user/userSlice';
import { Cipher } from '../shared/functions';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { CipherType } from '../shared/types';

export default function Vernam() {
  let username = useAppSelector(getUsername);
  let hints = useAppSelector(getHints);
  const [input, setInput] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  let decryptedUsername = Cipher.encrypt(CipherType.VERNAM, username);

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
    <BaseGameScreen history={translation.history} hints={hints}>
      <StyledItem>
        <Typography variant="h4">Decrypt the encoded text</Typography>
      </StyledItem>
      <StyledItem>
        <Typography>{decryptedUsername}</Typography>
        <TextField size="small" onChange={onChange} />
        <Button onClick={handleClick} variant="outlined">
          Check
        </Button>
      </StyledItem>
    </BaseGameScreen>
  );
}
