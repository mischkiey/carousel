// Hooks & Methods
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: 'fit-content',

    '& .controls-container': {
      marginTop: '1em',
    },
  },

  wrapper: {
    flex: 1,
    position: 'relative',
    width: '52.5em',
    maxWidth: 'fit-content',
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