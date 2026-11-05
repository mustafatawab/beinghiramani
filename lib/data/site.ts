// Site-wide content sourced from beinghiramani.com

const cdn = "https://beinghiramani.com/cdn/shop/files"

export const site = {
  name: "Hira Mani Couture",
  legalName: "BEING HIRA MANI",
  tagline: "Handmade luxury tailored for you.",
  description:
    "Hira Mani Couture is a designer wear collection by Hira Mani. Each dress is handcrafted, carefully curated and designed to be one of a kind. Explore the latest collection \"Nau Bahar\".",
  announcement: '🌷 New Collection "Nau Bahar" - Pre Orders Live 🌼',
  whatsapp: {
    display: "+92-341-0592897",
    number: "923410592897",
  },
  email: "hiramani.designs@gmail.com",
  privacyEmail: "Iamsalmanshiekh@gmail.com",
  address: "Al Zafar Apartment, Sir Syed Ahmed Rd, Karachi 74600, Pakistan",
  logo: `${cdn}/HMC_LOGO_Transparent_BG_Website.png?v=1776887342`,
  logoSquare: `${cdn}/HMC_LOGO_White_BG.png?v=1777066171`,
  instagram: "https://www.instagram.com/hiramanicouture",
  instagramHandle: "@hiramanicouture",
  facebook: "https://www.facebook.com/profile.php?id=61581335867059",
  sizeChart: "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/WhatsApp_Image_2025-09-29_at_9.36.08_AM.jpg?v=1759144171",
  paymentMethods: ["Visa", "Mastercard", "Maestro", "American Express", "Apple Pay"],
} as const

export type NavLink = {
  name: string
  href: string
  children?: { name: string; href: string }[]
}

export const navLinks: NavLink[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/pages/about-hiramani" },
  { name: "CONTACT US", href: "/pages/contact" },
]

export type HeroSlide = {
  eyebrow: string
  title: string
  description: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
  desktop: string
  mobile: string
  desktopPosition: string
  mobilePosition: string
  alt: string
}

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Nau Bahar · Pre-orders live",
    title: "Pankhuri",
    description:
      "Pink chiffon and crushed sharara, traced with gota and chatta patti — a festive study in contrast.",
    primary: { label: "Shop Raha", href: "/product/raha" },
    secondary: { label: "Explore the collections", href: "/collections" },
    desktop: `${cdn}/web_close_2_optimized.jpg?v=1777835842&width=2000`,
    mobile: `${cdn}/web_close_2_optimized.jpg?v=1777835842&width=900`,
    desktopPosition: "56% 18%",
    mobilePosition: "38% 14%",
    alt: "Hira Mani in a blush pink embroidered Pankhuri outfit against burgundy curtains",
  },
  {
    eyebrow: "Afsanay 2025 · Bridal",
    title: "Sohaye",
    description:
      "Light gold zari and hand-worked dabka on Khadi Net — a bridal heirloom for your most important day.",
    primary: { label: "Shop Sohaye", href: "/product/sohaye" },
    secondary: { label: "View Afsanay 2025", href: "/collections/afsanay-2025" },
    desktop: `${cdn}/RR_0004_051A3916.jpg?v=1752766952&width=1600`,
    mobile: `${cdn}/RR_0004_051A3916.jpg?v=1752766952&width=900`,
    desktopPosition: "55% 18%",
    mobilePosition: "45% 12%",
    alt: "Bride in the hand-embellished Sohaye outfit by Hira Mani Couture",
  },
  {
    eyebrow: "Nau Bahar · Festive lawn",
    title: "Shabnam",
    description:
      "A lilac-grey pishwas carrying mirror work, gota laces and a sequin-scattered chiffon dupatta.",
    primary: { label: "Shop Shabnam", href: "/product/shabnam" },
    secondary: { label: "Explore Nau Bahar pieces", href: "/shop" },
    desktop: `${cdn}/Web_3_optimized.jpg?v=1784236929&width=2000`,
    mobile: `${cdn}/Web_3_optimized.jpg?v=1784236929&width=900`,
    desktopPosition: "50% 18%",
    mobilePosition: "62% 14%",
    alt: "Hira Mani in the lime yellow Sunheri angrakha pishwas against red curtains",
  },
]

