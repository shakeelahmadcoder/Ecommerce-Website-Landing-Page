import balender from "../public/images/blender.png"
import bottles from "../public/images/bottles.png"
import clientscount from "../public/images/clientscount.png"
import creams from "../public/images/creams.jpg"
import creamsd from "../public/images/creamsd.jpg"
import cus1 from "../public/images/cus1.png"
import cus2 from "../public/images/cus2.png"
import cus3 from "../public/images/cus3.png"
import cycle from "../public/images/cycle.png"
import facebook from "../public/images/facebook.png"
import icon1 from "../public/images/icon1.png"
import icon2 from "../public/images/icon2.png"
import icon3 from "../public/images/icon3.png"
import icon4 from "../public/images/icon4.png"
import icon5 from "../public/images/icon5.png"
import instagram from "../public/images/instagram.png"
import light from "../public/images/light.png"
import lights from "../public/images/lights.png"
import linkdin from "../public/images/linkdin.png"
import logo from "../public/images/logo.png"
import makeupset from "../public/images/makeupset.png"
import mike from "../public/images/mike.png"
import miniprojector from "../public/images/miniprojector.png"
import open from "../public/images/open.jpg"
import perfume from "../public/images/perfume.jpg"
import phonecover from "../public/images/phonecover.png"
import striplights from "../public/images/striplights.png"
import sunglass from "../public/images/sunglass.png"
import watch from "../public/images/watch.jpg"
import wirelessmouse from "../public/images/wirelessmouse.png"
import youtube from "../public/images/youtube.png"
import frame from "../public/images/Frame.svg"
import calltoaction from "../public/images/calltoaction.png"


export const Images = {logo, calltoaction, frame, creamsd, facebook, icon1, icon2, icon3, icon4, icon5, instagram, light, lights, linkdin, mike, open, youtube}

export const productCrousel = [
    {id:1, image: perfume},
    {id:2, image: watch},
    {id:3, image: creams},
]

export const happyCustomers = [
    {id:1, image: cus1},
    {id:2, image: cus2},
    {id:3, image: cus3},
    {id:4, image: clientscount},
]

