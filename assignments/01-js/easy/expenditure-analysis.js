/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
//   let arr = [];

//   let total = 0;
  
//   for (let i = 0; i < transactions.length; i++) {
//     total = transactions[i].price
//     for (let j = i + 1; j < transactions.length; j++) {

//       if (transactions[i].category === transactions[j].category) {
//         total += transactions[j].price;
//         arr.push({ category: transactions[i].category, totalSpent: total })
//       }else{
//         break
//       }
//     }
//   }
//   console.log(arr)
  
  // return [];


  let categoryMap = {};

  for (let i = 0; i<transactions.length; i++) {
    const category = transactions[i].category;
    const price = transactions[i].price
  
  
    if (category in categoryMap) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price; 
    }
  }

  // console.log(categoryMap)
let result = []
  for(category in categoryMap){
    result.push({category, totalSpent:categoryMap[category]})
  }

console.log(categoryMap)

  // console.log(result)
  
  return result;

}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];
calculateTotalSpentByCategory(transactions)
module.exports = calculateTotalSpentByCategory;
