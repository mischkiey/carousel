import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flex: '0 0 auto',
    height: 'auto',
    width: '100%',
    order: ({ order }) => order,
  },
});