export const products = [
    {id: 1, name: "Smart Water Bottles", price: 14, image: bottles, category: "lifestyle", topSeller: true, rating: 4.5, reviews: 144},
    {id: 2, name: "LED Strip Lights", price: 18, image: striplights, category: "lighting", topSeller: true, rating: 5, reviews: 50},
    {id: 3, name: "Aromatherapy Diffusers", price: 40, image: balender, category: "wellness", topSeller: false, rating: 4, reviews: 32},
    {id: 4, name: "Phone Creativity Cases", price: 14, image: phonecover, category: "accessories", topSeller: true, rating: 3.5, reviews: 78},
    {id: 5, name: "Beachwlibée Sunglasses", price: 20, image: sunglass, category: "accessories", topSeller: false, rating: 4.5, reviews: 25},
    {id: 6, name: "Portable Mini Projectors", price: 120, image: miniprojector, category: "electronics", topSeller: true, rating: 5, reviews: 66},
    {id: 7, name: "Wireless Mouse", price: 12, image: wirelessmouse, category: "electronics", topSeller: false, rating: 4, reviews: 90},
    {id: 8, name: "Makeup Set", price: 100, image: makeupset, category: "beauty", topSeller: true, rating: 4.5, reviews: 42},
    {id: 9, name: "Boys Cycle", price: 1500, image: cycle, category: "sports", topSeller: false, rating: 5, reviews: 12},
    {id: 10, name: "Smart Watch", price: 150, image: sunglass, category: "accessories", topSeller: false, rating: 4, reviews: 60},
    {id: 11, name: "Perfume Set", price: 60, image: balender, category: "beauty", topSeller: false, rating: 4.5, reviews: 38},
    {id: 12, name: "Face Cream", price: 25, image: striplights, category: "lighting", topSeller: false, rating: 4, reviews: 50},
    {id: 13, name: "Blender", price: 80, image: balender, category: "kitchen", topSeller: false, rating: 4.2, reviews: 44},
    {id: 14, name: "LED Desk Lamp", price: 35, image: light, category: "lighting", topSeller: false, rating: 4.5, reviews: 22},
    {id: 15, name: "Sports Shoes", price: 70, image: cycle, category: "sports", topSeller: false, rating: 4.3, reviews: 31},
    {id: 16, name: "Phone Stand", price: 10, image: phonecover, category: "accessories", topSeller: false, rating: 3.8, reviews: 18},
    {id: 17, name: "Sunglasses Classic", price: 30, image: sunglass, category: "accessories", topSeller: false, rating: 4.6, reviews: 28},
    {id: 18, name: "Portable Speaker", price: 90, image: miniprojector, category: "electronics", topSeller: false, rating: 4.7, reviews: 45},
    {id: 19, name: "Makeup Brushes", price: 40, image: makeupset, category: "beauty", topSeller: false, rating: 4.2, reviews: 33},
    {id: 20, name: "Smart Water Bottle XL", price: 20, image: bottles, category: "lifestyle", topSeller: false, rating: 4.3, reviews: 55},
    {id: 21, name: "LED Strip Lights Pro", price: 25, image: striplights, category: "lighting", topSeller: false, rating: 5, reviews: 30},
    {id: 22, name: "Aromatherapy Diffuser Mini", price: 35, image: balender, category: "wellness", topSeller: false, rating: 4, reviews: 20},
    {id: 23, name: "Phone Creativity Cases XL", price: 18, image: phonecover, category: "accessories", topSeller: false, rating: 3.9, reviews: 50},
    {id: 24, name: "Beach Sunglasses Premium", price: 35, image: sunglass, category: "accessories", topSeller: false, rating: 4.7, reviews: 15},
    {id: 25, name: "Mini Projector Pro", price: 150, image: miniprojector, category: "electronics", topSeller: false, rating: 5, reviews: 28},
    {id: 26, name: "Wireless Mouse Ergonomic", price: 18, image: wirelessmouse, category: "electronics", topSeller: false, rating: 4.1, reviews: 60},
    {id: 27, name: "Makeup Set Deluxe", price: 120, image: makeupset, category: "beauty", topSeller: false, rating: 4.8, reviews: 35},
    {id: 28, name: "Boys Cycle Racer", price: 1600, image: cycle, category: "sports", topSeller: false, rating: 4.9, reviews: 10},
    {id: 29, name: "Smart Watch Pro", price: 180, image: watch, category: "electronics", topSeller: false, rating: 4.5, reviews: 40},
    {id: 30, name: "Perfume Set Deluxe", price: 80, image: perfume, category: "beauty", topSeller: false, rating: 4.7, reviews: 18},
    {id: 31, name: "Face Cream Premium", price: 30, image: creams, category: "beauty", topSeller: false, rating: 4.3, reviews: 25},
    {id: 32, name: "Blender Pro", price: 100, image: balender, category: "kitchen", topSeller: false, rating: 4.5, reviews: 27},
    {id: 33, name: "LED Desk Lamp XL", price: 45, image: light, category: "lighting", topSeller: false, rating: 4.6, reviews: 20},
    {id: 34, name: "Sports Shoes Runner", price: 80, image: cycle, category: "sports", topSeller: false, rating: 4.2, reviews: 30},
    {id: 35, name: "Phone Stand Mini", price: 12, image: phonecover, category: "accessories", topSeller: false, rating: 3.9, reviews: 12},
    {id: 36, name: "Sunglasses Retro", price: 32, image: sunglass, category: "accessories", topSeller: false, rating: 4.4, reviews: 22},
    {id: 37, name: "Portable Speaker Mini", price: 100, image: miniprojector, category: "electronics", topSeller: false, rating: 4.5, reviews: 30},
    {id: 38, name: "Makeup Brushes Pro", price: 50, image: makeupset, category: "beauty", topSeller: false, rating: 4.6, reviews: 20},
    {id: 39, name: "Smart Water Bottle Pro", price: 22, image: bottles, category: "lifestyle", topSeller: false, rating: 4.4, reviews: 35},
    {id: 40, name: "LED Strip Lights Mini", price: 20, image: striplights, category: "lighting", topSeller: false, rating: 4.8, reviews: 18},
    {id: 41, name: "Aromatherapy Diffuser XL", price: 45, image: balender, category: "wellness", topSeller: false, rating: 4.1, reviews: 20},
    {id: 42, name: "Phone Creativity Cases Pro", price: 20, image: phonecover, category: "accessories", topSeller: false, rating: 4, reviews: 40},
    {id: 43, name: "Beach Sunglasses Classic", price: 25, image: sunglass, category: "accessories", topSeller: false, rating: 4.2, reviews: 18},
    {id: 44, name: "Mini Projector XL", price: 160, image: miniprojector, category: "electronics", topSeller: false, rating: 4.7, reviews: 15},
    {id: 45, name: "Wireless Mouse Pro", price: 20, image: wirelessmouse, category: "electronics", topSeller: false, rating: 4.3, reviews: 22},
    {id: 46, name: "Makeup Set Premium", price: 130, image: makeupset, category: "beauty", topSeller: false, rating: 4.7, reviews: 18},
    {id: 47, name: "Boys Cycle Pro", price: 1700, image: cycle, category: "sports", topSeller: false, rating: 5, reviews: 8},
    {id: 48, name: "Smart Watch Ultra", price: 200, image: watch, category: "electronics", topSeller: false, rating: 4.6, reviews: 12},
    {id: 49, name: "Perfume Set Ultra", price: 100, image: perfume, category: "beauty", topSeller: false, rating: 4.5, reviews: 14},
    {id: 50, name: "Face Cream Deluxe", price: 35, image: creams, category: "beauty", topSeller: false, rating: 4.3, reviews: 20},
]



