/* Latorrién de Ane — site content (ES/EN), images, links and ratings.
   Edit text, image paths and URLs here; layout lives in "Latorrien de Ane.dc.html". */
(function () {
  var WEB = "https://www.latorrien.es/-_-/res/cfd3c303-fd26-4509-b4ef-ce4dae407fe6/images/files/cfd3c303-fd26-4509-b4ef-ce4dae407fe6/";

  var links = {
    booking: "https://www.booking.com/hotel/es/latorrien-de-ane.html",
    // Formspree: pega aquí tu endpoint (p. ej. "https://formspree.io/f/xxxxxxx"). Vacío = solo muestra el mensaje de gracias.
    formspree: "",
    reviewsBooking: "https://www.booking.com/hotel/es/latorrien-de-ane.html#tab-reviews",
    reviewsGoogle: "https://www.google.es/travel/hotels/entity/ChgI29qKvK-66LQWGgwvZy8xMnFncjN0MHkQAQ",
    reviewsTripadvisor: "https://www.tripadvisor.es/Hotel_Review-g4471137-d4454894-Reviews-Hotel_Rural_LATORRIEN_DE_ANE-Mues_Navarra.html",
    instagram: "https://www.instagram.com/hotellatorriendeane",
    legal: "https://www.latorrien.es/aviso-legal",
    privacy: "https://www.latorrien.es/politica-de-privacidad",
    visitNavarra: "https://www.visitnavarra.es/",
    maps: "https://www.google.com/maps/search/?api=1&query=Calle+Mayor+128,+31219+Mu%C3%A9s,+Navarra",
    mapEmbed: "https://maps.google.com/maps?q=Calle%20Mayor%20128%2C%2031219%20Mu%C3%A9s%2C%20Navarra&z=15&output=embed"
  };

  // Local files = 1080×720 photos (2024 shoot). Remote = current latorrien.es assets.
  var images = {
    heroExterior: "assets/hero-exterior-church.jpg",
    exteriorFountain: "assets/exterior-fountain.jpg",
    facadeSign: "assets/facade-sign.jpg",
    reception: "assets/reception-stairs.jpg",
    lounge: "assets/lounge-salon.jpg",
    library: "assets/lounge-library-clock.jpg",
    corridor: "assets/corridor-first-floor.jpg",
    staircase: "assets/detail-staircase.jpg",
    paintings: "assets/detail-paintings.jpg",
    roomFirst: "assets/room-first-floor.jpg",
    roomAtticCarved: "assets/room-attic-carved-headboard.jpg",
    roomAttic: "assets/room-attic-double.jpg",
    suite: "assets/suite-sitting-room.jpg",
    bathroom: "assets/room-bathroom.jpg",
    cellar: "assets/restaurant-cellar.jpg",
    breakfast: "assets/breakfast-buffet.jpg",
    breakfastRoom: "assets/breakfast-room-fireplace.jpg",
    cafeBar: "assets/cafe-bar.jpg",
    pintxo: "assets/cafe-pintxo.jpg",
    webRestaurant: WEB + "4bc861a4-7ce8-42f6-a373-4d57fc7d86a7/1200-800/3cb1f5463dc7406abb98a9de33c1591a5aa9a651",
    webSecondFloor: WEB + "a94f0934-3ee6-4560-86f5-6b780cecd40b/768-576/28934a95cc8d19de8ef7ff198df78476ed3f8ec0",
    webSuite: WEB + "5dbffca1-f3dc-466e-b13c-c198b799977a/768-576/6eae54a3633936d60c4618929664726b8b63c060",
    navarra: [
      WEB + "7ea607ba-c5a4-4532-845a-533baa2d1bb4/2000-1332/c7507dc7972c651f944f3f8f630315e942982e10",
      WEB + "c6c66a01-0903-4afb-9e7c-e4be1cf43376/2000-1124/91d65e1f4e75e0c6fdc3298831f0b08401833561",
      WEB + "411c9369-1a6e-471f-b907-5c7c869df0cc/2000-1333/788c0af4301e908a6a112a8334b4a064c01fb29d",
      WEB + "d2a106e7-9b91-4eba-9314-a7071f59025f/2000-1125/cf29a9e634c7ee8ac4084f5320ead28ad3a778d1",
      WEB + "4736487c-24b5-4a66-8cb6-571f8b7d1930/2000-1124/4f403c3db9ae48981c0ef7b74d4cbb80ce599dff",
      WEB + "1cc16ac2-d2ab-44d7-afd1-268a4cc7581e/1280-853/b3b6cde9df167d7401fc954ba26f60fe99491f6c",
      WEB + "19cac5e3-f89e-42a5-ba73-19e7033f444c/2000-1590/d242bf13e043b32a50d30e34af16d2406f1dd77c",
      WEB + "c39e6e6d-8b4a-472c-adf9-b4099fdb12e1/2000-1125/4e4889c3046430e051c0dacf51d8133ee55a7c2b",
      WEB + "aae40209-2ce0-450f-bb0c-cb6289112cf8/2000-1522/cfb65bdc25f101ed9f397f877da1acae0be2c63e",
      WEB + "84894e36-d86c-400d-add8-8c90c98944e4/2000-1124/534ce086368bd7a82308b4585f819d25355ca42e",
      WEB + "ef745d3d-873d-43a2-9594-443c1b96741a/2000-1333/538c4cb176925f1041cfdc05edc7fffe777c4071",
      WEB + "7604a0cc-2894-47e9-a210-7718980627aa/2000-1333/35b3e476d2e785d0496048267c2eb08d1f2fdfaa"
    ]
  };

  // Research snapshots — verify before publishing.
  var ratings = {
    booking: { score: 9.5, max: 10, count: 294 },
    google: { score: 4.6, max: 5, count: 279 },
    tripadvisor: { score: 4.9, max: 5, count: 116 }
  };

  var es = {
    meta: {
      base: "Hotel Rural Latorrién de Ane | Navarra",
      home: { title: "Hotel Rural Latorrién de Ane | Navarra", desc: "Hotel rural en una casona del siglo XVII restaurada en Mués, Navarra. Ocho habitaciones dobles, una suite y restaurante en la antigua bodega, cerca de Los Arcos y el Camino de Santiago." },
      rooms: { title: "Habitaciones | Hotel Rural Latorrién de Ane", desc: "Ocho habitaciones dobles y una suite con bañera de hidromasaje en una casona navarra del siglo XVII." },
      restaurant: { title: "Restaurante y cafetería | Latorrién de Ane", desc: "Cenas en la antigua bodega y, en la cafetería, desayuno buffet, pintxos y terraza. Mués, Navarra." },
      experience: { title: "Servicios, Camino y entorno | Latorrién de Ane", desc: "Servicios del hotel, traslado gratuito para peregrinos desde Los Arcos e ideas para conocer Navarra." },
      contact: { title: "Contacto | Hotel Rural Latorrién de Ane", desc: "Calle Mayor, 128, 31219 Mués, Navarra. Teléfono +34 660 600 183 · info@latorrien.es." }
    },
    nav: { home: "Inicio", rooms: "Habitaciones", restaurant: "Comer y beber", experience: "Experiencia", contact: "Contacto", book: "Reservar", menu: "Menú", close: "Cerrar", openMenu: "Abrir menú", closeMenu: "Cerrar menú", lang: "Idioma", main: "Navegación principal", skip: "Saltar al contenido", homeAria: "Latorrién de Ane, ir al inicio" },
    cta: { book: "Reservar en Booking.com", avail: "Consultar disponibilidad", rooms: "Descubrir habitaciones", contact: "Contactar con el hotel", call: "Llamar", newTab: "se abre en una pestaña nueva", bookAria: "Reservar en Booking.com (se abre en una pestaña nueva)", availAria: "Consultar disponibilidad en Booking.com (se abre en una pestaña nueva)" },
    alt: {
      hero: "Fachada de piedra de Latorrién de Ane junto a la torre de la iglesia de Mués",
      reception: "Recepción con escalera de piedra, vigas de madera y lámpara roja",
      sign: "Cartel del hotel sobre el muro de piedra de la fachada",
      roomFirst: "Habitación de la primera planta con muro de piedra, contraventanas de madera y lámpara de pie",
      roomAttic: "Habitación abuhardillada con vigas de madera y cama de matrimonio",
      roomAtticCarved: "Habitación abuhardillada con cabecero de madera tallada",
      suite: "Sala de estar de la suite con mesa de madera y alfombra de rayas",
      suiteWeb: "Suite de Latorrién de Ane",
      corridor: "Pasillo de la primera planta con puertas de madera y vigas",
      bathroom: "Baño con azulejos azules, lavabo y toallas",
      cellar: "Mesas del restaurante en la antigua bodega de piedra",
      breakfast: "Desayuno buffet con croissants, fruta fresca y zumo de naranja",
      breakfastRoom: "Comedor con chimenea, sillas de fibra y muros de piedra",
      cafe: "Barra de la cafetería con lámparas colgantes y muros de piedra",
      pintxo: "Pintxo de banderilla y una cerveza en la barra",
      lounge: "Salón con sofá clásico, mesa de madera y muro de piedra",
      library: "Librería y reloj de pie antiguo en el salón",
      staircase: "Barandilla de madera torneada de la escalera",
      paintings: "Cuadros apoyados sobre un murete de piedra",
      terrace: "Mesas de la terraza junto a la fachada de piedra",
      fountain: "La casona vista desde la fuente de la plaza de Mués",
      navarra: "Paisaje de Navarra",
      map: "Mapa de la ubicación del hotel en Mués"
    },
    home: {
      kicker: "Hotel Rural · Mués, Navarra",
      title: "Una escapada con historia.",
      lead: "Descubre Latorrién de Ane, una antigua casona navarra donde la arquitectura tradicional, los espacios acogedores y la buena mesa invitan a desconectar.",
      heroCaption: "La casona, en el centro de Mués",
      ratingsLine: "Valoraciones de nuestros huéspedes",
      introKicker: "La casa",
      introTitle: "Una casona del siglo XVII, restaurada para el descanso.",
      introP1: "Entre Pamplona, Logroño y Vitoria, cerca del Circuito de Navarra y a escasos kilómetros de Los Arcos, Latorrién de Ane ocupa una casa de piedra totalmente restaurada.",
      introP2: "Lo tradicional y lo contemporáneo conviven con naturalidad: muros de piedra, vigas de madera, antigüedades recuperadas y un ambiente acogedor y familiar. Un sitio ideal para desconectar.",
      facts: [
        { n: "S. XVII", l: "Casona restaurada en el centro de Mués" },
        { n: "8 + 1", l: "Habitaciones dobles y una suite" },
        { n: "Bodega", l: "Restaurante en la antigua bodega" },
        { n: "Camino", l: "Traslado gratuito desde Los Arcos" }
      ],
      roomsKicker: "Habitaciones",
      roomsTitle: "Nueve habitaciones, ninguna igual.",
      roomsLead: "Cada habitación se adapta a la arquitectura original de la casa y está decorada con antigüedades restauradas.",
      roomsAll: "Ver todas las habitaciones",
      roomCards: [
        { key: "first", label: "Primera planta", title: "Piedra y madera", text: "Muros de piedra y antigüedades restauradas. Con dos camas o cama de matrimonio.", anchor: "primera-planta" },
        { key: "second", label: "Segunda planta", title: "Bajo las vigas", text: "Techos abuhardillados y ventanales para ver las estrellas. Posibilidad de conectar dos habitaciones.", anchor: "segunda-planta" },
        { key: "suite", label: "Suite", title: "La suite", text: "Dormitorio, sala de estar independiente y baño con bañera de hidromasaje doble.", anchor: "suite" }
      ],
      roomLink: "Ver detalles",
      reviewsKicker: "Opiniones",
      reviewsTitle: "Muy bien valorado por nuestros huéspedes.",
      reviewsNote: "Puntuaciones públicas en cada plataforma.",
      readReviews: "Leer opiniones",
      restKicker: "Comer y beber",
      restTitle: "Dos espacios, cada uno con su historia.",
      restP: "Cena en la antigua bodega, bajo su bóveda de piedra. Para el desayuno, un pintxo o un rato en la terraza, está la cafetería.",
      restSpaces: [
        { key: "bodega", label: "La bodega · Restaurante", title: "Cenas bajo la bóveda", text: "Cocina de producto de proximidad y vinos nacionales y navarros, en la antigua bodega de la casa.", fl: "Cenas", fv: "De 18:00 a 22:00", anchor: "bodega" },
        { key: "cafeteria", label: "La cafetería", title: "Desayunos, pintxos y terraza", text: "Desayuno buffet para huéspedes, pintxos y raciones en la barra, y mesas fuera, junto a la fachada.", fl: "Desayuno", fv: "Buffet para huéspedes", anchor: "cafeteria" }
      ],
      restMore: "Ver la bodega y la cafetería",
      spaceLink: "Conocer",
      detailsKicker: "La experiencia",
      detailsTitle: "Una casa que se cuenta en los detalles.",
      details: [
        { key: "lounge", title: "El salón", text: "Para leer o simplemente descansar. Las lámparas se apoyan en robos de trigo, la antigua medida de grano de la zona." },
        { key: "reception", title: "La recepción", text: "La gran puerta original conserva sus cerrajas, las llaves de hierro, la gatera y la ventanilla." },
        { key: "stair", title: "Madera y piedra", text: "Vigas, barandillas torneadas y muros de piedra que mantienen la personalidad del edificio." }
      ],
      caminoKicker: "Camino de Santiago",
      caminoTitle: "Peregrinos: os recogemos en Los Arcos.",
      caminoP: "Los Arcos es final de etapa del Camino de Santiago. Desde allí te traemos al hotel sin coste, para que termines la jornada en una casa con historia.",
      caminoList: ["Traslado gratuito desde Los Arcos", "Guardabicis gratuito", "Wi‑Fi en todo el hotel", "Cenas de 18:00 a 22:00"],
      caminoCta: "Información para peregrinos",
      servicesKicker: "Servicios",
      servicesTitle: "Lo práctico, resuelto.",
      servicesMore: "Ver todos los servicios",
      exploreKicker: "Entorno",
      exploreTitle: "Navarra, a tu alrededor.",
      exploreP: "Del Camino de Santiago a las Bardenas Reales o la Selva de Irati, Mués es un buen punto de partida para conocer Navarra. Algunos lugares están cerca; otros merecen una excursión de día completo.",
      exploreMore: "Explorar el entorno",
      finalKicker: "Reservas",
      finalTitle: "Reserva tu escapada a Mués.",
      finalP: "Consulta disponibilidad y tarifas para tus fechas en Booking.com. Si tienes cualquier duda, escríbenos o llámanos."
    },
    services: [
      { key: "comfort", n: "01", title: "Confort y accesibilidad", items: ["Ascensor a todas las plantas", "Duchas adaptadas y habitaciones para personas con movilidad reducida", "Wi‑Fi gratuito en todo el hotel", "Cuna o cama supletoria bajo petición"] },
      { key: "food", n: "02", title: "Comer y beber", items: ["Restaurante en la antigua bodega, de 18:00 a 22:00", "Cafetería con desayuno buffet, pintxos y raciones", "Salón y terraza", "Opciones para diferentes necesidades alimentarias"] },
      { key: "camino", n: "03", title: "Para peregrinos", items: ["Traslado gratuito desde Los Arcos", "Guardabicis gratuito para huéspedes"] },
      { key: "arrive", n: "04", title: "Cómo llegar", items: ["Aparcamiento privado gratuito cerca del hotel", "Punto de recarga para vehículos eléctricos a poca distancia"] },
      { key: "info", n: "05", title: "Información útil", items: ["Entrada de 14:00 a 21:00", "Salida hasta las 12:00", "Piscina municipal en el pueblo, abierta en julio y agosto"] }
    ],
    rooms: {
      kicker: "Habitaciones",
      title: "Habitaciones con la personalidad de la casa.",
      lead: "Ocho habitaciones dobles con baño privado y una suite con bañera de hidromasaje. Cada una es diferente: adaptada a la arquitectura original del edificio y decorada con antigüedades restauradas.",
      jump: [{ l: "Primera planta", a: "primera-planta" }, { l: "Segunda planta", a: "segunda-planta" }, { l: "Suite", a: "suite" }, { l: "Equipamiento", a: "equipamiento" }],
      occupancy: "1–2 personas",
      twin: { name: "Habitación dos camas", spec: "Dos camas individuales de 1,05 × 2 m" },
      double: { name: "Habitación cama de matrimonio", spec: "Una cama de 1,80 × 2 m" },
      floor1: { label: "Primera planta", title: "Piedra, madera y antigüedades.", text: "Las habitaciones de la primera planta conservan los muros de piedra y las contraventanas de madera de la casona. Para una o dos personas." },
      floor2: { label: "Segunda planta", title: "Bajo el tejado, con vistas al cielo.", text: "Techos abuhardillados con vigas a la vista y ventanales en el propio tejado, para contemplar las estrellas. Para una o dos personas." },
      family: { title: "Habitaciones conectadas para familias", text: "En la segunda planta es posible conectar dos habitaciones y crear un espacio para hasta cuatro personas. Pregúntanos por esta opción." },
      suite: { label: "Suite", title: "La suite: dos estancias, mucho espacio.", text: "Un dormitorio con cama queen size y una sala de estar independiente, cuyo sofá se convierte en cama para dos personas.", features: ["Cama queen size de 180 × 190 cm", "Sala de estar con sofá cama para dos personas", "Baño con bañera de hidromasaje doble y ducha", "Albornoces, minibar y Smart TV"] },
      amenitiesKicker: "Equipamiento",
      amenitiesTitle: "En todas las habitaciones",
      amenities: ["Baño privado con bañera o ducha", "Televisión", "Teléfono con conexión a recepción", "Escritorio", "Wi‑Fi", "Calefacción y aire acondicionado", "Secador de pelo", "Amenities de baño", "Accesibilidad a todas las habitaciones"],
      accessNote: "El hotel dispone de ascensor a todas las plantas y de habitaciones adaptadas con ducha accesible para personas con movilidad reducida.",
      ctaTitle: "Elige tus fechas.",
      ctaP: "Las tarifas dependen de las fechas y de la habitación. Consulta la disponibilidad en Booking.com."
    },
    restaurant: {
      kicker: "Comer y beber",
      title: "La bodega y la cafetería.",
      lead: "Dos espacios distintos bajo el mismo techo: las cenas, en la antigua bodega; los desayunos, los pintxos y la terraza, en la cafetería.",
      spaces: [
        { id: "bodega", n: "01", name: "La bodega", role: "Restaurante · Cenas", info: "De 18:00 a 22:00" },
        { id: "cafeteria", n: "02", name: "La cafetería", role: "Desayunos, pintxos y terraza", info: "Desayuno buffet para huéspedes" }
      ],
      bodegaLabel: "01 · La bodega · Restaurante",
      bodegaTitle: "Cenar en la antigua bodega.",
      bodegaP: "El restaurante ocupa la bodega de la casona, donde antes se producía y almacenaba el vino. Su estructura abovedada de piedra sirve de marco a un mobiliario moderno y funcional.",
      dinnerTitle: "La cena",
      dinnerP: "Una amplia propuesta para las cenas, con una cocina que rinde homenaje a los productos de proximidad y de temporada de las huertas de la zona.",
      storyDetails: [
        { t: "El respiradero", d: "Se conserva la abertura original que ventilaba la bodega." },
        { t: "El canal del mosto", d: "El canal por el que caía el mosto hacia las barricas sigue a la vista." },
        { t: "La bóveda", d: "Muros y techo de piedra de la antigua casona del siglo XVII." }
      ],
      glassKicker: "Entre los dos espacios",
      glassTitle: "Un cristal en el suelo.",
      glassP: "Desde la cafetería, un cristal en el suelo deja ver la bodega que hay debajo y el canal por el que el mosto caía a las barricas.",
      cafeLabel: "02 · La cafetería",
      cafeTitle: "Lo antiguo y lo nuevo, en la misma barra.",
      cafeP: "La cafetería resume el espíritu de la casa: madera de barricas de roble en la base de la barra, antiguas ascas convertidas en jardineras y lámparas de diseño Foscarini. Las piedras del fogón, procedentes de la bodega, la hacen cálida y acogedora.",
      cafeBlocks: [
        { key: "breakfast", t: "Desayuno", d: "Desayuno buffet para huéspedes: fruta fresca, croissants recién horneados y zumo de naranja natural, entre otras cosas." },
        { key: "pintxos", t: "Pintxos y raciones", d: "Pintxos, raciones y vinos nacionales y navarros, para un aperitivo o una cena informal." },
        { key: "terrace", t: "Terraza", d: "Mesas en el exterior, junto a la fachada de piedra de la casona." }
      ],
      practicalKicker: "Información práctica",
      bodegaName: "La bodega",
      bodegaFacts: [
        { l: "Cenas", v: "De 18:00 a 22:00" },
        { l: "Vinos", v: "Carta de vinos nacionales y navarros" },
        { l: "Necesidades alimentarias", v: "Opciones para diferentes necesidades. Consúltanos." }
      ],
      cafeName: "La cafetería",
      cafeFacts: [
        { l: "Desayuno", v: "Buffet para huéspedes del hotel" },
        { l: "En la barra", v: "Pintxos, raciones y vinos" },
        { l: "Terraza", v: "Mesas en el exterior" }
      ],
      ctaTitle: "¿Alguna pregunta?",
      ctaP: "Llámanos o escríbenos y te atenderemos encantados."
    },
    experience: {
      kicker: "Experiencia",
      title: "Todo lo que necesitas para tu estancia.",
      lead: "Servicios del hotel, información para peregrinos del Camino de Santiago y algunas ideas para conocer Navarra.",
      sub: [{ l: "Servicios", a: "servicios" }, { l: "Camino de Santiago", a: "camino" }, { l: "Entorno", a: "entorno" }],
      servicesKicker: "Servicios",
      servicesTitle: "Servicios del hotel",
      caminoKicker: "Camino de Santiago",
      caminoTitle: "Una parada con historia en tu Camino.",
      caminoP: "Mués está a escasos kilómetros de Los Arcos, final de etapa del Camino de Santiago. Ofrecemos traslado gratuito desde Los Arcos hasta el hotel.",
      caminoSteps: [
        { t: "Traslado gratuito", d: "Desde Los Arcos hasta el hotel. Contacta con nosotros para coordinarlo." },
        { t: "Guardabicis", d: "Gratuito para huéspedes que viajan en bicicleta." },
        { t: "Descanso y cena", d: "Entrada de 14:00 a 21:00 y restaurante de 18:00 a 22:00." }
      ],
      caminoCta: "Coordinar el traslado",
      areaKicker: "Entorno",
      areaTitle: "Descubre Navarra",
      areaLead: "Si es tu primera vez en Navarra, estas son algunas de sus maravillas. Algunas están cerca de Mués; otras son una excursión de día completo.",
      groups: [
        { title: "El Camino de Santiago", items: [
          { n: "Camino de Santiago", d: "El Camino Francés atraviesa Navarra; Los Arcos es final de etapa." },
          { n: "Estella-Lizarra", d: "Ciudad monumental del Camino, con un rico patrimonio románico." },
          { n: "Roncesvalles", d: "Al pie del Pirineo, punto de partida del Camino Francés en Navarra." } ] },
        { title: "Ciudades y patrimonio", items: [
          { n: "Pamplona / Iruña", d: "La capital navarra: casco antiguo, murallas y San Fermín." },
          { n: "Castillo de Olite", d: "El Palacio Real de los reyes de Navarra." },
          { n: "Tudela", d: "Capital de la Ribera, con su catedral y su huerta." } ] },
        { title: "Naturaleza", items: [
          { n: "Bardenas Reales", d: "Paisaje semidesértico declarado Reserva de la Biosfera." },
          { n: "Selva de Irati", d: "Uno de los mayores hayedos-abetales de Europa." },
          { n: "Foces de Lumbier y Arbayún", d: "Desfiladeros excavados por los ríos Irati y Salazar." },
          { n: "Valle del Baztán", d: "Valle verde del Pirineo, con pueblos de piedra." },
          { n: "Cuevas de Zugarramurdi", d: "Cueva ligada a la historia y la leyenda de las brujas." } ] }
      ],
      visitNavarra: "Más información en la web oficial de Turismo de Navarra",
      galleryNote: "Navarra · fotografías del sitio web actual del hotel",
      contactTitle: "¿Planificando tu visita?",
      contactP: "Escríbenos o llámanos y te ayudaremos con lo que necesites."
    },
    contact: {
      kicker: "Contacto",
      title: "Te esperamos en Mués.",
      lead: "Escríbenos o llámanos para cualquier consulta sobre tu estancia, el restaurante o el traslado desde Los Arcos.",
      phone: "Teléfono", email: "Correo electrónico", address: "Dirección",
      mapLink: "Abrir en Google Maps",
      accessKicker: "Cómo llegar",
      access: [
        "Entre Pamplona, Logroño y Vitoria, cerca del Circuito de Navarra.",
        "A escasos kilómetros de Los Arcos, final de etapa del Camino de Santiago. Traslado gratuito para peregrinos.",
        "Aparcamiento privado gratuito cerca del hotel y punto de recarga para vehículos eléctricos a poca distancia.",
        "Entrada de 14:00 a 21:00 · Salida hasta las 12:00."
      ],
      formTitle: "Envíanos un mensaje",
      name: "Nombre", mail: "Correo electrónico", tel: "Teléfono", message: "Mensaje",
      consentA: "He leído y acepto la ", consentLink: "política de privacidad", consentB: ".",
      submit: "Enviar",
      formNote: "Al pulsar el botón se abrirá tu aplicación de correo con el mensaje listo para enviar a info@latorrien.es. Esta página no almacena ni envía datos.",
      errRequired: "Escribe tu nombre, tu correo electrónico y tu mensaje.",
      errConsent: "Para continuar, acepta la política de privacidad.",
      sentTitle: "¡Gracias por tu consulta!",
      sent: "Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.",
      sending: "Enviando…",
      sendError: "No hemos podido enviar tu mensaje. Inténtalo de nuevo o escríbenos a info@latorrien.es.",
      errEmail: "Introduce un correo electrónico válido.",
      mailSubject: "Consulta desde la web",
      bookKicker: "Reservas",
      bookP: "Las reservas se gestionan a través de Booking.com, donde puedes consultar disponibilidad y tarifas para tus fechas.",
      legalKicker: "Información legal"
    },
    reviews: [
      { key: "kristy", text: "«El hotel está decorado con mucho gusto y el personal es muy atento. Es un pequeño lugar mágico.»", name: "Kristy", platform: "Booking.com", note: "Traducido del inglés", url: "reviewsBooking" },
      { key: "hamilton", text: "«Este pequeño hotel boutique es excepcional.»", name: "Elizabeth Hamilton · marzo 2026", platform: "Tripadvisor", note: "Traducido del inglés", url: "reviewsTripadvisor" },
      { key: "fernando", text: "«Nosotros seguro que volveremos, un lugar tranquilo donde desconectar.»", name: "Fernando Martínez", platform: "Google", note: "", url: "reviewsGoogle" }
    ],
    ratings: { reviews: "opiniones", source: "Ver en", decimal: "," },
    footer: { tagline: "Hotel rural en una casona del siglo XVII, en Mués (Navarra).", contact: "Contacto", explore: "Navegación", legal: "Legal", legalNotice: "Aviso legal", privacy: "Política de privacidad", rights: "© Hotel Rural Latorrién de Ane S.L.", services: "Servicios", camino: "Camino de Santiago", area: "Entorno" },
    cookie: { text: "Este sitio solo guarda en tu navegador tu preferencia de idioma y este aviso. No utiliza cookies de seguimiento.", ok: "Entendido", more: "Política de privacidad" },
    mobileBar: { avail: "Consultar disponibilidad", call: "Llamar" }
  };

  var en = {
    meta: {
      base: "Hotel Rural Latorrién de Ane | Navarra",
      home: { title: "Hotel Rural Latorrién de Ane | Navarra", desc: "A rural hotel in a restored 17th-century country house in Mués, Navarra. Eight double rooms, a suite and a restaurant in the old wine cellar, near Los Arcos and the Camino de Santiago." },
      rooms: { title: "Rooms | Hotel Rural Latorrién de Ane", desc: "Eight double rooms and a suite with a whirlpool bath in a 17th-century Navarrese country house." },
      restaurant: { title: "Restaurant and café | Latorrién de Ane", desc: "Dinner in the old wine cellar; breakfast buffet, pintxos and terrace in the café. Mués, Navarra." },
      experience: { title: "Facilities, Camino and the area | Latorrién de Ane", desc: "Hotel facilities, a free pilgrim transfer from Los Arcos, and ideas for exploring Navarra." },
      contact: { title: "Contact | Hotel Rural Latorrién de Ane", desc: "Calle Mayor, 128, 31219 Mués, Navarra, Spain. Phone +34 660 600 183 · info@latorrien.es." }
    },
    nav: { home: "Home", rooms: "Rooms", restaurant: "Food & drink", experience: "Experience", contact: "Contact", book: "Book", menu: "Menu", close: "Close", openMenu: "Open menu", closeMenu: "Close menu", lang: "Language", main: "Main navigation", skip: "Skip to content", homeAria: "Latorrién de Ane, go to home page" },
    cta: { book: "Book on Booking.com", avail: "Check availability", rooms: "Explore the rooms", contact: "Contact the hotel", call: "Call", newTab: "opens in a new tab", bookAria: "Book on Booking.com (opens in a new tab)", availAria: "Check availability on Booking.com (opens in a new tab)" },
    alt: {
      hero: "The stone façade of Latorrién de Ane beside the church tower in Mués",
      reception: "Reception with stone staircase, timber beams and a red lamp",
      sign: "The hotel sign on the stone façade",
      roomFirst: "First-floor room with stone wall, timber shutters and a floor lamp",
      roomAttic: "Attic room with exposed beams and a double bed",
      roomAtticCarved: "Attic room with a carved wooden headboard",
      suite: "The suite's sitting area with a wooden table and striped rug",
      suiteWeb: "The suite at Latorrién de Ane",
      corridor: "First-floor corridor with panelled wooden doors and beams",
      bathroom: "Bathroom with blue tiles, washbasin and towels",
      cellar: "Restaurant tables in the old stone wine cellar",
      breakfast: "Breakfast buffet with croissants, fresh fruit and orange juice",
      breakfastRoom: "Dining room with fireplace, woven chairs and stone walls",
      cafe: "The café bar with pendant lamps and stone walls",
      pintxo: "A pintxo skewer and a glass of beer at the bar",
      lounge: "Lounge with a classic sofa, wooden table and stone wall",
      library: "Bookcase and antique longcase clock in the lounge",
      staircase: "Turned wooden balustrade on the staircase",
      paintings: "Paintings resting on a low stone wall",
      terrace: "Terrace tables beside the stone façade",
      fountain: "The house seen from the fountain in the square at Mués",
      navarra: "Navarra landscape",
      map: "Map showing the hotel's location in Mués"
    },
    home: {
      kicker: "Rural hotel · Mués, Navarra",
      title: "A getaway steeped in history.",
      lead: "Discover Latorrién de Ane, a restored Navarrese country house where historic architecture, welcoming spaces and good food invite you to slow down.",
      heroCaption: "The house, in the heart of Mués",
      ratingsLine: "Rated by our guests",
      introKicker: "The house",
      introTitle: "A 17th-century country house, restored for rest.",
      introP1: "Between Pamplona, Logroño and Vitoria, close to the Circuito de Navarra and just a few kilometres from Los Arcos, Latorrién de Ane occupies a fully restored stone house.",
      introP2: "Old and new sit comfortably together: stone walls, timber beams, restored antiques and a warm, family atmosphere. An ideal place to switch off.",
      facts: [
        { n: "17th c.", l: "Restored house in the centre of Mués" },
        { n: "8 + 1", l: "Double rooms and one suite" },
        { n: "Cellar", l: "Restaurant in the old wine cellar" },
        { n: "Camino", l: "Free transfer from Los Arcos" }
      ],
      roomsKicker: "Rooms",
      roomsTitle: "Nine rooms, no two alike.",
      roomsLead: "Every room follows the original architecture of the house and is furnished with restored antiques.",
      roomsAll: "See all rooms",
      roomCards: [
        { key: "first", label: "First floor", title: "Stone and timber", text: "Stone walls and restored antiques. Twin or double beds.", anchor: "primera-planta" },
        { key: "second", label: "Second floor", title: "Under the beams", text: "Sloping ceilings and roof windows for stargazing. Two rooms can be connected.", anchor: "segunda-planta" },
        { key: "suite", label: "Suite", title: "The suite", text: "Bedroom, separate sitting room and a bathroom with a double whirlpool bath.", anchor: "suite" }
      ],
      roomLink: "See details",
      reviewsKicker: "Reviews",
      reviewsTitle: "Highly rated by our guests.",
      reviewsNote: "Public scores on each platform.",
      readReviews: "Read reviews",
      restKicker: "Food & drink",
      restTitle: "Two spaces, each with its own story.",
      restP: "Dinner is served in the old wine cellar, beneath its stone vault. For breakfast, a pintxo or time on the terrace, there's the café.",
      restSpaces: [
        { key: "bodega", label: "The cellar · Restaurant", title: "Dinner under the vault", text: "Cooking built on local produce, with Spanish and Navarrese wines, in the house's old wine cellar.", fl: "Dinner", fv: "18:00 to 22:00", anchor: "bodega" },
        { key: "cafeteria", label: "The café", title: "Breakfast, pintxos and terrace", text: "Breakfast buffet for guests, pintxos and local dishes at the bar, and outdoor tables beside the façade.", fl: "Breakfast", fv: "Buffet for hotel guests", anchor: "cafeteria" }
      ],
      restMore: "See the cellar and the café",
      spaceLink: "Discover",
      detailsKicker: "The experience",
      detailsTitle: "A house best told through its details.",
      details: [
        { key: "lounge", title: "The lounge", text: "For reading or simply resting. The lamps stand on robos, the old wooden grain measures used in the area." },
        { key: "reception", title: "Reception", text: "The great original front door still has its locks, iron keys, cat flap and small inspection window." },
        { key: "stair", title: "Timber and stone", text: "Beams, turned balustrades and stone walls that keep the building's character intact." }
      ],
      caminoKicker: "Camino de Santiago",
      caminoTitle: "Pilgrims: we'll pick you up in Los Arcos.",
      caminoP: "Los Arcos is a stage end on the Camino de Santiago. We'll bring you to the hotel free of charge, so you can finish the day in a house full of history.",
      caminoList: ["Free transfer from Los Arcos", "Free bicycle storage", "Wi‑Fi throughout", "Dinner from 18:00 to 22:00"],
      caminoCta: "Information for pilgrims",
      servicesKicker: "Facilities",
      servicesTitle: "The practical side, sorted.",
      servicesMore: "See all facilities",
      exploreKicker: "The area",
      exploreTitle: "Navarra, all around you.",
      exploreP: "From the Camino de Santiago to the Bardenas Reales or the Irati Forest, Mués is a good base for exploring Navarra. Some places are close by; others are best enjoyed as a full day trip.",
      exploreMore: "Explore the area",
      finalKicker: "Booking",
      finalTitle: "Plan your getaway to Mués.",
      finalP: "Check availability and rates for your dates on Booking.com. If you have any questions, call or email us."
    },
    services: [
      { key: "comfort", n: "01", title: "Comfort & accessibility", items: ["Lift to all floors", "Accessible showers and adapted rooms for guests with reduced mobility", "Free Wi‑Fi throughout the hotel", "Cot or extra bed on request"] },
      { key: "food", n: "02", title: "Food & drink", items: ["Restaurant in the old cellar, 18:00–22:00", "Café with breakfast buffet, pintxos and local dishes", "Lounge and terrace", "Options for different dietary requirements"] },
      { key: "camino", n: "03", title: "For Camino pilgrims", items: ["Free transfer from Los Arcos", "Free bicycle storage for guests"] },
      { key: "arrive", n: "04", title: "Getting here", items: ["Free private parking near the hotel", "EV charging point a short distance away"] },
      { key: "info", n: "05", title: "Useful information", items: ["Check-in 14:00–21:00", "Check-out until 12:00", "Village swimming pool, open in July and August"] }
    ],
    rooms: {
      kicker: "Rooms",
      title: "Rooms with the character of the house.",
      lead: "Eight double rooms with private bathrooms and a suite with a whirlpool bath. Each one is different: shaped by the original architecture and furnished with restored antiques.",
      jump: [{ l: "First floor", a: "primera-planta" }, { l: "Second floor", a: "segunda-planta" }, { l: "Suite", a: "suite" }, { l: "In every room", a: "equipamiento" }],
      occupancy: "1–2 guests",
      twin: { name: "Twin room", spec: "Two single beds, 1.05 × 2 m" },
      double: { name: "Double room", spec: "One 1.80 × 2 m bed" },
      floor1: { label: "First floor", title: "Stone, timber and antiques.", text: "First-floor rooms keep the house's stone walls and wooden shutters. For one or two guests." },
      floor2: { label: "Second floor", title: "Under the roof, open to the sky.", text: "Sloping ceilings with exposed beams and windows set into the roof, perfect for stargazing. For one or two guests." },
      family: { title: "Connecting rooms for families", text: "On the second floor, two rooms can be connected to sleep up to four people. Ask us about this option." },
      suite: { label: "Suite", title: "The suite: two rooms, plenty of space.", text: "A bedroom with a queen-size bed and a separate sitting room whose sofa converts into a bed for two.", features: ["Queen-size bed, 180 × 190 cm", "Sitting room with sofa bed for two", "Bathroom with double whirlpool bath and shower", "Bathrobes, minibar and Smart TV"] },
      amenitiesKicker: "In every room",
      amenitiesTitle: "Standard in every room",
      amenities: ["Private bathroom with bath or shower", "Television", "Telephone to reception", "Desk", "Wi‑Fi", "Heating and air conditioning", "Hairdryer", "Toiletries", "Accessibility in all rooms"],
      accessNote: "The hotel has a lift to all floors and adapted rooms with accessible showers for guests with reduced mobility.",
      ctaTitle: "Choose your dates.",
      ctaP: "Rates depend on your dates and room. Check availability on Booking.com."
    },
    restaurant: {
      kicker: "Food & drink",
      title: "The cellar and the café.",
      lead: "Two distinct spaces under one roof: dinner in the old wine cellar; breakfast, pintxos and the terrace in the café.",
      spaces: [
        { id: "bodega", n: "01", name: "The cellar", role: "Restaurant · Dinner", info: "18:00 to 22:00" },
        { id: "cafeteria", n: "02", name: "The café", role: "Breakfast, pintxos and terrace", info: "Breakfast buffet for guests" }
      ],
      bodegaLabel: "01 · The cellar · Restaurant",
      bodegaTitle: "Dinner in the old wine cellar.",
      bodegaP: "The restaurant occupies the house's former wine cellar, where wine was once made and stored. Its vaulted stone structure frames modern, functional furniture.",
      dinnerTitle: "Dinner",
      dinnerP: "A generous dinner offer, with cooking that celebrates local, seasonal produce from the area's market gardens.",
      storyDetails: [
        { t: "The air vent", d: "The original opening that ventilated the cellar has been preserved." },
        { t: "The must channel", d: "The channel that carried grape must to the barrels is still visible." },
        { t: "The vault", d: "Stone walls and ceiling from the original 17th-century house." }
      ],
      glassKicker: "Between the two spaces",
      glassTitle: "A glass panel in the floor.",
      glassP: "From the café, a glass panel in the floor looks down into the cellar below and the channel where grape must once ran to the barrels.",
      cafeLabel: "02 · The café",
      cafeTitle: "Old and new, at the same bar.",
      cafeP: "The café sums up the spirit of the house: oak barrel staves at the base of the bar, old grape troughs turned into planters, and Foscarini design lamps. The hearth stones, taken from the cellar, make it warm and welcoming.",
      cafeBlocks: [
        { key: "breakfast", t: "Breakfast", d: "A breakfast buffet for guests: fresh fruit, freshly baked croissants and fresh orange juice, among other things." },
        { key: "pintxos", t: "Pintxos and local dishes", d: "Pintxos, local dishes and Spanish and Navarrese wines, for an aperitif or an informal dinner." },
        { key: "terrace", t: "Terrace", d: "Outdoor tables beside the stone façade of the house." }
      ],
      practicalKicker: "Practical information",
      bodegaName: "The cellar",
      bodegaFacts: [
        { l: "Dinner", v: "18:00 to 22:00" },
        { l: "Wine", v: "Spanish and Navarrese wine list" },
        { l: "Dietary requirements", v: "Options for different requirements. Just ask." }
      ],
      cafeName: "The café",
      cafeFacts: [
        { l: "Breakfast", v: "Buffet for hotel guests" },
        { l: "At the bar", v: "Pintxos, local dishes and wine" },
        { l: "Terrace", v: "Outdoor tables" }
      ],
      ctaTitle: "Any questions?",
      ctaP: "Call or email us and we'll be happy to help."
    },
    experience: {
      kicker: "Experience",
      title: "Everything you need for your stay.",
      lead: "Hotel facilities, information for Camino de Santiago pilgrims, and a few ideas for exploring Navarra.",
      sub: [{ l: "Facilities", a: "servicios" }, { l: "Camino de Santiago", a: "camino" }, { l: "Explore the area", a: "entorno" }],
      servicesKicker: "Facilities",
      servicesTitle: "Hotel facilities",
      caminoKicker: "Camino de Santiago",
      caminoTitle: "A stop with history on your Camino.",
      caminoP: "Mués is just a few kilometres from Los Arcos, a stage end on the Camino de Santiago. We offer a free transfer from Los Arcos to the hotel.",
      caminoSteps: [
        { t: "Free transfer", d: "From Los Arcos to the hotel. Get in touch to arrange it." },
        { t: "Bike storage", d: "Free for guests travelling by bicycle." },
        { t: "Rest and dinner", d: "Check-in 14:00–21:00; restaurant open 18:00–22:00." }
      ],
      caminoCta: "Arrange your transfer",
      areaKicker: "The area",
      areaTitle: "Discover Navarra",
      areaLead: "If it's your first time in Navarra, these are some of its highlights. Some are close to Mués; others make for a full day trip.",
      groups: [
        { title: "The Camino de Santiago", items: [
          { n: "Camino de Santiago", d: "The Camino Francés crosses Navarra; Los Arcos is a stage end." },
          { n: "Estella-Lizarra", d: "A historic Camino town, rich in Romanesque heritage." },
          { n: "Roncesvalles", d: "At the foot of the Pyrenees, where the Camino Francés enters Navarra." } ] },
        { title: "Towns and heritage", items: [
          { n: "Pamplona / Iruña", d: "Navarra's capital: old town, city walls and San Fermín." },
          { n: "Olite Castle", d: "The Royal Palace of the kings of Navarra." },
          { n: "Tudela", d: "Capital of the Ribera, with its cathedral and market gardens." } ] },
        { title: "Nature", items: [
          { n: "Bardenas Reales", d: "Semi-desert landscape and a UNESCO Biosphere Reserve." },
          { n: "Irati Forest (Selva de Irati)", d: "One of Europe's largest beech and fir forests." },
          { n: "Foces de Lumbier y Arbayún", d: "Gorges carved by the Irati and Salazar rivers." },
          { n: "Baztán Valley", d: "A green Pyrenean valley of stone villages." },
          { n: "Zugarramurdi Caves", d: "A cave steeped in the history and legend of witchcraft." } ] }
      ],
      visitNavarra: "More information on the official Navarra Tourism website",
      galleryNote: "Navarra · photographs from the hotel's current website",
      contactTitle: "Planning your visit?",
      contactP: "Call or email us and we'll help with whatever you need."
    },
    contact: {
      kicker: "Contact",
      title: "We look forward to welcoming you in Mués.",
      lead: "Call or email us with any questions about your stay, the restaurant or the transfer from Los Arcos.",
      phone: "Phone", email: "Email", address: "Address",
      mapLink: "Open in Google Maps",
      accessKicker: "Getting here",
      access: [
        "Between Pamplona, Logroño and Vitoria, close to the Circuito de Navarra.",
        "A few kilometres from Los Arcos, a stage end on the Camino de Santiago. Free transfer for pilgrims.",
        "Free private parking near the hotel and an EV charging point a short distance away.",
        "Check-in 14:00–21:00 · Check-out until 12:00."
      ],
      formTitle: "Send us a message",
      name: "Name", mail: "Email", tel: "Phone", message: "Message",
      consentA: "I have read and accept the ", consentLink: "privacy policy", consentB: ".",
      submit: "Send",
      formNote: "Pressing the button opens your email app with the message ready to send to info@latorrien.es. This page does not store or send any data.",
      errRequired: "Please enter your name, email and message.",
      errConsent: "Please accept the privacy policy to continue.",
      sentTitle: "Thank you for your enquiry!",
      sent: "We've received your message and will get back to you as soon as possible.",
      sending: "Sending…",
      sendError: "We couldn't send your message. Please try again or email us at info@latorrien.es.",
      errEmail: "Please enter a valid email address.",
      mailSubject: "Enquiry from the website",
      bookKicker: "Booking",
      bookP: "Bookings are handled through Booking.com, where you can check availability and rates for your dates.",
      legalKicker: "Legal information"
    },
    reviews: [
      { key: "kristy", text: "“The hotel is beautifully decorated, and the staff so accommodating. It’s a magical little space.”", name: "Kristy", platform: "Booking.com", note: "", url: "reviewsBooking" },
      { key: "hamilton", text: "“This small hotel boutique is exceptional.”", name: "Elizabeth Hamilton · March 2026", platform: "Tripadvisor", note: "", url: "reviewsTripadvisor" },
      { key: "fernando", text: "“We’ll definitely be back — a quiet place to switch off.”", name: "Fernando Martínez", platform: "Google", note: "Translated from Spanish", url: "reviewsGoogle" }
    ],
    ratings: { reviews: "reviews", source: "View on", decimal: "." },
    footer: { tagline: "A rural hotel in a 17th-century country house in Mués, Navarra.", contact: "Contact", explore: "Explore", legal: "Legal", legalNotice: "Legal notice", privacy: "Privacy policy", rights: "© Hotel Rural Latorrién de Ane S.L.", services: "Facilities", camino: "Camino de Santiago", area: "Explore the area" },
    cookie: { text: "This site only stores your language preference and this notice in your browser. It does not use tracking cookies.", ok: "Got it", more: "Privacy policy" },
    mobileBar: { avail: "Check availability", call: "Call" }
  };

  window.LATORRIEN = { links: links, images: images, ratings: ratings, t: { es: es, en: en } };
})();
