// Hooks & Methods
import { useStyles } from './styles';
import clsx from 'clsx';

// Components
import { Grid, Typography } from '@material-ui/core';

export default function Pagination(props) {
  const { 
    root,
    sliderContainer,
    slider,
    currentPage,
    page,
  } = useStyles(props);

  const { position, length } = props;

  return (
    <Grid
      container
      alignItems="center"
      className={root}
    >
      <Typography
        className={clsx(
          currentPage,
          page,
        )}
      >
        {position + 1 < 10
          ? `0${position + 1}`
          : position + 1
        }
      </Typography>
      <Grid
        container
        alignItems="center"
        className={sliderContainer}
      >
        <Grid
          container
          className={slider}
        >
        </Grid>
      </Grid>
      <Typography
        className={page}
      >
        {length < 10
          ? `0${length}`
          : length
        }
      </Typography>
    </Grid>
  );
}