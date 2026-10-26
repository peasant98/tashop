// Tashop catalog. To sell a piece online:
//   1. Set `price` (number, USD).
//   2. Paste its Stripe Payment Link into `stripe` (https://buy.stripe.com/...).
//   3. Set `status` to "available" or "sold".
// Pieces without a Stripe link show an "Ask Tash" button that opens an Instagram DM.
window.PRODUCTS = [
  { id: "red-bell",             type: "earrings",  name: "Red Bell Drops",           desc: "Red fabric bells with a pearl cap and red bead dangles.",               price: null, stripe: "", status: "available", posted: "2026-04" },
  { id: "gold-cone",            type: "earrings",  name: "Gold Cone Drops",          desc: "Textured gold cones under amber and green glass beads.",                price: null, stripe: "", status: "available", posted: "2026-04" },
  { id: "pearl-cascade",        type: "earrings",  name: "Pearl Cascade",            desc: "Silver beads and pearls in long drops. Pink energy, pearl elegance.",   price: null, stripe: "", status: "available", posted: "2026-02" },
  { id: "upside-down",          type: "earrings",  name: "Upside Down",              desc: "Stranger Things inspired drops in amber and black.",                     price: null, stripe: "", status: "available", posted: "2026-01" },
  { id: "pearl-tube-bracelet",  type: "bracelets", name: "Pearl & Gold Tube Bracelet", desc: "Layered pearls with gold and black tube beads.",                     price: null, stripe: "", status: "available", posted: "2025-12" },
  { id: "silver-jhumka",        type: "earrings",  name: "Mini Silver Jhumkas",      desc: "Small oxidized silver jhumka bells.",                                   price: null, stripe: "", status: "available", posted: "2025-12" },
  { id: "red-fringe-hoops",     type: "earrings",  name: "Red Fringe Hoops",         desc: "Gold hoops with red bugle-bead fringe. Funky earrings for a funky mood.", price: null, stripe: "", status: "available", posted: "2025-12" },
  { id: "crystal-sparkle",      type: "earrings",  name: "Crystal Sparkle Drops",    desc: "Pearls and a whole lot of sparkle.",                                    price: null, stripe: "", status: "available", posted: "2025-12" },
  { id: "pearl-strands",        type: "necklaces", name: "Pearl & Crystal Strands",  desc: "Blush pearls with clear crystal and gold accent beads.",                price: null, stripe: "", status: "available", posted: "2025-12" },
  { id: "blue-polka",           type: "earrings",  name: "Blue Polka Drops",         desc: "Blue polka-dot glass under silver and gold textured beads.",            price: null, stripe: "", status: "available", posted: "2025-09" },
  { id: "red-tassel",           type: "earrings",  name: "Red Tassels",              desc: "Red silk tassels with silver caps.",                                    price: null, stripe: "", status: "available", posted: "2025-08" },
  { id: "red-bead-hoops",       type: "earrings",  name: "Red Beaded Hoops",         desc: "Silver hoops wrapped in red seed beads.",                               price: null, stripe: "", status: "available", posted: "2025-08" },
  { id: "green-jhumka",         type: "earrings",  name: "Green Silk Jhumkas",       desc: "Green silk-thread jhumkas with a gold disc top.",                       price: null, stripe: "", status: "available", posted: "2025-08" },
  { id: "burgundy-filigree",    type: "earrings",  name: "Burgundy Filigree",        desc: "Gold filigree beads over a burgundy glass cluster.",                    price: null, stripe: "", status: "available", posted: "2025-08" },
  { id: "teal-flower",          type: "earrings",  name: "Teal Flower Statement",    desc: "Patina teal flowers with brass beads.",                                 price: null, stripe: "", status: "available", posted: "2025-07" },
  { id: "copper-crescent",      type: "earrings",  name: "Copper Crescents",         desc: "Copper half-moons under copper and hematite beads.",                    price: null, stripe: "", status: "available", posted: "2025-07" },
  { id: "turquoise-jhumka",     type: "earrings",  name: "Turquoise Jhumkas",        desc: "Turquoise jhumkas with silver detail.",                                 price: null, stripe: "", status: "available", posted: "2025-07" },
  { id: "mint-glass",           type: "earrings",  name: "Mint Glass Drops",         desc: "Mint glass nuggets under a silver textured bead.",                      price: null, stripe: "", status: "available", posted: "2025-06" },
  { id: "smoky-heart",          type: "earrings",  name: "Smoky Hearts",             desc: "Smoky glass hearts on a long beaded drop.",                             price: null, stripe: "", status: "available", posted: "2025-06" },
  { id: "beaded-chains",        type: "necklaces", name: "Beaded Chains",            desc: "Seed-bead chains in many colorways. Ask which are left.",               price: null, stripe: "", status: "available", posted: "2025-06" },
  { id: "gold-tree",            type: "earrings",  name: "Little Gold Charms",       desc: "Small gold charm drops.",                                               price: null, stripe: "", status: "available", posted: "2025-04" },
  { id: "pink-silver-bracelet", type: "bracelets", name: "Pink & Silver Bracelet",   desc: "Pink glass with silver rounds.",                                        price: null, stripe: "", status: "available", posted: "2025-04" },
  { id: "bracelet-trio",        type: "bracelets", name: "Bracelet Trio",            desc: "Rose quartz, black and red, and rainbow tile. Sold separately.",        price: null, stripe: "", status: "available", posted: "2025-03" },
  { id: "turquoise-set",        type: "necklaces", name: "Turquoise & Pearl Set",    desc: "Pearl necklace with turquoise discs and matching earrings.",            price: null, stripe: "", status: "available", posted: "2025-02" }
];
