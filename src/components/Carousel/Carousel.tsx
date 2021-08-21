// // Hooks & Methods
// import { useStyles } from './styles';
// import clsx from 'clsx';
// import { useState } from 'react';

// // Components
// import { Grid, IconButton } from '@material-ui/core';
// import Belt from './Belt';
// import Pagination from './Pagination';

// // Images & SVGs
// import { ReactComponent as Previous } from './images/carousel/previous.svg';
// import { ReactComponent as Next } from './images/carousel/next.svg';

// // Credits to: https://codesandbox.io/s/carousel-from-scratch-y2ony?file=/src/index.js
// export default function Carousel({ children, ...props }) {
//   const { 
//     root,
//     wrapper,
//     controlsContainer,
//     buttonsContainer,
//     button,
//   } = useStyles({children, ...props});

//   const [config, setConfig] = useState({
//     direction: '',
//     position: 0,
//     transition: false,

//     // Yet to be implemented
//     autoplay: false,
//     timerId: null,
//   });

//   function slide(direction, position) {
//     setConfig(config => ({
//       ...config,
//       direction,
//       position,
//       transition: true,
//     }));

//     setTimeout(() => {
//       setConfig(config => ({
//         ...config,
//         transition: false,
//       }));
//     }, 500);
//   }

//   /**
//    * Calculates the flex order of a Slot component
//    * to simulate a carousel/looping effect.
//    * Called for all Slot components (see Belt component).
//    * A Slot component with an [array] index
//    * that matches the current position
//    * gets an order value of 0.
//    * The order values of everything to this Slot component's right
//    * gets incremented by 1
//    * and vice versa.
//    */
//   function calcOrder(index) {
//     const { position } = config;

//     if ((index - position) < 0) {
//       return children.length - Math.abs(index - position);
//     }

//     return index - position;
//   }

//   function handlePrev() {
//     const { position } = config;

//     slide('prev', position === 0
//       ? children.length - 1
//       : position - 1,
//     );
//   }

//   function handleNext() {  
//     const { position } = config;

//     slide('next', position === children.length - 1
//       ? 0
//       : position + 1,
//     );
//   }

//   return (
//     <Grid
//       container
//       direction="column"
//       alignItems="center"
//       justify="center"
//       className={clsx(
//         root,
//         'carousel-root',
//         'carousel-margin',
//       )}
//     >
//       <Grid
//        container
//        direction="column"
//        alignItems="center"
//        justify="space-between"
//        className={clsx(
//          wrapper,
//          'carousel-wrapper',
//        )}
//       >
//         <Belt
//           {...config}
//           calcOrder={calcOrder}
//         >
//           {children}
//         </Belt>
//         <Grid
//           container
//           alignItems="center"
//           justify="space-between"
//           className={clsx(
//             controlsContainer,
//             'controls-container',
//           )}
//         >
//           <Grid
//             container
//             className={buttonsContainer}
//           >
//             <IconButton
//               onClick={handlePrev}
//               className={button}
//             >
//               <Previous
//                 viewBox="0 0 20 38"
//                 height="2.38em"
//                 width="1.25em"
//               />
//             </IconButton>
//             <IconButton
//               onClick={handleNext}
//               className={button}
//             >
//               <Next
//                 viewBox="0 0 20 38"
//                 height="2.38em"
//                 width="1.25em"
//               />
//             </IconButton>
//           </Grid>
//           <Pagination
//             {...config}
//             length={children.length}
//           />
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

export {};