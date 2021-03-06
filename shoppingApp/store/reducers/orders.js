import { ADD_ORDER } from "../actions/orders";
import Order from "../../models/order";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      // using new date as a dummy unique id
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date()
      );
      return {
          ...state,
        //   concat adds a new item to an array and returns new array with that item. updates in immutable way. 
          orders: state.orders.concat(newOrder)
      }
  }

  return state;
};

// import { ADD_ORDER } from '../actions/orders';
// import Order from '../../models/order';

// const initialState = {
//   orders: []
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ORDER:
//       const newOrder = new Order(
//         new Date().toString(),
//         action.orderData.items,
//         action.orderData.amount,
//         new Date()
//       );
//       return {
//         ...state,
//         orders: state.orders.concat(newOrder)
//       };
//   }

//   return state;
// };
