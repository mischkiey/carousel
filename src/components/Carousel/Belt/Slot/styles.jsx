import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flex: '0 0 auto',
    height: 'auto',
    minWidth: '20em',
    width: '100%',
    order: ({ order }) => order,

    '& > img': {
      height: 'auto',
      objectFit: 'cover',
      width: '100%',
    },
  },
});