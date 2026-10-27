// Product data sourced from beinghiramani.com (Shopify products.json)
export type ProductVariant = {
  id?: string,
  title: string
  price: number
  compareAtPrice: number | null
  sku: string | null
  available: boolean
}

export type Product = {
  id: string
  handle: string
  title: string
  summary: string
  description: string
  descriptionHtml: string
  productType: string
  price: number
  compareAtPrice: number | null
  collection: "Nau Bahar" | "Afsanay 2025"
  collectionHandle: "nau-bahar" | "afsanay-2025"
  fabric: string
  pieces: string
  delivery: string
  availability: "Pre-order" | "Available"
  images: string[]
  variants: ProductVariant[]
  options: { name: string; values: string[] }[]
  tags: string[]
  featured: boolean
}

export type Collection = {
  handle: string
  title: string
  description: string
  image?: string
  products: Product[]
}


export const products: Product[] = [
  {
    "id": "alara",
    "handle": "alara",
    "title": "Alara",
    "summary": "Silver zari, sequins and lilac-thread florals on Khadi Net — a bridal ensemble finished with hand-embellished sitara work.",
    "description": "Fabric:\n\nShirt: Khadi Net\nLower: Korean Raw Silk\nDupatta: Organza\nInner: Korean Raw Silk\nAppliqué/Patchwork: Organza\n\nEmbroidery:\n\nZari Work: Intricate floral patterns and outlines crafted with silver metallic threads.\n\nSequins: Delicately scattered silver sequins add a soft, elegant sparkle to the design.\n\nThread Embroidery: Fine embroidery in lilac and pistachio green tones, featuring a mix of floral and geometric motifs.\n\nHand Embellishment:\n\nSitara Work: Shiny round discs individually stitched to create a sparkling effect across the fabric.\n\nBeaded Latkan: Edges adorned with crystal-like beads and floral thread clusters, forming an elegant hanging fringe.\n\nCut Dana: Fine tubular beads used along edges and fills to add texture and subtle shimmer.\n\nBeads & Pearls: Tiny beads and pearls placed around the neckline and within floral motifs to enhance richness and detail.",
    "descriptionHtml": "<h2>Fabric:<br>\n</h2>\n<p><strong data-end=\"177\" data-start=\"167\">Shirt:</strong> Khadi Net<br data-end=\"190\" data-start=\"187\"><strong data-end=\"200\" data-start=\"190\">Lower:</strong> Korean Raw Silk<br data-end=\"219\" data-start=\"216\"><strong data-end=\"231\" data-start=\"219\">Dupatta:</strong> Organza<br data-end=\"242\" data-start=\"239\"><strong data-end=\"252\" data-start=\"242\">Inner:</strong> Korean Raw Silk<br data-end=\"271\" data-start=\"268\"><strong data-end=\"294\" data-start=\"271\">Appliqué/Patchwork:</strong> Organza</p>\n<h2>Embroidery:<br>\n</h2>\n<p><strong>Zari Work</strong>: Intricate floral patterns and outlines crafted with silver metallic threads.</p>\n<p><strong>Sequins</strong>: Delicately scattered silver sequins add a soft, elegant sparkle to the design.</p>\n<p><strong>Thread Embroidery</strong>: Fine embroidery in lilac and pistachio green tones, featuring a mix of floral and geometric motifs.</p>\n<h2>Hand Embellishment:<br>\n</h2>\n<p data-end=\"262\" data-start=\"156\"><strong data-end=\"172\" data-start=\"156\">Sitara Work:</strong> Shiny round discs individually stitched to create a sparkling effect across the fabric.</p>\n<p data-end=\"386\" data-start=\"265\"><strong data-end=\"283\" data-start=\"265\">Beaded Latkan:</strong> Edges adorned with crystal-like beads and floral thread clusters, forming an elegant hanging fringe.</p>\n<p data-end=\"485\" data-start=\"389\"><strong data-end=\"402\" data-start=\"389\">Cut Dana:</strong> Fine tubular beads used along edges and fills to add texture and subtle shimmer.</p>\n<p data-end=\"613\" data-start=\"488\"><strong data-end=\"507\" data-start=\"488\">Beads &amp; Pearls:</strong> Tiny beads and pearls placed around the neckline and within floral motifs to enhance richness and detail.</p>",
    "productType": "",
    "price": 48299.0,
    "compareAtPrice": 68999.0,
    "collection": "Afsanay 2025",
    "collectionHandle": "afsanay-2025",
    "fabric": "Khadi Net, Korean Raw Silk & Organza",
    "pieces": "3-Piece Bridal Ensemble",
    "delivery": "Made to order",
    "availability": "Available",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0011_051A4026.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0000_051A4175.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0001_051A4166.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0002_051A4161.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0003_051A4146.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0004_051A4128.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0005_051A4109.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0006_051A4085.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0007_051A4081.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0008_051A4066.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0009_051A4048.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0010_051A4035.jpg?v=1758026066",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/alara-_0012_051A4190.jpg?v=1758026025"
    ],
    "variants": [
      {
        "title": "Un-Stitched",
        "price": 48299.0,
        "compareAtPrice": 68999.0,
        "sku": "HMLW-25003",
        "available": true
      },
      {
        "title": "Stitched",
        "price": 58799.0,
        "compareAtPrice": 83999.0,
        "sku": "HMLW-25002",
        "available": true
      }
    ],
    "options": [
      {
        "name": "Stitching Option",
        "values": [
          "Un-Stitched",
          "Stitched"
        ]
      }
    ],
    "tags": [
      "stitched"
    ],
    "featured": false
  },
  {
    "id": "amelia-1",
    "handle": "amelia-1",
    "title": "Amelia",
    "summary": "Refined threadwork, contrasting appliqué and hand-embellished pearls on Khadi Net, organza and Korean raw silk.",
    "description": "Fabric:\n\nKhadi Net: A lightweight and breathable fabric used for the shirt, offering a soft, graceful texture that beautifully highlights intricate embroidery.\n\nKorean Raw Silk: Smooth, structured, and slightly lustrous — used for trousers and inners, adding comfort and an elegant finish.\n\nOrganza: A sheer, crisp fabric used for the dupatta and appliqué, bringing ethereal charm and delicate movement to the ensemble.\n\nEmbroidery:\n\nThreadwork: The shirt features refined thread embroidery on the front panel, creating an elegant and graceful aesthetic.\n\nHeavy Embroidery on Daman: The daman is richly adorned with dense threadwork and contrasting appliqué, adding depth, vibrance, and artisanal detail.\n\nDupatta Embroidery: The organza dupatta showcases heavy thread embroidery on the pallus, further accentuated with hand embellishments and contrasting appliqué for a festive and luxurious finish.\n\nAppliqué Work:\n\nContrasting Appliqué: Intricately placed appliqué in contrasting tones enhances both the daman and dupatta pallus, adding richness, texture, and visual dimension.\n\nHand Embellishment:\n\nDabka & Kora: Finely detailed coiled wire embroidery that adds raised texture and a regal touch to the outfit.\n\nPearls & Beads: Delicate pearls and fine beads intricately arranged along motifs and borders, enhancing elegance with subtle shimmer.\n\nCrystals & Cut Dana: Brilliant crystals and cut dana beads catch the light beautifully, adding refined sparkle and a festive glow.\n\nCrystal Tassels: Graceful crystal latkans adorning the daman and dupatta, completing the look with a luxurious finishing touch.",
    "descriptionHtml": "<h2><strong>Fabric:</strong></h2>\n<p><strong>Khadi Net: </strong>A lightweight and breathable fabric used for the shirt, offering a soft, graceful texture that beautifully highlights intricate embroidery.</p>\n<p><strong>Korean Raw Silk:</strong> Smooth, structured, and slightly lustrous — used for trousers and inners, adding comfort and an elegant finish.</p>\n<p><strong>Organza:</strong> A sheer, crisp fabric used for the dupatta and appliqué, bringing ethereal charm and delicate movement to the ensemble.</p>\n<h2>Embroidery:</h2>\n<p><strong>Threadwork:</strong> The shirt features refined thread embroidery on the front panel, creating an elegant and graceful aesthetic.</p>\n<p><strong>Heavy Embroidery on Daman:</strong> The daman is richly adorned with dense threadwork and contrasting appliqué, adding depth, vibrance, and artisanal detail.</p>\n<p><strong>Dupatta Embroidery:</strong> The organza dupatta showcases heavy thread embroidery on the pallus, further accentuated with hand embellishments and contrasting appliqué for a festive and luxurious finish.</p>\n<h2>Appliqué Work:</h2>\n<p><strong>Contrasting Appliqué:</strong> Intricately placed appliqué in contrasting tones enhances both the daman and dupatta pallus, adding richness, texture, and visual dimension.</p>\n<h2>Hand Embellishment:</h2>\n<p><strong>Dabka &amp; Kora:</strong> Finely detailed coiled wire embroidery that adds raised texture and a regal touch to the outfit.</p>\n<p><strong>Pearls &amp; Beads:</strong> Delicate pearls and fine beads intricately arranged along motifs and borders, enhancing elegance with subtle shimmer.</p>\n<p><strong>Crystals &amp; Cut Dana:</strong> Brilliant crystals and cut dana beads catch the light beautifully, adding refined sparkle and a festive glow.</p>\n<p><strong>Crystal Tassels:</strong> Graceful crystal latkans adorning the daman and dupatta, completing the look with a luxurious finishing touch.</p>",
    "productType": "",
    "price": 40900.0,
    "compareAtPrice": 44990.0,
    "collection": "Afsanay 2025",
    "collectionHandle": "afsanay-2025",
    "fabric": "Khadi Net, Korean Raw Silk & Organza",
    "pieces": "3-Piece Bridal Ensemble",
    "delivery": "Made to order",
    "availability": "Available",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3440_70385279-c496-44db-83a7-9e7da3bc5baa.jpg?v=1759701227",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3586_d19548b7-e79e-42de-bfc4-4c85a34c5b45.jpg?v=1759701227",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3457_fb1006fd-f2b8-4446-ba1b-ef88844b1b66.jpg?v=1759701245",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3466_09abda0f-43e9-410f-9efa-ad4649935dff.jpg?v=1759701245",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3474_501fd22b-3596-4323-8e31-b4fc92352ec2.jpg?v=1759701246",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3475_26724b07-0dae-4e57-8fd9-55e48d34e10b.jpg?v=1759701245",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3505_66ceb50e-6a0e-4f39-acc1-89e66ffcbb5f.jpg?v=1759701245",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3514_1aed6c09-fc44-4632-9642-4f52a1c18b80.jpg?v=1759701245",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3539_ec1aa867-7258-4ce8-b9f7-171caf11d75b.jpg?v=1759701245",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3556_1e9570b1-5867-4c1d-8e40-7ace5c4cc516.jpg?v=1759701245",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A3599_fad8ebfe-8e0f-4b35-9213-c8c9f63d99b9.jpg?v=1759701246"
    ],
    "variants": [
      {
        "title": "Un-Stitched",
        "price": 40900.0,
        "compareAtPrice": 44990.0,
        "sku": "HMLW - 25005",
        "available": true
      },
      {
        "title": "Stitched",
        "price": 45900.0,
        "compareAtPrice": 50999.0,
        "sku": "HMLW - 25006",
        "available": true
      }
    ],
    "options": [
      {
        "name": "Stitching Option",
        "values": [
          "Un-Stitched",
          "Stitched"
        ]
      }
    ],
    "tags": [],
    "featured": false
  },
  {
    "id": "gulnaar",
    "handle": "gulnaar",
    "title": "Gulnaar",
    "summary": "Crafted in pure cotton lawn, Gulnaar is dressed in bold, deep maroon colours that carry the weight of heritage and the confidence of a woman who knows her presence. The shirt is adorned with gota work along the neckline and hemline, its metallic shimmer catching light with every move, while delicate lappa detailing traces the edges with a handcrafted refinement that speaks of old-world artisanship.",
    "description": "Gulnaar - 3 Piece Pishwas\n\nCrafted in pure cotton lawn, Gulnaar is dressed in bold, deep maroon colours that carry the weight of heritage and the confidence of a woman who knows her presence. The shirt is adorned with gota work along the neckline and hemline, its metallic shimmer catching light with every move, while delicate lappa detailing traces the edges with a handcrafted refinement that speaks of old-world artisanship.\n\nFabric\n\nPure Cotton Lawn\n\nDetailing\n\nGota Work: Metallic gota trims framing the neckline and hemline, lending a festive luminance to the silhouette.\n\nLappa Detailing: Fine lappa borders add layered texture and a distinctly handcrafted finish.\n\nColour: Black & Maroon\n\nPieces: 3 (Shirt, Trouser, Dupatta)\n\nDelivery: 15 working days\n\nSizes: If your size isn't in the size chart, please include your size in the special instructions or send us a message on Facebook/Instagram after placing an order, and we will customize your order accordingly.\n\nNote: Pouch/Potli not included. Slight colour variation may occur due to screen settings and lighting during photography.",
    "descriptionHtml": "<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><em>Gulnaar - 3 Piece Pishwas</em></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Crafted in pure cotton lawn, Gulnaar is dressed in bold, deep maroon colours that carry the weight of heritage and the confidence of a woman who knows her presence. The shirt is adorned with gota work along the neckline and hemline, its metallic shimmer catching light with every move, while delicate lappa detailing traces the edges with a handcrafted refinement that speaks of old-world artisanship.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Fabric</strong></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Pure Cotton Lawn</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Detailing</strong></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Gota Work: </strong>Metallic gota trims framing the neckline and hemline, lending a festive luminance to the silhouette.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Lappa Detailing:</strong> Fine lappa borders add layered texture and a distinctly handcrafted finish.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Colour:</strong> Black &amp; Maroon</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Pieces:</strong> 3 (Shirt, Trouser, Dupatta)</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Delivery:</strong> 15 working days</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px;\"><strong>Sizes:</strong> If your size isn't in the size chart, please include your size in the special instructions or send us a message on Facebook/Instagram after placing an order, and we will customize your order accordingly.</span></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><em>Note: Pouch/Potli not included. Slight colour variation may occur due to screen settings and lighting during photography.</em></p>",
    "productType": "Pure Cotton Lawn",
    "price": 22900.0,
    "compareAtPrice": null,
    "collection": "Nau Bahar",
    "collectionHandle": "nau-bahar",
    "fabric": "Pure Cotton Lawn",
    "pieces": "3-Piece",
    "delivery": "15 working days",
    "availability": "Pre-order",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Closeup1_aaaf7bc3-f496-4396-99d5-cdc88b083ade.jpg?v=1777061711",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Close_up_3_1_optimized.jpg?v=1777063618",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/closeup5_54d86d7c-e8f7-4bdb-8860-f7e622002c86.jpg?v=1777061711",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Closeup2_d4b6114f-4d82-4b46-b507-9753b0c60058.jpg?v=1777061711",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Closeup4_69a78b2e-b9ff-49ed-9e88-5836e0cfaeb6.jpg?v=1777061711"
    ],
    "variants": [
      {
        "title": "Size",
        "price": 22900.0,
        "compareAtPrice": null,
        "sku": null,
        "available": true
      }
    ],
    "options": [
      {
        "name": "Size Option",
        "values": [
          "Size"
        ]
      }
    ],
    "tags": [
      "Ready to wear",
      "stitched"
    ],
    "featured": true
  },
  {
    "id": "inzar",
    "handle": "inzar",
    "title": "Inzar",
    "summary": "Handcrafted silver embroidery, appliqué florals and dabka work on Khadi Net, paired with Korean raw silk and organza.",
    "description": "Fabric:\n\nKhadi Net: A lightweight, breathable fabric used for shirts, offering a soft texture with a refined finish.\n\nKorean Raw Silk: Smooth and slightly lustrous, this fabric is used for trousers and inners, providing structure and comfort.\n\nOrganza: A sheer, crisp fabric used for dupattas, as well as patchwork and appliqué, adding elegance and dimension to the design.\n\nEmbroidery:\n\nZari Work: Handcrafted silver embroidery with timeless floral motifs.\n\nSequins: Refined silver accents for an elegant shimmer.\n\nViscose Threads: Intricate silver-grey patterns blending florals and geometry.\n\nApplique work:\n\nAppliqué Flowers/Petals: Fabric and thread petals embellished with beads or stones for a decorative finish.\n\nHand Embellishment:\n\nDabka Work: Exquisite coiled wire embroidery, creating intricate, raised patterns that add depth and elegance, especially around the neckline.\n\nCrystal Stones: Lustrous crystal accents, thoughtfully placed in floral centers, infusing the design with timeless sophistication.\n\nBeads and Pearls: Delicate beads and lustrous pearls intricately arranged around the neckline and floral details to elevate the overall richness.\n\nStonework: Brilliantly cut stones, symmetrically set to catch the light and create a dazzling, three-dimensional effect.",
    "descriptionHtml": "<h2>Fabric:<br>\n</h2>\n<p data-end=\"280\" data-start=\"163\"><strong data-end=\"177\" data-start=\"163\">Khadi Net:</strong> A lightweight, breathable fabric used for <strong data-end=\"230\" data-start=\"220\">shirts</strong>, offering a soft texture with a refined finish.</p>\n<p data-end=\"421\" data-start=\"283\"><strong data-end=\"303\" data-start=\"283\">Korean Raw Silk:</strong> Smooth and slightly lustrous, this fabric is used for <strong data-end=\"370\" data-start=\"358\">trousers</strong> and <strong data-end=\"385\" data-start=\"375\">inners</strong>, providing structure and comfort.</p>\n<p data-end=\"569\" data-start=\"424\"><strong data-end=\"436\" data-start=\"424\">Organza:</strong> A sheer, crisp fabric used for <strong data-end=\"480\" data-start=\"468\">dupattas</strong>, as well as <strong data-end=\"506\" data-start=\"493\">patchwork</strong> and <strong data-end=\"523\" data-start=\"511\">appliqué</strong>, adding elegance and dimension to the design.</p>\n<h2>Embroidery:</h2>\n<p><strong>Zari Work</strong>: Handcrafted silver embroidery with timeless floral motifs.</p>\n<p><strong>Sequins</strong>: Refined silver accents for an elegant shimmer.</p>\n<p><strong>Viscose Threads</strong>: Intricate silver-grey patterns blending florals and geometry.</p>\n<h2>Applique work:<br>\n</h2>\n<p data-start=\"47\" data-end=\"160\"><strong data-start=\"47\" data-end=\"75\">Appliqué Flowers/Petals:</strong> Fabric and thread petals embellished with beads or stones for a decorative finish.</p>\n<h2>Hand Embellishment:<br>\n</h2>\n<p data-start=\"96\" data-end=\"244\"><strong data-start=\"96\" data-end=\"111\">Dabka Work:</strong> Exquisite coiled wire embroidery, creating intricate, raised patterns that add depth and elegance, especially around the neckline.</p>\n<p data-start=\"246\" data-end=\"382\"><strong data-start=\"246\" data-end=\"265\">Crystal Stones:</strong> Lustrous crystal accents, thoughtfully placed in floral centers, infusing the design with timeless sophistication.</p>\n<p data-start=\"384\" data-end=\"535\"><strong data-start=\"384\" data-end=\"405\">Beads and Pearls:</strong> Delicate beads and lustrous pearls intricately arranged around the neckline and floral details to elevate the overall richness.</p>\n<p data-start=\"537\" data-end=\"661\" data-is-last-node=\"\" data-is-only-node=\"\"><strong data-start=\"537\" data-end=\"551\">Stonework:</strong> Brilliantly cut stones, symmetrically set to catch the light and create a dazzling, three-dimensional effect.</p>",
    "productType": "",
    "price": 31499.0,
    "compareAtPrice": 44999.0,
    "collection": "Afsanay 2025",
    "collectionHandle": "afsanay-2025",
    "fabric": "Khadi Net, Korean Raw Silk & Organza",
    "pieces": "3-Piece Bridal Ensemble",
    "delivery": "Made to order",
    "availability": "Available",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0011_051A4313.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0000_051A4414.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0001_051A4408.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0002_051A4404.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0003_051A4394.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0004_051A4386.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0005_051A4371.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0006_051A4362.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0007_051A4342.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0008_051A4339.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0009_051A4335.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0010_051A4332.jpg?v=1758025602",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0012_051A4268.jpg?v=1758025484",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0013_051A4256.jpg?v=1758025484",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/inzar-_0014_Background.jpg?v=1758025484"
    ],
    "variants": [
      {
        "title": "Un-Stitched",
        "price": 31499.0,
        "compareAtPrice": 44999.0,
        "sku": "HMLW-25002",
        "available": true
      },
      {
        "title": "Stitched",
        "price": 38499.0,
        "compareAtPrice": 54999.0,
        "sku": "HMLW-25001",
        "available": true
      }
    ],
    "options": [
      {
        "name": "Stitching Option",
        "values": [
          "Un-Stitched",
          "Stitched"
        ]
      }
    ],
    "tags": [
      "stitched"
    ],
    "featured": false
  },
  {
    "id": "izel",
    "handle": "izel",
    "title": "Izel",
    "summary": "Multicoloured floral threadwork with tilla, zardozi and crystal detailing on a pristine white Khaddi Net base.",
    "description": "Fabric:\n\nKhaddi Net: A lightweight yet richly textured fabric used for the shirt and dupatta, offering breathability and a soft, refined finish that enhances the intricate embroidery.\n\nKorean Raw Silk: Smooth, structured, and slightly lustrous, this fabric is used for the trousers and inner lining, adding sophistication and comfort to the overall look.\n\nEmbroidery:\n\nThreadwork: Intricate multicolored floral thread embroidery adorns the pristine white base, with each kali on the front, back, and sleeves showcasing exquisite floral compositions that capture timeless elegance.\n\nTilla & Zardozi: Golden tilla and zardozi detailing enrich the design, adding depth and a touch of opulence to the delicate floral motifs.\n\nSequins & Katori: Glimmering sequins and golden katori work bring festive brilliance, creating a perfect balance of shimmer and sophistication.\n\nDupatta: The khaddi net dupatta is gracefully embellished with elaborate embroidery and heavy sequin work along the matha patti, completing this refined and graceful ensemble.\n\nHand Embellishment:\n\nCrystals and Pearls: Delicate crystals and pearls are thoughtfully placed to elevate the embroidery’s sophistication and create a graceful, ethereal look.",
    "descriptionHtml": "<h2>Fabric:</h2>\n<p><strong>Khaddi Net:</strong> A lightweight yet richly textured fabric used for the shirt and dupatta, offering breathability and a soft, refined finish that enhances the intricate embroidery.</p>\n<p><strong>Korean Raw Silk:</strong> Smooth, structured, and slightly lustrous, this fabric is used for the trousers and inner lining, adding sophistication and comfort to the overall look.</p>\n<h2>Embroidery:</h2>\n<p data-start=\"60\" data-end=\"277\"><strong data-start=\"60\" data-end=\"75\">Threadwork:</strong> Intricate multicolored floral thread embroidery adorns the pristine white base, with each kali on the front, back, and sleeves showcasing exquisite floral compositions that capture timeless elegance.</p>\n<p data-start=\"279\" data-end=\"423\"><strong data-start=\"279\" data-end=\"299\">Tilla &amp; Zardozi:</strong> Golden tilla and zardozi detailing enrich the design, adding depth and a touch of opulence to the delicate floral motifs.</p>\n<p data-start=\"425\" data-end=\"574\"><strong data-start=\"425\" data-end=\"446\">Sequins &amp; Katori:</strong> Glimmering sequins and golden katori work bring festive brilliance, creating a perfect balance of shimmer and sophistication.</p>\n<p data-start=\"576\" data-end=\"757\"><strong data-start=\"576\" data-end=\"588\">Dupatta:</strong> The khaddi net dupatta is gracefully embellished with elaborate embroidery and heavy sequin work along the matha patti, completing this refined and graceful ensemble.</p>\n<h2>Hand Embellishment:</h2>\n<p><strong>Crystals and Pearls:</strong> Delicate crystals and pearls are thoughtfully placed to elevate the embroidery’s sophistication and create a graceful, ethereal look.</p>",
    "productType": "",
    "price": 127899.0,
    "compareAtPrice": 142100.0,
    "collection": "Afsanay 2025",
    "collectionHandle": "afsanay-2025",
    "fabric": "Khadi Net, Korean Raw Silk & Organza",
    "pieces": "3-Piece Bridal Ensemble",
    "delivery": "Made to order",
    "availability": "Available",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4523.jpg?v=1759702426",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4541.jpg?v=1759702426",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4553.jpg?v=1759702449",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4586.jpg?v=1759702450",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4599.jpg?v=1759702449",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4610.jpg?v=1759702449"
    ],
    "variants": [
      {
        "title": "Un-Stitched",
        "price": 127899.0,
        "compareAtPrice": 142100.0,
        "sku": "HMLW - 250011",
        "available": true
      },
      {
        "title": "Stitched",
        "price": 153200.0,
        "compareAtPrice": 170200.0,
        "sku": "HMLW - 250012",
        "available": true
      }
    ],
    "options": [
      {
        "name": "Stitching Option",
        "values": [
          "Un-Stitched",
          "Stitched"
        ]
      }
    ],
    "tags": [],
    "featured": false
  },
  {
    "id": "kiara",
    "handle": "kiara",
    "title": "Kiara",
    "summary": "Heavy thread embroidery, golden katori and contrasting appliqué on Khadi Net — modern elegance with a festive spirit.",
    "description": "Fabric:\n\nKhadi Net: A delicate, breathable fabric crafted for the shirt, known for its refined texture and soft drape, making it ideal for intricate embellishments.\n\nKorean Raw Silk: Smooth and structured with a gentle sheen, this premium fabric is used for the trousers to create a poised and graceful silhouette.\n\nOrganza: A lightweight, sheer fabric chosen for the dupatta, offering fluidity and an ethereal festive finish.\n\nEmbroidery:\n\nThreadwork: The shirt is beautifully adorned with heavy thread embroidery, creating refined patterns that reflect traditional artistry.\n\nSequins & Tilla: A delicate blend of sequins and metallic tilla threads adds a soft luminosity, enhancing the design with subtle festive elegance.\n\nGolden Katori: Intricately placed golden katori accents bring a hint of radiance and regal warmth to the embroidery.\n\nAppliqué Work:\n\nContrasting Details: Elegant contrasting appliqué enriches the embroidery, highlighting the design with refined texture and graceful depth.\n\nHand Embellishment:\n\nSitara & Crystals: Hand-embellished sitara and crystal work glimmers across the shirt and sleeves, adding a delicate sparkle to every movement.\n\nBeads & Pearls: Soft pearls and beads enhance the handwork, lending a balanced blend of sophistication and charm.\n\nFinishing Touches: Paired with a graceful organza dupatta, lightly adorned to complement the shirt’s embellishments, Kiara radiates *modern elegance with a timeless festive spirit.",
    "descriptionHtml": "<h2><strong>Fabric:</strong></h2>\n<p><strong>Khadi Net:</strong> A delicate, breathable fabric crafted for the shirt, known for its refined texture and soft drape, making it ideal for intricate embellishments.</p>\n<p><strong>Korean Raw Silk:</strong> Smooth and structured with a gentle sheen, this premium fabric is used for the trousers to create a poised and graceful silhouette.</p>\n<p><strong>Organza:</strong> A lightweight, sheer fabric chosen for the dupatta, offering fluidity and an ethereal festive finish.</p>\n<h2>Embroidery:</h2>\n<p><strong>Threadwork:</strong> The shirt is beautifully adorned with heavy thread embroidery, creating refined patterns that reflect traditional artistry.</p>\n<p><strong>Sequins &amp; Tilla:</strong> A delicate blend of sequins and metallic tilla threads adds a soft luminosity, enhancing the design with subtle festive elegance.</p>\n<p><strong>Golden Katori:</strong> Intricately placed golden katori accents bring a hint of radiance and regal warmth to the embroidery.</p>\n<h2>Appliqué Work:</h2>\n<p><strong>Contrasting Details:</strong> Elegant contrasting appliqué enriches the embroidery, highlighting the design with refined texture and graceful depth.</p>\n<h2>Hand Embellishment:</h2>\n<p><strong>Sitara &amp; Crystals:</strong> Hand-embellished sitara and crystal work glimmers across the shirt and sleeves, adding a delicate sparkle to every movement.</p>\n<p><strong>Beads &amp; Pearls:</strong> Soft pearls and beads enhance the handwork, lending a balanced blend of sophistication and charm.</p>\n<p><strong>Finishing Touches:</strong> Paired with a graceful organza dupatta, lightly adorned to complement the shirt’s embellishments, Kiara radiates *modern elegance with a timeless festive spirit.</p>",
    "productType": "",
    "price": 47340.0,
    "compareAtPrice": 52600.0,
    "collection": "Afsanay 2025",
    "collectionHandle": "afsanay-2025",
    "fabric": "Khadi Net, Korean Raw Silk & Organza",
    "pieces": "3-Piece Bridal Ensemble",
    "delivery": "Made to order",
    "availability": "Available",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4729.jpg?v=1759701710",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4927.jpg?v=1759701710",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4736.jpg?v=1759701730",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4781.jpg?v=1759701730",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4816.jpg?v=1759701730",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4886.jpg?v=1759701730",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4904.jpg?v=1759701730",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4929.jpg?v=1759701730"
    ],
    "variants": [
      {
        "title": "Un-Stitched",
        "price": 47340.0,
        "compareAtPrice": 52600.0,
        "sku": "HMLW - 25007",
        "available": true
      },
      {
        "title": "Stitched",
        "price": 56400.0,
        "compareAtPrice": 62600.0,
        "sku": "HMLW - 25008",
        "available": true
      }
    ],
    "options": [
      {
        "name": "Stitching Options",
        "values": [
          "Un-Stitched",
          "Stitched"
        ]
      }
    ],
    "tags": [],
    "featured": false
  },
  {
    "id": "koyil",
    "handle": "koyil",
    "title": "Koyil",
    "summary": "Koyil is for the woman who dresses with intention. In pure cotton lawn, breathable, refined, and effortlessly graceful, this three-piece suit wears the richness of black without effort. Gota work catches the eye in all the right places, while lappa detailing runs through the ensemble with a quiet, artisanal precision that elevates everyday dressing into something worth remembering.",
    "description": "Koyil - 3 Piece Pishwas\n\nKoyil is for the woman who dresses with intention. In pure cotton lawn, breathable, refined, and effortlessly graceful, this three-piece suit wears the richness of black without effort. Gota work catches the eye in all the right places, while lappa detailing runs through the ensemble with a quiet, artisanal precision that elevates everyday dressing into something worth remembering.\n\nFabric\n\nPure Cotton Lawn\n\nDetailing\n\nGota Work: Intricately placed gota embellishments add a festive glow and celebratory charm to the overall look.\n\nLappa Detailing: Thoughtfully applied lappa accents bring dimension, depth, and a luxurious hand-finished quality to the ensemble.\n\nColour: Black \n\nPieces: 3 (Shirt, Trouser, Dupatta)\n\nDelivery: 15 working days\n\nSizes: If your size isn't in the size chart, please include your size in the customization option or send us a message on Facebook/Instagram after placing an order, and we will customize your order accordingly.\n\nNote: Pouch/Potli not included. Slight colour variation may occur due to screen settings and lighting during photography.",
    "descriptionHtml": "<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><em>Koyil - 3 Piece Pishwas</em></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Koyil is for the woman who dresses with intention. In pure cotton lawn, breathable, refined, and effortlessly graceful, this three-piece suit wears the richness of black without effort. Gota work catches the eye in all the right places, while lappa detailing runs through the ensemble with a quiet, artisanal precision that elevates everyday dressing into something worth remembering.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Fabric</strong></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Pure Cotton Lawn</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Detailing</strong></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Gota Work:</strong> Intricately placed gota embellishments add a festive glow and celebratory charm to the overall look.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Lappa Detailing:</strong> Thoughtfully applied lappa accents bring dimension, depth, and a luxurious hand-finished quality to the ensemble.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Colour:</strong> Black </p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Pieces:</strong> 3 (Shirt, Trouser, Dupatta)</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Delivery:</strong> 15 working days</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px;\"><strong>Sizes:</strong> If your size isn't in the size chart, please include your size in the customization option or send us a message on Facebook/Instagram after placing an order, and we will customize your order accordingly.</span></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><em>Note: Pouch/Potli not included. Slight colour variation may occur due to screen settings and lighting during photography.</em></p>",
    "productType": "Pure Cotton Lawn",
    "price": 22900.0,
    "compareAtPrice": null,
    "collection": "Nau Bahar",
    "collectionHandle": "nau-bahar",
    "fabric": "Pure Cotton Lawn",
    "pieces": "3-Piece",
    "delivery": "15 working days",
    "availability": "Pre-order",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Close_up_1_optimized.jpg?v=1777062099",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Close_up_5_optimized.jpg?v=1777062364",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Close_up_2_optimized.jpg?v=1777062099",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Close_up_4_optimized.jpg?v=1777062204",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Close_up_3_optimized.jpg?v=1777062099"
    ],
    "variants": [
      {
        "title": "Size",
        "price": 22900.0,
        "compareAtPrice": null,
        "sku": null,
        "available": true
      }
    ],
    "options": [
      {
        "name": "Size Options",
        "values": [
          "Size"
        ]
      }
    ],
    "tags": [
      "ready to wear",
      "stitched"
    ],
    "featured": true
  },
  {
    "id": "punkhari",
    "handle": "punkhari",
    "title": "Pankhuri",
    "summary": "Pankhuri is a double-layered shirt in which contrasting colours play against each other with effortless visual depth, finished with airy chiffon sleeves that move like a second skin. Gota work and chatta patti laces trace the edges with a festive delicacy that is equal parts traditional and utterly charming. The chiffon dupatta floats in, with Kiran lacing along its border and a silk-finished hem, paired with crushed sharara pants.",
    "description": "PANKHURI — 3-Piece Suit\n\nPankhuri is a double-layered shirt in which contrasting colours play against each other with effortless visual depth, finished with airy chiffon sleeves that move like a second skin. Gota work and chatta patti laces trace the edges with a festive delicacy that is equal parts traditional and utterly charming. The chiffon dupatta floats in, with Kiran lacing along its border and a silk-finished hem, paired with crushed sharara pants.\n\nFabric\n\nShirt: Double-Layered with Contrasting Colours\n\nSleeves: Chiffon \n\nTrouser: Crushed Sharara Pants\n\nDupatta: Chiffon with Silk Finishing\n\nDetailing\n\nGota Work: Delicate gota embellishments lend a festive shimmer to the shirt.\n\nChatta Patti Laces: Traditional lace trim adds layered texture and handcrafted charm along the edges.\n\nKiran Laces: Fine Kiran border running along the dupatta for an elegant, luminous finish.\n\nSilk Finishing: A refined silk hem on the dupatta adding drape and subtle sheen.\n\nColour: Pink/Tea Pink\n\nPieces: 3 (Shirt, Trouser, Dupatta)\n\nDelivery: 15 working days\n\nNote: Pouch/Potli not included but can be added upon demand. Slight colour variation may occur due to screen settings and lighting during photography.",
    "descriptionHtml": "<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">PANKHURI — 3-Piece Suit</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Pankhuri is a double-layered shirt in which contrasting colours play against each other with effortless visual depth, finished with airy chiffon sleeves that move like a second skin. Gota work and chatta patti laces trace the edges with a festive delicacy that is equal parts traditional and utterly charming. The chiffon dupatta floats in, with Kiran lacing along its border and a silk-finished hem, paired with crushed sharara pants.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Fabric</strong></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Shirt:</strong> Double-Layered with Contrasting Colours</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Sleeves:</strong> Chiffon </p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Trouser:</strong> Crushed Sharara Pants</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Dupatta:</strong> Chiffon with Silk Finishing</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Detailing</strong></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Gota Work:</strong> Delicate gota embellishments lend a festive shimmer to the shirt.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Chatta Patti Laces:</strong> Traditional lace trim adds layered texture and handcrafted charm along the edges.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Kiran Laces:</strong> Fine Kiran border running along the dupatta for an elegant, luminous finish.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Silk Finishing:</strong> A refined silk hem on the dupatta adding drape and subtle sheen.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Colour:</strong> Pink/Tea Pink</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Pieces:</strong> 3 (Shirt, Trouser, Dupatta)</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Delivery:</strong> 15 working days</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><em>Note: Pouch/Potli not included but <strong>can be added upon demand</strong>. Slight colour variation may occur due to screen settings and lighting during photography.</em></p>",
    "productType": "Pure Cotton Lawn",
    "price": 22900.0,
    "compareAtPrice": null,
    "collection": "Nau Bahar",
    "collectionHandle": "nau-bahar",
    "fabric": "Pure Cotton Lawn",
    "pieces": "3-Piece",
    "delivery": "15 working days",
    "availability": "Pre-order",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/web_close_3_optimized.jpg?v=1777835843",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/web_close_2_optimized.jpg?v=1777835842",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/web_close_1_optimized.jpg?v=1777835843",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/web_close_5_optimized.jpg?v=1777835843",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/webclose_4_optimized.png?v=1777835842"
    ],
    "variants": [
      {
        "title": "Size",
        "price": 22900.0,
        "compareAtPrice": null,
        "sku": null,
        "available": true
      }
    ],
    "options": [
      {
        "name": "Size Option",
        "values": [
          "Size"
        ]
      }
    ],
    "tags": [
      "ready to wear",
      "stitched"
    ],
    "featured": true
  },
  {
    "id": "raha",
    "handle": "raha",
    "title": "Raha",
    "summary": "Thread embroidery, golden katori and tilla on Khadi Net, with a heavily embellished organza dupatta.",
    "description": "Fabric:\n\nKhadi Net: A lightweight, breathable fabric used for the shirt, offering a soft texture and refined finish that beautifully complements intricate handwork.\n\nKorean Raw Silk: Smooth, structured, and slightly lustrous — used for the crushed trouser, providing graceful drape and a regal finish.\n\nOrganza: A sheer, crisp fabric used for the dupatta, adding an ethereal layer of sophistication and festive charm.\n\nEmbroidery:\n\nThreadwork: Exquisite thread embroidery gracefully adorns the shirt’s neckline, sleeves, and daman, showcasing meticulous craftsmanship.\n\nGolden Katori Detailing: Delicate golden katori accents intricately placed across the dupatta and shirt add richness, texture, and a touch of regal opulence.\n\nTilla & Sequins: Intricate tilla detailing and shimmering sequins enhance the overall design, creating a luminous and celebratory appeal.\n\nDupatta Embroidery: The organza dupatta is heavily embellished with threadwork, sequins, and golden katori, lending a radiant and festive essence to the ensemble.\n\nHand Embellishment:\n\nPearls & Beads: Lustrous pearls and fine beads meticulously hand-applied around the motifs and neckline, enhancing the outfit’s sophistication.\n\nCrystals & Sitara Work: Sparkling crystals and sitara embellishments catch the light beautifully, infusing the ensemble with graceful shimmer.\n\nTilla & Handwork Fusion: A perfect blend of metallic threads and hand embellishment that exudes festive luxury and timeless appeal.",
    "descriptionHtml": "<h2><strong>Fabric:</strong></h2>\n<p><strong>Khadi Net:</strong> A lightweight, breathable fabric used for the shirt, offering a soft texture and refined finish that beautifully complements intricate handwork.</p>\n<p><strong>Korean Raw Silk:</strong> Smooth, structured, and slightly lustrous — used for the crushed trouser, providing graceful drape and a regal finish.</p>\n<p><strong>Organza:</strong> A sheer, crisp fabric used for the dupatta, adding an ethereal layer of sophistication and festive charm.</p>\n<h2><strong>Embroidery:</strong></h2>\n<p><strong>Threadwork:</strong> Exquisite thread embroidery gracefully adorns the shirt’s neckline, sleeves, and daman, showcasing meticulous craftsmanship.</p>\n<p><strong>Golden Katori Detailing:</strong> Delicate golden katori accents intricately placed across the dupatta and shirt add richness, texture, and a touch of regal opulence.</p>\n<p><strong>Tilla &amp; Sequins:</strong> Intricate tilla detailing and shimmering sequins enhance the overall design, creating a luminous and celebratory appeal.</p>\n<p><strong>Dupatta Embroidery:</strong> The organza dupatta is heavily embellished with threadwork, sequins, and golden katori, lending a radiant and festive essence to the ensemble.</p>\n<h2>Hand Embellishment:</h2>\n<p><strong>Pearls &amp; Beads:</strong> Lustrous pearls and fine beads meticulously hand-applied around the motifs and neckline, enhancing the outfit’s sophistication.</p>\n<p><strong>Crystals &amp; Sitara Work:</strong> Sparkling crystals and sitara embellishments catch the light beautifully, infusing the ensemble with graceful shimmer.</p>\n<p><strong>Tilla &amp; Handwork Fusion:</strong> A perfect blend of metallic threads and hand embellishment that exudes festive luxury and timeless appeal.</p>",
    "productType": "",
    "price": 41850.0,
    "compareAtPrice": 46500.0,
    "collection": "Afsanay 2025",
    "collectionHandle": "afsanay-2025",
    "fabric": "Khadi Net, Korean Raw Silk & Organza",
    "pieces": "3-Piece Bridal Ensemble",
    "delivery": "Made to order",
    "availability": "Available",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4947.jpg?v=1759700162",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A5076.jpg?v=1759700161",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A4975.jpg?v=1759700182",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A5001.jpg?v=1759700183",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A5073.jpg?v=1759700183",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A5099.jpg?v=1759700183",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A5016.jpg?v=1759700183",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A5031.jpg?v=1759700183",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A5047.jpg?v=1759700183",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A5078.jpg?v=1759700183",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/ConvertOut-Resized-051A5109.jpg?v=1759700183"
    ],
    "variants": [
      {
        "title": "Un-Stitched",
        "price": 41850.0,
        "compareAtPrice": 46500.0,
        "sku": null,
        "available": true
      },
      {
        "title": "Stitched",
        "price": 51900.0,
        "compareAtPrice": 56500.0,
        "sku": null,
        "available": true
      }
    ],
    "options": [
      {
        "name": "Stitching Option",
        "values": [
          "Un-Stitched",
          "Stitched"
        ]
      }
    ],
    "tags": [
      "stitched"
    ],
    "featured": false
  },
  {
    "id": "shabnam",
    "handle": "shabnam",
    "title": "Shabnam",
    "summary": "Shabnam arrives in the softest meeting of lilac and grey, a pishwas silhouette carrying old-world romance through mirror work lace, gota laces, and silk-bordered sleeves that catch light with every turn. The sharara pants follow with a silk border and lappa laces, while a chiffon dupatta scattered with silver sequin embroidery and silk-trimmed edges drifts over the look with a quiet, ethereal sparkle.",
    "description": "SHABNAM — 3-Piece Pishwas\n\nShabnam arrives in the softest meeting of lilac and grey, a pishwas silhouette carrying old-world romance through mirror work lace, gota laces, and silk-bordered sleeves that catch light with every turn. The sharara pants follow with a silk border and lappa laces, while a chiffon dupatta scattered with silver sequin embroidery and silk-trimmed edges drifts over the look with a quiet, ethereal sparkle.\n\nFabric\n\nShirt: Pishwas Silhouette\n\nSleeves: With Silk Border\n\nTrouser: Sharara Pants\n\nDupatta: Chiffon\n\nDetailing\n\nMirror Work Lace: Intricate mirror work lace along the pishwas body and sleeves, reflecting light with every movement.\n\nGota Laces: Delicate gota lace trim on the body and sleeves adding a warm, festive luminance.\n\nSilk Border: Rich silk border on the sleeves and sharara pants for a polished, structured finish.\n\nLappa Laces: Fine lappa lace detailing along the sharara hem adding depth and a handcrafted elegance.\n\nSilver Sequin Embroidery: Scattered silver sequin work across the chiffon dupatta lending a soft, ethereal shimmer.\n\nSilk Trim: Refined silk edging along the dupatta borders for a graceful, weighted drape.\n\nColour: Lilac Grey\n\nPieces: 3 (Pishwas, Sharara Pants, Dupatta)\n\nDelivery: 15 working days\n\nNote: Pouch/Potli not included. Slight colour variation may occur due to screen settings and photography lighting.",
    "descriptionHtml": "<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><em>SHABNAM — 3-Piece Pishwas</em></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Shabnam arrives in the softest meeting of lilac and grey, a pishwas silhouette carrying old-world romance through mirror work lace, gota laces, and silk-bordered sleeves that catch light with every turn. The sharara pants follow with a silk border and lappa laces, while a chiffon dupatta scattered with silver sequin embroidery and silk-trimmed edges drifts over the look with a quiet, ethereal sparkle.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Fabric</strong></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Shirt: Pishwas Silhouette</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Sleeves: With Silk Border</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Trouser: Sharara Pants</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\">Dupatta: Chiffon</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Detailing</strong></p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Mirror Work Lace:</strong> Intricate mirror work lace along the pishwas body and sleeves, reflecting light with every movement.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Gota Laces: </strong>Delicate gota lace trim on the body and sleeves adding a warm, festive luminance.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Silk Border:</strong> Rich silk border on the sleeves and sharara pants for a polished, structured finish.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Lappa Laces:</strong> Fine lappa lace detailing along the sharara hem adding depth and a handcrafted elegance.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Silver Sequin Embroidery:</strong> Scattered silver sequin work across the chiffon dupatta lending a soft, ethereal shimmer.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Silk Trim:</strong> Refined silk edging along the dupatta borders for a graceful, weighted drape.</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Colour:</strong> Lilac Grey</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Pieces:</strong> 3 (Pishwas, Sharara Pants, Dupatta)</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><strong>Delivery:</strong> 15 working days</p>\n<p class=\"font-claude-response-body break-words whitespace-normal leading-[1.7]\"><em>Note: Pouch/Potli not included. Slight colour variation may occur due to screen settings and photography lighting.</em></p>",
    "productType": "Pure Cotton Lawn",
    "price": 22900.0,
    "compareAtPrice": null,
    "collection": "Nau Bahar",
    "collectionHandle": "nau-bahar",
    "fabric": "Pure Cotton Lawn",
    "pieces": "3-Piece",
    "delivery": "15 working days",
    "availability": "Pre-order",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/close_up_3_optimized_8d4ab75c-26d3-4521-809a-50c44d3f42d0.jpg?v=1779039913",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/close_up_4_optimized_d1867f32-d7d1-4982-8efb-feb6b4a164da.jpg?v=1779039913",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/close_up_2_optimized_05197c7a-b8f7-48f1-bcc7-66ea84abac3f.jpg?v=1779039914",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/close_up_1_optimized_e67ace7a-1944-4593-9801-1ca3736a00dd.jpg?v=1779039913",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/close_up_5_optimized_f89e8bad-7cf9-45b7-a13a-6e8c21365d84.jpg?v=1779039913"
    ],
    "variants": [
      {
        "title": "Size",
        "price": 22900.0,
        "compareAtPrice": null,
        "sku": null,
        "available": true
      }
    ],
    "options": [
      {
        "name": "Size Options",
        "values": [
          "Size"
        ]
      }
    ],
    "tags": [
      "Ready to wear",
      "stitched"
    ],
    "featured": true
  },
  {
    "id": "sohaye",
    "handle": "sohaye",
    "title": "Sohaye",
    "summary": "The bridal centrepiece: light gold zari, sequins and hand-embellished dabka on the finest Khadi Net.",
    "description": "Fabric:\n\nKhadi Net: Finest Khadi Net, tailored into sophisticated shirts with a timeless appeal.\nKorean Raw Silk: Luxurious Korean Raw Silk, designed for trousers and inner lining, offering both comfort and refinement.\nOrganza: Ethereal Organza, gracefully crafted for dupattas and intricate appliqué or patchwork, adding a delicate touch of elegance.\n\nEmbroidery:\n\nSequins: Light gold sequins delicately embellish the net fabric, adding subtle shimmer and elegance.\n\nZari Work: Fine light gold metallic threads intricately woven into graceful floral patterns and refined outlines.\n\nViscose Thread: Rich tones of brown, maroon, and other viscose threads beautifully embroidered on net fabric, creating depth and artistic detailing.\n\nHand Embellishment:\n\nDabka: Exquisite coiled wire embroidery, creating intricate raised patterns, especially around the neckline for a refined finish.\n\nKora: Smooth metallic threads and spring-like coils, delicately stitched to elevate the fabric’s richness.\n\nGota Work: Traditional hand embroidery with fine metallic ribbons on net fabric, lending a reflective, royal elegance.\n\nSmall Pearls: Delicate white pearls embellishing the neckline, adding a touch of uniqueness and grace.\n\nSitara Work: Light gold Sitara in round and shell shapes, artistically applied across the shirt for a radiant effect.\n\nBeaded Latkan with Gota: Edges adorned with pearl-like beads, threaded floral clusters, and golden Gota, forming a graceful hanging fringe.",
    "descriptionHtml": "<h2 data-start=\"206\" data-end=\"364\">Fabric:<br>\n</h2>\n<p data-start=\"206\" data-end=\"364\"><strong data-end=\"113\" data-start=\"99\">Khadi Net:</strong> Finest Khadi Net, tailored into sophisticated shirts with a timeless appeal.<br data-end=\"193\" data-start=\"190\"><strong data-is-only-node=\"\" data-end=\"213\" data-start=\"193\">Korean Raw Silk:</strong> Luxurious Korean Raw Silk, designed for trousers and inner lining, offering both comfort and refinement.<br data-end=\"321\" data-start=\"318\"><strong data-end=\"333\" data-start=\"321\">Organza:</strong> Ethereal Organza, gracefully crafted for dupattas and intricate appliqué or patchwork, adding a delicate touch of elegance.</p>\n<h2 data-start=\"206\" data-end=\"364\">Embroidery:<br>\n</h2>\n<p data-end=\"172\" data-start=\"66\"><strong data-end=\"78\" data-start=\"66\">Sequins:</strong> Light gold sequins delicately embellish the net fabric, adding subtle shimmer and elegance.</p>\n<p data-end=\"293\" data-start=\"174\"><strong data-end=\"188\" data-start=\"174\">Zari Work:</strong> Fine light gold metallic threads intricately woven into graceful floral patterns and refined outlines.</p>\n<p data-end=\"449\" data-start=\"295\"><strong data-end=\"314\" data-start=\"295\">Viscose Thread:</strong> Rich tones of brown, maroon, and other viscose threads beautifully embroidered on net fabric, creating depth and artistic detailing.</p>\n<h2 data-start=\"206\" data-end=\"364\">Hand Embellishment:<br>\n</h2>\n<p data-start=\"69\" data-end=\"204\"><strong data-start=\"69\" data-end=\"79\">Dabka:</strong> Exquisite coiled wire embroidery, creating intricate raised patterns, especially around the neckline for a refined finish.</p>\n<p data-start=\"206\" data-end=\"318\"><strong data-start=\"206\" data-end=\"215\">Kora:</strong> Smooth metallic threads and spring-like coils, delicately stitched to elevate the fabric’s richness.</p>\n<p data-start=\"320\" data-end=\"444\"><strong data-start=\"320\" data-end=\"334\">Gota Work:</strong> Traditional hand embroidery with fine metallic ribbons on net fabric, lending a reflective, royal elegance.</p>\n<p data-start=\"446\" data-end=\"554\"><strong data-start=\"446\" data-end=\"463\">Small Pearls:</strong> Delicate white pearls embellishing the neckline, adding a touch of uniqueness and grace.</p>\n<p data-start=\"556\" data-end=\"679\"><strong data-start=\"556\" data-end=\"572\">Sitara Work:</strong> Light gold Sitara in round and shell shapes, artistically applied across the shirt for a radiant effect.</p>\n<p data-start=\"681\" data-end=\"826\"><strong data-start=\"681\" data-end=\"709\">Beaded Latkan with Gota:</strong> Edges adorned with pearl-like beads, threaded floral clusters, and golden Gota, forming a graceful hanging fringe.</p>",
    "productType": "",
    "price": 94999.0,
    "compareAtPrice": 99999.0,
    "collection": "Afsanay 2025",
    "collectionHandle": "afsanay-2025",
    "fabric": "Khadi Net, Korean Raw Silk & Organza",
    "pieces": "3-Piece Bridal Ensemble",
    "delivery": "Made to order",
    "availability": "Available",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0005_051A3837.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0000_051A3979.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0001_051A3971.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0002_051A3962.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0003_051A3938.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0004_051A3916.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0006_051A3778.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0007_051A3762.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0008_051A3752.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0009_051A3719.jpg?v=1752766953",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0010_051A3692.jpg?v=1752766952",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/RR_0011_051A3673.jpg?v=1752766952"
    ],
    "variants": [
      {
        "title": "Un-Stitched",
        "price": 94999.0,
        "compareAtPrice": 99999.0,
        "sku": "HMLW-25004",
        "available": true
      },
      {
        "title": "Stitched",
        "price": 103499.0,
        "compareAtPrice": 114999.0,
        "sku": "HMLW-25003",
        "available": true
      }
    ],
    "options": [
      {
        "name": "Stitching Option",
        "values": [
          "Un-Stitched",
          "Stitched"
        ]
      }
    ],
    "tags": [
      "stitched"
    ],
    "featured": false
  },
  {
    "id": "sunheri",
    "handle": "sunheri",
    "title": "Sunheri",
    "summary": "Sunheri blooms in a radiant shade of lime yellow, bringing together timeless tradition and effortless grace. Designed in a classic angrakha pishwas silhouette, it is crafted from breathable lawn fabric and finished with a rich silk border, delicate lappa laces, and handcrafted tassels that lend movement and charm. Full-length sleeves echo the same refined detailing, while the chiffon dupatta, adorned with shimmering panni work, vibrant chattapatti accents, and silk facing, completes the look with festive elegance. Paired with straight cotton trousers, Sunheri is made for celebrations that call for comfort as much as sophistication.",
    "description": "SUNHERI — 3-Piece Pishwas\n\nSunheri blooms in a radiant shade of lime yellow, bringing together timeless tradition and effortless grace. Designed in a classic angrakha pishwas silhouette, it is crafted from breathable lawn fabric and finished with a rich silk border, delicate lappa laces, and handcrafted tassels that lend movement and charm. Full-length sleeves echo the same refined detailing, while the chiffon dupatta, adorned with shimmering panni work, vibrant chattapatti accents, and silk facing, completes the look with festive elegance. Paired with straight cotton trousers, Sunheri is made for celebrations that call for comfort as much as sophistication.\n\nFabric\n\nShirt: Lawn Angrakha Pishwas\nSleeves: Full Length with Silk Border and Lappa Gotta Laces\nTrouser: Straight Cotton Trouser\nDupatta: Chiffon\n\nDetailing\n\nSilk Border: Rich silk finishing along the pishwas hem and sleeves for a refined, structured look.\nLappa Gotta Laces: Intricate lappa gotta lace detailing on the hem and sleeves, adding traditional craftsmanship and festive appeal.\nFront Tassels: Elegant handcrafted tassels on the angrakha front, bringing graceful movement and classic charm.\nPanni Work: Delicate panni work scattered across the chiffon dupatta, creating a subtle, luminous shimmer.\nChattapatti: Vibrant chattapatti detailing along the dupatta borders, adding a playful touch of heritage craftsmanship.\nSilk Facing: Refined silk facing on the dupatta edges for a graceful drape and polished finish.\n\nColour: Lime Yellow\nPieces: 3 (Angrakha Pishwas, Straight Trouser, Dupatta)\nDelivery: 15 working days\nNote: Pouch/Potli not included. Slight colour variation may occur due to screen settings and photography lighting.",
    "descriptionHtml": "<p data-start=\"0\" data-end=\"29\" class=\"PDq2pG_selectionAnchorContainer\"><em>SUNHERI — 3-Piece Pishwas</em><span aria-hidden=\"true\" class=\"PDq2pG_selectionAnchor\"></span></p>\n<p data-start=\"31\" data-end=\"670\">Sunheri blooms in a radiant shade of lime yellow, bringing together timeless tradition and effortless grace. Designed in a classic angrakha pishwas silhouette, it is crafted from breathable lawn fabric and finished with a rich silk border, delicate lappa laces, and handcrafted tassels that lend movement and charm. Full-length sleeves echo the same refined detailing, while the chiffon dupatta, adorned with shimmering panni work, vibrant chattapatti accents, and silk facing, completes the look with festive elegance. Paired with straight cotton trousers, Sunheri is made for celebrations that call for comfort as much as sophistication.</p>\n<h3 data-section-id=\"coovq3\" data-start=\"672\" data-end=\"682\">Fabric</h3>\n<p data-start=\"683\" data-end=\"843\"><strong data-start=\"683\" data-end=\"693\">Shirt:</strong> Lawn Angrakha Pishwas<br data-start=\"715\" data-end=\"718\"><strong data-start=\"718\" data-end=\"730\">Sleeves:</strong> Full Length with Silk Border and Lappa Gotta Laces<br data-start=\"781\" data-end=\"784\"><strong data-start=\"784\" data-end=\"796\">Trouser:</strong> Straight Cotton Trouser<br data-start=\"820\" data-end=\"823\"><strong data-start=\"823\" data-end=\"835\" data-is-only-node=\"\">Dupatta:</strong> Chiffon</p>\n<h3 data-section-id=\"1l2xaxj\" data-start=\"845\" data-end=\"858\">Detailing</h3>\n<p data-start=\"859\" data-end=\"1559\"><strong data-start=\"859\" data-end=\"875\">Silk Border:</strong> Rich silk finishing along the pishwas hem and sleeves for a refined, structured look.<br data-start=\"961\" data-end=\"964\"><strong data-start=\"964\" data-end=\"986\">Lappa Gotta Laces:</strong> Intricate lappa gotta lace detailing on the hem and sleeves, adding traditional craftsmanship and festive appeal.<br data-start=\"1100\" data-end=\"1103\"><strong data-start=\"1103\" data-end=\"1121\">Front Tassels:</strong> Elegant handcrafted tassels on the angrakha front, bringing graceful movement and classic charm.<br data-start=\"1218\" data-end=\"1221\"><strong data-start=\"1221\" data-end=\"1236\" data-is-only-node=\"\">Panni Work:</strong> Delicate panni work scattered across the chiffon dupatta, creating a subtle, luminous shimmer.<br data-start=\"1331\" data-end=\"1334\"><strong data-start=\"1334\" data-end=\"1350\">Chattapatti:</strong> Vibrant chattapatti detailing along the dupatta borders, adding a playful touch of heritage craftsmanship.<br data-start=\"1457\" data-end=\"1460\"><strong data-start=\"1460\" data-end=\"1476\">Silk Facing:</strong> Refined silk facing on the dupatta edges for a graceful drape and polished finish.</p>\n<p data-start=\"1561\" data-end=\"1799\" data-is-last-node=\"\" data-is-only-node=\"\"><strong data-start=\"1561\" data-end=\"1572\">Colour:</strong> Lime Yellow<br data-start=\"1584\" data-end=\"1587\"><strong data-start=\"1587\" data-end=\"1598\">Pieces:</strong> 3 (Angrakha Pishwas, Straight Trouser, Dupatta)<br data-start=\"1646\" data-end=\"1649\"><strong data-start=\"1649\" data-end=\"1662\">Delivery:</strong> 15 working days<br data-start=\"1678\" data-end=\"1681\"><strong data-start=\"1681\" data-end=\"1690\" data-is-only-node=\"\">Note:</strong> Pouch/Potli not included. Slight colour variation may occur due to screen settings and photography lighting.</p>",
    "productType": "Pure Cotton Lawn",
    "price": 22900.0,
    "compareAtPrice": null,
    "collection": "Nau Bahar",
    "collectionHandle": "nau-bahar",
    "fabric": "Pure Cotton Lawn",
    "pieces": "3-Piece",
    "delivery": "15 working days",
    "availability": "Pre-order",
    "images": [
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Web_1_optimized.jpg?v=1784236929",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Web_2_optimized.jpg?v=1784236929",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/web_4_optimized.jpg?v=1784236929",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Web_3_optimized.jpg?v=1784236929",
      "https://cdn.shopify.com/s/files/1/0656/2607/9431/files/Web_5_optimized.jpg?v=1784236930"
    ],
    "variants": [
      {
        "title": "Size",
        "price": 22900.0,
        "compareAtPrice": null,
        "sku": null,
        "available": true
      }
    ],
    "options": [
      {
        "name": "Size Options",
        "values": [
          "Size"
        ]
      }
    ],
    "tags": [
      "Ready to wear",
      "stitched"
    ],
    "featured": true
  }
]


