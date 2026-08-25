import chocoBites from '../assets/images/choco_bites.png'
import waferRoll from '../assets/images/wafer_roll.png'
import triangleBar from '../assets/images/triangle_bar.png'
import crunchBites from '../assets/images/crunch_bites.png'
import sourDips from '../assets/images/sour_dips.png'
import cocoaCone from '../assets/images/cocoa_cone.png'

import brandTreet from '../assets/images/brand_treet.jpg'
import brandKolson from '../assets/images/brand_kolson.png'
import brandMilkfields from '../assets/images/brand_milkfields.png'

export const products = [
  {
    id: 1,
    name: 'Choco Bites',
    desc: 'Crispy bites filled with rich chocolate.',
    image: chocoBites,
    color: 'yellow',
    category: 'Chocolate',
    detailDesc: 'Irresistibly crispy on the outside with a rich, smooth chocolate filling inside. Choco Bites are the perfect snack for chocolate lovers of all ages.',
  },
  {
    id: 2,
    name: 'Wafer Roll',
    desc: 'Crunchy wafer rolls with creamy filling.',
    image: waferRoll,
    color: 'blue',
    category: 'Wafer',
    detailDesc: 'Light, airy wafer rolls packed with a smooth, creamy filling. Every bite delivers the perfect balance of crunch and creaminess.',
  },
  {
    id: 3,
    name: 'Triangle Bar',
    desc: 'Chocolate coated cereal bar for energy.',
    image: triangleBar,
    color: 'red',
    category: 'Cereal & Bars',
    detailDesc: 'A satisfying cereal bar coated in rich chocolate. Packed with energy to keep you going throughout the day.',
  },
  {
    id: 4,
    name: 'Crunch Bites',
    desc: 'Crispy crunch, chocolaty munch.',
    image: crunchBites,
    color: 'purple',
    category: 'Chocolate',
    detailDesc: 'Double the crunch, double the chocolate. Crunch Bites combine an ultra-crispy texture with an intense chocolate flavor.',
  },
  {
    id: 5,
    name: 'Sour Dips',
    desc: 'Tangy, fruity & fun sour candy.',
    image: sourDips,
    color: 'green',
    category: 'Candy',
    detailDesc: 'A burst of tangy fruit flavors that will make your taste buds dance! Sour Dips are the perfect treat for candy lovers.',
  },
  {
    id: 6,
    name: 'Cocoa Cone',
    desc: 'Chocolate filled cone crispy wafer.',
    image: cocoaCone,
    color: 'brown',
    category: 'Cones',
    detailDesc: 'A perfectly crispy wafer cone filled with smooth, rich chocolate. An indulgent treat that combines texture and taste.',
  },
]

export const partnerBrands = [
  { id: 1, name: 'TREET', tagline: "It's a Treet Thing", className: 'treet', logo: brandTreet },
  { id: 2, name: 'KOLSON', tagline: 'From Nature to You', className: 'kolson', logo: brandKolson },
  { id: 3, name: 'MilkFields', tagline: 'Fresh From the Fields', className: 'milkfields', logo: brandMilkfields },
  { id: 4, name: '& Many More', tagline: 'More great brands coming', className: 'more', logo: null },
]
