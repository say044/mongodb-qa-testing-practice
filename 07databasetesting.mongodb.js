// Suppose the application creates this order:

// Order ID: ORD003
// User: Sayan
// Product: Wireless Mouse
// Quantity: 2
// Price: 799
// Total: 1598
// Status: Pending

// After the order is created, you need to verify that it exists in MongoDB.

// Question 1:

// Write the MongoDB query you would use to find ORD003.

use("ecommerce");


// db.orders.insertOne({
//   orderId: "ORD003",
//   user: "Sayan",
//   products: [
//     {
//       name: "Wireless Mouse",
//       quantity: 2,
//       price: 799
//     }
//   ],
//   total: 1598,
//   status: "Pending",
//   createdAt: new Date()
// });

// db.orders.findOne({
//   orderId: "ORD003"
// });

// db.orders.updateOne(
// { orderId: "ORD003" },
// { $set: { status: "Delivered" } }
//  )

// requirement 1 -> price should never be less than 0 of any product
// db.products.find({
//     price : {$lte:0}
// })

// requirement 2 -> Stock should never be negative.

// db.products.find({
//     stock : {$lt:0}
// })

// requirement 3 -> Every product with category Electronics must have stock greater than 0.

// db.products.find({
//      category: "Electronics" ,
//      stock : {$lte:0}
// });

// Write a query that finds orders where: 
// orderId does NOT exist

db.orders.find({
    orderId : {$exists:false}
})

// Suppose the requirement says:

// orderId must be unique.

// Your database currently has orders like:

// ORD001
// ORD002
// ORD003

// As QA, you want to find out whether any orderId appears more than once.

db.orders.aggregate([
  {
    $group: {
      _id: "$orderId",
      count: { $sum: 1 }
    }
  },
  {
    $match: {
      count: { $gt: 1 }
    }
  }
]);

// The business rule is:

// Order total must equal the sum of quantity × price for all products in the order.

//  QA task

// Write a MongoDB aggregation query that calculates the expected total for ORD003.