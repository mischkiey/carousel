// Hooks & Methods
import { makeStyles } from '@material-ui/core/styles';

// Types
import { BeltProps } from './Belt.d';

export const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },

  wrapper: {
    flex: 1,
    height: 'fit-content',
    overflow: 'visible',
    width: '100%',
    transform: ({ direction, transition }: BeltProps ) => {
      if (!transition) {
        return `translateX(-100%)`;
      }

      if (direction === 'prev') {
        return `translateX(calc(2 * (-100%)))`;
      }

      return `translateX(0%)`;
    },
    transition: ({ transition }: BeltProps) => transition
      ? 'none'
      : 'transform 1s ease',
  },
});