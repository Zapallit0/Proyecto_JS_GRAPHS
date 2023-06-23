var DIR = "img/";
var LENGTH_MAIN = 500
var LENGTH_SERVER = 150
var WIDTH_SCALE = 2
var nodes = null;
var edges = null;
var network = null;



function draw1() {
  var DIR = "img/";
  nodes =
  [
    {
        id: 1,
        shape: "circularImage",
        image: DIR + "JCHAVEZ.jpg",
        size:40,
        label: "Aeropuerto \n Jorge Chavez \n Callao",
        shapeProperties: { useImageSize: false },
    },
    { 
        id: 2, 
        shape: "circularImage", 
        image: DIR + "Lima.jpg",
        size:40,
        label:"Distrito \n Lima Metropolitana",
        shapeProperties: { useImageSize: false }, 
    },
    {
      id: 3,
      shape: "circularImage",
      image: DIR + "SanMartindePorres.jpg",
      label: "Distrito \n San Martin de Porres",
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    {
      id: 4,
      shape: "circularImage",
      image: DIR + "LosOlivos.jpg",
      label: "Distrito \n Los Olivos",
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 5, 
      shape: "circularImage",
      image: DIR + "Independencia.jpg",
      label: "Distrito \n Independencia", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 6, shape: "circularImage", 
      image: DIR + "Comas.jpg",
      label: "Distrito \n Comas", 
      shapeProperties: { useImageSize: false },
      size: 40,
       
    },
    { 
      id: 7, shape: "circularImage", 
      image: DIR + "PuentePiedra.jpg" ,
      label: "Distrito \n Puente Piedra", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 8, 
      shape: "circularImage", 
      image: DIR + "Carabayllo.jpg", 
      label: "Distrito \n Carabayllo", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    {
      id: 9,
      shape: "circularImage",
      image: DIR + "Ancon.jpg",
      // label: "useImageSize + imagePadding:15",
      label: "Distrito \n Ancon", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 10,
      shape: "circularImage", 
      image: DIR + "SantaRosa.jpg", 
      label: "Distrito \n Santa Rosa", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 11,
      shape: "circularImage",
      image: DIR + "SanJuandeLurigancho.jpg",
      label: "Distrito \n San Juan de Lurigancho", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 12, 
      shape: "circularImage", 
      image: DIR + "Chosica.jpg",
      label: "Distrito \n Chosica", 
      shapeProperties: { useImageSize: false },
      size: 40, },
    { 
      id: 13,
      shape: "circularImage",
      image: DIR + "ElAgustino.jpg", 
      label: "Distrito \n El Agustino", 
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    { id: 14,
      shape: "circularImage",
      image: DIR + "SantaAnita.jpg",
      label: "Distrito \n SantaAnita", 
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 15,
      shape: "circularImage",
      image: DIR + "Ate.jpg",
      label: "Distrito \n Ate",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 16,
      shape: "circularImage",
      image: DIR + "LaMolina.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n La Molina",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 17,
      shape: "circularImage",
      image: DIR + "Cieneguilla.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n Cieneguilla",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 18,
      shape: "circularImage",
      image: DIR + "Rimac.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Rimac",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 19,
      shape: "circularImage",
      image: DIR + "Breña.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Breña",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 20,
      shape: "circularImage",
      image: DIR + "PuebloLibre.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n Pueblo Libre",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 21,
      shape: "circularImage",
      image: DIR + "JesusMaria.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n Jesus Maria",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 22,
      shape: "circularImage",
      image: DIR + "LaVictoria.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n La Victoria",
      shapeProperties: { useImageSize: false },
      size: 40 
      },
    {
      id: 23,
      shape: "circularImage",
      image: DIR + "Lince.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Lince",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 24,
      shape: "circularImage",
      image: DIR + "Magdalena.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Magdalena",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 25,
      shape: "circularImage",
      image: DIR + "SanIsidro.jpg",
       // brokenImage: DIR + "9.png",
      label: "Distrito \n San Isidro",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 26,
      shape: "circularImage",
      image: DIR + "SanBorja.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n  San Borja",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 27,
      shape: "circularImage",
      image: DIR + "Surquillo.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n Surquillo",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 28,
        shape: "circularImage",
        image: DIR + "Miraflores.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Miraflores",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 29,
        shape: "circularImage",
        image: DIR + "Chaclacayo.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Chaclacayo",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 30,
        shape: "circularImage",
        image: DIR + "Barranco.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Barranco",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 31,
        shape: "circularImage",
        image: DIR + "SantiagodeSurco.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Santiago de Surco",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 32,
        shape: "circularImage",
        image: DIR + "Chorrillos.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Chorrillos", 
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 33,
        shape: "circularImage",
        image: DIR + "SanJuandeMiraflores.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n San Juan de Miraflores",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 34,
        shape: "circularImage",
        image: DIR + "VilladelSalvador.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Villa el Salvador",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 35,
        shape: "circularImage",
        image: DIR + "VillaMariadelTriunfo.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Villa Maria del Triunfo",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 36,
        shape: "circularImage",
        image: DIR + "Pachacamac.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Pachacamac",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 37,
        shape: "circularImage",
        image: DIR + "Lurin.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Lurin",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 38,
        shape: "circularImage",
        image: DIR + "PuntaHermosa.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Punta Hermosa",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 39,
        shape: "circularImage",
        image: DIR + "PuntaNegra.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Punta Negra",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 40,
        shape: "circularImage",
        image: DIR + "SanBartolo.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n San Bartolo",
        shapeProperties: { useImageSize: false },
        size: 40 
    },
    {
        id: 41,
        shape: "circularImage",
        image: DIR + "SantaMariadelMar.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Santa Marira del Mar",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 42,
        shape: "circularImage",
        image: DIR + "Pucusana.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Pucusana",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    
    {
        id: 43,
        shape: "circularImage",
        image: DIR + "SanMiguel.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n San Miguel",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 44,
      shape: "circularImage",
      image: DIR + "SanLuis.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n San Luis",
      shapeProperties: { useImageSize: false },
      size: 40
  },{
      id: 45,
      shape: "circularImage",
      image: DIR + "Callao.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Callao ",
      shapeProperties: { useImageSize: false },
    size: 40 
  },
  ];
  edges = [//Callao=45
  { from: 45, to:1 , label: "--> ",font:{align:"middle"},length:500},
  { from: 1, to:45 , label: "--> ",font:{align:"middle"},length:500},
  { from: 45, to:43 , label: "--> ",font:{align:"middle"},length:500},
  { from: 43, to:45 , label: "--> ",font:{align:"middle"},length:500},
  { from: 45, to:2 , label: "--> ",font:{align:"middle"},length:500},
  { from: 2, to:45 , label: "--> ",font:{align:"middle"},length:500},
  
  //Los olivos=4
  { from: 4, to: 3 , label: "--> ",font:{align:"middle"},length:500},
  { from: 3, to: 4 , label: "--> ",font:{align:"middle"},length:500},
  { from: 4, to: 6 , label: "--> ",font:{align:"middle"},length:500},
  { from: 6, to: 4 , label: "--> ",font:{align:"middle"},length:500},
  { from: 4, to: 7 , label: "--> ",font:{align:"middle"},length:500},
  { from: 7, to: 4 , label: "--> ",font:{align:"middle"},length:500},
  { from: 4, to:5 , label: "--> ",font:{align:"middle"},length:500},
  { from: 5, to: 4 , label: "--> ",font:{align:"middle"},length:500},

  //Independencia=5
  { from: 5, to: 3 , label: "--> ",font:{align:"middle"},length:500},
  { from: 5, to: 6 , label: "--> ",font:{align:"middle"},length:500},
  { from: 5, to: 11 , label: "--> ",font:{align:"middle"},length:500},
  { from: 5, to:18 , label: "--> ",font:{align:"middle"},length:500},

  //Comas=6
  { from: 6, to: 7 , label: "--> ",font:{align:"middle"},length:500},
  { from: 7, to: 6 , label: "--> ",font:{align:"middle"},length:500},
  { from: 6, to: 8, label: "--> ",font:{align:"middle"},length:500 },
  { from: 8, to: 6 , label: "--> ",font:{align:"middle"},length:500},
  { from: 6, to: 11, label: "--> ",font:{align:"middle"},length:500 },
  { from: 11, to: 6 , label: "--> ",font:{align:"middle"},length:500},

  //Carabayllo=8
  { from: 8, to:7  , label: "--> ",font:{align:"middle"},length:500},
  { from: 7, to: 8 , label: "--> ",font:{align:"middle"},length:500},
  { from: 8, to: 9 , label: "--> ",font:{align:"middle"},length:500},
  { from: 9, to: 8 , label: "--> ",font:{align:"middle"},length:500},
  { from: 8, to: 11, label: "--> ",font:{align:"middle"},length:500 },
  { from: 11, to: 8 , label: "--> ",font:{align:"middle"},length:500},
  
  //Ancon=9
  { from: 9, to: 10 , label: "--> ",font:{align:"middle"},length:500},
  { from: 10, to: 9 , label: "--> ",font:{align:"middle"},length:500},

  //San Martin de Porres=3
  { from: 3, to:2 , label: "--> ",font:{align:"middle"},length:500},
  { from: 2, to: 3 , label: "--> ",font:{align:"middle"},length:500},
  { from: 3, to: 45, label: "--> ",font:{align:"middle"},length:500 },
  { from: 45, to: 3 , label: "--> ",font:{align:"middle"},length:500},

  //Rimac=18
  { from: 18, to:11 , label: "--> ",font:{align:"middle"},length:500},
  { from: 11, to: 18 , label: "--> ",font:{align:"middle"},length:500},
  { from: 18, to:2, label: "--> ",font:{align:"middle"},length:500},
  { from: 2, to: 18 , label: "--> ",font:{align:"middle"},length:500},
  
  //Lima=2
  { from: 2, to:20 , label: "--> ",font:{align:"middle"},length:500},
  { from: 20, to: 2, label: "--> ",font:{align:"middle"},length:500},
  { from: 2, to:22 , label: "--> ",font:{align:"middle"},length:500},
  { from: 22, to: 2 , label: "--> ",font:{align:"middle"},length:500},
  { from: 2, to:21 , label: "--> ",font:{align:"middle"},length:500},
  { from: 21, to: 2 , label: "--> ",font:{align:"middle"},length:500},
  { from: 2, to:13 , label: "--> ",font:{align:"middle"},length:500},
  { from: 13, to: 2 , label: "--> ",font:{align:"middle"},length:500},
  { from: 2, to:19 , label: "--> ",font:{align:"middle"},length:500},
  { from: 19, to: 2 , label: "--> ",font:{align:"middle"},length:500},
  { from: 2, to:21 , label: "--> ",font:{align:"middle"},length:500},
  { from: 21, to: 2 , label: "--> ",font:{align:"middle"},length:500},

  
  //Pueblo Libre=20
  { from: 20, to:24 , label: "--> ",font:{align:"middle"},length:500},
  { from: 24, to:20 , label: "--> ",font:{align:"middle"},length:500},
  
  //JesusMaria=21
  { from: 21, to:24 , label: "--> ",font:{align:"middle"},length:500},
  { from: 24, to: 21 , label: "--> ",font:{align:"middle"},length:500},
  { from: 21, to:22 , label: "--> ",font:{align:"middle"},length:500},
  { from: 22, to:21 , label: "--> ",font:{align:"middle"},length:500},
  { from: 21, to:23 , label: "--> ",font:{align:"middle"},length:500},
  { from: 23, to:21 , label: "--> ",font:{align:"middle"},length:500},
  { from: 21, to:25 , label: "--> ",font:{align:"middle"},length:500},
  { from: 25, to: 21 , label: "--> ",font:{align:"middle"},length:500},
  
  //San Isidro=25
  { from: 25, to:28 , label: "--> ",font:{align:"middle"},length:500},
  { from: 28, to:25 , label: "--> ",font:{align:"middle"},length:500},
  { from: 25, to:27 , label: "--> ",font:{align:"middle"},length:500},
  { from: 27, to:25 , label: "--> ",font:{align:"middle"},length:500},
  { from: 25, to:26 , label: "--> ",font:{align:"middle"},length:500},
  { from: 26, to:25 , label: "--> ",font:{align:"middle"},length:500},
  { from: 25, to:22 , label: "--> ",font:{align:"middle"},length:500},
  { from: 22, to:25 , label: "--> ",font:{align:"middle"},length:500},
  
  //Miraflores=28
  { from: 28, to:27 , label: "--> ",font:{align:"middle"},length:500},
  { from: 27, to:28 , label: "--> ",font:{align:"middle"},length:500},
  { from: 28, to:30 , label: "--> ",font:{align:"middle"},length:500},
  { from: 30, to:28 , label: "--> ",font:{align:"middle"},length:500},
  { from: 28, to:31 , label: "--> ",font:{align:"middle"},length:500},
  { from: 31, to:28 , label: "--> ",font:{align:"middle"},length:500},
  
  //San Borja=26
  { from: 26, to:27 , label: "--> ",font:{align:"middle"},length:500},
  { from: 27, to:26 , label: "--> ",font:{align:"middle"},length:500},
  { from: 26, to:22 , label: "--> ",font:{align:"middle"},length:500},
  { from: 22, to:26 , label: "--> ",font:{align:"middle"},length:500},
  { from: 26, to:31 , label: "--> ",font:{align:"middle"},length:500},
  { from: 31, to:26 , label: "--> ",font:{align:"middle"},length:500},
  { from: 26, to:15 , label: "--> ",font:{align:"middle"},length:500},
  { from: 15, to:26 , label: "--> ",font:{align:"middle"},length:500},
  
  //Santiago de Surco=31
  { from: 31, to:30 , label: "--> ",font:{align:"middle"},length:500},
  { from: 30, to:31 , label: "--> ",font:{align:"middle"},length:500},
  { from: 31, to:32 , label: "--> ",font:{align:"middle"},length:500},
  { from: 32, to:31 , label: "--> ",font:{align:"middle"},length:500},
  { from: 31, to:15 , label: "--> ",font:{align:"middle"},length:500},
  { from: 15, to:31 , label: "--> ",font:{align:"middle"},length:500},
  { from: 31, to:16 , label: "--> ",font:{align:"middle"},length:500},
  { from: 16, to:31 , label: "--> ",font:{align:"middle"},length:500},
  { from: 31, to:33 , label: "--> ",font:{align:"middle"},length:500},
  { from: 23, to:31 , label: "--> ",font:{align:"middle"},length:500},

  //Chorrillos=32
  { from: 32, to:33 , label: "--> ",font:{align:"middle"},length:500},
  { from: 33, to:32 , label: "--> ",font:{align:"middle"},length:500},
  { from: 31, to:34 , label: "--> ",font:{align:"middle"},length:500},
  { from: 34, to:31 , label: "--> ",font:{align:"middle"},length:500},
  
  //San juan de miraflores=33
  { from: 33, to:16 , label: "--> ",font:{align:"middle"},length:500},
  { from: 16, to:33 , label: "--> ",font:{align:"middle"},length:500},
  { from: 33, to:35 , label: "--> ",font:{align:"middle"},length:500},
  { from: 35, to:33 , label: "--> ",font:{align:"middle"},length:500},
  { from: 31, to:34 , label: "--> ",font:{align:"middle"},length:500},
  { from: 34, to:31 , label: "--> ",font:{align:"middle"},length:500},
  
  //Villa maria del triunfo=35
  { from: 35, to:34 , label: "--> ",font:{align:"middle"},length:500},
  { from: 34, to:35 , label: "--> ",font:{align:"middle"},length:500},
  { from: 35, to:16 , label: "--> ",font:{align:"middle"},length:500},
  { from: 16, to:35 , label: "--> ",font:{align:"middle"},length:500},
  { from: 35, to:36 , label: "--> ",font:{align:"middle"},length:500},
  { from: 36, to:35 , label: "--> ",font:{align:"middle"},length:500},
  { from: 35, to:37 , label: "--> ",font:{align:"middle"},length:500},
  { from: 37, to:35 , label: "--> ",font:{align:"middle"},length:500},
  
  //Villa el Salvador=34
  { from: 34, to:37 , label: "--> ",font:{align:"middle"},length:500},
  { from: 37, to:34 , label: "--> ",font:{align:"middle"},length:500},
  //Pachacamac=36
  { from: 36, to:16 , label: "--> ",font:{align:"middle"},length:500},
  { from: 16, to:36 , label: "--> ",font:{align:"middle"},length:500},
  { from: 36, to:17 , label: "--> ",font:{align:"middle"},length:500},
  { from: 17, to:36 , label: "--> ",font:{align:"middle"},length:500},
  { from: 36, to:37 , label: "--> ",font:{align:"middle"},length:500},
  { from: 37, to:36 , label: "--> ",font:{align:"middle"},length:500},
  { from: 36, to:15 , label: "--> ",font:{align:"middle"},length:500},
  { from: 15, to:36 , label: "--> ",font:{align:"middle"},length:500},

  //Lurin=37
  { from: 37, to:38 , label: "--> ",font:{align:"middle"},length:500},
  { from: 38, to:37 , label: "--> ",font:{align:"middle"},length:500},

  //PuntaHermosa=38
  { from: 38, to:39 , label: "--> ",font:{align:"middle"},length:500},
  { from: 39, to:38 , label: "--> ",font:{align:"middle"},length:500},

  //PuntaNegra=39
  { from: 39, to:40 , label: "--> ",font:{align:"middle"},length:500},
  { from: 40, to:39 , label: "--> ",font:{align:"middle"},length:500},

  //San Bartolo=40
  { from: 40, to:41 , label: "--> ",font:{align:"middle"},length:500},
  { from: 41, to:40 , label: "--> ",font:{align:"middle"},length:500},

  //Pucusana=42
  { from: 42, to:41, label: "--> ",font:{align:"middle"},length:500},
  { from: 41, to:42 , label: "--> ",font:{align:"middle"},length:500},

  //Chaclacayo=29
  { from: 29, to: 17, label: "--> ",font:{align:"middle"},length:500},
  { from: 17, to:29 , label: "--> ",font:{align:"middle"},length:500},
  { from: 29, to:15 , label: "--> ",font:{align:"middle"},length:500},
  { from: 15, to:29 , label: "--> ",font:{align:"middle"},length:500},
  { from: 29, to:12 , label: "--> ",font:{align:"middle"},length:500},
  { from: 12, to:29 , label: "--> ",font:{align:"middle"},length:500},
  
  //Chosica=12
  { from: 12, to:11 , label: "--> ",font:{align:"middle"},length:500},
  { from: 11, to:12 , label: "--> ",font:{align:"middle"},length:500},
  { from: 12, to:15 , label: "--> ",font:{align:"middle"},length:500},
  { from: 15, to:12 , label: "--> ",font:{align:"middle"},length:500},

  //La molina=16
  { from: 16, to:15 , label: "--> ",font:{align:"middle"},length:500},
  { from: 15, to:16 , label: "--> ",font:{align:"middle"},length:500},

  //Santa Anita=14
  { from: 14, to:13 , label: "--> ",font:{align:"middle"},length:500},
  { from: 13, to:14 , label: "--> ",font:{align:"middle"},length:500},
  { from: 14, to:15 , label: "--> ",font:{align:"middle"},length:500},
  { from: 15, to:14 , label: "--> ",font:{align:"middle"},length:500},

  //SAN LUIS=44
  { from: 44, to:13 , label: "--> ",font:{align:"middle"},length:500},
  { from: 13, to:44 , label: "--> ",font:{align:"middle"},length:500},
  { from: 44, to:26 , label: "--> ",font:{align:"middle"},length:500},
  { from: 26, to:44 , label: "--> ",font:{align:"middle"},length:500},
  { from: 44, to:15 , label: "--> ",font:{align:"middle"},length:500},
  { from: 15, to:44 , label: "--> ",font:{align:"middle"},length:500},
  { from: 44, to:22 , label: "--> ",font:{align:"middle"},length:500},
  { from: 22, to:44 , label: "--> ",font:{align:"middle"},length:500},
]

  // create a network
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    nodes: {
      length: LENGTH_MAIN,
      width: WIDTH_SCALE * 6,
      borderWidth: 2,
      borderWidthSelected: 8,
      size: 200,
      color: {
        border: "white",
        background: "red",
        highlight: {
          border: "yellow",
          background: "white",
        },
        hover: {
          border: "orange",
          background: "grey",
        },
      },
      font: { color: "#eeeeee" },
      shapeProperties: {
        useBorderWithImage: true,
      },
    },
    edges: {
      color: "#FF90BB",
    },
  };
  network = new vis.Network(container, data, options);
}
window.addEventListener("load", () => {
  draw1();
});

function redirectToAnotherPage() {
  // Redirigir a la página deseada
  window.location.href = "YourRoute.html";
}
