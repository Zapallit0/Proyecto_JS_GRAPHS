var DIR = "img/";
var LENGTH_MAIN = 350
var LENGTH_SERVER = 150
var WIDTH_SCALE = 2
var nodes = null;
var edges = null;
var network = null;



function draw() {
  var DIR = "img/";
  nodes = [
    {
        id: 1,
        shape: "image",
        image: DIR + "JCHAVEZ.jpg",
        size:40,
        label: "Aeropuerto \n Jorge Chavez \n Callao",
        shapeProperties: { useImageSize: false },
    },
    { 
        id: 2, 
        shape: "image", 
        image: DIR + "Lima.jpg",
        size:40,
        label:"Distrito \n Lima Metropolitana",
        shapeProperties: { useImageSize: false }, 
    },
    {
      id: 3,
      shape: "image",
      image: DIR + "SanMartindePorres.jpg",
      label: "Distrito \n San Martin de Porres",
      // imagePadding: { left: 2, top: 10, right: 8, bottom: 20 },
      shapeProperties: { useImageSize: false },
      size: 40,

    //   color: {
    //     border: "green",
    //     background: "yellow",
    //     highlight: { border: "yellow", background: "green" },
    //     hover: { border: "orange", background: "grey" },
    //   },
    },
    {
      id: 4,
      shape: "image",
      image: DIR + "LosOlivos.jpg",
      label: "Distrito \n Los Olivos",
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 5, 
      shape: "image",
      image: DIR + "Independencia.jpg",
      label: "Distrito \n Independencia", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 6, shape: "image", 
      image: DIR + "Comas.jpg",
      label: "Distrito \n Comas", 
      shapeProperties: { useImageSize: false },
      size: 40,
       
    },
    { 
      id: 7, shape: "image", 
      image: DIR + "PuentePiedra.jpg" ,
      label: "Distrito \n Puente Piedra", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 8, 
      shape: "image", 
      image: DIR + "Carabayllo.jpg", 
      label: "Distrito \n Carabayllo", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    {
      id: 9,
      shape: "image",
      image: DIR + "Ancon.jpg",
      // label: "useImageSize + imagePadding:15",
      label: "Distrito \n Ancon", 
      shapeProperties: { useImageSize: false },
      size: 40,
      // shapeProperties: { useImageSize: true },
      // imagePadding: 30,
      // color: {
      //   border: "blue",
      //   background: "orange",
      //   highlight: { border: "orange", background: "blue" },
      //   hover: { border: "orange", background: "grey" },
      // },
    },
    { 
      id: 10,
      shape: "image", 
      image: DIR + "SantaRosa.jpg", 
      label: "Distrito \n Santa Rosa", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 11,
      shape: "image",
      image: DIR + "SanJuandeLurigancho.jpg",
      label: "Distrito \n San Juan de Lurigancho", 
      shapeProperties: { useImageSize: false },
      size: 40,
    },
    { 
      id: 12, 
      shape: "image", 
      image: DIR + "Chosica.jpg",
      label: "Distrito \n Chosica", 
      shapeProperties: { useImageSize: false },
      size: 40, },
    { 
      id: 13,
      shape: "image",
      image: DIR + "ElAgustino.jpg", 
      label: "Distrito \n El Agustino", 
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    { id: 14,
      shape: "image",
      image: DIR + "SantaAnita.jpg",
      label: "Distrito \n SantaAnita", 
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 15,
      shape: "image",
      image: DIR + "Ate.jpg",
      label: "Distrito \n Ate",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 16,
      shape: "image",
      image: DIR + "LaMolina.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n La Molina",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 17,
      shape: "image",
      image: DIR + "Cieneguilla.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n Cieneguilla",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 18,
      shape: "image",
      image: DIR + "Rimac.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Rimac",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 19,
      shape: "image",
      image: DIR + "Breña.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Breña",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 20,
      shape: "image",
      image: DIR + "PuebloLibre.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n Pueblo Libre",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 21,
      shape: "image",
      image: DIR + "JesusMaria.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n Jesus Maria",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 22,
      shape: "image",
      image: DIR + "LaVictoria.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n La Victoria",
      shapeProperties: { useImageSize: false },
      size: 40 
      },
    {
      id: 23,
      shape: "image",
      image: DIR + "Lince.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Lince",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 24,
      shape: "image",
      image: DIR + "Magdalena.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Magdalena",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 25,
      shape: "image",
      image: DIR + "SanIsidro.jpg",
       // brokenImage: DIR + "9.png",
      label: "Distrito \n San Isidro",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 26,
      shape: "image",
      image: DIR + "SanBorja.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n  San Borja",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 27,
      shape: "image",
      image: DIR + "Surquillo.jpg",
        // brokenImage: DIR + "9.png",
      label: "Distrito \n Surquillo",
      shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 28,
        shape: "image",
        image: DIR + "Miraflores.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Miraflores",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 29,
        shape: "image",
        image: DIR + "Chaclacayo.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Chaclacayo",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 30,
        shape: "image",
        image: DIR + "Barranco.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Barranco",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 31,
        shape: "image",
        image: DIR + "SantiagodeSurco.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Santiago de Surco",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 32,
        shape: "image",
        image: DIR + "Chorrillos.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Chorrillos", 
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 33,
        shape: "image",
        image: DIR + "SanJuandeMiraflores.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n San Juan de Miraflores",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 34,
        shape: "image",
        image: DIR + "VilladelSalvador.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Villa el Salvador",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 35,
        shape: "image",
        image: DIR + "VillaMariadelTriunfo.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Villa Maria del Triunfo",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 36,
        shape: "image",
        image: DIR + "Pachacamac.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Pachacamac",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 37,
        shape: "image",
        image: DIR + "Lurin.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Lurin",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 38,
        shape: "image",
        image: DIR + "PuntaHermosa.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Punta Hermosa",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 39,
        shape: "image",
        image: DIR + "PuntaNegra.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Punta Negra",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 40,
        shape: "image",
        image: DIR + "SanBartolo.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n San Bartolo",
        shapeProperties: { useImageSize: false },
        size: 40 
    },
    {
        id: 41,
        shape: "image",
        image: DIR + "SantaMariadelMar.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Santa Marira del Mar",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
        id: 42,
        shape: "image",
        image: DIR + "Pucusana.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n Pucusana",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    
    {
        id: 43,
        shape: "image",
        image: DIR + "SanMiguel.jpg",
        // brokenImage: DIR + "9.png",
        label: "Distrito \n San Miguel",
        shapeProperties: { useImageSize: false },
      size: 40 
    },
    {
      id: 44,
      shape: "image",
      image: DIR + "SanLuis.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n San Luis",
      shapeProperties: { useImageSize: false },
      size: 40
  },{
      id: 45,
      shape: "image",
      image: DIR + "Callao.jpg",
      // brokenImage: DIR + "9.png",
      label: "Distrito \n Callao ",
      shapeProperties: { useImageSize: false },
    size: 40 
  },
  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    //Callao=45
    { from: 45, to:1 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 45, to:43 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 45, to:2 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //Los olivos=4
    { from: 4, to: 3 , label: "calle 0 av ",font:{align:"middle"},length:350, width:8},
    { from: 4, to: 6 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 4, to: 7 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 4, to:5 , label: "calle 0 av ",font:{align:"middle"},length:350},

    //Independencia=5
    { from: 5, to: 3 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 5, to: 6 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 5, to: 11 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 5, to:18 , label: "calle 0 av ",font:{align:"middle"},length:350},

    //Comas=6
    { from: 6, to: 7 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 6, to: 8, label: "calle 0 av ",font:{align:"middle"},length:350 },
    { from: 6, to: 11, label: "calle 0 av ",font:{align:"middle"},length:350 },

    //Carabayllo=8
    { from: 8, to:7  , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 8, to: 9 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 8, to: 11, label: "calle 0 av ",font:{align:"middle"},length:350 },
    
    //Ancon=9
    { from: 9, to: 10 , label: "calle 0 av ",font:{align:"middle"},length:350},

    //San Martin de Porres=3
    { from: 3, to:2 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 3, to: 45, label: "calle 0 av ",font:{align:"middle"},length:350 },

    //Rimac=18
    { from: 18, to:11 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 18, to:2, label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //Lima=2
    { from: 2, to:20 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 2, to:22 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 2, to:21 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 2, to:13 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //Pueblo Libre=20
    { from: 20, to:24 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //JesusMaria=21
    { from: 21, to:24 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 21, to:22 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 21, to:23 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 21, to:25 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //San Isidro=25
    { from: 25, to:28 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 25, to:27 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 25, to:26 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 25, to:22 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //Miraflores=28
    { from: 28, to:27 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 28, to:30 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 28, to:31 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //San Borja=26
    { from: 26, to:27 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 26, to:22 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 26, to:31 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 26, to:15 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //Santiago de Surco=31
    { from: 31, to:30 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 31, to:32 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 31, to:15 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 31, to:16 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 31, to:33 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //Chorrillos=32
    { from: 32, to:33 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 31, to:34 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //San juan de miraflores=33
    { from: 33, to:16 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 33, to:35 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 31, to:34 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //Villa maria del triunfo=35
    { from: 35, to:34 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 35, to:16 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 35, to:36 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 35, to:37 , label: "calle 0 av ",font:{align:"middle"},length:350},
    
    //Villa el Salvador=34
    { from: 34, to:37 , label: "calle 0 av ",font:{align:"middle"},length:350},
    //Pachacamac=36
    { from: 36, to:16 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 36, to:17 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 36, to:37 , label: "calle 0 av ",font:{align:"middle"},length:350},
    { from: 36, to:15 , label: "calle 0 av ",font:{align:"middle"},length:350},
    //Lurin=37
    { from: 37, to:38 , label: "calle 0 av ",font:{align:"middle"},length:350},
    //PuntaHermosa=38
    { from: 38, to:39 , label: "calle 0 av ",font:{align:"middle"},length:350},
    //PuntaNegra=39
    { from: 39, to:40 , label: "calle 0 av ",font:{align:"middle"},length:350},
    //San Bartolo=40
    { from: 40, to:41 , label: "calle 0 av ",font:{align:"middle"},length:350},





    // { from: 12, to: 13 },
    // { from: 13, to: 14 },
    // { from: 9, to: 16 },
  ];

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
      size: 100,
      color: {
        border: "white",
        background: "black",
        highlight: {
          border: "black",
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
      color: "lightgray",
    },
  };
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});

// const obtenerInformacion= (materia)=>{
//   Distritos={
//       fisica:["Marta","pedro","cofla","maria","yo"],
//       programacion:["calle 0 av ","pedro","juan","yo"],
//       logica:["Roberto","pedro","juan","cofla","maria","yo"],
//       quimica:["Perez","juan","cofla","maria","yo"]
//   }
//   if (materias[materia]!==undefined) {
//       return [materia,materias[materia],materias]
//   }
//   else{
//       return materias
//   }
// }
