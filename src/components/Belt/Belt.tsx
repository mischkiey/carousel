// Hooks & Methods
import { useStyles } from './styles';
import clsx from 'clsx';

// Components
import { Grid } from '@material-ui/core';
import Slot from '../Slot/Slot';

export default function Belt({ children, ...props }) {
  const { 
    root,
    wrapper,
    border,
  } = useStyles(props);

  const { calcOrder, position } = props;

  function renderSlots(children) {
    return children.map((child, idx) => (
      <Slot
        key={idx}
        idx={idx}
        order={calcOrder(idx)}
        position={position}
      >
        {child}
      </Slot>
    ));
  }

  return (
    <Grid
      container
      className={root}
    >
      <Grid
        container
        alignItems="center"
        wrap="nowrap"
        className={clsx(
          wrapper,
          'belt-root',
          'belt-margin',
          border,
        )}
      >
        {renderSlots(children)}
      </Grid>
    </Grid>
  );
}