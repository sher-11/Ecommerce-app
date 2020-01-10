This is the backend code for the Ecommerce Application.

NOTE: USE POSTMAN TO HIT THE API'S

The codebase majorily consist of two APIs. PLease refer below for the details

1. The list API - This is a GET request that displays the list of all the products when hit to the route /list. The scenario in this is the use of search query parameter with this list API.
If a user enters /list?search=Iphone 11&&storage=64GB&&color=White, then the API would fetch you only the product with these specifications.


2. The other is the detail API in which the product ID is entered which inturn with that product also didplays the list of it's sibling products.
This API can be use using /details/:id where :id is the product ID of a product.

How to populate a sample database?

1. /add-category:This is a POST request that is used to create the category for the product type. It accepts JSON data as input. The fields being the name of the category.

2. :name/add-product: This is a POST request used to create the product in the database and associate it with the category ID created using /add-category in the database. The API accepts JSON data as input. The fiels can be the name, storage, price, description, category ID and color of the product.
Eg: {
    "_id": {
        "$oid": "5e16debe4c7a9e362c96eeee"
    },
    "color": "Black",
    "description": "Iphone 11 black with 128GB",
    "price": "$850",
    "model_name": "Iphone 11",
    "storage": "128GB",
    "category": {
        "$oid": "5e16de564c7a9e362c96eee7"
    },
    "__v": 0
}