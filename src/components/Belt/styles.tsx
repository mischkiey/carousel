import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  return {
    root: {
      overflow: 'hidden',
    },

    wrapper: {
      flex: 1,
      height: 'fit-content',
      overflow: 'visible',
      width: '100%',
      transform: ({ direction, transition }) => {
        if (!transition) {
          return `translateX(-100%)`;
        }

        if (direction === 'prev') {
          return `translateX(calc(2 * (-100%)))`;
        }

        return `translateX(0%)`;
      },
      transition: ({ transition }) => transition
        ? 'none'
        : 'transform 1s ease',
    },
  }
});