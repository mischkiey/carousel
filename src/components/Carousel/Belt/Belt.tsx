// Hooks & Methods
import { useStyles } from './styles';
import clsx from 'clsx';

// Components
import { Grid } from '@material-ui/core';
import Slot from './Slot/Slot';

// Types
import { BeltProps } from './Belt.d';

export default function Belt({ children, ...props }: BeltProps) {
  const { root, wrapper } = useStyles(props);

  const { calcOrder, position } = props;

  function renderSlots(children: JSX.Element[]) {
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
        )}
      >
        {renderSlots(children)}
      </Grid>
    </Grid>
  );
}