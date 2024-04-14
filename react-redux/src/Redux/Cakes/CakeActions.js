import { BUY_CAKE } from "./CakeTypes";

export const buyCakes = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
