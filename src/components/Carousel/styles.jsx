// Hooks & Methods
import { makeStyles } from '@material-ui/core/styles';

// Images & SVGs
import Quotes from './images/carousel/quotes.svg';

export const useStyles = makeStyles({
  root: {
    width: 'fit-content',
  },

  wrapper: {
    flex: 1,
    position: 'relative',
    width: '52.5em',
    maxWidth: 'fit-content',

    '&::before': {
      backgroundImage: `url(${Quotes})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      top: 0,
      content: '""',
      height: '6.2em',
      left: 0,
      position: 'absolute',
      transform: 'translate(-50%, -67%)',
      width: '7.56em',
      zIndex: -1,
    },
  },

  controlsContainer: {
    flex: 1,
  },

  buttonsContainer: {
    flex: 1,
    columnGap: '5em',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    justifyContent: 'start',
    width: 'fit-content',
  },

  button: {
    '&.MuiIconButton-root': {
      borderRadius: '0',
      padding: '1px',
      maxWidth: 'fit-content',
    },

    '&.MuiIconButton-root:hover': {
      backgroundColor: 'transparent',
    },

    '&.MuiIconButton-root:hover svg path': {
      stroke: '#eb2127',
      strokeWidth: 3,
    },
  },
});