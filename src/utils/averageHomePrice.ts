import {Home} from '../reducers/homesReducer';
export const averageHomePrice = (homes:Home[])=>{
    if (homes.length) {
        let total: number = homes.reduce((a, b) => {
          return a + b.price;
        }, 0);
        return (total / homes.length).toFixed(0);
      } else {
        return "N/A";
      }
}