export type CollectionSlide = {
  href: string
  desktop: string
  mobile: string
  alt: string
}

export const collectionSlides: CollectionSlide[] = [
  {
    href: "/collections/all",
    desktop: `${cdn}/1_4e05cbdb-30d6-4771-b08b-9b9139db65a5.png?v=1776984785&width=1880`,
    mobile: `${cdn}/2_bd28a83e-0510-477c-944b-07e712177cae.png?v=1776984806&width=750`,
    alt: "Shop all Hira Mani Couture pieces",
  },
]

export const favouriteHandles = ["gulnaar", "koyil", "punkhari", "shabnam", "sunheri"]

export type CelebrityImage = { src: string; alt: string; href: string }

export const celebrityImages: CelebrityImage[] = [
  { src: `${cdn}/box-1_a96d68b8-fc76-4de9-9f10-de62fbb7a63a.jpg?width=1200`, alt: "Celebrity wearing Hira Mani Couture", href: site.instagram },
  { src: `${cdn}/Koyil_Small_Image.png?width=1200`, alt: "Koyil by Hira Mani Couture on a celebrity", href: site.instagram },
  { src: `${cdn}/Gulnaar_small_image.png?width=1200`, alt: "Gulnaar by Hira Mani Couture on a celebrity", href: site.instagram },
  { src: `${cdn}/Raya_PNG_a83d3c12-6896-428b-ae21-8d5de6bddce7.png?width=1200`, alt: "Hira Mani Couture worn at a celebration", href: site.instagram },
  { src: `${cdn}/Box-5_d9ebc1c5-7270-4509-b7f4-f464f14f370a.jpg?width=1200`, alt: "Celebs in Hira Mani Couture", href: site.instagram },
]

export const brandStatement = {
  heading: "BY HIRA MANI",
  paragraphs: [
    "At Hira Mani Couture, every piece I create carries a piece of my heart, my roots, and my deepest love for the women of this country. This is not just clothing, it is my way of giving every woman the feeling I have been so blessed to experience, the joy, the confidence, and the magic of wearing something truly beautiful.",
    "I built this brand on the belief that luxury and tradition are not opposites; they are soulmates. Every design is my personal promise, blending the elegance of what is modern with the warmth of what is timeless, so that each outfit feels both familiar and extraordinary.",
    "With this first-ever luxury collection, I wanted every woman to look in the mirror and feel what I feel, seen, celebrated, and dressed in something that honors who she truly is.",
  ],
  images: [
    { src: `${cdn}/about-hira.jpg?v=1759144805&width=1920`, alt: "Hira Mani, founder of Hira Mani Couture" },
    { src: `${cdn}/about-hira-2.jpg?v=1759144903&width=1920`, alt: "Hira Mani Couture campaign" },
  ],
}

export const newsletter = {
  heading: "Newsletter Sign Up",
  description: "Sign up for exclusive updates, new arrivals & insider only discounts",
  submitLabel: "Submit",
  success: "Thanks for subscribing!",
}

export type AboutParagraph = string | { text: string; href: string }

export type AboutSection = {
  heading: string
  paragraphs: AboutParagraph[]
}

