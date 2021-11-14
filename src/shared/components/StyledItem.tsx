import { styled } from '../../theme';
import { Paper } from '@mui/material';

const StyledItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  elevation: 10,
  variant: 'outlined',
}));

export default StyledItem;
