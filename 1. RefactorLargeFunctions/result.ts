// interface Order {
//   status: string;
//   paymentMethod: string;
//   amount: number;
// }

// function processOrder(order: Order): string {
//   if (order.status === "pending") {
//     return processPendingOrder(order);
//   } else if (order.status === "shipped") {
//     return "Order has already been shipped";
//   } else if (order.status === "cancelled") {
//     return "Order has been cancelled";
//   } else {
//     return "Unknown order status";
//   }
// }

// function processPendingOrder(order: Order): string {
//   if (order.paymentMethod === "creditCard") {
//     return processCreditCardPayment(order);
//   } else if (order.paymentMethod === "paypal") {
//     return "Process PayPal payment";
//   } else {
//     return "Invalid payment method";
//   }
// }

// function processCreditCardPayment(order: Order): string {
//   if (order.amount > 100) {
//     return "Apply discount and process credit card payment";
//   } else {
//     return "Process credit card payment";
//   }
// }

// const order: Order = {
//   status: "pending",
//   paymentMethod: "creditCard",
//   amount: 100,
// };
// console.log(processOrder(order));

// Вариант 1: Использование объектов для обработки статусов заказа и методов оплаты
// interface Order {
//   status: string
//   paymentMethod: string
//   amount: number
// }

// type PaymentProcessor = (amount: number) => string
// type StatusProcessor = (order: Order) => string

// const paymentProcessors: { [key: string]: PaymentProcessor } = {
//   creditCard: (amount: number) =>
//     amount > 100
//       ? 'Apply discount and process credit card payment'
//       : 'Process credit card payment',
//   paypal: () => 'Process PayPal payment',
//   default: () => 'Invalid payment method'
// }

// const statusProcessors: { [key: string]: StatusProcessor } = {
//   pending: (order: Order) =>
//     (paymentProcessors[order.paymentMethod] || paymentProcessors.default)(
//       order.amount
//     ),
//   shipped: () => 'Order has already been shipped',
//   cancelled: () => 'Order has been cancelled',
//   default: () => 'Unknown order status'
// }

// function processOrder(order: Order): string {
//   return (statusProcessors[order.status] || statusProcessors.default)(order)
// }

// const order = {
//   status: 'pending',
//   paymentMethod: 'creditCard',
//   amount: 100
// }
// console.log(processOrder(order))

// 2 Разделение на подфункции

interface Order {
  status: string
  paymentMethod: string
  amount: number
}

function processOrder(order: Order): string {
  if (order.status === 'pending') {
    return processPendingOrder(order)
  } else if (order.status === 'shipped') {
    return 'Order has already been shipped'
  } else if (order.status === 'cancelled') {
    return 'Order has been cancelled'
  } else {
    return 'Unknown order status'
  }
}

function processPendingOrder(order: Order): string {
  switch (order.paymentMethod) {
    case 'creditCard':
      return processCreditCardPayment(order.amount)
    case 'paypal':
      return 'Process PayPal payment'
    default:
      return 'Invalid payment method'
  }
}

function processCreditCardPayment(amount: number): string {
  if (amount > 100) {
    return 'Apply discount and process credit card payment'
  } else {
    return 'Process credit card payment'
  }
}

const order = {
  status: 'pending',
  paymentMethod: 'creditCard',
  amount: 100
}
console.log(processOrder(order))
