// Hooks & Methods
import { useStyles } from './styles';
import clsx from 'clsx';

// Components
import { Grid } from '@material-ui/core';

// Types
import { SlotProps } from './Slot.d';

export default function Slot({ children, ...props }: SlotProps) {
  const { root } = useStyles(props);

  return (
    <Grid
      container
      className={clsx(
        root,
        'slot-root',
        'slot-margin',
      )}
    >
      {children}
    </Grid>
  );
}