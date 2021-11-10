const fruitBasket = [
    'apple',
    'lemon',
    'grapefruit',
    'lemon',
    'banana',
    'watermelon',
    'lemon',
  ];
  // ! Function under test
  function sanitizeFruitBasket(lemon) {
    const check = fruitBasket.filter(fruit => fruit !== lemon);
    return check
  }
  
  console.log(sanitizeFruitBasket("lemon"));
  