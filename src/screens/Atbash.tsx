import { Grid, Paper, styled } from '@mui/material';
import { BaseGameScreen } from '../shared/components';
import { encryptAndDecrypt } from '../shared/functions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from '../app';
import { getUsername } from '../features/user/userSlice';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Atbash() {
  let username = useAppSelector(getUsername);
  let splitedUsername = encryptAndDecrypt(username).split('');
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
          <TableContainer component={Item}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {splitedUsername.map((letter, idx) => (
                    <TableCell key={idx}>{letter}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {splitedUsername.map((_, idx) => (
                    <TableCell key={idx} component="th" scope="row"></TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </BaseGameScreen>
  );
}
