import moment from 'moment'

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  // getter to convert object into readable date
  // can access this readableDate with any instance

//   using the moment package becuase android doesn't support to the toLocaleDateString format


  get readableDate() {
    // return this.date.toLocaleDateString("en-US", {
    //   year: 'numeric',
    //   month: "long",
    //   day: "numeric",
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });

    return moment(this.date).format('MMMM Do YYYY, hh:mm')
  }


}



export default Order;