export const about = {
  eyebrow: "ABOUT HIRAMANI COUTURE",
  title: "ABOUT HIRAMANI COUTURE",
  intro: [
    "I am Hira Mani, and this brand is the most personal thing I have ever created.",
    "For years, I have had the privilege of standing in front of cameras, attending grand events, and wearing the most exquisite clothes this industry has to offer. I felt the way a beautifully crafted outfit can change how you carry yourself, how you enter a room, how you feel from the inside out. And for the longest time, one thought stayed with me: every woman deserves to feel this way.",
    "That thought became the Hira Mani brand.",
  ],
  image: `${cdn}/about-hira.jpg?v=1759144805&width=1920`,
  sections: [
    {
      heading: "Fashion Rooted in Tradition, Designed for Today",
      paragraphs: [
        "Growing up, I was surrounded by the richness of our culture, the delicate threadwork, the grace of classical silhouettes, the quiet luxury of fabrics that told stories. I never wanted to leave that behind. But I also wanted to create something that speaks to the woman she is today, bold, busy, beautiful, and deeply proud of where she comes from.",
        "Every Hira Mani dress is my answer to that balance. Each piece is thoughtfully constructed, where contemporary cuts meet classical techniques, where modern glamour does not erase tradition but rather embraces it. Whether it is the drape of a fabric, the placement of embroidery, or the cut of a silhouette, every detail is a decision made with love and intention.",
      ],
    },
    {
      heading: "Luxury That Belongs to Every Woman",
      paragraphs: [
        "The Hira Mani brand was never meant to be out of reach. It was meant to be a bridge, between the extraordinary and the everyday, between heritage and the modern wardrobe, between how a woman looks and how she truly feels.",
        {
          text: "Our first-ever luxury collection is an invitation. An invitation to experience the kind of dressing that I have been so fortunate to know, and that I believe every woman deserves. From our ready-to-wear festive pieces to our Hira Mani Bridal Wear, each collection is crafted for women who want to feel seen and celebrated, dressed in pieces that honor who they are.",
          href: "/collections/afsanay-2025",
        },
      ],
    },
    {
      heading: "Hira Mani Bridal Wear: A Promise for Your Most Important Day",
      paragraphs: [
        "A bride deserves more than just a beautiful outfit. She deserves to feel like the truest, most radiant version of herself. Hira Mani Bridal Wear is built on that belief. Every bridal piece carries the weight of tradition and the lightness of joy, so that when you step into your moment, you do so with grace, confidence, and a quiet kind of magic that stays with you long after the day is over.",
      ],
    },
    {
      heading: "This Is More Than a Brand. This Is a Feeling.",
      paragraphs: [
        "When I set out to build Hira Mani Couture, I was not just designing clothes. I was trying to bottle a feeling, the feeling of putting on something that fits your body, your roots, and your soul all at once. That is what I want every woman who wears a Hira Mani dress to carry with her.",
        "Welcome to this world. I made it for you.",
      ],
    },
  ] as AboutSection[],
}

export const contact = {
  title: "Contact Us",
  intro:
    "Have a question or comment? Follow & DM Us, We are just a message away on Instagram and Facebook. Or use the form below to contact us by mail.",
  fields: [
    { name: "name", label: "Name", type: "text", required: false },
    { name: "phone", label: "Phone number", type: "tel", required: false },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "comment", label: "Comment", type: "textarea", required: true },
  ],
  channels: [
    { label: "WhatsApp", value: site.whatsapp.display, href: `https://wa.me/${site.whatsapp.number}` },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Instagram", value: site.instagramHandle, href: site.instagram },
    { label: "Facebook", value: "Hira Mani Couture", href: site.facebook },
    { label: "Studio", value: site.address, href: "https://maps.google.com/?q=Al+Zafar+Apartment+Sir+Syed+Ahmed+Rd+Karachi+74600+Pakistan" },
  ],
}

export const shippingPolicy = {
  title: "Shipping policy",
  sections: [
    {
      heading: "Delivery times",
      paragraphs: [
        "Ready-to-wear orders are prepared with care and delivered within 15 working days. Bridal and made-to-order pieces are crafted to order; our team will confirm your delivery timeline after your order is placed.",
        "All delivery times are estimates only and are not guaranteed. We are not responsible for delays caused by shipping carriers, customs processing, or events outside our control.",
      ],
    },
    {
      heading: "Risk and title",
      paragraphs: [
        "Once we transfer products to the carrier, title and risk of loss passes to you.",
      ],
    },
    {
      heading: "Order tracking",
      paragraphs: [
        "To track your order, contact our team on WhatsApp or email us with your order number and we will share the latest update.",
      ],
    },
    {
      heading: "Questions",
      paragraphs: [
        `For any shipping questions, message us on WhatsApp at ${site.whatsapp.display} or email ${site.email}.`,
      ],
    },
  ],
}
