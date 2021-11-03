import { Grid, Paper, Typography } from '@mui/material';
import { BaseGameScreen } from '../shared/components';
import { encryptAndDecrypt } from '../shared/functions';
import { useAppSelector } from '../app';
import { getUsername } from '../features/user/userSlice';
import { styled } from '../theme';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Atbash() {
  let username = useAppSelector(getUsername);
  let decryptedUsername = username.encrypt('ATBASH');

  return (
    <BaseGameScreen>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>{encryptAndDecrypt('xs=8')}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Typography>{decryptedUsername}</Typography>
        </Grid>
      </Grid>
    </BaseGameScreen>
  );
}