const nauBaharOrder = ["sunheri", "shabnam", "punkhari", "koyil", "gulnaar"]

const newArrivalsOrder = ["gulnaar", "koyil", "punkhari", "shabnam", "sunheri"]

const afsanayOrder = ["raha", "sohaye", "inzar", "izel", "kiara", "amelia-1", "alara"]


function sortByHandles(list: Product[], handles: string[]) {
  return handles.map((handle) => list.find((product) => product.handle === handle)).filter(Boolean) as Product[]
}

const collectionCdn = "https://beinghiramani.com/cdn/shop/files"

function oneProduct(handle: string) {
  return sortByHandles(products, [handle])
}

export const collections: Collection[] = [
  {
    handle: "afsanay-2025",
    title: "Afsanay 2025",
    description: "Bridal wear for your most important day — hand-embellished couture, made to order.",
    image: `${collectionCdn}/ConvertOut-Resized-051A4947.jpg?v=1759700162&width=1200`,
    products: sortByHandles(products, afsanayOrder),
  },
  {
    handle: "alara",
    title: "Alara",
    description:
      "Silver zari, sequins and lilac-thread florals on Khadi Net — a bridal ensemble finished with hand-embellished sitara work.",
    image: `${collectionCdn}/alara-_0011_051A4026.jpg?v=1758026066&width=1200`,
    products: oneProduct("alara"),
  },
  {
    handle: "amelia",
    title: "Amelia",
    description:
      "Refined threadwork, contrasting appliqué and hand-embellished pearls on Khadi Net, organza and Korean raw silk.",
    image: `${collectionCdn}/ConvertOut-Resized-051A3440_70385279-c496-44db-83a7-9e7da3bc5baa.jpg?v=1759701227&width=1200`,
    products: oneProduct("amelia-1"),
  },
  {
    handle: "frontpage",
    title: "Home Page",
    description: "The home collection — a curated introduction to Hira Mani Couture.",
    products: [],
  },
  {
    handle: "inzar",
    title: "Inzar",
    description:
      "Handcrafted silver embroidery, appliqué florals and dabka work on Khadi Net, paired with Korean raw silk and organza.",
    image: `${collectionCdn}/inzar-_0011_051A4313.jpg?v=1758025602&width=1200`,
    products: oneProduct("inzar"),
  },
  {
    handle: "izel",
    title: "Izel",
    description:
      "Multicoloured floral threadwork with tilla, zardozi and crystal detailing on a pristine white Khaddi Net base.",
    image: `${collectionCdn}/ConvertOut-Resized-051A4523.jpg?v=1759702426&width=1200`,
    products: oneProduct("izel"),
  },
  {
    handle: "kiara",
    title: "Kiara",
    description:
      "Heavy thread embroidery, golden katori and contrasting appliqué on Khadi Net — modern elegance with a festive spirit.",
    image: `${collectionCdn}/ConvertOut-Resized-051A4729.jpg?v=1759701710&width=1200`,
    products: oneProduct("kiara"),
  },
  {
    handle: "nau-bahar",
    title: "Nau Bahar",
    description: "Festive lawn, handcrafted for you. Pre-orders live.",
    image: `${collectionCdn}/Web_1_optimized.jpg?v=1784236929&width=1200`,
    products: sortByHandles(products, nauBaharOrder),
  },
  {
    handle: "new-arrivals",
    title: "New Arrivals",
    description: "The latest arrivals from the atelier — new silhouettes, fresh from the Nau Bahar collection.",
    image: `${collectionCdn}/Closeup1_aaaf7bc3-f496-4396-99d5-cdc88b083ade.jpg?v=1777061711&width=1200`,
    products: sortByHandles(products, newArrivalsOrder),
  },
  {
    handle: "raha",
    title: "Raha",
    description:
      "Thread embroidery, golden katori and tilla on Khadi Net, with a heavily embellished organza dupatta.",
    image: `${collectionCdn}/ConvertOut-Resized-051A4947.jpg?v=1759700162&width=1200`,
    products: oneProduct("raha"),
  },
  {
    handle: "sohaye",
    title: "Sohaye",
    description:
      "The bridal centrepiece: light gold zari, sequins and hand-embellished dabka on the finest Khadi Net.",
    image: `${collectionCdn}/RR_0005_051A3837.jpg?v=1752766952&width=1200`,
    products: oneProduct("sohaye"),
  },
  {
    handle: "all",
    title: "All Pieces",
    description: "Every piece from Hira Mani Couture, in one place.",
    products: products,
  },
]

export const featuredProducts = products.filter((product) => product.featured)
export const heroProduct = products.find((product) => product.handle === "gulnaar")!

export function getProducts(collection?: Product["collection"] | "all") {
  if (!collection || collection === "all") return products
  return products.filter((product) => product.collection === collection)
}

export function getProduct(handle: string) {
  return products.find((product) => product.handle === handle)
}

export function getCollection(handle: string) {
  return collections.find((collection) => collection.handle === handle)
}

export function getCollectionProducts(handle: string) {
  return getCollection(handle)?.products ?? []
}

export function searchProducts(query: string) {
  const term = query.trim().toLowerCase()
  if (!term) return []
  return products.filter((product) =>
    `${product.title} ${product.collection} ${product.productType} ${product.fabric} ${product.description} ${product.tags.join(" ")}`
      .toLowerCase()
      .includes(term),
  )
}
