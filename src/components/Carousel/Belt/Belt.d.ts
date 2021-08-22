import { CarouselConfig } from '../Carousel.d';

export interface BeltProps extends CarouselConfig {
  children: JSX.Element[];
  calcOrder: (number) => number;
}