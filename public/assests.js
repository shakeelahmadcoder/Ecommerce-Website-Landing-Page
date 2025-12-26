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
    {id:4, image: perfume},
]

export const happyCustomers = [
    {id:1, image: cus1},
    {id:2, image: cus2},
    {id:3, image: cus3},
    {id:4, image: clientscount},
]

export const products = [
  {id: 1, name: "Smart Water Bottles", price: 14, image: bottles, category: "lifestyle", topSeller: true, rating: 4.5, reviews: 144, slug: "smart-water-bottles", description: "Stay hydrated throughout the day with this smart water bottle. Tracks your water intake, has a sleek design, and is perfect for workouts or office use.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 2, name: "LED Strip Lights", price: 18, image: striplights, category: "lighting", topSeller: true, rating: 5, reviews: 50, slug: "led-strip-lights", description: "Decorate your room or workspace with these vibrant LED strip lights. Easy to install, adjustable colors, and perfect for creating the right mood.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 3, name: "Aromatherapy Diffusers", price: 40, image: balender, category: "wellness", topSeller: false, rating: 4, reviews: 32, slug: "aromatherapy-diffusers", description: "Create a calm and relaxing atmosphere with this aromatherapy diffuser. Supports essential oils, quiet operation, and perfect for meditation or sleep.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 4, name: "Phone Creativity Cases", price: 14, image: phonecover, category: "accessories", topSeller: true, rating: 3.5, reviews: 78, slug: "phone-creativity-cases", description: "Protect your phone in style with these creative cases. Lightweight, durable, and available in multiple designs to suit your personality.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 5, name: "Beachwlibée Sunglasses", price: 20, image: sunglass, category: "accessories", topSeller: false, rating: 4.5, reviews: 25, slug: "beachwlibee-sunglasses", description: "Trendy sunglasses ideal for beach trips. Provides UV protection, stylish frame, and comfortable to wear all day long.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 6, name: "Portable Mini Projectors", price: 120, image: miniprojector, category: "electronics", topSeller: true, rating: 5, reviews: 66, slug: "portable-mini-projectors", description: "Enjoy movies, presentations, and gaming anywhere with this portable mini projector. Compact design, bright display, and easy connectivity.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 7, name: "Wireless Mouse", price: 12, image: wirelessmouse, category: "electronics", topSeller: false, rating: 4, reviews: 90, slug: "wireless-mouse", description: "Smooth and responsive wireless mouse, perfect for work and gaming. Ergonomic design reduces hand fatigue during extended use.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 8, name: "Makeup Set", price: 100, image: makeupset, category: "beauty", topSeller: true, rating: 4.5, reviews: 42, slug: "makeup-set", description: "Complete makeup set with all essentials. High-quality pigments, long-lasting, and suitable for beginners and professionals alike.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 9, name: "Boys Cycle", price: 1500, image: cycle, category: "sports", topSeller: false, rating: 5, reviews: 12, slug: "boys-cycle", description: "Durable boys cycle designed for safety and fun. Smooth gear system, comfortable seating, and perfect for daily rides or weekend adventures.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 10, name: "Smart Watch", price: 150, image: sunglass, category: "accessories", topSeller: false, rating: 4, reviews: 60, slug: "smart-watch", description: "Track your fitness, monitor notifications, and stay connected with this smart watch. Stylish design and compatible with most smartphones.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 11, name: "Perfume Set", price: 60, image: balender, category: "beauty", topSeller: false, rating: 4.5, reviews: 38, slug: "perfume-set", description: "Luxury perfume set with multiple scents. Long-lasting fragrance perfect for daily wear or special occasions.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 12, name: "Face Cream", price: 25, image: striplights, category: "lighting", topSeller: false, rating: 4, reviews: 50, slug: "face-cream", description: "Nourishing face cream enriched with vitamins. Keeps skin hydrated, smooth, and glowing all day.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 13, name: "Blender", price: 80, image: balender, category: "kitchen", topSeller: false, rating: 4.2, reviews: 44, slug: "blender", description: "High-performance blender for smoothies, shakes, and purees. Durable blades and easy to clean.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 14, name: "LED Desk Lamp", price: 35, image: light, category: "lighting", topSeller: false, rating: 4.5, reviews: 22, slug: "led-desk-lamp", description: "Adjustable LED desk lamp with multiple brightness levels. Perfect for studying, reading, or working late at night.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 15, name: "Sports Shoes", price: 70, image: cycle, category: "sports", topSeller: false, rating: 4.3, reviews: 31, slug: "sports-shoes", description: "Lightweight and breathable sports shoes designed for running, training, and casual sports activities.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 16, name: "Phone Stand", price: 10, image: phonecover, category: "accessories", topSeller: false, rating: 3.8, reviews: 18, slug: "phone-stand", description: "Portable phone stand for desks, home, or travel. Keeps your phone upright and accessible while working.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 17, name: "Sunglasses Classic", price: 30, image: sunglass, category: "accessories", topSeller: false, rating: 4.6, reviews: 28, slug: "sunglasses-classic", description: "Classic design sunglasses that offer comfort and UV protection. Ideal for daily wear or outdoor activities.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 18, name: "Portable Speaker", price: 90, image: miniprojector, category: "electronics", topSeller: false, rating: 4.7, reviews: 45, slug: "portable-speaker", description: "High-quality portable Bluetooth speaker. Clear sound, long battery life, and easy pairing with devices.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 19, name: "Makeup Brushes", price: 40, image: makeupset, category: "beauty", topSeller: false, rating: 4.2, reviews: 33, slug: "makeup-brushes", description: "Set of professional makeup brushes for precise and flawless application. Soft bristles and ergonomic handles.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 20, name: "Smart Water Bottle XL", price: 20, image: bottles, category: "lifestyle", topSeller: false, rating: 4.3, reviews: 55, slug: "smart-water-bottle-xl", description: "Extra-large smart water bottle that tracks hydration. Perfect for long workouts or office use.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 21, name: "LED Strip Lights Pro", price: 25, image: striplights, category: "lighting", topSeller: false, rating: 5, reviews: 30, slug: "led-strip-lights-pro", description: "Professional-grade LED strip lights with customizable colors. Ideal for home, events, or creative projects.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 22, name: "Aromatherapy Diffuser Mini", price: 35, image: balender, category: "wellness", topSeller: false, rating: 4, reviews: 20, slug: "aromatherapy-diffuser-mini", description: "Compact aromatherapy diffuser for relaxation in small spaces. Easy to use and silent operation.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 23, name: "Phone Creativity Cases XL", price: 18, image: phonecover, category: "accessories", topSeller: false, rating: 3.9, reviews: 50, slug: "phone-creativity-cases-xl", description: "Extra-large phone case that combines protection with creative design. Lightweight and durable.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 24, name: "Beach Sunglasses Premium", price: 35, image: sunglass, category: "accessories", topSeller: false, rating: 4.7, reviews: 15, slug: "beach-sunglasses-premium", description: "Premium sunglasses with UV protection. Stylish and perfect for outdoor or beach activities.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 25, name: "Mini Projector Pro", price: 150, image: miniprojector, category: "electronics", topSeller: false, rating: 5, reviews: 28, slug: "mini-projector-pro", description: "Compact projector with high-resolution output. Easy to carry and perfect for home or travel use.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 26, name: "Wireless Mouse Ergonomic", price: 18, image: wirelessmouse, category: "electronics", topSeller: false, rating: 4.1, reviews: 60, slug: "wireless-mouse-ergonomic", description: "Ergonomic wireless mouse for comfortable and precise control. Ideal for work or gaming sessions.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 27, name: "Makeup Set Deluxe", price: 120, image: makeupset, category: "beauty", topSeller: false, rating: 4.8, reviews: 35, slug: "makeup-set-deluxe", description: "Deluxe makeup set with premium products. Perfect for both daily use and special occasions.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 28, name: "Boys Cycle Racer", price: 1600, image: cycle, category: "sports", topSeller: false, rating: 4.9, reviews: 10, slug: "boys-cycle-racer", description: "High-speed boys cycle designed for racing enthusiasts. Durable frame and smooth gear system.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 29, name: "Smart Watch Pro", price: 180, image: watch, category: "electronics", topSeller: false, rating: 4.5, reviews: 40, slug: "smart-watch-pro", description: "Advanced smart watch with fitness tracking, notifications, and long battery life.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 30, name: "Perfume Set Deluxe", price: 80, image: perfume, category: "beauty", topSeller: false, rating: 4.7, reviews: 18, slug: "perfume-set-deluxe", description: "Deluxe perfume set with elegant, long-lasting scents for all occasions.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 31, name: "Face Cream Premium", price: 30, image: creams, category: "beauty", topSeller: false, rating: 4.3, reviews: 25, slug: "face-cream-premium", description: "Premium face cream enriched with natural ingredients to hydrate and brighten skin.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 32, name: "Blender Pro", price: 100, image: balender, category: "kitchen", topSeller: false, rating: 4.5, reviews: 27, slug: "blender-pro", description: "Professional blender for smoothies, juices, and purees. High-speed motor and durable blades.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 33, name: "LED Desk Lamp XL", price: 45, image: light, category: "lighting", topSeller: false, rating: 4.6, reviews: 20, slug: "led-desk-lamp-xl", description: "Extra-large desk lamp with adjustable brightness. Ideal for study, work, or night reading.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 34, name: "Sports Shoes Runner", price: 80, image: cycle, category: "sports", topSeller: false, rating: 4.2, reviews: 30, slug: "sports-shoes-runner", description: "Lightweight running shoes designed for comfort, stability, and daily exercise routines.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 35, name: "Phone Stand Mini", price: 12, image: phonecover, category: "accessories", topSeller: false, rating: 3.9, reviews: 12, slug: "phone-stand-mini", description: "Mini phone stand suitable for travel or desk use. Lightweight and compact design.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 36, name: "Sunglasses Retro", price: 32, image: sunglass, category: "accessories", topSeller: false, rating: 4.4, reviews: 22, slug: "sunglasses-retro", description: "Retro-style sunglasses with UV protection. Stylish accessory for everyday wear.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 37, name: "Portable Speaker Mini", price: 100, image: miniprojector, category: "electronics", topSeller: false, rating: 4.5, reviews: 30, slug: "portable-speaker-mini", description: "Compact portable speaker with rich sound quality. Easy to carry and Bluetooth-enabled.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 38, name: "Makeup Brushes Pro", price: 50, image: makeupset, category: "beauty", topSeller: false, rating: 4.6, reviews: 20, slug: "makeup-brushes-pro", description: "Professional makeup brush set for smooth and precise application.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 39, name: "Smart Water Bottle Pro", price: 22, image: bottles, category: "lifestyle", topSeller: false, rating: 4.4, reviews: 35, slug: "smart-water-bottle-pro", description: "Advanced smart water bottle that monitors your hydration and reminds you to drink.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 40, name: "LED Strip Lights Ultra", price: 28, image: striplights, category: "lighting", topSeller: false, rating: 4.8, reviews: 25, slug: "led-strip-lights-ultra", description: "Ultra-bright LED strip lights with multiple color modes and remote control.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 41, name: "Aromatherapy Diffuser Deluxe", price: 50, image: balender, category: "wellness", topSeller: false, rating: 4.7, reviews: 18, slug: "aromatherapy-diffuser-deluxe", description: "Deluxe aromatherapy diffuser with ambient lighting and timer functions.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 42, name: "Phone Creativity Cases Pro", price: 20, image: phonecover, category: "accessories", topSeller: false, rating: 4, reviews: 40, slug: "phone-creativity-cases-pro", description: "Premium phone case with creative design and added protection.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 43, name: "Beach Sunglasses XL", price: 38, image: sunglass, category: "accessories", topSeller: false, rating: 4.5, reviews: 20, slug: "beach-sunglasses-xl", description: "Extra-large stylish sunglasses with full UV protection.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 44, name: "Mini Projector Ultra", price: 180, image: miniprojector, category: "electronics", topSeller: false, rating: 5, reviews: 12, slug: "mini-projector-ultra", description: "High-performance mini projector with ultra-clear display and long battery life.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 45, name: "Wireless Mouse Pro", price: 22, image: wirelessmouse, category: "electronics", topSeller: false, rating: 4.3, reviews: 35, slug: "wireless-mouse-pro", description: "Advanced wireless mouse with ergonomic design and precise tracking.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 46, name: "Makeup Set Ultra", price: 130, image: makeupset, category: "beauty", topSeller: false, rating: 4.8, reviews: 28, slug: "makeup-set-ultra", description: "Ultra premium makeup set with high-quality products for flawless looks.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 47, name: "Boys Cycle Ultra", price: 1700, image: cycle, category: "sports", topSeller: false, rating: 4.9, reviews: 9, slug: "boys-cycle-ultra", description: "High-end boys cycle with superior performance and smooth gears.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 48, name: "Smart Watch Ultra", price: 200, image: watch, category: "electronics", topSeller: false, rating: 4.7, reviews: 25, slug: "smart-watch-ultra", description: "Ultra smart watch with all fitness tracking and notification features.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 49, name: "Perfume Set Ultra", price: 90, image: perfume, category: "beauty", topSeller: false, rating: 4.9, reviews: 15, slug: "perfume-set-ultra", description: "Premium perfume set with elegant scents that last all day.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]},
  {id: 50, name: "Face Cream Ultra", price: 35, image: creams, category: "beauty", topSeller: false, rating: 4.6, reviews: 20, slug: "face-cream-ultra", description: "Ultra nourishing face cream for hydration, smoothness, and radiant skin.", features: ["100% Original product.", "Cash on delivery available.", "Easy return and exchange policy within 7 days."]}
];






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