import { faker } from "@faker-js/faker";
faker.seed(12);

const data = [
  {
    name: "Earth from ISS",
    category: "planet",
    description:
      "Florida, the Bahamas and Cuba as seen by the International Space Station.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571226/planet/Earth_from_ISS_uo4zvh.jpg",
  },
  {
    name: "Enceladus",
    category: "moon",
    description:
      "In July 2005, Cassini acquired high resolution views of Saturn's moon Enceladus made of ice and oceans which it jets out to produce one of Saturn's ring.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571309/moon/Enceladus_lgjvyd.jpg",
  },
  {
    name: "Cartwheel Galaxy",
    category: "galaxy",
    description:
      "The Cartwheel Galaxy, located about 500 million light-years away in the Sculptor constellation, is a rare sight captured by NASA's James Webb Space Telescope.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571413/galaxy/Cartwheel_Galaxy_agu0er.jpg",
  },
  {
    name: "Helix Nebula",
    category: "nebula",
    description:
      'The Helix Nebula, also known as the "Eye of God" or the "Eye of Sauron," is a large planetary nebula located in the constellation Aquarius.',
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571275/nebula/Helix_Nebula_lx3kbz.jpg",
  },
  {
    name: "Voyager 1",
    category: "misc",
    description:
      "No spacecraft has gone farther than NASA's Voyager 1 launched on September 5, 1977. Its so far away that it takes light 20 hours and 33 minutes to travel meaning means it takes roughly two days to send a message to Voyager 1.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571341/misc/Voyager_1_bg0afs.jpg",
  },
  {
    name: "Uranus Rings",
    category: "planet",
    description:
      "This infrared composite image of Uranus and its rings comes from the Keck Telescope. The rings may have been formed by the break up of a small moon.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571224/planet/Uranus_Rings_nx4ccs.jpg",
  },
  {
    name: "Horsehead Nebula",
    category: "nebula",
    description:
      "The Horsehead Nebula, also known as Bernard 33, is a dark nebula located in the Orion constellation. It is one of the most identifiable nebulae because of its resemblance to a horse's head.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571273/nebula/Barnard_33_rh0wcs.jpg",
  },
  {
    name: "Mars",
    category: "planet",
    description:
      "Mars, the fourth planet from the Sun is a dusty cold desert. It is one of the most explored bodies in our solar system. NASA currently has two rovers (Curiosity and Perseverance), one lander (InSight), and one helicopter (Ingenuity) exploring the surface of Mars.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571248/planet/Mars_zj5pq6.jpg",
  },
  {
    name: "Kraken Mare",
    category: "moon",
    description:
      "A false-color mosaic of synthetic aperture radar images showing all of Kraken Mare, thought to be the largest body of liquid on Titan taken by the Cassini spacecraft.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571310/moon/Kraken_Mare_x8kymk.jpg",
  },
  {
    name: "Neptune",
    category: "planet",
    description:
      "This picture of Neptune came from NASA's Voyager 2 spacecraft in 1989. A dark, cold and the most distant planet taking about 165 Earth years to orbit the Sun. It's so far away that it would take us 12 years to reach, which was accomplished by Voyager 2 launched in 1977.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571226/planet/Neptune_gvmlrl.jpg",
  },
  {
    name: "Barnard 68",
    category: "misc",
    description:
      "Barnard 68 believed to be an empty void in space, is a molecular cloud made of dust and gas that absorbs almost all visible light. This makes it look like a ⚫ in the sky.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571342/misc/Barnard_68_uspkxy.jpg",
  },
  {
    name: "Jupiter",
    category: "planet",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant, meaning it doesn't have a surface like Earth to land a spacecraft on. It has more than 75 moons and some may have oceans beneath their crusts that may support life.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571244/planet/Jupiter_z2zxgp.jpg",
  },
  {
    name: "Europa",
    category: "moon",
    description:
      "Jupiter's icy moon Europa, looms large in this color view, made from images taken by NASA's Galileo spacecraft in the late 1990s. It is covered with a layer of ice, but scientists think there is an ocean beneath the surface which could host life.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571309/moon/Europa_vl8pqx.jpg",
  },
  {
    name: "The Bubble Nebula",
    category: "nebula",
    description:
      "NGC 7635, also known as the Bubble Nebula is an emission nebula located 7100 light-years away discovered in 1787. The central bubble is 7 light-years wide.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571275/nebula/The_Bubble_Nebula_u56t4t.jpg",
  },
  {
    name: "Rosette Nebula",
    category: "nebula",
    description:
      "The Rosette Nebula is a vast, located about 5200 light years away from Earth and roughly 130 light years in diameter. Some say it depicts a human skull 💀",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571273/nebula/Rosette_Nebula_guxf0e.jpg",
  },
  {
    name: "Great Red Spot",
    category: "planet",
    description:
      "Jupiter's Great Red Spot is a gigantic storm so massive that nearly 3 Earths would fit in it. First spotted in 1665, indicating that the storm has existed for nearly 358 years, while the exact date of its formation is unknown.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684572455/planet/Great_Red_Spot_on_Jupiter_nfb8po.jpg",
  },
  {
    name: "Surface of Venus",
    category: "planet",
    description:
      "Venera 14 launched in 1981 which lasted for about an hour in the extreme heat, about 900 degrees transmitted the first (and currently the last) color panoramas of its surface.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571225/planet/Surface_of_Venus_-_Venera_14_Spacecraft_yxmnti.jpg",
  },
  {
    name: "The Moon",
    category: "moon",
    description:
      "The brightest and largest object in our night sky, Earth's Moon is the only place beyond Earth where humans have set foot, so far.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571310/moon/The_Moon_zqw6uj.jpg",
  },
  {
    name: "Stephan's Quintet",
    category: "galaxy",
    description:
      "A visual grouping of five galaxies, also known as Hickson Compact Group 92. This particular image was taken by NASA's Hubble Space Telescope.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571413/galaxy/Stephan_s_Quintet_snlttt.jpg",
  },
  {
    name: "Footprints on Moon",
    category: "misc",
    description:
      "A close-up view of Neil Armstrong's footprint, who became the first human being to set foot on the surface of the moon. The footprints on the Moon will be there for a million years since there is no wind to blow them away.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571342/misc/First_Footprints_on_Moon_ac42r2.jpg",
  },
  {
    name: "Earth",
    category: "planet",
    description:
      "Earth, our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things. In 2002, NASA scientists stitched together strips of natural color images of Earth, collected over 4 months from the MODIS instrument aboard NASA's Terra satellite.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571226/planet/Earth_smenw3.jpg",
  },
  {
    name: "Hokusai crater",
    category: "planet",
    description:
      "This true color image from NASA's MESSENGER spacecraft shows the impact crater Hokusai on Mercury. The crater has an impressive system of rays, which extend as much as a thousand kilometers across the planet and are the longest that have yet been identified on Mercury.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571226/planet/Hokusai_crater_on_Mercury_hgy52t.jpg",
  },
  {
    name: "Apollo Lunar Rover",
    category: "misc",
    description:
      "Astronaut Eugene Cernan test drives the Apollo 17 Lunar rover shortly after unloading it from the LM Challenger, who was the last astronaut to walk on the moon.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571342/misc/Apollo_Lunar_Rover_tqojlb.jpg",
  },
  {
    name: "The Golden Record",
    category: "misc",
    description:
      "The Golden Record is a 12-inch gold-plated phonograph record containing sounds and images selected to portray the diversity of life and culture on Earth aboard the Voyager 1 and 2, intended for any intelligent extraterrestrial life form who may find them.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571951/misc/The_Golden_Record_gtxbu3.jpg",
  },
  {
    name: "Io",
    category: "moon",
    description:
      "NASA's Galileo spacecraft acquired this view of Io, Jupiters's 3rd largest moon, in July 1999, and approximates what the human eye would see.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571309/moon/Io_hpif4p.jpg",
  },
  {
    name: "Venus",
    category: "planet",
    description:
      "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It has an average temperature of 864 degrees Fahrenheit, making it the hottest planet in our solar system.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571227/planet/Venus_b5j1lb.jpg",
  },
  {
    name: "Southern Crab Nebula",
    category: "nebula",
    description:
      "This hourglass like image from the Hubble Space Telescope highlights the unique shapes around an aging star system called the Southern Crab Nebula, officially known as Hen 2-104.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571273/nebula/Southern_Crab_Nebula_pd1zpx.jpg",
  },
  {
    name: "Sagittarius A",
    category: "misc",
    description:
      "Sagittarius A, abbreviated Sgr A*, is the supermassive black hole at the center of the Milky Way captured by the Event Horizon Telescope — a global network of radio telescopes. The image is the first visual confirmation that a black hole indeed exists at the center of our galaxy.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571341/misc/Sagittarius_A_exv24x.jpg",
  },
  {
    name: "Veil Nebula",
    category: "nebula",
    description:
      "The Veil Nebula is one of the most spectacular supernova remnants in the sky, extending 110 light-years across, covering an area of sky, 6 times larger than the full moon.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571273/nebula/Veil_Nebula_x0haoo.jpg",
  },
  {
    name: "Arp 273",
    category: "galaxy",
    description:
      "Arp 273 is a pair of interacting galaxies, 300 million light-years, combining to form a beautiful rose like structure, taken by the Hubble Space Telescope. It is thought that the smaller galaxy has actually passed through the larger one.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571413/galaxy/Arp_273_ihyq1f.jpg",
  },
  {
    name: "Uranus",
    category: "planet",
    description:
      "A view of the 7th planet Uranus in our Solar System, captured by NASA's Voyager 2 spacecraft in 1986. It is an ice giant and cannot support life as we know it.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571224/planet/Uranus_myvvol.jpg",
  },
  {
    name: "Earthrise - Apollo 8",
    category: "planet",
    description:
      "Earthrise is a photograph of Earth and some of the Moon's surface that was taken from lunar orbit by astronaut William Anders on December 24, 1968, during the Apollo 8 mission, the first crewed voyage to orbit the Moon.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571225/planet/Earthrise_-_Apollo_8_z8zxad.jpg",
  },
  {
    name: "Andromeda Galaxy",
    category: "galaxy",
    description:
      "The Andromeda Galaxy is the closest major galaxy to the Milky Way. Estimated to be 25% to 50% massive than the Milky Way galaxy, expected to collide with it, in about 4-5 billion years.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571413/galaxy/Andromeda_Galaxy_d1xnfe.jpg",
  },
  {
    name: "The Milky Way",
    category: "galaxy",
    description:
      "This artist's concept illustrates the spiral structure of our galaxy, the Milky Way. Our home galaxy's is about 100,000 light-years across and just 1000 light-years thick, according to Las Cumbres Observatory.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571413/galaxy/The_Milky_Way_Galaxy_dzdqcf.jpg",
  },
  {
    name: "Pismis 24",
    category: "misc",
    description: "The star cluster Pismis 24, over 200 times the mass of our Sun, lies in the core of the large emission nebula NGC 6357 located about 6500 light-years away. ",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1686193923/misc/Pismis_24_ftp3vd.jpg",
  },
  {
    name: "Mercury",
    category: "planet",
    description:
      "Mercury is the first planet from the Sun and the smallest planet in the Solar System. Despite being closest to the Sun, it is not the hottest planet in our solar system - that title belongs to Venus. But Mercury is the fastest planet, orbiting the Sun every 88 Earth days.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571225/planet/Mercury_vtw5uc.jpg",
  },
  {
    name: "Saturn",
    category: "planet",
    description:
      "NASA's Cassini spacecraft bid farewell to Saturn by capturing this last, full mosaic of the planet and its rings two days before the spacecraft's dramatic plunge into the planet's atmosphere to ensure Saturn's moons remain pristine for future exploration which might support life.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571224/planet/Saturn_ozsj1r.jpg",
  },
  {
    name: "Sand dunes",
    category: "planet",
    description:
      "This look back at a sand dune that NASA's Curiosity Mars rover drove across was taken by the rover's Mast Camera (Mastcam) during the 538th Martian day of Curiosity's work on Mars.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571227/planet/Sand_dune_-_Mars_gkura9.jpg",
  },
  {
    name: "Untethered Flight",
    category: "misc",
    description:
      "STS-41-B produces an iconic image of Bruce McCandless II floating in space on the first untethered spacewalk using the Manned Maneuvering Unit (MMU), on February 7, 1984.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571341/misc/First_Untethered_Flight_bplzzg.jpg",
  },
  {
    name: "Titan",
    category: "moon",
    description:
      "Saturn's largest moon, Titan has an Earthlike cycle of liquids flowing across its surface. Instead of water, the clouds rains - rivers, seas and lakes made of liquid methane and ethane.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571309/moon/Titan_qoshcq.jpg",
  },
  {
    name: "Earthrise - Apollo 10",
    category: "planet",
    description:
      "A view of Earth rising above the Lunar horizon photographed from the Apollo 10 Lunar Module in May 1969.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571225/planet/Earth_view_from_Apollo_10_awvtb6.jpg",
  },
  {
    name: "Solar System",
    category: "misc",
    description:
      "An artist's render showing the 8 major planets of our solar system lined up as if they were transiting the Sun. Although such a view would not be possible in reality, the graphic is intended to show the accurate scale of the planets, relative to each other and the Sun.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571341/misc/Solar_System_qputxm.jpg",
  },
  {
    name: "Geyser Basin",
    category: "moon",
    description:
      "Geysers on the south pole, both large and small, spray water vapor and ice particles from many locations on Saturn's moon Enceladus. During a 7 year survey, Cassini spacecraft mapped out 101 geysers on the moon's south pole.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571309/moon/Geyser_Basin_on_Enceladus_mgzudc.jpg",
  },
  {
    name: "Curiosity Rover",
    category: "planet",
    description:
      "A self-portrait of NASA's Curiosity Mars rover in Gale Crater on Mars.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571226/planet/Curiosity_Rover_on_Mars_wc9252.jpg",
  },
  {
    name: "Mice Galaxies",
    category: "galaxy",
    description:
      "NGC 4676, or the Mice Galaxies, are two spiral galaxies located 300 million light years away captured by the Hubble Space Telescope in 2002. In the next billion years, it will evetually form a single galaxy.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1684571413/galaxy/Mice_Galaxies_ce4lpj.jpg",
  },
  {
    name: "IC 2118",
    category: "nebula",
    description:
      "Also known as The Witch Head Nebula due to its shape, IC 2118 is an extremely faint reflection nebula about 1000 light-years from Earth. It glows blue primarily by the light reflected from Rigel, one of the brightest star in the Orion constellation.",
    image:
      "https://res.cloudinary.com/dfuirkjxj/image/upload/w_800/v1686193988/nebula/IC-2118_rvyt07.jpg",
  },
];

export const postersData = data.map((poster) => {
  return {
    ...poster,
    id: faker.string.uuid(),
    price: faker.number.float({ min: 100, max: 500 }).toFixed(2),
    rating: faker.number.float({ min: 1, max: 5 }).toFixed(1),
  };
});
