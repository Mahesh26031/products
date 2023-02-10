const { data } = require("./data");


let products = data;
group_by_brand(products)
group_by_category(products)


function group_by_brand(products) {

  const by_brand = {};

  for (const product of products) {

    if (!by_brand[product.brand]) {

        by_brand[product.brand] = [];

    }

    by_brand[product.brand].push(product);

  }
  
  console.log(by_brand);

}

function group_by_category(products){

  const by_category = {};

  for (const product of products) {

    if (!by_category[product.category]) {

        by_category[product.category] = [];

    }

    by_category[product.category].push(product);
    
  }

  console.log(by_category);

}