export const testimonials = [
    {
        id: 1,
        name: "Arlene McCoy",
        role: "Happy client",
        image: cus1,
        rating: 5,
        review: "The user experience on this eCommerce website is top-notch! The site is very intuitive and easy to navigate. I was able to find what I needed in no time, and the checkout process was seamless. The product descriptions are clear, and the images are high-quality, which made it easier to make a decision."
    },
    {
        id: 2,
        name: "Arlene McCoy",
        role: "Happy client",
        image: cus2,
        rating: 5,
        review: "I had a fantastic experience shopping on this eCommerce site. The design is modern, clean, and visually appealing. I loved the product filtering options, which helped me narrow down my choices quickly. The site was also responsive, which meant no lag while browsing. One thing I really appreciated was the customer service."
    },
    {
        id: 3,
        name: "John Smith",
        role: "Happy client",
        image: cus3,
        rating: 4.5,
        review: "Great shopping experience overall! The website is user-friendly and the product range is impressive. Delivery was quick and the packaging was excellent. Will definitely shop again!"
    },
    {
        id: 4,
        name: "Sarah Johnson",
        role: "Happy client",
        image: cus1,
        rating: 5,
        review: "Absolutely love this eCommerce platform! Easy checkout, secure payment options, and amazing customer support. The quality of products exceeded my expectations. Highly recommended!"
    }
]

export const companyStory = [
    {
        id: 1,
        year: 2015,
        title: "The Spark of an Idea",
        description: "Our eCommerce platform was born from a simple idea: to make online shopping easier, faster, and more personalized for everyone.",
        position: "left",
        icon: icon1
    },
    {
        id: 2,
        year: 2017,
        title: "Laying the Digital Foundation",
        description: "We launched our first eCommerce platform, focusing on essentials like streamlined, secure payments, and a user-friendly shopping experience that customers could trust.",
        position: "right",
        icon: icon2
    },
    {
        id: 3,
        year: 2019,
        title: "Scaling New Heights",
        description: "Expanded our product catalog and refined our technology, making shopping faster, smarter and more personalized. It was growing in leaps and bounds!",
        position: "left",
        icon: icon3
    },
    {
        id: 4,
        year: 2022,
        title: "Technology-Driven Growth",
        description: "Integrated AI-powered recommendations, faster checkout analytics, and real-time inventory tracking—enhancing the customer experience at every step.",
        position: "right",
        icon: icon4
    },
    {
        id: 5,
        year: 2025,
        title: "Future of Commerce",
        description: "Shaping the future of eCommerce with innovations in AI, personalized shopping delivery, and sustainable, data-first innovation.",
        position: "left",
        icon: icon5
    }
]