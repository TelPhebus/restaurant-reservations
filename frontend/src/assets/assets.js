// Logo & Header
import logo from './logo.png';
import header_img from './header_img.jpg';

import profile_icon from './profile_icon.png';
import play_store from './play_store.png';
import twitter_icon from './twitter_icon.png';
import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import app_store from './app_store.png';
import cross_icon from './cross_icon.png';
import logout_icon from './logout_icon.png';

// Menu Image
import menu1 from './menu_1.png';

// Foods
import food1 from './food1.png';
import food2 from './food2.png';
import food3 from './food3.png';
import food4 from './food4.png';
import food5 from './food5.png';
import food6 from './food6.png';
import food7 from './food7.png';
import food8 from './food8.png';
import food9 from './food9.png';
import food10 from './food10.png';
import food11 from './food11.png';
import food12 from './food12.png';
import food13 from './food13.png';
import food14 from './food14.png';
import food15 from './food15.png';
import food16 from './food16.png';
import food17 from './food17.png';
import food18 from './food18.png';
import food19 from './food19.png';
import food20 from './food20.png';

// Drinks
import drinks1 from './drinks1.jpg';
import drinks2 from './drinks2.jpg';
import drinks3 from './drinks3.png';
import drinks4 from './drinks4.png';

const assets = {
  logo,
  logout_icon,
  header_img,
  cross_icon,
  app_store,
  profile_icon,
  play_store,
  twitter_icon,
  linkedin_icon,
  facebook_icon,
  menu1,
  foods: [
    food1, food2, food3, food4, food5,
    food6, food7, food8, food9, food10,
    food11, food12, food13, food14, food15,
    food16, food17, food18, food19, food20
  ],
  drinks: [drinks1, drinks2, drinks3, drinks4]
};


export const categoryItem = [
    {
        category_title:"All"
    },
    {
        category_title: "Salad",
    },
    {
        category_title: "Delicasy",
    },
    {
        category_title: "Dessert",
    },
    {
        category_title: "Drinks",
    },
  ]


export const product = [
    {
        _id: "a",
        name: "Greek Salad",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 8,
        image: food1 ,
        category: "Salad",
           date: 1716634345448,
            },
    {
        _id: "ab",
        name: "Gyros Greek",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 5,
        image: food2,
        category: "Delicasy",
            date: 1716621345448,
            },
    {
        _id: "ac",
        name: "Soublaki Ceasar",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 3.50,
        image: food3,
        category: "Delicasy",
            date: 1716234545448,
            },
    {
        _id: "ad",
        name: "Blue Salad Chicken",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 11,
        image: food4,
        category: "Salad",
             date: 1716621345448,
            },
    {
        _id: "ae",
        name: "Blue MAX Salad",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 15,
        image: food5,
        category: "Salad",
            date: 1716622345448,
            },
    {
        _id: "af",
        name: "Family Dinner - Meat Edition",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 25,
        image: food6,
        category: "Delicasy",
            date: 1716623423448,
            },
    {
        _id: "ag",
        name: "Fried Chicken",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 9,
        image: food7,
        category: "Delicasy",
            date: 1716621542448,
        
    },
    {
        _id: "ah",
        name: "Italian Pasticcio",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 7,
        image: food8,
        category: "Delicasy",
        
        date: 1716622345448,
        
    },
    {
        _id: "ai",
        name: "Trout with Shrimps",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 10,
        image: food9,
        category: "Delicasy",
            date: 1716621235448,
        
    },
    {
        _id: "aj",
        name: "Chicken Ceasar Salad",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 14,
        image: food10,
        category: "Salad",
            date: 1716622235448,
        
    },
    {
        _id: "ak",
        name: "Chicken With Salad-Rice",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 14,
        image: food11,
        category: "Delicasy",
           date: 1716623345448,
        
    },
    {
        _id: "al",
        name: "Spaggetti with Shrimps",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 18,
        image: food12,
        category: "Delicasy",
        
        date: 1716624445448,
        
    },
    {
        _id: "am",
        name: "Vanilla Ice Cream",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 20,
        image: food13,
        category: "Dessert",
        
        date: 1716625545448,
        
    },
    {
        _id: "an",
        name: "Greek Cream Cake",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 20,
        image: food14,
        category: "Dessert",
        
        date: 1716626645448,
        
    },
    {
        _id: "as",
        name: "Cheece-Cake",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 16,
        image: food15,
        category: "Dessert",
        
        date: 1716626775448,
        
    },
    {
        _id: "ax",
        name: "Pastaflora",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 19,
        image: food16,
        category: "Dessert",
        
        date: 1716628845448,
        
    },
    {
        _id: "az",
        name: "Chicken Sandwich",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 4,
        image: food17,
        category: "Sandwich",
        
        date: 1716629945448,
        
    },
    {
        _id: "a1",
        name: "Club-Sandwich",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 6,
        image: food18,
        category: "Sandwich",
        
        date: 1716620055448,
        
    },
    {
        _id: "a2",
        name: "Vegan Sandwich",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 4.50,
        image: food19,
        category: "Sandwich",
        
        date: 1716621155448,
        
    },
    {
        _id: "a3",
        name: "Sandwich Cheese Special",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 6,
        image: food20,
        category: "Sandwich",
        
        date: 1716622255448,
        
    },
    {
        _id: "a4",
        name: "Juice",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 24,
        image: drinks1,
        category: "Drinks",
        
        date: 1716623355448,
        
    },
    {
        _id: "a5",
        name: "Red Bomb",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 60,
        image: drinks2,
        category: "Drinks",
        
        date: 17166264455448,
        
    },
    {
        _id: "a6",
        name: "Aloha Special",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        image: drinks3,
        category: "Drinks",
        
        date: 17166265555448,
        
    },
    {
        _id: "a7",
        name: "Beer",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 17,
        image: drinks4,
        category: "Drinks",
        
        date: 1716626655448,
        
    },
]

export default assets;
