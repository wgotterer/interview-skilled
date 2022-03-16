class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  // getter to convert object into readable date
  // can access this readableDate with any instance

  get readableDate() {
    return this.date.toLocaleDateString("en-US", {
      year: 'numeric',
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

export default Order;
