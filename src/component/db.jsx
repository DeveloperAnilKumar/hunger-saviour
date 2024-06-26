import { Info, Restaurant, ShoppingCart} from "@mui/icons-material";

export const restaurantData =[
  {
    "restaurantName":"Box-8 Desi Meals",
    "rating":4.2,
    "menuTypes":[
      "Soups",
      "Starters",
      "Biryani",
      "Curries",
      "Platter"
    ],
    "imageUrl":"https://tb-static.uber.com/prod/image-proc/processed_images/f16f68d8d1f9dd898911d06d68587008/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
    "location":"Saroor Nagar West",
    "menus":[
      {
        "menuItem":"Sweet Corn Chicken Soup (Serves 1)",
        "menuItemPrice":139,
        "menuType":"Soups",
        "description":"Serves 1 | Savory and satisfying sweetcorn chicken soup, a delightful fusion of flavors",
        "menuImageUrl":"https://hips.hearstapps.com/hmg-prod/images/best-soup-recipes-1-64f0f361b3427.jpeg"
      },
      {
        "menuItem":"Hot N Sour Chicken Soup (Serves 1)",
        "menuItemPrice":139,
        "menuType":"Soups",
        "description":"Serves 1 | Spicy and tangy hot n sour chicken soup, a tantalizing explosion of flavors",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/230085b5c9d07542399576b730324653"
      },
      {
        "menuItem":"Banjara Kabab",
        "menuItemPrice":259,
        "menuType":"Starters",
        "description":"Tender and flavorful skewers of marinated meat, grilled to perfection with aromatic Indian spices for a delightful kabab experience",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/oqt5antshiats6wrdqql"
      },
      {
        "menuItem":"Hariyali Chicken Kabab",
        "menuItemPrice":269,
        "menuType":"Starters",
        "description":"Succulent chicken pieces marinated in a vibrant green marinade made with fresh herbs and spices, grilled to perfection for a fragrant and herb-infused kabab",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/lss2pqgvmdmvd9bqzlx9"
      },
      {
        "menuItem":"Nizami Chicken Dum Biryani (Serves upto 2)",
        "menuItemPrice":399,
        "menuType":"Biryani",
        "description":"Serves 1 | Freshly Cooked Kachhi Dum Biryani, cooked with succulent chicken pieces marinated in exotic blend of handpicked spices, finest long grain Basmati Rice, Saffron and aromatic Ghee. Ideal for one person, it can also be shared between two. Served with Mirchi Ka Salan and Raita. Contains 341.97g Carbs, 77g Fats, 134.17g Protein, 2603kcal, milk and milk products.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/3991cce94dc052ce7713965e193e6292"
      },
      {
        "menuItem":"Royal Mutton Dum Biryani (Serves 1)",
        "menuItemPrice":299,
        "menuType":"Biryani",
        "description":"Serves 1 | The legendary Hyderabadi Freshly Cooked Kachhi Dum Ki Biryani, where tender 5 pieces of juicy lamb meat is thoroughly marinated with a secret Biryani Spice-mix and then slow cooked midst layers of the finest Basmati Rice and garnished with generous portions of saffron strands and ghee (clarified butter). The dish serves one person (not that you will share such a royal treat!) and comes with a complimentary portion of Mirchi-ka-Salan and Raita.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ijwvkvne2whgxipjm1hm"
      },
      {
        "menuItem":"1 Mini Chicken Dum Biryani and Half Chicken Tikka Kebab",
        "menuItemPrice":349,
        "menuType":"Biryani",
        "description":"Serves 1 | Amazing combo of 1 Mini Chicken Biryani and Half portion Chicken Tikka Kebab. Mini Chicken Biryani contains 350 grams of fine basmati rice and a succulent Chicken piece with blend of spices, apt for 1 Light Eater. This comes with 4 Pcs of delicious Chicken Tikka Kebab. It is served with Raita and Mirchi Ka Salan",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/b4a2jkxermmut00vtw9f"
      },
      {
        "menuItem":"Dal Tadka",
        "menuItemPrice":249,
        "menuType":"curries",
        "description":"Serves 1 | A classic Indian lentil dish with a tempering of aromatic spices, garlic and onion",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d89bi4zpnp1zkrju3wks"
      },
      {
        "menuItem":"Chicken Kadhai",
        "menuItemPrice":269,
        "menuType":"curries",
        "description":"Serves 1 | Flavorful Indian dish made with tender chicken, aromatic species, bell peppers and onions",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/e182d05ac1691e0badedbeb554c014e4"
      },
      {
        "menuItem":"Mixed Platter",
        "menuItemPrice":1320,
        "menuType":"Platter",
        "description":"(Malai Kabab, Tangdi, Chicken Tikka, Angara Kabab, Talawa Mutton, Prawns And Fish)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ctpq02ydqqg51ymesfth"
      }
    ]
  },
  {
    "restaurantName":"Haldiram's",
    "rating":4.1,
    "menuTypes":[
      "Quick Bites",
      "Sweets"
    ],
    "imageUrl":"https://t4.ftcdn.net/jpg/02/54/92/05/360_F_254920579_xOIyVqIWxgUi0fSQ8FwBC95YlIVZpuCd.jpg",
    "location":"Attapur",
    "menus":[
      {
        "menuItem":"Samosa Ragda",
        "menuItemPrice":110,
        "menuType":"Quick Bites",
        "description":"Crispy stuffed pastry with a savory chickpea filling and toppings. Serves 1",
        "menuImageUrl":"https://www.nehascookbook.com/wp-content/uploads/2022/10/Ragda-samosa-chaat-WS.jpg"
      },
      {
        "menuItem":"Wada Pav (2 Pcs)",
        "menuItemPrice":100,
        "menuType":"Quick Bites",
        "description":"Satisfy your hunger with these delicious and flavorful veg bites. Serves 1",
        "menuImageUrl":"https://cdn.urbanpiper.com/media/bizmedia/2023/03/16/Vada_Pav_Slider_1678960916.jpg"
      },
      {
        "menuItem":"Pani Puri ( 10 Pc )",
        "menuItemPrice":70,
        "menuType":"Quick Bites",
        "description":"10 pieces | | Chef's Special |",
        "menuImageUrl":"https://i.pinimg.com/originals/b2/5f/89/b25f89a14375c37d641182b51377225c.jpg"
      },
      {
        "menuItem":"Cheese Grilled Sandwich",
        "menuItemPrice":140,
        "menuType":"Quick Bites",
        "description":"Deliciously grilled cheese sandwich with a perfect blend of melted cheese, nestled between golden-brown slices of bread – a comforting classic for your taste buds!",
        "menuImageUrl":"https://thumbs.dreamstime.com/b/veg-cheese-grilled-sandwich-served-ketchup-isolated-over-rustic-wooden-background-selective-focus-224440448.jpg"
      },
      {
        "menuItem":"Rasgulla (2 Pcs)",
        "menuItemPrice":80,
        "menuType":"Sweets",
        "description":"Soft and spongy cottage cheese balls soaked in sweet sugar syrup (2 Pcs).",
        "menuImageUrl":"https://wowbiryanisg.com/wp-content/uploads/2022/08/Rasgulla.jpg"
      },
      {
        "menuItem":"Gulab Jamun (2 Pcs)",
        "menuItemPrice":85,
        "menuType":"Sweets",
        "description":"Delicious duo of Gulab Jamun (2 Pcs) – soft, deep-fried milk dumplings soaked in sweet syrup, perfect for a delightful treat!",
        "menuImageUrl":"https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/64b07d0612c52c3e451ce7d9/image-v2bh1u-1689147004.jpg"
      },
      {
        "menuItem":"Soan Papdi",
        "menuItemPrice":190,
        "menuType":"Sweets",
        "description":"Soan Papdi: Delicate, flaky Indian sweet made with gram flour, ghee, and sugar – a perfect treat for your sweet cravings!",
        "menuImageUrl":"https://www.shutterstock.com/image-photo/famous-indian-vegetarian-snack-food-260nw-1218793699.jpg"
      },
      {
        "menuItem":"Balushahi",
        "menuItemPrice":170,
        "menuType":"Sweets",
        "description":"Traditional Indian sweet, Balushahi, featuring deep-fried, flaky dough dipped in sugar syrup",
        "menuImageUrl":"https://c.ndtvimg.com/2019-09/cfk4m7uo_balushahi_625x300_27_September_19.jpg"
      },
      {
        "menuItem":"White Kalakand",
        "menuItemPrice":190,
        "menuType":"Sweets",
        "description":"White kalakand an exquisite sweet prepared by mixing concendensed milk called khoya/mawa.",
        "menuImageUrl":"https://media.istockphoto.com/id/1315042363/photo/indian-mithai-hot-kalakand-burfi-also-known-as-alwar-mawa-qalaqand-barfi-mishri-mava-or-khoa.jpg?s=612x612&w=0&k=20&c=Sq_kiQXvj_bngUbJFCvANmbIc2_tGjxEfXybU8TWSZk="
      },
      {
        "menuItem":"Kaju Chandramukhi",
        "menuItemPrice":500,
        "menuType":"Sweets",
        "description":"Kaju Chandramukhi: Creamy cashew delicacy with a touch of elegance.",
        "menuImageUrl":"https://www.chhappanbhog.com/wp-content/uploads/2022/06/Chandra-Mukhi-scaled.jpg"
      }
    ]
  },
  {
    "restaurantName":"Cream Stone Ice Cream",
    "rating":4.0,
    "menuTypes":[
      "Chocolate Wonders",
      "Natural Fruit",
      "Seasonal Star"
    ],
    "imageUrl":"https://b.zmtcdn.com/data/dish_photos/47b/f41d354763fdba2724436c7b4dd8647b.jpg",
    "location":"Tolichowki",
    "menus":[
      {
        "menuItem":"Ferrero Rocher Ice Cream",
        "menuItemPrice":250,
        "menuType":"Chocolate Wonders",
        "description":"Serves 1, 2 Scoops | Delectable Chocolate ice cream mixed with Ferrero Rocher and Chocolate Fudge",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zkqeglorj4kzmtf8micg"
      },
      {
        "menuItem":"Chocolava",
        "menuItemPrice":210,
        "menuType":"Chocolate Wonders",
        "description":"Serves 1, 2 Scoops | Combination of Delicious Choco Fudge ice cream and Chocolate ice cream mixed with Crunchy Chocolate chips & Oreo Biscuit, Topped with Warm Chocolava",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/lrz00wgt7z7wfibtketd"
      },
      {
        "menuItem":"Nutty Death By Chocolate",
        "menuItemPrice":205,
        "menuType":"Chocolate Wonders",
        "description":"Serves 1, 2 Scoops | Delicious Chocolate pastry topped with Vanilla & Chocolate Ice cream , loaded with Chocolate fudge and Sprinkled with Roasted Cashews | Contains Brownie with ice cream",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jbhxtmlcbqz3al9xx0dq"
      },
      {
        "menuItem":"Meetha Paan",
        "menuItemPrice":110,
        "menuType":"Natural Fruit",
        "description":"Serves 1, 1 Scoops | Minty Mukhwaas Ice cream mixed with Paan Masala and topped with Cherry | Contains Paan Ice Cream",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qksrwshddgoxhmm6v9ua"
      },
      {
        "menuItem":"Fruit Exotica",
        "menuItemPrice":185,
        "menuType":"Natural Fruit",
        "description":"Serves 1, 2 Scoops | Classic combination of vanilla,Strawberry and Black Grape ice cream mixed with Juicy Apple, Pineapple, litchee and kiwi fruits",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/otpglrrjtkmzmmzywsvz"
      },
      {
        "menuItem":"Kala Jamun",
        "menuItemPrice":185,
        "menuType":"Natural Fruit",
        "description":"Serves 1, 2 Scoops | Juicy Kaala Jaamun mixed with Kaala Jaamun Ice cream | Contains Jamun ice cream with jamun pulp",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jcrhwmu2asxnkcgrsbio"
      },
      {
        "menuItem":"Oreo Shot Ice Cream",
        "menuItemPrice":225,
        "menuType":"Natural Fruit",
        "description":"Serves 1, 2 Scoops | Creamy Vanilla ice cream mixed with Crunchy Orero Biscuits and Chocolate chips.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jt38ofbcnajwxjpemsp8"
      },
      {
        "menuItem":"Regular Cassata",
        "menuItemPrice":149,
        "menuType":"Seasonal Star",
        "description":"A classic frozen dessert featuring layers of vanilla, chocolate, and strawberry ice cream with fruit and nuts, creating a delightful and colorful treat",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/43ebd7d29da1e5800c39b50c6f1c41b5"
      },
      {
        "menuItem":"Chocolate Cassata",
        "menuItemPrice":149,
        "menuType":"Seasonal Star",
        "description":"A decadent variation of the traditional cassata, with layers of rich chocolate ice cream, complemented by nuts and indulgent chocolate flavors for a delicious frozen dessert",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/f4723b541735d2eb8de1d17495a6a652"
      },
      {
        "menuItem":"Sitaphal Creation",
        "menuItemPrice":199,
        "menuType":"Seasonal Star",
        "description":"Creamy Sitaphal Ice cream mixed with Real Sitaphal pulp making your taste bud go woww",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/a55031f0a683e8f27a7bde6ad368b272"
      }
    ]
  },
  {
    "restaurantName":"Ohri's Ming's Court",
    "rating":3.8,
    "menuTypes":[
      "Dimsums ",
      "Super Saver Box",
      "Main Course"
    ],
    "imageUrl":"https://naturallynidhi.com/wp-content/uploads/2019/08/InstantPotSaffronRoseBiryani_Cover.jpg",
    "location":"Banjara Hills",
    "menus":[
      {
        "menuItem":"Classic Veg Suimai [5 Pcs]",
        "menuItemPrice":279,
        "menuType":"Dimsums",
        "description":"Delight in the savory goodness of 5 pieces of Classic Veg Siu Mai, a timeless dumpling favorite, ",
        "menuImageUrl":"https://recipetineats.com/wp-content/uploads/2020/02/Siu-Mai_Chinese-steamed-dumplings_0.jpg"
      },
      {
        "menuItem":"Spiced Chicken Seasame [5 Pcs]",
        "menuItemPrice":329,
        "menuType":"Dimsums",
        "description":"Enjoy 5 flavorful pieces of spiced chicken with a delightful sesame twist, ",
        "menuImageUrl":"https://www.halfbakedharvest.com/wp-content/uploads/2022/03/Spicy-Orange-Sesame-Chicken-1.jpg"
      },
      {
        "menuItem":"Chicken Manchurian Burnt Garlic Fried Rice",
        "menuItemPrice":319,
        "menuType":"Super Saver Box",
        "description":"With Assorted Vegetables",
        "menuImageUrl":"https://i.ytimg.com/vi/034z5C8NIjE/maxresdefault.jpg"
      },
      {
        "menuItem":"Paneer Chilli Basil Burnt Garlic Fried Rice",
        "menuItemPrice":289,
        "menuType":"Super Saver Box",
        "description":"With Assorted Vegetables",
        "menuImageUrl":"https://i.ytimg.com/vi/ZVUBthH62bI/mqdefault.jpg"
      },
      {
        "menuItem":"Chilli Stick Vegetable",
        "menuItemPrice":299,
        "menuType":"Super Saver Box",
        "description":"Spicy Chilli Stick Vegetable: Crispy veggies tossed in a fiery chilli sauce,",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ce89fff079e34e4fe0150de70acabddd"
      },
      {
        "menuItem":"Chicken Manchurian Veg Hakka Noodle",
        "menuItemPrice":319,
        "menuType":"Super Saver Box",
        "description":"With Assorted Vegetable",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ca6f6e995b3e83f1e3c79ceb1cba0c6d"
      },
      {
        "menuItem":"Paneer Schezwan Veg Hakka Noodle",
        "menuItemPrice":289,
        "menuType":"Super Saver Box",
        "description":"With Assorted Vegetable",
        "menuImageUrl":"https://img.freepik.com/premium-photo/schezwan-hakka-noodles-with-paneer-cottage-cheese-served-bowl-selective-focus_466689-32715.jpg?w=2000"
      },
      {
        "menuItem":"Schezwan Sauce Chicken",
        "menuItemPrice":299,
        "menuType":"Main Course",
        "description":"Spicy Schezwan Sauce Chicken: A fiery and flavorful dish with tender chicken tossed in bold Schezwan sauce, ",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/5aaf8016c3417afce20565c3bbde4cc5"
      },
      {
        "menuItem":"Red Curry Chicken",
        "menuItemPrice":349,
        "menuType":"Main Course",
        "description":"Succulent chicken cooked in a rich and aromatic red curry sauce, a Thai delight that's sure to satisfy your taste buds, ",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/18f96321092738d6248f5bdba26c7a8c"
      },
      {
        "menuItem":"Green Curry Chicken",
        "menuItemPrice":399,
        "menuType":"Main Course",
        "description":"Succulent chicken in a vibrant green curry sauce, a Thai delight for a flavorful meal ",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/8f4e4e19a1be6f3c14c8605842031f64"
      }
    ]
  },
  {
    "restaurantName":"Nitro Grill",
    "rating":4.7,
    "menuTypes":[
      "Flamed Nitro Grill Chicken",
      "Burgers",
      "Healthy Grilled Plates",
      "Prime Beef Steaks",
      "Sides"
    ],
    "imageUrl":"https://b.zmtcdn.com/data/pictures/chains/1/18854381/24ade015952bbfaeda9710b15cf39936.jpg",
    "location":"Begumpet",
    "menus":[
      {
        "menuItem":"Grilled Chicken 65",
        "menuItemPrice":269,
        "menuType":"Flamed Nitro Grill Chicken",
        "description":"Grilled chicken marinated in our version of 65 spices. A bit charred & delicious",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/cd257a4807821794c3256cb6bdb40c16"
      },
      {
        "menuItem":"Grilled Nitro Chicken Hot",
        "menuItemPrice":269,
        "menuType":"Flamed Nitro Grill Chicken",
        "description":"A delicious hotter version of Nitro Mild",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/18636dc6e0bca80c8d208b1130847cd0"
      },
      {
        "menuItem":"Grilled Chicken Burger",
        "menuItemPrice":395,
        "menuType":"Burgers",
        "description":"The only reason I have this chicken burger on the menu is that it's outstanding. Grilled boneless chicken smeared with our signature buffalo sauce and topped with cheese.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f54d1077319316484d44188bb08730ef"
      },
      {
        "menuItem":"Double American Beef Burger",
        "menuItemPrice":620,
        "menuType":"Burgers",
        "description":"An outstanding American cheeseburger with a quarter-pound double grilled patty, cheddar cheese, and our mayo gherkens dressing.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1d7af41c31858da20308a245c2eecfb1"
      },
      {
        "menuItem":"Grilled Chicken 65 Plate",
        "menuItemPrice":465,
        "menuType":"Healthy Grilled Plates",
        "description":"Medium Spicy | The healthy Chicken 65. Delicious and charred marinated in our signature 65 marinade. Served with exotic vegetables and mashed potatoes",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/cf08b7bba9d3c5b7bbe58d9f2c93f53a"
      },
      {
        "menuItem":"Grilled Nitro Chicken Mild Plate",
        "menuItemPrice":465,
        "menuType":"Healthy Grilled Plates",
        "description":"Medium Spicy | Comes with Pan Grilled exotic vegetables and mashed potatoes | International grill chicken that is super delicious and juicy, mildly spicy, tangy, has a touch of honey with a perfect balance of flavors.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/73de2e294707151cec76851eaf9c8eea"
      },
      {
        "menuItem":"Tenderloin Steak",
        "menuItemPrice":1175,
        "menuType":"Prime Beef Steaks",
        "description":"Comes with Pan grilled exotic vegetables and mashed potatoes.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7abd42ad31a628b33477be59dacf409f"
      },
      {
        "menuItem":"Rib Eye Steak",
        "menuItemPrice":1175,
        "menuType":"Prime Beef Steaks",
        "description":"The USP of this prime cut - marbling similar to that of WAGYU and a perfect balance of fat and meat! It drips juice! Marinated in our grill master's favorite signature rub! Non-spicy with salt, pepper, and other secret signature spices!",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a5c699369011b54ea885fcaaa2ade86c"
      },
      {
        "menuItem":"Fries With Nitro Cheese Sauce",
        "menuItemPrice":289,
        "menuType":"Sides",
        "description":"Crunchy Fries with Nitro Cheese Sauce. This takes the fries to the next level.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7b7b255f9f64a2bb236f7099e23e3754"
      },
      {
        "menuItem":"Fries",
        "menuItemPrice":249,
        "menuType":"Sides",
        "description":"Our Fries are crispy and perfectly salted",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/3a110b45d3e920570c6a800831730322"
      }
    ]
  },
  {
    "restaurantName":"Santosh Dhaba",
    "rating":3.5,
    "menuTypes":[
      "Starters",
      "Biryani",
      "Rice",
      "Curries"
    ],
    "imageUrl":"https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2015/10/Maa-da-dhaba.jpg",
    "location":"Attapur",
    "menus":[
      {
        "menuItem":"Baby Corn Manchurian",
        "menuItemPrice":260,
        "menuType":"Starters",
        "description":"A delightfully tasty dish with crunchy baby corn coated in Manchurian sauces, assorted spices and tossed with veggies.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/47e72d167c0a635fe9dc369136fd5e0e"
      },
      {
        "menuItem":"Crispy Corn",
        "menuItemPrice":250,
        "menuType":"Starters",
        "description":"Crispy corn is a snack made by frying corn kernels and then flavoring with spice powders.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/g7uguqwnbtijklrom4mo"
      },
      {
        "menuItem":"Hyderabadi Dum Biryani",
        "menuItemPrice":260,
        "menuType":"Biryani",
        "description":"A Flavorful Combination Of Rice And Assorted Veggies Cooked In A Fragrant And Flavorful Masala Seasoned With Indian Whole Spices.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/btahxn55g0q62xxvbhx4"
      },
      {
        "menuItem":"Paneer Biryani",
        "menuItemPrice":240,
        "menuType":"Biryani",
        "description":"Delectable layers of fragrant basmati rice and succulent paneer cubes, expertly spiced and slow-cooked to perfection, creating a tantalizing Paneer Biryani that's a true culinary delight.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/2aa7034a5d8cddb621bcf1a10059c2e5"
      },
      {
        "menuItem":"Kaju Biryani",
        "menuItemPrice":250,
        "menuType":"Biryani",
        "description":"Delectable Kaju Biryani: Fragrant basmati rice cooked with cashews, aromatic spices, and succulent meat, creating a rich and flavorful experience.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ke4hyj0necg0jeyuvgb9"
      },
      {
        "menuItem":"Kaju Jeera Rice",
        "menuItemPrice":220,
        "menuType":"Rice",
        "description":"Long-grained rice steamed till it's soft, tempered in a mild mix of ghee, loads of cumin, cashew nuts and coriander leaves.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/txwohblofdugdttfk4bf"
      },
      {
        "menuItem":"Lemon Rice",
        "menuItemPrice":170,
        "menuType":"Rice",
        "description":"Zesty lemon-infused rice with a burst of aromatic spices, a South Indian delight that's tangy and flavorful in every bite.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f5880eeba16aed735192f12cb0bb4f7b"
      },
      {
        "menuItem":"Kadai Paneer",
        "menuItemPrice":270,
        "menuType":"Curries",
        "description":"Delicious, spicy and flavorful dish made with paneer, onions, tomatoes, ginger, garlic & fresh ground spices known as kadai masala",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cu83nkn9szm7ia9fbgtn"
      },
      {
        "menuItem":"Paneer Patiala",
        "menuItemPrice":195,
        "menuType":"Curries",
        "description":"Deliciously creamy dish with fresh spinach leaves, paneer, Onions, Tomatoes, Herbs and spices.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/61acdf37ea87a4ea32ecf0cb69c13570"
      },
      {
        "menuItem":"Palak Paneer",
        "menuItemPrice":195,
        "menuType":"Curries",
        "description":"Deliciously creamy dish with fresh spinach leaves, paneer, Onions, Tomatoes, Herbs and spices.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/61acdf37ea87a4ea32ecf0cb69c13570"
      }
    ]
  },
  {
    "restaurantName":"Mandi King Arabian Restaurant",
    "rating":4.8,
    "menuTypes":[
      "Platter",
      "Biryani",
      "Dessert"
    ],
    "imageUrl":"https://serafinadubai.com/wp-content/uploads/2023/03/Mandi-Restaurants-1-1024x675.jpg.webp",
    "location":"Saidabad",
    "menus":[
      {
        "menuItem":"BBQ FISH",
        "menuItemPrice":546,
        "menuTypes":"Platter",
        "description":"Grilled fish seasoned with a tantalizing blend of barbecue spices, delivering a smoky and savory seafood dish",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/cyf06zo5ztaojetowwt8"
      },
      {
        "menuItem":"Lahori Chicken Sheek Kabab(1 Sheek)",
        "menuItemPrice":416,
        "menuTypes":"Platter",
        "description":"Bringing you flavors from beyond the boundaries. Chicken minced, mixed with simple spices 2 Sheekh/4Pcs",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/rq5ymtg8wztfop9phkv7"
      },
      {
        "menuItem":"M36 Special Fish",
        "menuItemPrice":499,
        "menuTypes":"Platter",
        "description":"Grilled fish seasoned with a tantalizing blend of barbecue spices, delivering a smoky and savory seafood dish",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/324e27238fee5830294b9f876afeb093"
      },
      {
        "menuItem":"Chicken Bbq Tikka",
        "menuItemPrice":345,
        "menuTypes":"Platter",
        "description":"Succulent pieces of marinated chicken skewered and grilled to perfection, showcasing the smoky and flavorful essence of barbecue",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/0e5593de08ca131e8ab7610069cd9f0d"
      },
      {
        "menuItem":"Fish Fried Mandi",
        "menuItemPrice":364,
        "menuTypes":"Mandi",
        "description":"Fresh fish marinated in a pool of grounded spices coated and deep fried",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/atakvt14lrurkfkenlhz"
      },
      {
        "menuItem":"Mutton Juicy Mandi(1/2/4)",
        "menuItemPrice":442,
        "menuTypes":"Mandi",
        "description":"Cooked on slow heat marinated with cashews & other middle eastern spices served with succulent mandi or lahori rice",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mvs8pe7psvk3vqnjnckq"
      },
      {
        "menuItem":"Lahori Mutton Sheek Kabab Mandi",
        "menuItemPrice":754,
        "menuTypes":"Mandi",
        "description":"Fresh ground mutton mixed with arabian spices put on skewers and cooked on coal. The texture is smooth. This kabab is a local favourite",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ohw9xsrueq2xapzfipdc"
      },
      {
        "menuItem":"Mix Mandi",
        "menuItemPrice":1586,
        "menuTypes":"Mandi",
        "description":"1JM,1FM,1FC,1JC,1F with rice",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ba2lpcuqhbx3htxjwm2e"
      },
      {
        "menuItem":"Fruit Exotica",
        "menuItemPrice":130,
        "menuTypes":"Dessert",
        "description":"A vibrant and refreshing medley of exotic fruits, meticulously crafted to create a colorful and delightful fruit salad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ymfods8c5fgcvcr58z1a"
      },
      {
        "menuItem":"Rose Phirni",
        "menuItemPrice":130,
        "menuTypes":"Dessert",
        "description":"A traditional Indian rice pudding infused with the essence of fragrant rose, offering a luscious and aromatic dessert experience",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wscsh5nwjgvezszpodls"
      }
    ]
  },
  {
    "restaurantName":"McDonald's",
    "rating":4.1,
    "menuTypes":[
      "Burgers & Wraps",
      "Fried Chicken & Wings",
      "Coffee & Beverages (Hot and Cold)"
    ],
    "imageUrl":"https://d48-a.sdn.cz/d_48/c_img_E_F/9AsDph.jpeg?fl=res,600,,1,ffffff",
    "location":"Humayun Nagar",
    "menus":[
      {
        "menuItem":"McVeggie Burger",
        "menuItemPrice":149,
        "menuType":"Burgers & Wraps",
        "description":"A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a25f25f74a6a6068e55fcbced1580084"
      },
      {
        "menuItem":"McSpicy Paneer Burger",
        "menuItemPrice":199,
        "menuType":"Burgers & Wraps",
        "description":"Rich and filling cottage cheese patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ad20daa26b978ebff5d08572cb6cca7f"
      },
      {
        "menuItem":"McSpicy Chicken Burger",
        "menuItemPrice":199,
        "menuType":"Burgers & Wraps",
        "description":"Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/12b045b7fd1d82b15ebde45b778e22b8"
      },
      {
        "menuItem":"McAloo Tikki Burger",
        "menuItemPrice":62,
        "menuType":"Burgers & Wraps",
        "description":"The World's favourite Indian burger! Crunchy potato and peas patty with delicious Tom Mayo & crunchy onions",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b13811eeee71e578bc6ca89eca0ec87f"
      },
      {
        "menuItem":"McSpicy Fried Chicken 2 Pc + McSpicy Chicken Wings- 4 Pc + 2 Coke",
        "menuItemPrice":419,
        "menuType":"Fried Chicken & Wings",
        "description":"Enjoy McSpicy Fried Chicken 2 Pc + McSpicy Chicken Wings- 4 Pc + 2 Coke - perfect sharing meal for your catchup",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/955ba09d332205cbd6607e86f0986fe4"
      },
      {
        "menuItem":"McSpicy Chicken Wings- 4 Pc",
        "menuItemPrice":151,
        "menuType":"Fried Chicken & Wings",
        "description":"Try the juicy, spicy, crunchy McSpicy Chicken Wings - 4 Pc",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7122300975cc9640e84cdc7e7c74e042"
      },
      {
        "menuItem":"Hot Chocolate (R)",
        "menuItemPrice":219,
        "menuType":"Coffee & Beverages (Hot and Cold)",
        "description":"Sinful chocolate whisked with silky steamed milk and topped with an even sweeter touch of chocolate.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/491e836e6a114d9e3d4e5d8400de8bf5"
      },
      {
        "menuItem":"Cappuccino (R)",
        "menuItemPrice":201,
        "menuType":"Coffee & Beverages (Hot and Cold)",
        "description":"A refreshingly warm shot of espresso made with 100% Arabica beans, topped with milk that is steamed to a thick, perfect froth. A classic favourite.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/0a969eb81b4986afcc6cc3d27d8ad894"
      },
      {
        "menuItem":"Mixed Fruit Beverage",
        "menuItemPrice":76,
        "menuType":"Coffee & Beverages (Hot and Cold)",
        "description":"Made with puree, pulp & juice from 6 delicious fruits",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/8e455d39bbbd8e4107b2099da51f3933"
      },
      {
        "menuItem":"Chilli Guava Coke",
        "menuItemPrice":103,
        "menuType":"Coffee & Beverages (Hot and Cold)",
        "description":"Experience our new blend of spicy guava with bubbly lemony Coke for a refreshing twist with your meal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/79ffc5a8dcf49966890527120655100d"
      }
    ]
  },
  {
    "restaurantName":"Kritunga Multi-Cusine Restaurant",
    "rating":3.6,
    "menuTypes":[
      "Soups",
      "Khichdi",
      "Dessert",
      "Beverages"
    ],
    "imageUrl":"https://as2.ftcdn.net/v2/jpg/04/21/88/65/1000_F_421886584_E9JvnRItlKlU5OmB1P78sxdznEaZj1dn.jpg",
    "location":"Lakdi-Ka-Pul",
    "menus":[
      {
        "menuItem":"Sweet Corn Vegetable Soup (Serves 1)",
        "menuItemPrice":99,
        "menuType":"Soups",
        "description":"Serves 1 | Hearty and wholesome sweetcorn vegetable soup, a delicious blend of sweetness and nutrition",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d07013946735c8652a2a5d31b5acb2cf"
      },
      {
        "menuItem":"Hot N Sour Vegetable Soup (Serves 1)",
        "menuItemPrice":99,
        "menuType":"Soups",
        "description":"Serves 1 | Spicy and tangy hot n sour vegetable soup, a tantalizing explosion of flavors",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/8328a50e03249b48fa6052012625829f"
      },
      {
        "menuItem":"Mixed Veg Khichdi",
        "menuItemPrice":209,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zijhdhbhtcpxcbpsbq1h"
      },
      {
        "menuItem":"Curd Rice",
        "menuItemPrice":199,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/te4jqjtss6sybm1pg1q8"
      },
      {
        "menuItem":"Palak Corn Khichdi",
        "menuItemPrice":239,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/hj5gr5ixsua9dwqxoglv"
      },
      {
        "menuItem":"Tomato Khichdi",
        "menuItemPrice":229,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tarzxmqpi0l3akewcqly"
      },
      {
        "menuItem":"Double Ka Meetha",
        "menuItemPrice":69,
        "menuType":"Dessert",
        "description":"Serves 1 | Single serve of delightful Double Ka Meetha to go after Biryanis and Kebabs. Carbs 49.58g, Fats 24g, Proteins 6.13g 446Kcal. Contains Milk & Milk Products.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dtzpozev57rbwgfshy8y"
      },
      {
        "menuItem":"Royal Faluda",
        "menuItemPrice":210,
        "menuType":"Dessert",
        "description":"Season's special delicious mango falooda to beat the heat this summers",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/t0w5k1rktzpsdwcrweop"
      },
      {
        "menuItem":"Masala Buttermilk",
        "menuItemPrice":70,
        "menuType":"Beverages",
        "description":"A spiced and refreshing drink made by blending buttermilk with a mix of aromatic spices, offering a cooling and flavorful beverage",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/3b5e4e573cbb95cfdebbdc1d1398686a"
      },
      {
        "menuItem":"Thandai",
        "menuItemPrice":160,
        "menuType":"Beverages",
        "description":"A traditional Indian cold drink made with a blend of almonds, fennel seeds, cardamom, and milk, often served during festivals or as a refreshing cooler",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/k8yr2hg29covvkb6vbbs"
      }
    ]
  },
  {
    "restaurantName":"Karachi Bakery",
    "rating":4.3,
    "menuTypes":[
      "Cakes",
      "Biscuit",
      "Appetizer"
    ],
    "imageUrl":"https://static.toiimg.com/photo/48201473.cms",
    "location":"Banjara Hills",
    "menus":[
      {
        "menuItem":"Black Forest Pastry",
        "menuItemPrice":55,
        "menuType":"Cakes",
        "description":"Pastry filled with chopped cherry topped with chocolate flakes",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iknaay9b5ztbcfxtvxe4"
      },
      {
        "menuItem":"Fresh Fruit Pastry",
        "menuItemPrice":80,
        "menuType":"Cakes",
        "description":"Exotic fruit pastry flavored with fresh chopped fruits",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jjsesmisy1wpe3a94jvj"
      },
      {
        "menuItem":"Eggless Butterscotch Cake 800g",
        "menuItemPrice":660,
        "menuType":"Cakes",
        "description":"A moist and indulgent cake, rich with the buttery and caramelized flavor of butterscotch, baked without eggs for a delightful dessert",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zxtgjwbrbzxj4ttiskly"
      },
      {
        "menuItem":"Pista Biscuits",
        "menuItemPrice":85,
        "menuType":"Biscuit",
        "description":"Buttery and nutty biscuits made with the rich flavor of pistachios, providing a delightful crunch and taste",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/8ea94c530b3a5744cb9283f6caa9d8fe"
      },
      {
        "menuItem":"Kaju Badam Biscuits",
        "menuItemPrice":89,
        "menuType":"Biscuit",
        "description":"Crunchy biscuits featuring the delightful combination of cashews (kaju) and almonds (badam), offering a nutty and flavorful treat",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qlabvldzlo96hqboue6a"
      },
      {
        "menuItem":"Chicken Burger",
        "menuItemPrice":110,
        "menuType":"Appetizer",
        "description":"A savory delight featuring a grilled or fried chicken patty nestled in a soft bun, accompanied by fresh vegetables and flavorful condiments",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/lpvd759gkp3nltysskue"
      },
      {
        "menuItem":"Veg Burger",
        "menuItemPrice":80,
        "menuType":"Appetizer",
        "description":"A satisfying vegetarian burger consisting of a veggie patty, fresh lettuce, tomatoes, and condiments, served in a soft bun for a tasty meal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/kjjigb2f6qpej5aj3gja"
      },
      {
        "menuItem":"Veg Grill Sandwich",
        "menuItemPrice":60,
        "menuType":"Appetizer",
        "description":"A hearty sandwich filled with an assortment of grilled vegetables, offering a delicious and wholesome vegetarian option",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wijdwa4lej4iddbdljow"
      },
      {
        "menuItem":"Chicken Pizza Roll",
        "menuItemPrice":60,
        "menuType":"Appetizer",
        "description":"A savory roll filled with seasoned chicken, cheese, and pizza sauce, providing a portable and flavorful twist on classic pizza flavors",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/66d2b50e5b48210e213b1312fadcd5e5"
      },
      {
        "menuItem":"Veg Spring Roll",
        "menuItemPrice":50,
        "menuType":"Appetizer",
        "description":"Crispy and savory rolls filled with a mix of vegetables, noodles, and spices, offering a delightful vegetarian snack",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/u31ramrnrso096lewau4"
      }
    ]
  },
  {
    "restaurantName":"Fruit Bite Natural Juices & Salads",
    "rating":4.5,
    "menuTypes":[
      "Natural Juices",
      "Fruit bowl"
    ],
    "imageUrl":"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2018/4/shutterstock_1By_stockcreations.jpg",
    "location":"Ameerpet",
    "menus":[
      {
        "menuItem":"Natural Orange Juice (from Imported Oranges)",
        "menuItemPrice":109,
        "menuType":"Natural Juices",
        "description":"Fresh orange juice from imported oranges,( we wont add any colors or preservatives) packed in food grade leak proof containers",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vxzdoq4lrv26jfh4k6lc"
      },
      {
        "menuItem":"Mixed Fruit Juice",
        "menuItemPrice":109,
        "menuType":"Natural Juices",
        "description":"Apple, banana, sapota, muskmelon, pomegranate, papaya, watermelon, pineapple, dates will added in this fresh juice. packed in food grade leak proof containers",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gr81nqmpxamgt53ip4fj"
      },
      {
        "menuItem":"Black Grape Juice",
        "menuItemPrice":109,
        "menuType":"Natural Juices",
        "description":"Black grapes will wash twice prior to make juice. packed in food grade leak proof containers",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/spiaho2jgyptovdt9vtq"
      },
      {
        "menuItem":"Sapota Juice",
        "menuItemPrice":109,
        "menuType":"Natural Juices",
        "description":"Fresh sapota juice. packed in food grade leak proof containers",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/uf78pormpd9pv38icqpu"
      },
      {
        "menuItem":"Apple Juice [royalgala Apple]",
        "menuItemPrice":109,
        "menuType":"Natural Juices",
        "description":"We will use only royal gala apples & dates for juice. packed in food grade leak proof containers",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tloew3dcpgbht7cqbmy6"
      },
      {
        "menuItem":"Beetroot Juice [with Pulp]",
        "menuItemPrice":109,
        "menuType":"Natural Juices",
        "description":"Fresh beetroot juice with pulp. packed in food grade leak proof containers",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/x6iybfvkpqo3q0ma05k3"
      },
      {
        "menuItem":"Custard Fruit Salad",
        "menuItemPrice":119,
        "menuType":"Fruit bowl",
        "description":"All fruits are washed prior to cutting, 10 verities of fresh fruits and dry fruits added in fresh custard",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fmwxeb4p54rpwhcack34"
      },
      {
        "menuItem":"2 In 1 Bowl [papaya & Watermelon]",
        "menuItemPrice":99,
        "menuType":"Fruit bowl",
        "description":"Fresh papaya and watermelon pieces in one bowl",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zxcfwlsshnb8ha4wm4fq"
      },
      {
        "menuItem":"Natural Nutrition Fruit Bowl",
        "menuItemPrice":139,
        "menuType":"Fruit bowl",
        "description":"This bowl is perfect choice for a healthy snack with fresh fruits and imported fruits. ingredients: (papaya, pineapple, watermelon, muskmelon,apple,dates, pomogranate seeds,kiwi,dragon fruits.)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/n1shhq8idef3xi2pswx5"
      },
      {
        "menuItem":"Fruit Salad [only Fruit]",
        "menuItemPrice":119,
        "menuType":"Fruit bowl",
        "description":"All fruits are washed prior to cutting, 10 verities of fresh fruits and dry fruits added in this dish",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dvj2gjagbt8ljnvlmuxy"
      }
    ]
  },
  {
    "restaurantName":"Bowl O' China",
    "rating":4.1,
    "menuTypes":[
      "Soup",
      "Starters",
      "Thukpa",
      "Main Course"
    ],
    "imageUrl":"https://images.immediate.co.uk/production/volatile/sites/2/2022/09/chicken-burrito-bowl-2d56799.jpg?quality=90&resize=700,466",
    "location":"Begumpet"
  },
  {
    "restaurantName":"Hotel Niagara",
    "rating":3.9,
    "menuTypes":[
      "Soups",
      "Starters",
      "Biryani",
      "Salad"
    ],
    "imageUrl":"https://t4.ftcdn.net/jpg/05/80/83/11/360_F_580831163_gHJgKLXz4TxnZRSnVpdi779YnI6Vk0FL.jpg",
    "location":"Chaderghat",
    "menus":[
      {
        "menuItem":"Cream of Chicken Soup (Serves 1)",
        "menuItemPrice":139,
        "menuType":"Soups",
        "description":"Serves 1 | Rich and velvety cream of chicken soup, a comforting classic",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/b1aea156cfcb3ca91725408964a9a88d"
      },
      {
        "menuItem":"Cream of Broccoli Soup (Serves 1)",
        "menuItemPrice":99,
        "menuType":"Soups",
        "description":"Serves 1 | Creamy and wholesome cream of broccoli soup, a comforting green delight",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/537f24aa91871f9c3d6cc9a8ffbdd989"
      },
      {
        "menuItem":"Dahi Labneh Kebab (3 Pcs)",
        "menuItemPrice":149,
        "menuType":"Starters",
        "description":"Crafted by Celebrity Chef Kunal Kapur and enriched with gentle flavours of Curd, this kebab is delicately spiced with cumin and ginger & beautifully complements the royal biryani",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/6ae995f6c03a1605cd9036e79444d043"
      },
      {
        "menuItem":"Falafel-E-Khaas (9 Pcs)",
        "menuItemPrice":99,
        "menuType":"Starters",
        "description":"Savour the great taste with shallow fried chickpea nuggets with a blend of aromatic spices",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/c7b64b62f177eb8425bc3842ae777b3b"
      },
      {
        "menuItem":"Murgh Kefta (Chicken Meatball Kebab) (6 Pcs)",
        "menuItemPrice":149,
        "menuType":"Starters",
        "description":"Minced chicken kebabs cooked into soft delicious meatballs served with Minty dip",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9986a4db47645e0552ec4c91585c1428"
      },
      {
        "menuItem":"Tokhm-e-Biryani (Dum Egg Biryani - Serves 1)",
        "menuItemPrice":355,
        "menuType":"Biryani",
        "description":"(Served with 1 Gulab Jamun & Mint Raita) A symphony of humble and intrinsic flavours it is. Hand-picked eggs are freshly boiled to perfection & later adorned with artfully ground fresh Behrouz spices & let to cook in its full glory with basmati rice",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xoefe7dlmthbizk6nils"
      },
      {
        "menuItem":"Murgh Tikka Biryani (Chicken Tikka Dum Biryani - Serves 1)",
        "menuItemPrice":435,
        "menuType":"Biryani",
        "description":"(Boneless, Served with 1 Gulab Jamun & Mint Raita) A potpourri of extravagant flavours, tender chicken spiced with freshly ground Behrouz masala is charcoal-grilled then layered with fragrant basmati & dum-pukht in its full glory",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xpqih4lpjnrdae8fu7lg"
      },
      {
        "menuItem":"Do Gosht ki Dum Biryani (Mutton & Chicken Dum Biryani - Serves 1)",
        "menuItemPrice":485,
        "menuType":"Biryani",
        "description":"(Boneless, Served with 1 Gulab Jamun & Mint Raita) Tantalise your tastebuds with this epicurean delight of succulent chicken & mutton pieces marinated in aromatic spices and dum-pukht with long-grain basmati",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/k1h5fhoymftcs6zdm2kz"
      },
      {
        "menuItem":"Black Chana Salad",
        "menuItemPrice":119,
        "menuType":"Salad",
        "description":"A protein-packed salad combining boiled black chickpeas with vibrant vegetables, herbs, and spices, creating a delicious and satisfying dish",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nfqcinefv9pcjgsdlmih"
      },
      {
        "menuItem":"Sprout Salad",
        "menuItemPrice":119,
        "menuType":"Salad",
        "description":"Nutrient-packed and crunchy, this salad features a blend of sprouted beans, crunchy vegetables, and a tangy dressing, offering a wholesome and protein-rich option",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zo5fgeirchbqr2n1w51d"
      }
    ]
  },
  {
    "restaurantName":"Chutneys",
    "rating":4.2,
    "menuTypes":[
      "Dosa",
      "Veg Main Course",
      "Jain Specialities",
      "Rice & Indian Breads"
    ],
    "imageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hsmuwtvvgj30r0mnldee",
    "location":"Sri Sai Tarun Enclave",
    "menus":[
      {
        "menuItem":"Paneer Tikka Dosa",
        "menuItemPrice":295,
        "menuType":"Dosas",
        "description":"Serves with coconut chutney, groundnut chutney, red allam chutney and sambar.",
        "menuImageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBQ-L4n3xS3_YLsW-4zBLYt74TqK1LMjNSQ&usqp=CAU"
      },
      {
        "menuItem":"Baby corn Dosa",
        "menuItemPrice":295,
        "menuType":"Dosas",
        "description":"Serves with coconut chutney, groundnut chutney, red allam chutney and sambar.",
        "menuImageUrl":"https://i.ytimg.com/vi/b93003dLC9U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBw1YXQbVWhdgFReFt1FaRHa5y4w"
      },
      {
        "menuItem":"Paneer Butter Masala",
        "menuItemPrice":415,
        "menuType":"Veg Main Course",
        "description":"A popular Punjabi delight, paneer butter masala, a creamy and indulgent dish cooked in an onion tomato gravy.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vs3rtyoqf73cvlcahj4z"
      },
      {
        "menuItem":"Mixed Veg Curry",
        "menuItemPrice":415,
        "menuType":"Veg Main Course",
        "description":"Delicious Mixed Veg Curry bursting with vibrant vegetables, simmered in aromatic spices, a perfect savory delight for a hearty meal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/btpj9s3po3xu3vtg6rdv"
      },
      {
        "menuItem":"Kadai Paneer",
        "menuItemPrice":415,
        "menuType":"Veg Main Course",
        "description":"A delightful combination of paneer cubes, capsicum, and onions tossed in authentic Indian masala giving the dish a tasty flavor.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/dztx8chvtg4kk1yfqqj0"
      },
      {
        "menuItem":"Paneer Butter Masala (Jain)",
        "menuItemPrice":415,
        "menuType":"Jain Specialties",
        "description":"Fresh paneer cooked in tomato puree and cream without the use of onion and garlic.",
        "menuImageUrl":"https://www.funfoodfrolic.com/wp-content/uploads/2020/10/Paneer-Makhani-5.jpg"
      },
      {
        "menuItem":"Paneer Shahi Korma (Jain)",
        "menuItemPrice":415,
        "menuType":"Jain Specialties",
        "description":"Exquisite Jain Paneer Shahi Korma: Creamy, royal, and richly spiced, a delightful vegetarian indulgence for a regal dining experience.",
        "menuImageUrl":"https://sinfullyspicy.com/wp-content/uploads/2023/09/1200-by-1200-images-2-1.jpg"
      },
      {
        "menuItem":"Jeera Rice",
        "menuItemPrice":330,
        "menuType":"Rice & Indian Breads",
        "description":"Steamed white rice tempered with cumin seeds tossed with butter.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/0aa9b0ec1b286c7adcbdb3d5b5feee7f"
      },
      {
        "menuItem":"Paneer Kulcha",
        "menuItemPrice":145,
        "menuType":"Rice & Indian Breads",
        "description":"Soft and flavorful Indian bread stuffed with succulent paneer, a perfect delight for your taste buds.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/r6fw2eicohntylhli1y3"
      },
      {
        "menuItem":"Rumali Roti",
        "menuItemPrice":135,
        "menuType":"Rice & Indian Breads",
        "description":"Thin and soft Indian flatbread, Rumali Roti, perfect for pairing with your favorite curries.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vwbugyeyqhemds78xbcj"
      }
    ]
  },
  {
    "restaurantName":"Mandi @36",
    "rating":4.1,
    "menuTypes":[
      "Soups",
      "Mandi",
      "Platter",
      "Dessert"
    ],
    "imageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/b05aeee423432612309044c49b111156",
    "location":"Banjara Hills",
    "menus":[
      {
        "menuItem":"Arabian Mutton Soup",
        "menuItemPrice":175,
        "menuType":"Soups",
        "description":"A hearty and aromatic broth infused with tender mutton pieces, traditional spices, and wholesome vegetables, creating a comforting Arabian soup",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/2721a678597d314773e8791070cf4bdb"
      },
      {
        "menuItem":"Arabian Chicken Soup",
        "menuItemPrice":150,
        "menuType":"Soups",
        "description":"A flavorful and nourishing soup featuring tender chicken, aromatic herbs, and spices, delivering a comforting taste of Arabian cuisine",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/33c70840c77fe0afcab81b5b5d073afa"
      },
      {
        "menuItem":"Fish Grilled Mandi",
        "menuItemPrice":625,
        "menuType":"Mandi",
        "description":"Grilled fish prepared in the Mandi style, showcasing a delightful blend of Arabian spices and flavors, served with fragrant rice for a savory seafood experience",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc6c15cb8427f98b4a0147d03f7ce84c"
      },
      {
        "menuItem":"Mutton Madfoon Mandi",
        "menuItemPrice":875,
        "menuType":"Mandi",
        "description":"A classic Arabian dish consisting of slow-cooked mutton, aromatic rice, and a harmonious blend of spices, providing a rich and flavorful culinary experience",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/035207b10838f8a733d41a4dca780012"
      },
      {
        "menuItem":"Chicken Fried Mandi",
        "menuItemPrice":580,
        "menuType":"Mandi",
        "description":"An Arabian delight featuring succulent chicken, fragrant rice, and a medley of spices, slow-cooked to perfection for a delicious and aromatic Mandi dish",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fe7cf91a050a8959404fe94dc277179d"
      },
      {
        "menuItem":"36 Mix Platter",
        "menuItemPrice":2749,
        "menuType":"Platter",
        "description":"(Mutton + Chicken mix platter)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/56516ee6ce295e981302f818b632abe0"
      },
      {
        "menuItem":"Mutton Mix Platter",
        "menuItemPrice":2999,
        "menuType":"Platter",
        "description":"(Mutton Sheek kabab, Mutton Talahua, Mutton Barbeque)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/c99eda0aceeba3d8bc242b9efad0630a"
      },
      {
        "menuItem":"M36 Special Sultan Platter",
        "menuItemPrice":3499,
        "menuType":"Platter",
        "description":"(Mutton + Chicken +Fish mix platter)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d3a0b0c1f2cf2e339be0f7b6974b317c"
      },
      {
        "menuItem":"Kunafa",
        "menuItemPrice":299,
        "menuType":"Dessert",
        "description":"A traditional Middle Eastern dessert made with thin noodle-like pastry layers, filled with sweet cheese or nuts, and soaked in sugar syrup, offering a delightful and indulgent treat",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dd125fa2c1ae2f4c01711d30fcb1ccf0"
      },
      {
        "menuItem":"Ummali",
        "menuItemPrice":190,
        "menuType":"Dessert",
        "description":"A delectable Arabian dessert, Umm Ali is a creamy and comforting bread pudding made with layers of puff pastry, nuts, and raisins, often flavored with cardamom and rose water",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ddf378809c81f08d2e17e8aded55c877"
      }
    ]
  },
  {
    "restaurantName":"Chinese Wok",
    "rating":4.0,
    "menuTypes":[
      "Momos",
      "Rice & Noodles - Half",
      "Gravy"
    ],
    "imageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0839ff574213e6f35b3899ebf1fc597",
    "location":"Ameerpet",
    "menus":[
      {
        "menuItem":"Steamed Schezwan Paneer Momo with Momo Chutney",
        "menuItemPrice":149,
        "menuType":"Momos",
        "description":"Serves 1 | Paneer filling mixed with Indian spices and Schezwan sauce enveloped in a thin wrapper, steamed to perfection, served with a choice of dip. 372.35kcal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/11a979290bf3451004d70b476d7855de"
      },
      {
        "menuItem":"Steamed Chicken Corn & Cheese with Momo Chutney",
        "menuItemPrice":149,
        "menuType":"Momos",
        "description":"Serves 1 | Melted cheese mixed with minced chicken and yellow corn enveloped in a thin wrapper, steamed to perfection, served with a choice of dip. 348.75kcal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f0150597c36703ae21bbe57b08360fa4"
      },
      {
        "menuItem":"Fried Veg Corn n' Cheese Momos with Momo Chutney",
        "menuItemPrice":149,
        "menuType":"Momos",
        "description":"Serves 1 | (6 pcs) melted cheese mixed with yellow corn enveloped in a thin wrapper, fried to perfection, served with a choice of dip. 678.6kcal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/572fd1dba6f83ecdd2c5b002eff91e"
      },
      {
        "menuItem":"Fried Chicken Corn & Cheese with Momo Chutney",
        "menuItemPrice":149,
        "menuType":"Momos",
        "description":"Serves 1 | Melted cheese mixed with minced chicken and yellow corn enveloped in a thin wrapper, fried to perfection, served with momo chutney. 794.15kcal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/74e7d2ac8467d741193803e21bbc76c7"
      },
      {
        "menuItem":"Veg Chinese Fried Rice - Half",
        "menuItemPrice":149,
        "menuType":"Rice & Noodles - Half",
        "description":"Serves 1 | Rice tossed with carrot, French beans & baby corn. Garnished with spring onion.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fa4bbd49d24c66760b60116e74ae0f5a"
      },
      {
        "menuItem":"Chicken Chinese Fried Rice - Half",
        "menuItemPrice":149,
        "menuType":"Rice & Noodles - Half",
        "description":"Serves 1 | Rice tossed with diced chicken, egg & mixed veggies (carrot, French beans & baby corn) garnished with spring onion.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ty7i6mufsllmhyr5ydop"
      },
      {
        "menuItem":"Veg Chilli Garlic Noodles - Half",
        "menuItemPrice":149,
        "menuType":"Rice & Noodles - Half",
        "description":"Serves 1 | Noodles tossed with carrot, capsicum & onion, flavored with chili flakes, garlic & soy, garnished with spring onion.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b1a2eaadf54f0cdca64b7119f367830b"
      },
      {
        "menuItem":"Chicken Chilli Garlic Noodles - Half",
        "menuItemPrice":149,
        "menuType":"Rice & Noodles - Half",
        "description":"Serves 1 | Noodles tossed with carrot, cabbage, onion, egg and chicken flavored with chili flakes, garlic and soy garnished with spring onion.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d4wmwa0in7rvrgp70vpu"
      },
      {
        "menuItem":"Chicken Schezwan Gravy",
        "menuItemPrice":149,
        "menuType":"Gravy",
        "description":"Serves 1 | Diced chicken and mixed veggies tossed in our schezwan sauce.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/0c71d7d1b7f36b07adf44968b3f90378"
      },
      {
        "menuItem":"Schezwan Paneer Gravy",
        "menuItemPrice":149,
        "menuType":"Gravy",
        "description":"Serves 1 | Paneer & mixed veggies tossed in schezwan sauce.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cusxqpir6uaj4eznzwha"
      }
    ]
  },
  {
    "restaurantName":"Paradise Biryani",
    "rating":3.7,
    "menuTypes":[
      "Soups",
      "Starters",
      "Biryani",
      "curries",
      "Dessert"
    ],
    "imageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/dv8ste4rk78q2ykiuzh9",
    "location":"Khairtabad",
    "menus":[
      {
        "menuItem":"Tomato Egg Drop Soup",
        "menuItemPrice":129,
        "menuType":"Soups",
        "description":"Serves 1 | A spicy Indo-Chinese delight packed with crunchy veggies and bold flavors",
        "menuImageUrl":"https://omnivorescookbook.com/wp-content/uploads/2021/10/211012_Tomato-Egg-Drop-Soup_3.jpg"
      },
      {
        "menuItem":"Chicken Tikka Roll",
        "menuItemPrice":169,
        "menuType":"Starters",
        "description":"Serves 1 | Signature Chicken Tikka wrapped in flaky Malabar paratha with a fiery tangy sauce",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/b16242c2436fa07b135fc2369d544c11"
      },
      {
        "menuItem":"Tangdi Kabab",
        "menuItemPrice":239,
        "menuType":"Starters",
        "description":"Drumstick chicken pieces marinated in a rich blend of spices and yogurt, then char-grilled to achieve a smoky flavor and tender texture",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/kkwtkqjl1tnm5xvxutu2"
      },
      {
        "menuItem":"Tandoori Chicken",
        "menuItemPrice":259,
        "menuType":"Starters",
        "description":"Iconic Indian dish featuring marinated chicken, traditionally cooked in a tandoor (clay oven) for a smoky, charred exterior and juicy, flavorful interior",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/cq3mfise70uu7pr8dybv"
      },
      {
        "menuItem":"Mini chicken Dum Biryani (Serves - Small Hunger)",
        "menuItemPrice":179,
        "menuType":"Biryani",
        "description":"Serves 1 | Mini Chicken Biryani having portion Size of 350 Grms accompanied with succulent 1 Chicken piece & blend of spices, layered with the finest Basmati Rice apt for One Light Eater or a Mini Hunger Pang",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nypkj7fapchrygefmth3"
      },
      {
        "menuItem":"Nizami Mutton Dum Biryani",
        "menuItemPrice":489,
        "menuType":"Biryani",
        "description":"Serves 1 | Freshly Cooked Kachhi Dum Biryani made with the finest of long grain Basmati Rice and cooked with tender 8 pieces of lamb, marinated in an exotic blend of handpicked spices, and then garnished with strands of saffron and aromatic ghee (clarified butter). It's served with a complimentary portion of Mirchi Ka Salan and Raita. A dish so delicious, that it's a crime to share it with another person, though you could.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/umclekecoc9sojq0c24c"
      },
      {
        "menuItem":"Chicken Curry",
        "menuItemPrice":269,
        "menuType":"curries",
        "description":"Serves 1 | Chunks of Chicken (with bone) delicately cooked in a lip-smacking gravy bursting with the flavors of special spice mixture",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/e7f6db175292c2b25d87a88fd4e1202c"
      },
      {
        "menuItem":"Chicken Masala",
        "menuItemPrice":269,
        "menuType":"curries",
        "description":"Serves 1 | Chicken (with bone) cooked with onion, tomatoes and cashew gravy",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/0b1afddb674878a7c95f15bd0ca27959"
      },
      {
        "menuItem":"Gulab Jamun (2 pcs)",
        "menuItemPrice":69,
        "menuType":"Dessert",
        "description":"Serves 1 | Single serve of delicious Gulab Jamun to go after Biryanis and Kebabs. Carbs 58.75g, Fats 15.62g, Proteins 6.87g, 400Kcal. Does not contain any allergens.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/29ef9213ed46c653b7934950a530319d"
      },
      {
        "menuItem":"Khubani Ka Meetha",
        "menuItemPrice":149,
        "menuType":"Dessert",
        "description":"Serves 1 | A sweet treat from Hyderabad, this heavenly dessert comprises of dried apricots and sugar, enriched with saffron strands and rose water. Carbs 39.83g, Fats 0.12g, Proteins 0.4g 157Kcal. Does not contain any allergens.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mhuxlmhkfbal9cdi7pyx"
      }
    ]
  },
  {
    "restaurantName":"Pista House Bakery",
    "rating":4.3,
    "menuTypes":[
      "Roll",
      "Wrap",
      "Cake",
      "Salad"
    ],
    "imageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xrnrtevdf9w3pfvxlaei",
    "location":"Mehdipatnam",
    "menus":[
      {
        "menuItem":"Black Forest Cake",
        "menuItemPrice":578,
        "menuType":"Cake",
        "description":"A luscious chocolate cake layered with whipped cream, cherries, and chocolate shavings, creating a classic and indulgent dessert",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/b6183d94c6ef781c423a4f862943a744"
      },
      {
        "menuItem":"Butter Scotch Cake",
        "menuItemPrice":473,
        "menuType":"Cake",
        "description":"A delectable cake infused with the rich and caramelized flavor of butterscotch, offering a sweet and buttery treat",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/be5273cd97d446305a714cec72e2d710"
      },
      {
        "menuItem":"Chocolate Cake",
        "menuItemPrice":787.85,
        "menuType":"Cake",
        "description":"A moist and irresistible cake made with rich chocolate layers, perfect for satisfying chocolate cravings",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/52a76322e492272ff130076d27685167"
      },
      {
        "menuItem":"Chicken Kabab Wrap",
        "menuItemPrice":115.50,
        "menuType":"Wrap",
        "description":"Grilled or skewered chicken kababs wrapped in a flatbread with fresh vegetables and sauces, providing a tasty and portable meal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/v8l2uthbwgi6eips9lqv"
      },
      {
        "menuItem":"Chicken Tikka Wrap",
        "menuItemPrice":115.50,
        "menuType":"Wrap",
        "description":"Tender chicken tikka pieces wrapped in a flatbread with a medley of veggies and sauces, offering a flavorful and convenient option",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tvxycf4eyagaz8f324m1"
      },
      {
        "menuItem":"Chicken 65 Roll",
        "menuItemPrice":115.50,
        "menuType":"Roll",
        "description":"Spicy and flavorful Chicken 65 wrapped in a soft roll, creating a convenient and delicious handheld snack",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/68d7e56d6c0d3e007c05ed3f60b6eb33"
      },
      {
        "menuItem":"Chicken Kathi Roll",
        "menuItemPrice":115.50,
        "menuType":"Roll",
        "description":"A popular street food, featuring spiced chicken wrapped in a paratha (Indian flatbread) along with fresh vegetables and chutneys",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mpelaov2ubnp5t5hmmvl"
      },
      {
        "menuItem":"Chicken Butter Roll",
        "menuItemPrice":115.50,
        "menuType":"Roll",
        "description":"Succulent chicken cooked in a rich and creamy buttery sauce, rolled in a flatbread for a flavorful and satisfying experience",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xkzhgscuxfpesgvfkx8z"
      },
      {
        "menuItem":"Veg Salad",
        "menuItemPrice":105,
        "menuType":"Salad",
        "description":"A fresh and nutritious salad made with a variety of vegetables, offering a light and healthy option",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/z5xhesxti20jbqssyqgi"
      },
      {
        "menuItem":"Chicken Salad",
        "menuItemPrice":126,
        "menuType":"Salad",
        "description":"A protein-packed salad featuring tender chicken pieces, fresh greens, and a variety of vegetables, providing a hearty and flavorful meal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/12917090e06cb064f8a91918b4cc0860"
      }
    ]
  },
  {
    "restaurantName":"Makers Of Milkshakes",
    "rating":4.1,
    "menuTypes":[
      "Million Dollar Shakes",
      "Fruit Walker",
      "Coco Bros",
      "Mom Special Shakes"
    ],
    "imageUrl":"https://www.tastingtable.com/img/gallery/13-fast-food-milkshakes-ranked-worst-to-best/intro-1690826763.jpg",
    "location":"Padmarao Nagar",
    "menus":[
      {
        "menuItem":"Dry Fruit Thickshake",
        "menuItemPrice":251,
        "menuType":"Million Dollar Shakes",
        "description":"Ricy creamy healthy drink with loads of dry fruits well blended . (Calories -949.95)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yxs6akc3jthokh2h3ib5"
      },
      {
        "menuItem":"Belgium Explode Thickshake",
        "menuItemPrice":260,
        "menuType":"Million Dollar Shakes",
        "description":"Our recommended composite of belgium dark chocolate and oreo cookie crumbles topped with our premium chocolate syrup. (Calories -812.02)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/r7ejgbgjq8fweiriogc0"
      },
      {
        "menuItem":"Pretty Paris Thickshake",
        "menuItemPrice":260,
        "menuType":"Million Dollar Shakes",
        "description":"Our recommended composite of belgium dark chocolate and oreo cookie crumbles topped with our premium chocolate syrup. (Calories -851.9)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/boz6wjj51imowdmydljo"
      },
      {
        "menuItem":"Strawberry Thickshake",
        "menuItemPrice":203,
        "menuType":"Fruit Walker",
        "description":"(Calories -602.2)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jl2xojuxg9ylcasa3k41"
      },
      {
        "menuItem":"Green Apple Thickshake",
        "menuItemPrice":203,
        "menuType":"Fruit Walker",
        "description":"(Calories -599.01)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/796da748190c4c3fb69e177750443aab"
      },
      {
        "menuItem":"Nutella Brownie Thickshake",
        "menuItemPrice":233,
        "menuType":"Coco Bros",
        "description":"A heavy choco fest with rich nutella and brownie blend . (Calories -886.8)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d52c1334eed5f51178132c0f84caaf29"
      },
      {
        "menuItem":"Peanut Butter Brownie Thickshake",
        "menuItemPrice":233,
        "menuType":"Coco Bros",
        "description":"Goodness of heavenly brownie blended with creamy peanut butter. (Calories -821.3)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dn9hxczjns74ysmboqhz"
      },
      {
        "menuItem":"Kit Kat Thickshake",
        "menuItemPrice":227,
        "menuType":"Mom Special Shakes",
        "description":"Classic vanilla combined with crunchy KitKat, topped with chocolate sauce.|CHEF'S SPECIAL| (Calories -633.89)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dbk830karxyz9gafljnp"
      },
      {
        "menuItem":"Choco Roco Thickshake",
        "menuItemPrice":236,
        "menuType":"Mom Special Shakes",
        "description":"A composite of chocolate base and oreo cookies with a rich chocolate syrup to top it up.(Calories -755.7)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/c02c663f40a074f6fd3bc6069491defd"
      },
      {
        "menuItem":"Cookies N Cream Thickshake",
        "menuItemPrice":227,
        "menuType":"Mom Special Shakes",
        "description":"We add icecream with rich oreo flavour, garnishing with oreo crumbles and chocolate topping|CHEF'S SPECIAL| (Calories -748.2)",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/trrqwkzf66kgxbuuwbpj"
      }
    ]
  },
  {
    "restaurantName":"Balaji Family Dhaba",
    "rating":3.8,
    "menuTypes":[
      "Pulao [Basmati Ki Khusbu]",
      "Biryani [Basmati Ki Khushbu]",
      "Jumbo [Family Pack]",
      "Paneer & Kaju Curries",
      "Rolls"
    ],
    "imageUrl":"https://indiagateflours.com/superadmin/upload/blog/punjabi-recipes.jpg",
    "location":"New Nallakunta",
    "menus":[
      {
        "menuItem":"Paneer Pulao",
        "menuItemPrice":220,
        "menuType":"Pulao [Basmati Ki Khusbu]",
        "description":"Paneer Pulao - Easy, Simple, Delicious, Aromatic, Gluten-free and perfect Vegetarian dish",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/db14009f8e72028d77c699b5f1a72a5b"
      },
      {
        "menuItem":"Veg Pulao",
        "menuItemPrice":210,
        "menuType":"Pulao [Basmati Ki Khusbu]",
        "description":"Vegetable Pulao (Veg Pulav) is a spicy rice dish prepared by cooking rice with various vegetables and spices.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q8aj9vd4lljk2dmvsfnn"
      },
      {
        "menuItem":"Paneer Biryani",
        "menuItemPrice":240,
        "menuType":"Biryani [Basmati Ki Khushbu]",
        "description":"Aromatic basmati rice layered with succulent, cubed paneer for an indulgent vegetarian biryani.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/6a42d26824ee7321fcbdce42324d3da2"
      },
      {
        "menuItem":"Spl Kaju Paneer Biryani",
        "menuItemPrice":330,
        "menuType":"Biryani [Basmati Ki Khushbu]",
        "description":"A luxurious vegetarian biryani rich with cashews, paneer, and aromatic Indian spices.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a1f77160d4048ba961a860ad9268d34f"
      },
      {
        "menuItem":"Kaju Biryani Family Pack",
        "menuItemPrice":700,
        "menuType":"Jumbo [Family Pack]",
        "description":"Sinfully creamy biryani prepared with flavored rice and cashews cooked in a creamy masala and topped with cashews.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ajaszbmvpsorsn7qs8ge"
      },
      {
        "menuItem":"Paneer Biryani Family Pack",
        "menuItemPrice":650,
        "menuType":"Jumbo [Family Pack]",
        "description":"Soft paneer cubes and flavored rice slow cooked in a delicious mix of Indian masala flavored with aromatic spices.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pu7gxithujoxsuxfqn2t"
      },
      {
        "menuItem":"Paneer Chatpata",
        "menuItemPrice":240,
        "menuType":"Paneer & Kaju Curries",
        "description":"A spicy but tangy style of preparing cottage cheese in the chef's special style.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gomupj9zwvb7bw0qybn0"
      },
      {
        "menuItem":"Kaju Butter Masala",
        "menuItemPrice":270,
        "menuType":"Paneer & Kaju Curries",
        "description":"A delightful combination of crunchy cashew nuts and butter in a north Indian style gravy.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vpjiwmt1ktzw7gdny8bs"
      },
      {
        "menuItem":"Veg Corn Roll",
        "menuItemPrice":330,
        "menuType":"Rolls",
        "description":"Delicious veg corn roll with a flavorful mix of corn, veggies, and spices, rolled in a soft wrap.",
        "menuImageUrl":"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/veg-rolls-chapati-rolls.jpg.webp"
      },
      {
        "menuItem":"Paneer Roll",
        "menuItemPrice":330,
        "menuType":"Rolls",
        "description":"A delectable fusion of succulent paneer chunks wrapped in a soft flatbread, served with flavorful spices.",
        "menuImageUrl":"https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg"
      }
    ]
  },
  {
    "restaurantName":"Hotel Sohail Waves",
    "rating":4.2,
    "menuTypes":[
      "Starters",
      "Biryani",
      "Khichdi",
      "Dessert"
    ],
    "imageUrl":"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/04/21152009/shutterstock_1183813381-1.jpg",
    "location":"Chanchalguda",
    "menus":[
      {
        "menuItem":"Chicken 65 (dry)",
        "menuItemPrice":189,
        "menuType":"Starters",
        "description":"Spicy and flavorful bite-sized fried chicken pieces, coated in a seasoned batter and tossed with aromatic spices for a popular and appetizing dish",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/grerq04xktolgjjcva8t"
      },
      {
        "menuItem":"Hara Bhara Kebab",
        "menuItemPrice":149,
        "menuType":"Starters",
        "description":"Savour the goodness of finely minced potatoes, garden-fresh spinach and green peas, gently spiced with shahi masalas and shallow-fried to perfection. Coated with a generous layer of bread crumbs, these tender yet crispy kebabs will brighten up your daawat",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ae5f27c741c628d8ec3020db25197a46"
      },
      {
        "menuItem":"Gosht-E-Galouti Kebab (Mutton Galauti Kebab)",
        "menuItemPrice":275,
        "menuType":"Starters",
        "description":"A melt-in-mouth culinary delicacy it can take the most enigmatic feasts a notch above. Tenderest mutton is minced to perfection & cooked with delicate spices to offer you a truly exquisite culinary experience",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/0f5f80e21c9cc2f175d21e882eda0d89"
      },
      {
        "menuItem":"Paneer Subz Biryani (Paneer Dum and Veg Biryani - Serves 1)",
        "menuItemPrice":355,
        "menuType":"Biryani",
        "description":"(Served with 1 Gulab Jamun & Mint Raita) In this immaculately balanced culinary masterpiece, diced fresh vegetables infused with succulent pieces of spiced paneer are layered on a bed of aromatic rice",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xxwcydkccq651lzvrtkd"
      },
      {
        "menuItem":"Murgh Afghani Tikka Biryani (Creamy Chicken Tikka - Serves 1)",
        "menuItemPrice":455,
        "menuType":"Biryani",
        "description":"(Boneless, Served with 1 Gulab Jamun & Mint Raita) Legendary for its rich taste & creamy texture, tender chicken marinated in fresh creamy yoghurt & spices is layered with aromatic basmati. Let your tastebuds feel enchanted!",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/n7khabrtrcenjnkbhmfe"
      },
      {
        "menuItem":"Maggi Masala Khichdi",
        "menuItemPrice":229,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qkmj4tnzkvwaz7xyepeh"
      },
      {
        "menuItem":"Daliya Khichdi",
        "menuItemPrice":249,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zfeti5z0ezy4y6c968xl"
      },
      {
        "menuItem":"Gulab Jamun With Icecream",
        "menuItemPrice":150,
        "menuType":"Dessert",
        "description":"Fresh homemade gulab jamun with yummy vanilla icecream",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/c3skxdrylx8aucyaruws"
      },
      {
        "menuItem":"Gajar Ka Halwa",
        "menuItemPrice":129,
        "menuType":"Dessert",
        "description":"Fresh home made, absolutely delicious gajar ka halwa to pamper your taste buds.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/e3q7nomlhaknidotea60"
      },
      {
        "menuItem":"Ayran (Badammilk)",
        "menuItemPrice":65,
        "menuType":"Dessert",
        "description":"A popular drinks from the land of Behrouz, Ayran is a Persian take of buttermilk topped with mint",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wttvnnzenyee9fsgvxda"
      }
    ]
  },
  {
    "restaurantName":"Ameerpet Bawarchi",
    "rating":4.3,
    "menuTypes":[
      "Salad",
      "Khichdi",
      "Biryani",
      "Beverages"
    ],
    "imageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/727ee82703c6fa71d1c954ead91dc20d",
    "location":"Attapur",
    "menus":[
      {
        "menuItem":"Green Salad",
        "menuItemPrice":129,
        "menuType":"Salad",
        "description":"A crisp and refreshing medley of assorted fresh greens, tomatoes, cucumbers, and other vegetables, drizzled with a zesty dressing",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jojxjrbdzshk1dgxnjiw"
      },
      {
        "menuItem":"Corn Salad",
        "menuItemPrice":119,
        "menuType":"Salad",
        "description":"A vibrant mix of sweet corn kernels, colorful bell peppers, red onions, and herbs, tossed in a light vinaigrette for a flavorful and wholesome salad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/o7wgdqguoesjir0f8lwn"
      },
      {
        "menuItem":"Oats Khichdi",
        "menuItemPrice":249,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zdkjwo4vw68u8zqvrkab"
      },
      {
        "menuItem":"Soya Khichdi",
        "menuItemPrice":239,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/a481iaoyf91kj9izc7ui"
      },
      {
        "menuItem":"Sprouts Khichdi",
        "menuItemPrice":249,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/uhp3ps0f654smwkiiyuh"
      },
      {
        "menuItem":"Quinoa Khichdi",
        "menuItemPrice":249,
        "menuType":"Khichdi",
        "description":"Made with pure desi ghee and served with pickle, recommended with raita and papad",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qd8mpg6hbxpejsly064u"
      },
      {
        "menuItem":"Special Veg Dum Biryani (Serves 1-2)",
        "menuItemPrice":329,
        "menuType":"Biryani",
        "description":"Serves 1 | Fresh assorted Vegetables are seasoned with exotic herbs and spices, and then cooked inside layers of the finest Basmati Rice. A treat for the vegetarians, it's served with a complimentary portion of Mirchi-ka-Salan and Raita. If you're hungry, you'll polish off the last grain all by yourself. Or you may choose to share it between 2 people.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tlnbqsv1isah2wawfwd5"
      },
      {
        "menuItem":"Egg Biryani (Serves 1-2)",
        "menuItemPrice":349,
        "menuType":"Biryani",
        "description":"Serves 1 | A flavorful medley of finest basmati rice, boiled Eggs, and aromatic spices. Ideally for one person but can be shared between two people. Served with Mirchi-ka-Salan and Raita. Carbs 428.63g, Fats 96g, Proteins 64.17g, 2866 Kcal. Contains Egg and Milk & Milk Products.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/5b4ba514a42e56630f28d5007e590bb5"
      },
      {
        "menuItem":"Jaljeera",
        "menuItemPrice":70,
        "menuType":"Beverages",
        "description":"A tangy and spicy Indian beverage made with cumin, mint, and tamarind, typically served chilled as a refreshing summer drink",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/877dec0aac180d41d3768908e1e37d6b"
      },
      {
        "menuItem":"Fresh Lime Juice",
        "menuItemPrice":70,
        "menuType":"Beverages",
        "description":"A simple and refreshing drink made with freshly squeezed lime juice, water, and sugar, providing a zesty and revitalizing flavor",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/44ea09112ef932140dd8a2e992cfaf28"
      }
    ]
  },
  {
    "restaurantName":"Oven Story Pizza - Standout Toppings",
    "rating":4.0,
    "menuTypes":[
      "Pizzas",
      "Pasta"
    ],
    "imageUrl":"https://www.mumbailive.com/images/news/images_1517830413799_Pizza%20cover%20final.jpg?fm=webp&w=1368",
    "location":"Abids",
    "menus":[
      {
        "menuItem":"Margherita Pizza",
        "menuItemPrice":169,
        "menuType":"Pizzas",
        "description":"Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/dpventcrozvfni0lqb10"
      },
      {
        "menuItem":"Veggie Supreme",
        "menuItemPrice":379,
        "menuType":"Pizzas",
        "description":"Serves 1 | A supreme combination of Black Olives, Green Capsicum, Mushroom, Onion, spicy Red Paprika & juicy Sweet Corn with flavourful pan sauce and 100% mozzarella cheese.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/z0c4xpovma1qtmu4tlls"
      },
      {
        "menuItem":"Chicken Supreme",
        "menuItemPrice":409,
        "menuType":"Pizzas",
        "description":"Serves 1 | Loaded with delicious Chicken Tikka, flavourful Herbed Chicken, spicy Schezwan Chicken Meatball with flavourful pan sauce and 100% mozzarella cheese.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/dlvdmsn1uotbdn4vzvap"
      },
      {
        "menuItem":"Awesome American Cheesy Chicken",
        "menuItemPrice":379,
        "menuType":"Pizzas",
        "description":"Serves 1 | Our divine Peruvian flavoured cheesy sauce, topped with classic chicken pepperoni, cheese and chicken sausage black olives, spicy jalapeno and 100% mozzarella cheese, finished with a generous drizzle of Texas garlic sauce.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f55016931d13f7489c6140de76fa16aa"
      },
      {
        "menuItem":"Keema Makhani Pasta - New",
        "menuItemPrice":259,
        "menuType":"Pasta",
        "description":"Serves 1 | Pasta in our new flavourful makhni sauce with chicken keema masala, onion, green capsicum & red capsicum.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f0674966d680a2777ab1233b0f282fa5"
      },
      {
        "menuItem":"Classic Makhani Pasta - New",
        "menuItemPrice":239,
        "menuType":"Pasta",
        "description":"Serves 1 | Pasta in our new flavourful makhni sauce with onion, green capsicum, red capsicum and juicy sweet corn.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/258eeee2fcac674a838180a75d2dd3a6"
      },
      {
        "menuItem":"Spicy Schezwan Pasta - Veg - New",
        "menuItemPrice":229,
        "menuType":"Pasta",
        "description":"Serves 1 | Spicy Schezwan sauce pasta with onion, green capsicum, red capsicum and juicy sweet corn",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c6aea671a74704ce9f39dba98d5846dd"
      },
      {
        "menuItem":"Cheesy Comfort",
        "menuItemPrice":239,
        "menuType":"Pasta",
        "description":"Serves 1 | Cheesy creamy pasta comfort topped with onion, green capsicum, red capsicum & sweet corn",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f2miudjhhrpyeyxn23dz"
      },
      {
        "menuItem":"Brow-wow-nie",
        "menuItemPrice":109,
        "menuType":"Beverages & Desserts",
        "description":"Serves 1 | A divine choco brownie for your all-time chocolate cravings",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7ac7f4004c86ebb381fa1c0c3bd58722"
      },
      {
        "menuItem":"7up Pet Bottle",
        "menuItemPrice":57,
        "menuType":"Beverages & Desserts",
        "description":"Serves 1 | Quench your thirst with the refreshing fizz of a 7UP Pet Bottle",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/saksp4hyqaargjlyt0mf"
      }
    ]
  },
  {
    "restaurantName":"Behrouz Biryani",
    "rating":4.1,
    "menuTypes":[
      "Starters",
      "Biryani",
      "Dessert"
    ],
    "imageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/89fccaa76f2f760e2742b9e53d32bb69",
    "location":"Abids",
    "menus":[
      {
        "menuItem":"Murgh Haleem Kebab (6 pcs) & Murgh Kefta (6pcs) Combo",
        "menuItemPrice":549,
        "menuType":"Starters",
        "description":"The coveted chicken haleem kebabs made with a melange of Hyderabadi spices is served alongside Murgh Kefta that is a fine amalgamation of finely minced fresh chicken and the choicest of spices",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ajgaaaxugwrr4krmztcx"
      },
      {
        "menuItem":"Dahi Labneh Kebab (6 pcs) & Beetroot and Peanut Kebab (6 pcs) Combo",
        "menuItemPrice":459,
        "menuType":"Starters",
        "description":"Subtly spiced with cumin and ginger, our Dahi Labneh Kebabs are served as a combo alongside kebabs made with handpicked fresh beetroots & crushed peanuts",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/c265fabda5c381395015d2c023b55268"
      },
      {
        "menuItem":"Beetroot & Peanut Kebab (3 Pcs)",
        "menuItemPrice":129,
        "menuType":"Starters",
        "description":"Savour the flavours of handpicked fresh beetroots and roasted peanuts with a subtle hint of spices. These royal beetroot kebabs are crisp on the outside and soft on the inside",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ff823c99dfe17cfb3d4afde52b7c6f06"
      },
      {
        "menuItem":"Murgh Koobideh (Chicken Tikki Kebab)",
        "menuItemPrice":99,
        "menuType":"Starters",
        "description":"Ground chicken flavored with cardamom & green chilli and grilled to perfection.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d5632426308c2c9a74932100cb1e2b24"
      },
      {
        "menuItem":"Subz-e-Biryani (Dum Veg Biryani - Serves 1)",
        "menuItemPrice":315,
        "menuType":"Biryani",
        "description":"(Served with 1 Gulab Jamun & Mint Raita) Adorned with fresh vegetables, golden-hued long-grain basmati, & the coveted Behrouz spice mix, this dish will lend you an experience unlike any other",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tej2ho3s9mbti5akvkcd"
      },
      {
        "menuItem":"Party Combo for 2-3: Shaan Veg Biryani + Veg Kebabs",
        "menuItemPrice":729,
        "menuType":"Biryani",
        "description":"Create your Party Combo with a choice of Royal Veg Shaan Biryanis (Serves 2) and delectable Veg Kebabs (6 Pcs). It is accompanied with fresh Mint Raita and Gulab Jamuns to make your celebration more special",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/29b0076cbed83ead6a695a3b09b988eb"
      },
      {
        "menuItem":"Party Combo for 2-3: Shaan Non-Veg Biryani + Kebabs",
        "menuItemPrice":869,
        "menuType":"Biryani",
        "description":"Create your Party Combo with the choice of Royal Non-Veg Shaan Biryanis (Serves 2) and delectable Kebabs (6 Pcs). It is accompanied with fresh Mint Raita and Gulab Jamuns to make your celebration more special.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/94101bcf3110493a837421bc957628f8"
      },
      {
        "menuItem":"Royal Baklava (3 Pcs)",
        "menuItemPrice":199,
        "menuType":"Dessert",
        "description":"Introducing the Royal Baklava, an artisanal pastry all the way from the treasured corners of the Middle East. Baked to perfection, our specially curated box of rich, flaky baklava is filled with nutty exquisite pistachios, almonds and cashews, making it a charming nazraana for every celebration",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/1b0e23ba5d228cfe36d406636c347b72"
      },
      {
        "menuItem":"Kesar Faluda",
        "menuItemPrice":220,
        "menuType":"Dessert",
        "description":"A rich and indulgent dessert drink made with vermicelli, rose syrup, basil seeds, and flavored with the exotic essence of saffron (kesar), offering a delightful treat",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zaoxtlxdsivnqvofkmai"
      },
      {
        "menuItem":"Kulfi Faluda",
        "menuItemPrice":220,
        "menuType":"Dessert",
        "description":"A delightful combination of rose, basil seeds, spaghetti & malai kulfi to pamper your taste buds",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/laoio4ejyucgfso0xfxw"
      }
    ]
  },
  {
    "restaurantName":"Burger king",
    "rating":4.1,
    "menuTypes":[
      "Burgers",
      "Beverages & Desserts"
    ],
    "imageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "location":"Himayath Nagar",
    "menus":[
      {
        "menuItem":"Crispy Chicken Double Patty + Crispy Chicken Double Patty",
        "menuItemPrice":258,
        "menuType":"Burgers",
        "description":"Two Crispy Chicken Double Patty",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rbsdsxa1esuwgdh3bsh0"
      },
      {
        "menuItem":"Crispy Veg Double Patty + Crispy Veg Double Patty",
        "menuItemPrice":198,
        "menuType":"Burgers",
        "description":"Two Crispy Veg Double Patty",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/n3xekdsgny6jdboxy4xw"
      },
      {
        "menuItem":"Fiery Chicken Burger",
        "menuItemPrice":199,
        "menuType":"Burgers",
        "description":"Spicy Fried Chicken, loads of sauces in soft square masala buns. It's hot and happening.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ppxmlepv15e3qexhhq9v"
      },
      {
        "menuItem":"Paneer Royale Burger",
        "menuItemPrice":199,
        "menuType":"Burgers",
        "description":"Thick Paneer Patty, loads of sauces in soft square masala buns. It's Royally Paneer.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gq6qbyomdgkuql8aevd1"
      },
      {
        "menuItem":"Crispy Veg Burger",
        "menuItemPrice":70,
        "menuType":"Burgers",
        "description":"Our Best-Selling Burger With Crispy Veg Patty, Fresh Onion And Our Signature Sauce",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/eqaon8guufklmil7ayhr"
      },
      {
        "menuItem":"Crispy Chicken Burger",
        "menuItemPrice":90,
        "menuType":"Burgers",
        "description":"Our Best-Selling Burger With Crispy Chicken Patty, Onion And Classic Mayo Sauce",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mqr237klqgnu0w2pzd94"
      },
      {
        "menuItem":"Medium Soft Drink (Cola)",
        "menuItemPrice":95,
        "menuType":"Beverages & Desserts",
        "description":"Refreshing medium-sized cola drink, perfect for a quick pick-me-up",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jjsk5itomwsjmfz3sd3b"
      },
      {
        "menuItem":"Medium Soft Drink (Orange)",
        "menuItemPrice":95,
        "menuType":"Beverages & Desserts",
        "description":"Refreshing orange-flavored medium soft drink to quench your thirst",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/39e3ce914464c6eac8e601ec3f4dded4"
      },
      {
        "menuItem":"Choco Lava Cup",
        "menuItemPrice":109,
        "menuType":"Beverages & Desserts",
        "description":"Melty Chocolate filled in cupcake",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nsm44tzuxpceproaymyr"
      },
      {
        "menuItem":"Chocolate Mousse Cup",
        "menuItemPrice":109,
        "menuType":"Beverages & Desserts",
        "description":"Airy and creamy chocolate mousse topped with chocolate ganache and choco chips",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hxpyxm2e2dasvebpzkoz"
      }
    ]
  },
  {
    "restaurantName":"Peshawar Restaurant",
    "rating":3.4,
    "menuTypes":[
      "Starters",
      "Biryani",
      "Platter",
      "Dessert"
    ],
    "imageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/vb0uuysg8hzei8r570v9",
    "location":"Attapur",
    "menus":[
      {
        "menuItem":"Murgh Haleem Kebab",
        "menuItemPrice":199,
        "menuType":"Starters",
        "description":"Crafted by Celebrity Chef Kunal Kapur slow-cooked haleem, a speciality of Mehfil-e-Ramadan is fused with Hyderabadi spices, rolled into elegant kebabs & char-grilled to perfection in ghee",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/0c850df7d5446e60eeba8045f73632dc"
      },
      {
        "menuItem":"Murgh Seekh Kebab",
        "menuItemPrice":199,
        "menuType":"Starters",
        "description":"One of the most revered kebab delicacies, this culinary marvel is crafted with minced chicken that is elegantly spiced with royal spices and is served with a refreshing mint dip",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/24d3e39ac0bc42548df7061714c79d26"
      },
      {
        "menuItem":"Murgh Malai Kebab - Full Portion",
        "menuItemPrice":399,
        "menuType":"Starters",
        "description":"(6 Pcs) Brimming with impeccable flavours this rich kebab delicacy is as delectable as it is charming. Succulent chicken pieces are eloquently spiced with royal spices and then grilled to perfection to lend it the fascinating smoky flavour",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/1941fd8f6b75175c6f529b1fdab1fbc6"
      },
      {
        "menuItem":"Basmati Biryani Rice (300 gm)",
        "menuItemPrice":99,
        "menuType":"Biryani",
        "description":"You cannot go wrong with this absolutely fine and flavorful rice. Enjoy the khusbudaar long-grain basmati rice with your favourite curries",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/03cd76684b1b5943022183f1680535f5"
      },
      {
        "menuItem":"Lazeez Bhuna Murgh Biryani (Dum Chicken Biryani - Serves 1)",
        "menuItemPrice":385,
        "menuType":"Biryani",
        "description":"(Boneless, Served with 1 Gulab Jamun & Mint Raita) In this culinary jewel from Behrouz, Tender chicken pieces are marinated with exuberant bhuna spices that are freshly ground and dum pukht with aromatic rice",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/htra1ceo32gospqkqalp"
      },
      {
        "menuItem":"Dum Gosht Biryani (Dum Mutton Biryani, Boneless - Serves 1)",
        "menuItemPrice":535,
        "menuType":"Biryani",
        "description":"(Boneless, Served with 1 Gulab Jamun & Mint Raita) In this most enigmatic & treasured recipe of Behrouz, immaculately spiced fresh, succulent mutton pieces are layered with basmati & then slow-cooked on a charcoal fire",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/s3cootrdhb93xht1oadq"
      },
      {
        "menuItem":"Arabian Shawarma Platter",
        "menuItemPrice":179,
        "menuType":"Platter",
        "description":"A Middle Eastern-inspired feast featuring succulent shawarma meat, often served with traditional accompaniments like hummus, pickles, and garlic sauce, providing a hearty and authentic dining experience",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/29eacb846ba68f171671b81149e37c9e"
      },
      {
        "menuItem":"Platter Shawarma",
        "menuItemPrice":199,
        "menuType":"Platter",
        "description":" A generous serving of thinly sliced and seasoned meat, typically chicken, beef, or lamb, accompanied by fresh vegetables, sauces, and flatbread, offering a satisfying and flavorful meal",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/e47fc37f8899192d941cf060c8374e83"
      },
      {
        "menuItem":"Seviyan Kheer(200ml)",
        "menuItemPrice":180,
        "menuType":"Dessert",
        "description":"EIDH SPECIAL .... Home made.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/exx0udppzx93mtag9cav"
      },
      {
        "menuItem":"Moong Dal Halwa (100 gm)",
        "menuItemPrice":99,
        "menuType":"Dessert",
        "description":"Add this rich & decadent Indian dessert made with moong lentils, ghee, milk, sugar, garnished with chopped dry-fruits. Perfect for one with Indian sweet cravings",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/388bf5ed3fa93f63cc6b901466d016cf"
      }
    ]
  },
  {
    "restaurantName":"Sri Balaji Darshan",
    "rating":4.0,
    "menuTypes":[
      "Idli, Vada & Mysore Bajji",
      "Special Dosas",
      "Classic Tiffin"
    ],
    "imageUrl":"https://lh3.googleusercontent.com/p/AF1QipMx5Zjye_WOTyaayQg4a3-5bXfOQMQxRHHZ-kIE=w1080-h608-p-no-v0",
    "location":"Nallakunta & Vidyanagar",
    "menus":[
      {
        "menuItem":"Vada Family Pack (10 Pcs)",
        "menuItemPrice":310,
        "menuType":"Idli, Vada & Mysore Bajji",
        "description":"Serves 3-4 | vadas made with a perfect balance of softness on the inside and crunch on the outside. Fried to a perfect golden brown, served with authentic chutney, sambar, and allam chutney.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/9a7e9d3fec836764faac5f46bd2d4bbc"
      },
      {
        "menuItem":"Idli Family Pack (10 Pcs)",
        "menuItemPrice":230,
        "menuType":"Idli, Vada & Mysore Bajji",
        "description":"Serves 3-4 | perfect for a family, pack of steaming hot idlis made with homemade rava served with chutney, sambar, and allam chutney.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ba93e213340a55d4a3ab56c4466ca4d0"
      },
      {
        "menuItem":"Sambar Idli (1pc) Sambar Vada (1 Pc)",
        "menuItemPrice":70,
        "menuType":"Idli, Vada & Mysore Bajji",
        "description":"Serves 1 | combo of idli 1 pc and crunchy soft vada 1 pc. Served with our sambar",
        "menuImageUrl":"https://media.istockphoto.com/id/854084276/photo/idli-vada-south-indian-food.jpg?s=612x612&w=0&k=20&c=yO67FPqrBLoBRUpbDGm1MwvZfVOE3l4BCSxNWgdSSgw="
      },
      {
        "menuItem":"Mysore Bajji Family Pack (10pcs)",
        "menuItemPrice":260,
        "menuType":"Idli, Vada & Mysore Bajji",
        "description":"Serves 1 | Super-crispy bajji, a delicacy from Mysore made with flour, yogurt and spices.",
        "menuImageUrl":"https://i.ytimg.com/vi/1WEhkULzaYQ/maxresdefault.jpg"
      },
      {
        "menuItem":"Ghee Karam Dosa",
        "menuItemPrice":80,
        "menuType":"Special Dosas",
        "description":"Serves 1 | Andhra special ghee karam dosa is a flavorful delight made with ghee and homemade dosa karam with authentic chutney, sambar, and tomato chutney.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/740ba4d47bc6e3e6d6dad4fea71ac77a"
      },
      {
        "menuItem":"Onion Podi Dosa",
        "menuItemPrice":80,
        "menuType":"Special Dosas",
        "description":"Serves 1 | Onion podi dosa, topped with a flavorful mixture of onions and fresh ground authentic Andhra podi, served with chutney, sambar, and tomato chutney.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/da68356f3e50d88153c11874fe5d244c"
      },
      {
        "menuItem":"Paneer Dosa",
        "menuItemPrice":80,
        "menuType":"Special Dosas",
        "description":"A delightfully delicious preparation with crispy dosa stuffed with seasoned paneer chunks | gentle fried",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/165fb393925daf748043ab21e530d86d"
      },
      {
        "menuItem":"Upma",
        "menuItemPrice":50,
        "menuType":"Classic Tiffin",
        "description":"Serves 1 | Classic South Indian breakfast made with roasted rava, vegetables, and spices, served with chutney.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/788e72465a417d05218a6b94fd4cfbdc"
      },
      {
        "menuItem":"Poori",
        "menuItemPrice":70,
        "menuType":"Classic Tiffin",
        "description":"Serves 1 | Delicious fluffy deep-fried pooris, served with a flavorful aloo curry and authentic Andhra classic chutney.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/8228fee4b9d704f62461d0ddcfe66c6c"
      },
      {
        "menuItem":"Ghee Pongal",
        "menuItemPrice":80,
        "menuType":"Classic Tiffin",
        "description":"Serves 1 | Comforting taste of ghee pongal, made with rice, lentils, ghee, and traditional spices. Served with chutney.",
        "menuImageUrl":"https://www.sharmispassions.com/wp-content/uploads/2012/02/VenPongal6-500x500.jpg"
      }
    ]
  },
  {
    "restaurantName":"Noodle King",
    "rating":3.7,
    "menuTypes":[
      "Noodles",
      "Manchurian",
      "Veg-Non-Veg Combo",
      "Spring Roll",
      "Platters"
    ],
    "imageUrl":"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg",
    "location":"Ameerpet",
    "menus":[
      {
        "menuItem":"Chicken Hakka Noodles",
        "menuItemPrice":260,
        "menuType":"Noodles",
        "description":"A flavor-packed dish with noodles and juicy chicken pieces tossed in a soy, celery, chilli and vinegar based sauce.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mohwsgnyuzednwhsqokv"
      },
      {
        "menuItem":"Veg Hakka Noodles",
        "menuItemPrice":208,
        "menuType":"Noodles",
        "description":"A Mix Of Vegetables Tossed In A Heated Wok and Cooked with Noodles.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ocvhzskd4cczcwctes4w"
      },
      {
        "menuItem":"Veg Manchurian (Dry)",
        "menuItemPrice":234,
        "menuType":"Manchurian",
        "description":"Crispy vegetable Manchurian balls tossed in a flavorful blend of sauces, perfect as a dry appetizer or snack.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k0c88hanrdqtuzncyxu2"
      },
      {
        "menuItem":"Chicken Manchurian (Dry)",
        "menuItemPrice":312,
        "menuType":"Manchurian",
        "description":"Deliciously seasoned and stir-fried bite-sized chicken chunks, crafted to perfection in a flavorful Manchurian sauce, available in a dry variant.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pwkdd6a8i2bgohmruiwk"
      },
      {
        "menuItem":"Egg Noodles + Chicken Manchurian + Coke + Chilli Chicken",
        "menuItemPrice":390,
        "menuType":"Veg-Non-Veg Combo",
        "description":"Savory Egg Noodles paired with delectable Chicken Manchurian, spicy Chilli Chicken, and a refreshing Coke.",
        "menuImageUrl":"https://img-global.cpcdn.com/recipes/38d78cff2b9f3132/1360x964cq70/veg-noodles-with-chicken-manchurian-recipe-main-photo.webp"
      },
      {
        "menuItem":"Veg Noodles + Veg Manchurian + Coke + Baby Corn Pepper Salt",
        "menuItemPrice":325,
        "menuType":"Veg-Non-Veg Combo",
        "description":"Delight your taste buds with a combo of Veg Noodles, Veg Manchurian, and a refreshing Coke, paired with the tempting crunch of Baby Corn Pepper Salt.",
        "menuImageUrl":"https://www.zaykakatadka.com/wp-content/uploads/2017/08/IMG_20170806_155142.jpg"
      },
      {
        "menuItem":"Chicken Spring Roll",
        "menuItemPrice":260,
        "menuType":"Spring Roll",
        "description":"Serves 1 | Assorted Stir Fried Chicken Wrapped In A Roll and Fried Until Golden.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/466acbe7bf9253c23c7038fea17690d7"
      },
      {
        "menuItem":"Veg Spring Roll",
        "menuItemPrice":208,
        "menuType":"Spring Roll",
        "description":"Serves 1 | Delight in crispy goodness with our Veg Spring Roll, a perfect blend of fresh vegetables wrapped in thin sheets, fried to perfection, and served with delectable dipping sauce.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/l8cktkoytx0f6rpcd4o2"
      },
      {
        "menuItem":"Veg Manchurian + Chilli Mushroom + Paneer 65 + Deep Fried Baby Corn",
        "menuItemPrice":715,
        "menuType":"Platters",
        "description":"Indulge in a delightful combo of Veg Manchurian, Chilli Mushroom, Paneer 65, and Deep Fried Baby Corn for a crunchy and flavorful feast.",
        "menuImageUrl":"https://cookingfromheart.com/wp-content/uploads/2021/07/Baby-Corn-Manchurian-3.jpg"
      },
      {
        "menuItem":"Chicken Tai Pai + Ghicken Lollipop Apollo Fish + Sauteed Prawns",
        "menuItemPrice":910,
        "menuType":"Platters",
        "description":"Delight your taste buds with the perfect trio: Chicken Tai Pai, Ghicken Lollipop Apollo Fish, and Sauteed Prawns.",
        "menuImageUrl":"https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_761402230.jpg"
      }
    ]
  },
  {
    "restaurantName":"Udupi Park Pure Veg",
    "rating":4.4,
    "menuTypes":[
      "Idlis and Vada",
      "Dosa",
      "Classic Tiffin"
    ],
    "imageUrl":"https://t3.ftcdn.net/jpg/05/33/82/34/360_F_533823407_h0wVzQub7h3b6OZVWE44BPf5E6SHndxI.jpg",
    "location":"Ameerpet",
    "menus":[
      {
        "menuItem":"Sambar Idli",
        "menuItemPrice":65,
        "menuType":"Idlis and Vada",
        "description":"Comes with white chutney, allam chutney and sambar | Serves 1",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mftqgwfgavgdw5kt2ivo"
      },
      {
        "menuItem":"Sambar Vada",
        "menuItemPrice":85,
        "menuType":"Idlis and Vada",
        "description":"Comes with white Chutney and sambar | Serves 1",
        "menuImageUrl":"https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/medu-vada-1.jpg"
      },
      {
        "menuItem":"Plate Idli Single Vada Sambar",
        "menuItemPrice":90,
        "menuType":"Idlis and Vada",
        "description":"Comes with white Chutney and sambar | Serves 1",
        "menuImageUrl":"https://www.shutterstock.com/shutterstock/photos/2108950502/display_1500/stock-photo-idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake-2108950502.jpg"
      },
      {
        "menuItem":"70mm Dosa",
        "menuItemPrice":155,
        "menuType":"Dosa",
        "description":"Serves 1 | Serve with white Chutney and sambar.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/exgjesaotpqiwdyw88ba"
      },
      {
        "menuItem":"Masala Dosa",
        "menuItemPrice":80,
        "menuType":"Dosa",
        "description":"Serves with chutney and sambar",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/syb0p0etz80btn3otwv3"
      },
      {
        "menuItem":"Paneer Dosa",
        "menuItemPrice":110,
        "menuType":"Dosa",
        "description":"Comes with Chutney and sambar | Serves 1",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/eq4vkuwfany6cn2kebtn"
      },
      {
        "menuItem":"Uttapam",
        "menuItemPrice":85,
        "menuType":"Classic Tiffin",
        "description":"Serves 1 | Uttapam: South Indian savory pancake made with fermented rice and urad dal batter, topped with veggies; a delicious breakfast or snack.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fggzsc7qo6gwj0gyefg4"
      },
      {
        "menuItem":"Mysore Bajji",
        "menuItemPrice":55,
        "menuType":"Classic Tiffin",
        "description":"Serves 1 | Super-crispy bajji, a delicacy from Mysore made with flour, yogurt and spices.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/w4h02j8gk5ayauiabwvi"
      },
      {
        "menuItem":"Pesarattu",
        "menuItemPrice":90,
        "menuType":"Classic Tiffin",
        "description":"Serves 1 | A savory crepe made from green gram and rice batter, often enjoyed with coconut chutney.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qd2bzfmhj4ti8lvywiay"
      },
      {
        "menuItem":"Poori",
        "menuItemPrice":75,
        "menuType":"Classic Tiffin",
        "description":"Serves 1",
        "menuImageUrl":"https://img.myloview.com/stickers/puri-bhaji-north-indian-poori-with-aalu-bhaji-aalu-sabji-potato-spicy-recipe-breakfast-food-a-deep-fried-bread-of-whole-wheat-flour-poori-masala-in-restaurant-kerala-india-sri-lanka-700-255326373.jpg"
      }
    ]
  },
  {
    "restaurantName":"Pizza Hut",
    "rating":3.8,
    "menuTypes":[
      "Pizzas",
      "Pasta",
      "Beverages & Desserts"
    ],
    "imageUrl":"https://wallpapers.com/images/featured/pizza-hut-gqkamsjea7s76iqm.jpg",
    "location":"Mehdipatnam",
    "menus":[
      {
        "menuItem":"Margherita Pizza",
        "menuItemPrice":169,
        "menuType":"Pizzas",
        "description":"Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/dpventcrozvfni0lqb10"
      },
      {
        "menuItem":"Veggie Supreme",
        "menuItemPrice":379,
        "menuType":"Pizzas",
        "description":"Serves 1 | A supreme combination of Black Olives, Green Capsicum, Mushroom, Onion, spicy Red Paprika & juicy Sweet Corn with flavourful pan sauce and 100% mozzarella cheese.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/z0c4xpovma1qtmu4tlls"
      },
      {
        "menuItem":"Chicken Supreme",
        "menuItemPrice":409,
        "menuType":"Pizzas",
        "description":"Serves 1 | Loaded with delicious Chicken Tikka, flavourful Herbed Chicken, spicy Schezwan Chicken Meatball with flavourful pan sauce and 100% mozzarella cheese.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/dlvdmsn1uotbdn4vzvap"
      },
      {
        "menuItem":"Awesome American Cheesy Chicken",
        "menuItemPrice":379,
        "menuType":"Pizzas",
        "description":"Serves 1 | Our divine Peruvian flavoured cheesy sauce, topped with classic chicken pepperoni, cheese and chicken sausage black olives, spicy jalapeno and 100% mozzarella cheese, finished with a generous drizzle of Texas garlic sauce.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f55016931d13f7489c6140de76fa16aa"
      },
      {
        "menuItem":"Keema Makhani Pasta - New",
        "menuItemPrice":259,
        "menuType":"Pasta",
        "description":"Serves 1 | Pasta in our new flavourful makhni sauce with chicken keema masala, onion, green capsicum & red capsicum.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f0674966d680a2777ab1233b0f282fa5"
      },
      {
        "menuItem":"Classic Makhani Pasta - New",
        "menuItemPrice":239,
        "menuType":"Pasta",
        "description":"Serves 1 | Pasta in our new flavourful makhni sauce with onion, green capsicum, red capsicum and juicy sweet corn.",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/258eeee2fcac674a838180a75d2dd3a6"
      },
      {
        "menuItem":"Spicy Schezwan Pasta - Veg - New",
        "menuItemPrice":229,
        "menuType":"Pasta",
        "description":"Serves 1 | Spicy Schezwan sauce pasta with onion, green capsicum, red capsicum and juicy sweet corn",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c6aea671a74704ce9f39dba98d5846dd"
      },
      {
        "menuItem":"Cheesy Comfort",
        "menuItemPrice":239,
        "menuType":"Pasta",
        "description":"Serves 1 | Cheesy creamy pasta comfort topped with onion, green capsicum, red capsicum & sweet corn",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f2miudjhhrpyeyxn23dz"
      },
      {
        "menuItem":"Brow-wow-nie",
        "menuItemPrice":109,
        "menuType":"Beverages & Desserts",
        "description":"Serves 1 | A divine choco brownie for your all-time chocolate cravings",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7ac7f4004c86ebb381fa1c0c3bd58722"
      },
      {
        "menuItem":"7up Pet Bottle",
        "menuItemPrice":57,
        "menuType":"Beverages & Desserts",
        "description":"Serves 1 | Quench your thirst with the refreshing fizz of a 7UP Pet Bottle",
        "menuImageUrl":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/saksp4hyqaargjlyt0mf"
      }
    ]
  }
]


export  const   navigationLinks = [

  {
    "text": "Cart",
    "path": "/cart",
    "icon": <ShoppingCart/>
  },
    {
      "text": "Orders",
      "path": "/orders",
      "icon": <Info/>
    },
    {
      "text": "Restaurants",
      "path": "/",
      "icon": <Restaurant/>
    },

  ]




export  const BASE_URL = "https://hunger-savior-server.vercel.app/api/v1"