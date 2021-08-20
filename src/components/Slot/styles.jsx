import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  return {
    root: {
      flex: '0 0 auto',
      height: 'auto',
      width: '100%',
      order: ({ order }) => order,
    },
  }
});