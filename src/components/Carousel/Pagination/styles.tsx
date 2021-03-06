// Hooks & Methods
import { makeStyles } from '@material-ui/core/styles';

// Types
import { PaginationProps } from './Pagination.d';

export const useStyles = makeStyles({
  root: {
    display: 'grid',
    flex: 1,
    gridTemplateColumns: 'auto 1fr auto',
    columnGap: '1em',
  },

  sliderContainer: {
    flex: 1,
    position: 'relative',

    '&::before': {
      border: '1px solid #676767',
      flex: 1,
      content: '""',
    },
  },

  slider: {
    border: '1px solid #eb2127',
    position: 'absolute',
    transform: ({ position }: PaginationProps) => `translateX(calc(${position} * 100%))`,
    transition: 'transform 1.5s ease',
    width: ({ length }: PaginationProps) => `calc(100%/${length})`,

    '&::before': {
      backgroundColor: '#eb2127',
      border: '1px solid #eb2127',
      borderRadius: '50%',
      content: '""',
      height: '0.25em',
      lineHeight: 1,
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '0.25em',
    },
  },

  currentPage: {
    color: '#eb2127',
  },

  page: {
    fontFamily: 'Roboto',
    fontSize: '1.25em',
    fontWeight: 700,
    letterSpacing: '0.5px',
    lineHeight: 1.54,
  },
});