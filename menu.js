///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const Pizza = {
    name: "bombastic xtra cheese",
    price: 12,
    category: "italian",
    popularity: 10,
    rating: 10,
    tags: ["cheese", "delicious", "zaza"]
}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(Pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(Pizza.tags[1])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

let pizzaPrice = Pizza.price
console.log(pizzaPrice)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

let pizzaCategory = Pizza["category"]
console.log(pizzaCategory)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

let foodArr = [
    {name: "peppy pep",
    price: 10,
    popularity: 8,
    rating: 9,
    tags: ["pepperoni", "mid", "zaza"]
    },
    {
        name: "chicky alfred",
        price: 9,
        popularity: 9,
        rating: 7.5,
        tags: ["chicken", "alfredo", "yum"]
    },
    {
        name: "veggie tales",
        price: 14,
        popularity: 5,
        rating: 6,
        tags: ["vegetarian", "mushrooms", "God"]
    },
    {
        name: "the homewrecker",
        price: 13,
        popularity: 1,
        rating: 3,
        tags: ["sausage", "bacon", "infidelity"]
    },
    {
        name: "pen pineapple apple pen",
        price: 11,
        popularity: 5,
        rating: 7,
        tags: ["pineapple", "cheese", "it is delicious and if you don't agree natural selection is coming for you"]
    }
]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/



// const filteredFood = foodArr.filter(/* CALLBACK HERE */)

let filteredPrice = foodArr.filter((obj)=>{
    return obj.price
    })
    
    // console.log(filteredPrice)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

function filterByProperty(property, number, type){
  let filteredArr = foodArr.filter((food) =>{
    if (type === "above"){
        return food[property] > number
    } else {
        return food[property] < number
    }
  })
   return filteredArr
}


//// during assessment: This was too many words and I got lost/overhwelmed lol, moving on
///// update 2 hours later: I did it!!!!!!! I think I actually did it!!!!!!!!!!!! there were tears shed over this problem but I think I finally got it hahaha

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/


console.log(filterByProperty("price", 13, "below"))