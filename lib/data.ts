export type Room = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  occupancy: string;
  rate: string;
};

export const rooms: Room[] = [
  {
    slug: "veranda-suite",
    name: "The Veranda Suite",
    tagline: "Canopy bed, teak floors, veranda access",
    description:
      "The largest of the four rooms, opening directly onto the front veranda beneath the original tiled roof. A four-poster teak bed with mosquito netting, polished cement floors, and tall louvred windows that carry the morning light in from the palm grove.",
    image: "/images/bedroom-canopy.jpg",
    gallery: ["/images/bedroom-canopy.jpg", "/images/exterior-palms.jpg", "/images/interior-lounge.jpg"],
    features: ["Four-poster teak bed", "Direct veranda access", "Mosquito netting", "Garden view"],
    occupancy: "2 guests",
    rate: "From LKR 22,000 / night",
  },
  {
    slug: "ochre-room",
    name: "The Ochre Room",
    tagline: "Open-plan stone bathroom, rain shower, soaking tub",
    description:
      "Named for the burnt-ochre limewash of its ensuite, this room pairs an exposed-beam ceiling with a spacious stone bathroom — twin vessel basins, an open rain shower, and a freestanding tub lit by a private courtyard window.",
    image: "/images/bathroom-ochre.jpg",
    gallery: ["/images/bathroom-ochre.jpg", "/images/bedroom-canopy.jpg"],
    features: ["Freestanding soaking tub", "Twin vessel basins", "Open rain shower", "Exposed timber ceiling"],
    occupancy: "2 guests",
    rate: "From LKR 20,000 / night",
  },
  {
    slug: "tile-house-room",
    name: "The Tile House Room",
    tagline: "Beneath the original terracotta roofline",
    description:
      "Set under the steep terracotta tiled roof that gives the walawwa its silhouette, this room keeps its original proportions and cool cement floors — a quiet, low-lit retreat shaded by the surrounding jak and coconut trees.",
    image: "/images/exterior-wide-trees.jpg",
    gallery: ["/images/exterior-wide-trees.jpg", "/images/aerial-roof.jpg"],
    features: ["Original tiled roofline", "Cool cement flooring", "Shaded by mature trees", "Writing desk"],
    occupancy: "2 guests",
    rate: "From LKR 18,500 / night",
  },
  {
    slug: "garden-room",
    name: "The Garden Room",
    tagline: "Ground-floor room facing the palm grove",
    description:
      "A ground-floor room with its own path out to the lawn and palm grove — the closest of the four to the gardens, for guests who want to step straight from bed to morning air.",
    image: "/images/exterior-crop.jpg",
    gallery: ["/images/exterior-crop.jpg", "/images/exterior-hero.jpg"],
    features: ["Ground-floor, private path to garden", "Palm grove outlook", "Cane armchairs", "Fan-cooled"],
    occupancy: "2 guests",
    rate: "From LKR 18,500 / night",
  },
];

export type TravelPackage = {
  slug: string;
  name: string;
  duration: string;
  description: string;
  inclusions: string[];
  price: string;
};

export const packages: TravelPackage[] = [
  {
    slug: "polonnaruwa-heritage",
    name: "Polonnaruwa Heritage Trail",
    duration: "2 days / 1 night",
    description:
      "A guided route through the ancient city of Polonnaruwa — the Royal Palace ruins, Gal Vihara's rock-cut Buddhas, and the Parakrama Samudra reservoir at sunset — based from the walawwa.",
    inclusions: ["Private driver-guide", "Polonnaruwa archaeological site entry", "Sunset by the reservoir", "Breakfast at the retreat"],
    price: "From USD 95 / person",
  },
  {
    slug: "cultural-triangle",
    name: "Cultural Triangle Circuit",
    duration: "3 days / 2 nights",
    description:
      "Sigiriya rock fortress, the cave temples of Dambulla, and Polonnaruwa in one unhurried loop, with the retreat as a quiet base to return to each evening.",
    inclusions: ["Sigiriya & Dambulla entry", "Private transport throughout", "2 nights at the retreat", "Daily breakfast"],
    price: "From USD 240 / person",
  },
  {
    slug: "wild-and-still",
    name: "Wild & Still: Minneriya Safari",
    duration: "1 day",
    description:
      "An early safari through Minneriya National Park during the elephant gathering season, back at the walawwa in time for a slow afternoon on the veranda.",
    inclusions: ["Jeep safari, Minneriya National Park", "Park entry fees", "Packed breakfast", "Return transfer"],
    price: "From USD 60 / person",
  },
];

export const siteMeta = {
  name: "Milla Walawwa Retreat",
  by: "by Maara",
  location: "Matale, Sri Lanka",
  positioning: "One restored walawwa. Four rooms. Nothing hurried.",
};
