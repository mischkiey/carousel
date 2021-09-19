// Hooks & Methods
import { useStyles } from './styles';

// Components
import { Grid } from '@material-ui/core';
import Carousel from '../Carousel';

// Images
import View1 from '../../assets/view-1.jpeg';
import View2 from '../../assets/view-2.jpeg';
import View3 from '../../assets/view-3.jpeg';


export default function App() {
  const { root } = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={root}
    >
      <Carousel>
        {[View1, View2, View3].map((view, idx) => (
          <img
            alt={`View ${idx}`}
            src={view}
          />
        ))}
      </Carousel>
    </Grid>
  );
}