var _; // globals

describe('About Applying What We Have Learnt', function() {
  var products;

  beforeEach(function () {
    products = [
      { name: 'Sonoma', ingredients: ['artichoke', 'sundried tomatoes', 'mushrooms'], containsNuts: false },
      { name: 'Pizza Primavera', ingredients: ['roma', 'sundried tomatoes', 'goats cheese', 'rosemary'], containsNuts: false },
      { name: 'South Of The Border', ingredients: ['black beans', 'jalapenos', 'mushrooms'], containsNuts: false },
      { name: 'Blue Moon', ingredients: ['blue cheese', 'garlic', 'walnuts'], containsNuts: true },
      { name: 'Taste Of Athens', ingredients: ['spinach', 'kalamata olives', 'sesame seeds'], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it('given I\'m allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)', function () {
    var i, j, hasMushrooms;
    var productsICanEat = [];

    for (i = 0; i < products.length; i += 1) {
      if (products[i].containsNuts === false) {
        hasMushrooms = false;
        for (j = 0; j < products[i].ingredients.length; j += 1) {
          if (products[i].ingredients[j] === 'mushrooms') {
            hasMushrooms = true;
          }
        }
        if (!hasMushrooms) {
          productsICanEat.push(products[i]);
        }
      }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it('given I\'m allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)', function () {
    var productsICanEat = [];

    productsICanEat = _(products).filter(function(product) {
      return !product.containsNuts && !_(product.ingredients).any(function(ingredient) {
        return ingredient === 'mushrooms';
      });
    });

    expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it('should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)', function () {
    var sum = 0;

    for (var i = 1; i < 1000; i += 1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it('should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)', function () {
    var sum = _.range(1000).reduce(function(sum, i) {
      if (i % 3 === 0 || i % 5 === 0) {
        return sum + i;
      } else {
        return sum;
      }
    }, 0);

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
  it('should count the ingredient occurrence (imperative)', function () {
    var ingredientCount = { '{ingredient name}': 0 };

    for (i = 0; i < products.length; i += 1) {
      for (j = 0; j < products[i].ingredients.length; j += 1) {
        ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
      }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it('should count the ingredient occurrence (functional)', function () {
    var ingredientCount = { '{ingredient name}': 0 };
    ingredientCount = _(products).chain()
      .map(function(product) { return product.ingredients; })
      .flatten()
      /*
      NOTE: The instructions say to use reduce(), so I'm using reduce().
      However, it doesn't really make sense to use here. We're using mutation, so it would be better
      to simply call forEach() and remove the return statement.
      The 'proper' way to use reduce() would be to return a new object copied from the first
      argument's values every time, but that would be an absurd waste of resources.
      Alternatively, reduce() could be called separately for each ingredient with a simple numeric
      accumulator, but that would involve many passes through the array when only one suffices.
      */
      .reduce(function(count, ingredient) {
        count[ingredient] = (count[ingredient] || 0) + 1;
        return count;
      }, ingredientCount)
      .value();

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it('should find the largest prime factor of a composite number', function () {

  });

  it('should find the largest palindrome made from the product of two 3 digit numbers', function () {

  });

  it('should find the smallest number divisible by each of the numbers 1 to 20', function () {


  });

  it('should find the difference between the sum of the squares and the square of the sums', function () {

  });

  it('should find the 10001st prime', function () {

  });
  */
});
