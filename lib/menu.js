// Full food & beverage menu transcribed from the original PDF menu
// (docs/source-audit/content/fnb-menu.json, 90 items). Prices in IDR thousands.
// Obvious spelling errors corrected; "Sasuka" kept as published (intended dish unclear).
// No dietary labels are shown: the audit found none in the source menu (08 · A12).

export const MENU = [
 {
  "id": "food",
  "title": "Food",
  "categories": [
   {
    "id": "breakfast",
    "title": "Breakfast",
    "items": [
     {
      "name": "Poached Egg with Guacamole and Sliced Avocado",
      "text": "Poached egg layers on toasted sourdough bread, guacamole, slice avocado",
      "price": "65K"
     },
     {
      "name": "Frozen Fruits Bowl",
      "text": "Slice seasonal fruits on frozen blended fruits",
      "price": "50K"
     },
     {
      "name": "Jungle Pot's Omelet",
      "text": "Mix vegetables omelet with sauteed spinach, mushroom, ham, sausage, grilled tomato, and toasted sourdough",
      "price": "65K"
     },
     {
      "name": "Jungle Pot's Poached Egg",
      "text": "Croissant filled with salad, ham, cheese, slice cucumber, poached egg, slice avocado on the side",
      "price": "70K"
     },
     {
      "name": "Sasuka",
      "text": "Fresh egg on parmigiana sauce, with toasted sourdough bread",
      "price": "60K"
     },
     {
      "name": "Tuna Tataki (Steak)",
      "text": "Pan seared slice tuna with sesame seed on guacamole",
      "price": "85K"
     }
    ]
   },
   {
    "id": "starter",
    "title": "Starter",
    "items": [
     {
      "name": "Jungle Pot's Organic",
      "text": "Fried vegetables mixed with egg, flour, with yoghurt",
      "price": "40K"
     },
     {
      "name": "Spring Roll",
      "text": "Mixed vegetables wrapped, fried in golden brown, with sweet chili and Kikkoman sauce",
      "price": "35K"
     },
     {
      "name": "Chicken Drum Stick",
      "text": "Oven chicken leg marinated with BBQ sauce, sesame seed",
      "price": "35K"
     },
     {
      "name": "Chicken Wing",
      "text": "Oven chicken wing marinated with BBQ sauce, sesame seed",
      "price": "35K"
     },
     {
      "name": "Fried Calamari Ring",
      "text": "Deep fried breaded calamari served with sweet chili sauce",
      "price": "35K"
     },
     {
      "name": "Garlic Bread With Cheese",
      "text": "Sliced brioche butter garlic toasted with mozzarella cheese",
      "price": "35K"
     },
     {
      "name": "Chicken Quesadillas",
      "text": "Seasoned chicken breast with cheese, in Mexican thin flat bread grilled, with slice avocado and mayonnaise",
      "price": "45K"
     }
    ]
   },
   {
    "id": "salad",
    "title": "Salad",
    "items": [
     {
      "name": "Jungle Pot's Garden",
      "text": "Grilled chicken breast, and mix lettuce, served with Thousand Island dressing",
      "price": "60K"
     },
     {
      "name": "Caesar Salad with Prawn",
      "text": "Romaine lettuce toss with Caesar dressing, with Parmesan cheese, sautéed prawn, quails egg",
      "price": "65K"
     }
    ]
   },
   {
    "id": "main-course",
    "title": "Main Course",
    "items": [
     {
      "name": "Spaghetti Seafood",
      "text": "Spaghetti with prawn, tuna, calamari, olive oil, garlic, cheese and parsley",
      "price": "75K"
     },
     {
      "name": "Spaghetti Carbonara",
      "text": "Spaghetti with creamy sauce sautéed with bacon, garlic, onion, olive oil, and cheese",
      "price": "70K"
     },
     {
      "name": "Spaghetti A.O.P Chicken",
      "text": "Spaghetti sautéed with olive oil, garlic, onion, slice grilled chicken breast",
      "price": "60K"
     },
     {
      "name": "Tenderloin Steak",
      "text": "Grilled marinated tenderloin beef, sauteed peppers, green bean, with mushroom sauce and potato wedges",
      "price": "99K"
     },
     {
      "name": "Beef Burger",
      "text": "Grilled beef patty with BBQ sauce, bacon, cheese, tomato, onion, lettuce, cucumber",
      "price": "87K"
     },
     {
      "name": "Chicken Burger",
      "text": "Grilled chicken breast with BBQ sauce, bacon, cheese, tomato, onion, cucumber and lettuce",
      "price": "85K"
     },
     {
      "name": "Hawaiian Pizza",
      "text": "Homemade Napoli sauce with ham, pineapple mozzarella cheese, and basil",
      "price": "60K"
     },
     {
      "name": "Margarita Pizza",
      "text": "Home made Napoli sauce, with tomato wedges, mozzarella cheese, and basil",
      "price": "55K"
     },
     {
      "name": "Meat Lover Pizza",
      "text": "Homemade Napoli sauce with ham, bacon, sausage, chicken breast, mozzarella cheese, and basil",
      "price": "70K"
     },
     {
      "name": "Seafood Pizza",
      "text": "Homemade Napoli sauce, prawn, tuna, calamari, onion, mozzarella cheese, and basil",
      "price": "70K"
     },
     {
      "name": "Barbeque Pizza",
      "text": "Barbeque sauce, mix peppers, mushroom, chicken breast, mozzarella cheese, and basil",
      "price": "70K"
     },
     {
      "name": "Chicken Parmigiana",
      "text": "Fried breaded marinated chicken breast covered with tomato sauce and mozzarella cheese, served with mix salad",
      "price": "80K"
     },
     {
      "name": "Nasi Goreng",
      "text": "Indonesian fried rice mix with egg, vegetables, served with sunny side up egg and chicken satay",
      "price": "50K"
     },
     {
      "name": "Mie Goreng",
      "text": "Indonesian fried noodle mix with egg, vegetables, served with sunny side up egg and chicken satay",
      "price": "50K"
     },
     {
      "name": "Jungle Pot's Pork Ribs",
      "text": "Grilled marinated pork ribs with barbeque sauce, mix lettuce, served with potato wedges and mushroom sauce",
      "price": "99K"
     },
     {
      "name": "Grill Mahi Mahi",
      "text": "Grilled marinated mahi mahi fish with mango sauce",
      "price": "80K"
     },
     {
      "name": "Chicken Stuffing",
      "text": "Marinated chicken stuffing with ham, English spinach and mozzarella cheese, roll up in the bacon",
      "price": "87K"
     },
     {
      "name": "Chicken Satay",
      "text": "Grilled chicken skewer with peanut sauce served with white rice",
      "price": "55K"
     }
    ]
   },
   {
    "id": "dessert",
    "title": "Dessert",
    "items": [
     {
      "name": "Jungle Pot's Fruits Bowl",
      "text": "Seasonal fruits balls on plain yoghurt dash with icing sugar",
      "price": "40K"
     },
     {
      "name": "Caramelized Fried Pineapple",
      "text": "Caramelized fried pineapple, vanilla ice cream with mango sauce",
      "price": "40K"
     },
     {
      "name": "Bread Butter Pudding",
      "text": "Bread pudding, vanilla ice cream with seasonal sliced fruit and mango sauce",
      "price": "45K"
     }
    ]
   }
  ]
 },
 {
  "id": "drinks",
  "title": "Drinks",
  "categories": [
   {
    "id": "cocktails",
    "title": "Cocktails",
    "items": [
     {
      "name": "Royale Pinacolada",
      "text": "Blend of light rum, pineapple liqueur, fresh pineapple, and coconut milk",
      "price": "80K"
     },
     {
      "name": "Espresso Martini",
      "text": "Vodka, coffee liqueur, espresso coffee, sugar syrup",
      "price": "85K"
     },
     {
      "name": "The Great Jungle Pot's",
      "text": "Vodka, honey, coconut water and passion fruit syrup in a cocktail glass",
      "price": "80K"
     },
     {
      "name": "Classic Mojito",
      "text": "Preparing of lime, mint leaves, white sugar, light rum and top with soda water",
      "price": "75K"
     },
     {
      "name": "Long Island Ice Tea",
      "text": "Gin, tequila, vodka, triple sec, lime juice, top with Coca-Cola",
      "price": "85K"
     },
     {
      "name": "Margarita",
      "text": "Tequila, triple sec, lime juice, sugar syrup, salt",
      "price": "80K"
     },
     {
      "name": "Daiquiri",
      "text": "Light rum, triple sec, lime juice, sugar syrup",
      "price": "85K"
     },
     {
      "name": "Negroni",
      "text": "Gin, Campari, sweet Martini",
      "price": "85K"
     },
     {
      "name": "White Russian",
      "text": "Vodka, coffee liqueur, milk",
      "price": "85K"
     },
     {
      "name": "Black Russian",
      "text": "Vodka, coffee liqueur, top Coca-Cola",
      "price": "85K"
     }
    ]
   },
   {
    "id": "balinese-cocktails",
    "title": "Balinese Cocktails",
    "items": [
     {
      "name": "Roska De Bali",
      "text": "Arak with fresh lime wedges, brown sugar and lime juice",
      "price": "30K"
     },
     {
      "name": "Passion De Arak",
      "text": "Mix of arak, pineapple juice, passion syrup and twist of lime wedges",
      "price": "30K"
     },
     {
      "name": "Arak Mojito",
      "text": null,
      "price": "30K"
     }
    ]
   },
   {
    "id": "mocktail",
    "title": "Mocktail",
    "items": [
     {
      "name": "Sweet Tropicana",
      "text": "Pineapple juice, orange juice, lime wedges, grenadine syrup, Sprite",
      "price": "45K"
     },
     {
      "name": "The Jungle Pot's Floating",
      "text": "Mango juice, honey blossom, lime wedges, with passion, and top of vanilla ice cream",
      "price": "45K"
     },
     {
      "name": "Strawberry Mint Cooler",
      "text": "Fresh strawberry, mint leaves, granulated sugar, lime wedges, strawberry juice, sweet & sour",
      "price": "45K"
     },
     {
      "name": "Lime Squash",
      "text": "Lime juice, sugar syrup, soda water",
      "price": "45K"
     },
     {
      "name": "Orange Squash",
      "text": "Orange juice, sugar syrup, soda water",
      "price": "45K"
     }
    ]
   },
   {
    "id": "fresh-blended",
    "title": "Fresh Blended",
    "items": [
     {
      "name": "Pineapple Juice",
      "text": "Fresh pineapple, sugar syrup",
      "price": "25K"
     },
     {
      "name": "Banana Juice",
      "text": "Fresh banana, sugar syrup",
      "price": "25K"
     },
     {
      "name": "Papaya Juice",
      "text": "Fresh papaya, sugar syrup",
      "price": "25K"
     },
     {
      "name": "Mix Juice",
      "text": "Fresh watermelon, fresh banana, papaya, pineapple, sugar syrup",
      "price": "25K"
     },
     {
      "name": "Watermelon Juice",
      "text": "Fresh watermelon, sugar syrup",
      "price": "25K"
     }
    ]
   },
   {
    "id": "squeezed-juices",
    "title": "Squeezed Juices",
    "items": [
     {
      "name": "Orange Juice",
      "text": "Orange squeeze, sugar syrup, ice cubes",
      "price": "25K"
     },
     {
      "name": "Mango Juice",
      "text": "Mango squeeze, sugar syrup, ice cubes",
      "price": "25K"
     },
     {
      "name": "Strawberry Juice",
      "text": "Strawberry squeeze, sugar syrup, ice cubes",
      "price": "25K"
     }
    ]
   },
   {
    "id": "milkshake",
    "title": "Milkshake",
    "items": [
     {
      "name": "Vanilla Milkshake",
      "text": "Vanilla ice cream, milk, sugar syrup",
      "price": "28K"
     },
     {
      "name": "Chocolate Milkshake",
      "text": "Chocolate ice cream, milk, sugar syrup",
      "price": "28K"
     },
     {
      "name": "Strawberry Milkshake",
      "text": "Strawberry ice cream, milk, sugar syrup",
      "price": "28K"
     },
     {
      "name": "Banana Milkshake",
      "text": "Vanilla ice cream, milk, sugar syrup, fresh banana",
      "price": "28K"
     }
    ]
   },
   {
    "id": "smoothies",
    "title": "Smoothies",
    "items": [
     {
      "name": "Banana Smoothies",
      "text": "Vanilla ice cream, plain yoghurt sugar syrup, fresh banana",
      "price": "35K"
     },
     {
      "name": "Mango Smoothies",
      "text": "Vanilla ice cream, plain yoghurt, sugar syrup, mango juice",
      "price": "35K"
     },
     {
      "name": "Strawberry Smoothies",
      "text": "Strawberry ice cream, plain yoghurt, sugar syrup, strawberry juice",
      "price": "35K"
     },
     {
      "name": "Pineapple Smoothies",
      "text": "Vanilla ice cream, plain yoghurt, sugar syrup, pineapple juice",
      "price": "35K"
     }
    ]
   },
   {
    "id": "iced-coffee-and-tea",
    "title": "Iced Coffee & Tea",
    "items": [
     {
      "name": "Americano Ice Coffee",
      "text": "Coffee, sugar syrup",
      "price": "35K"
     },
     {
      "name": "Ice Cappuccino",
      "text": "Coffee, milk, sugar syrup",
      "price": "35K"
     },
     {
      "name": "Ice Caffe Latte",
      "text": "Coffee, milk, sugar syrup",
      "price": "35K"
     },
     {
      "name": "The Jungle Pot's Floating Ice Cappuccino",
      "text": "Coffee, milk, sugar syrup with top of vanilla ice cream",
      "price": "40K"
     },
     {
      "name": "Ice Tea",
      "text": null,
      "price": "15K"
     }
    ]
   },
   {
    "id": "hot-coffee-and-tea",
    "title": "Hot Coffee & Tea",
    "items": [
     {
      "name": "Espresso Coffee",
      "text": null,
      "price": "35K"
     },
     {
      "name": "Cappuccino Coffee",
      "text": null,
      "price": "35K"
     },
     {
      "name": "Caffè Latte",
      "text": null,
      "price": "35K"
     },
     {
      "name": "Flat White",
      "text": null,
      "price": "35K"
     },
     {
      "name": "Hot Tea",
      "text": null,
      "price": "35K"
     },
     {
      "name": "Bali Coffee",
      "text": null,
      "price": "35K"
     }
    ]
   },
   {
    "id": "soft-drinks",
    "title": "Soft Drinks",
    "items": [
     {
      "name": "Coca Cola",
      "text": null,
      "price": "15K"
     },
     {
      "name": "Tonic",
      "text": null,
      "price": "15K"
     },
     {
      "name": "Soda",
      "text": null,
      "price": "15K"
     },
     {
      "name": "Sprite",
      "text": null,
      "price": "15K"
     },
     {
      "name": "Zero Coke",
      "text": null,
      "price": "15K"
     },
     {
      "name": "Mineral Water",
      "text": null,
      "price": "11K"
     }
    ]
   },
   {
    "id": "beers",
    "title": "Beers",
    "items": [
     {
      "name": "Small Beer Bintang",
      "text": null,
      "price": "19K"
     },
     {
      "name": "Large Beer Bintang",
      "text": null,
      "price": "60K"
     },
     {
      "name": "Bintang Radler",
      "text": null,
      "price": "19K"
     }
    ]
   }
  ]
 }
];

export const MENU_COUNT = 90;
