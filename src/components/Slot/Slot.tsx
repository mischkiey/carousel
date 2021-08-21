// Hooks & Methods
import { useStyles } from './styles';
import clsx from 'clsx';

// Components
import { Grid } from '@material-ui/core';

export default function Slot({ children, ...props }) {
  const { root, border } = useStyles(props);

  return (
    <Grid
      container
      className={clsx(
        root,
        'slot-root',
        'slot-margin',
        border,
      )}
    >
      {children}
    </Grid>
  );
}