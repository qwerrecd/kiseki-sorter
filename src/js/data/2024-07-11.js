dataSetVersion = "2024-07-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "Game",
    tooltip: "Check this to restrict characters from certain Game.",
    checked: false,
    sub: [
      { name: "Sora no Kiseki", key: "Sora" },
      { name: "Zero/Ao no Kiseki", key: "Crossbell" },
      { name: "Sen no Kiseki", key: "Sen" },
      { name: "Hajimari no Kiseki", key: "Hajimari" },
      { name: "Kuro no Kiseki", key: "Kuro" },
    ],
  },
  {
    name: "Remove Non-Playable Characters",
    key: "NPC",
    tooltip: "Check this to remove NPC characters.",
    checked: false,
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters.",
    checked: false,
  },
  {
    name: "Remove Non-Boys",
    key: "notboy",
    tooltip: "Check this to remove all non-male characters.",
    checked: false,
  },
];

dataSet[dataSetVersion].characterData = [
  //Sora
  {
    name: "Estelle",
    img: "https://i.ibb.co/pXtLbt1/estelle.jpg",
    opts: {
      Game: ["Sora", "Sen"],
      notboy: true,
    },
  },
  {
    name: "Joshua Bright",
    img: "https://i.ibb.co/vY3J5Jk/joshua.jpg",
    opts: {
      Game: ["Sora"],
      notgirl: true,
    },
  },
  {
    name: "Olivier",
    img: "https://i.ibb.co/mbqyfSw/Olivier.jpg",
    opts: {
      Game: ["Sora", "Sen"],
      notgirl: true,
    },
  },
  {
    name: "Agate",
    img: "https://i.ibb.co/Hz0Yww0/agate.jpg",
    opts: {
      Game: ["Sora", "Sen"],
      notgirl: true,
    },
  },
  {
    name: "Klaudia",
    img: "https://i.ibb.co/K75vf2P/Klaudia.jpg",
    opts: {
      Game: ["Sora"],
      notboy: true,
    },
  },
  {
    name: "Schera",
    img: "https://i.ibb.co/WsX9Xjf/Schera.jpg",
    opts: {
      Game: ["Sora"],
      notboy: true,
    },
  },
  {
    name: "Tita",
    img: "https://i.ibb.co/xh2Zm4L/Tita.jpg",
    opts: {
      Game: ["Sora", "Sen"],
      notboy: true,
    },
  },
  {
    name: "Zin",
    img: "https://i.ibb.co/FqvZQW9/Zin.jpg",
    opts: {
      Game: ["Sora"],
      notgirl: true,
    },
  },
  {
    name: "Alan",
    img: "https://i.ibb.co/k0x2R8P/Alan.jpg",
    opts: {
      Game: ["Sora"],
      notgirl: true,
    },
  },
  {
    name: "Anelace",
    img: "https://i.ibb.co/Fq1fH8j/Anelace.jpg",
    opts: {
      Game: ["Sora"],
      notboy: true,
    },
  },
  {
    name: "Josette",
    img: "https://i.ibb.co/ZLFpBSH/Josette.jpg",
    opts: {
      Game: ["Sora"],
      notboy: true,
    },
  },
  {
    name: "Julia",
    img: "https://i.ibb.co/6RftFD0/Julia.jpg",
    opts: {
      Game: ["Sora"],
      notboy: true,
    },
  },
  {
    name: "Kevin",
    img: "https://i.ibb.co/cJPWPGT/Kevin.jpg",
    opts: {
      Game: ["Sora"],
      notgirl: true,
    },
  },
  {
    name: "Mueller",
    img: "https://i.ibb.co/jkL0YcP/Mueller.jpg",
    opts: {
      Game: ["Sora"],
      notgirl: true,
    },
  },
  {
    name: "Renne",
    img: "https://i.ibb.co/Hgcbz3d/Renne.jpg",
    opts: {
      Game: ["Sora", "Crossbell", "Hajimari", "Kuro"],
      notboy: true,
    },
  },
  {
    name: "Ries",
    img: "https://i.ibb.co/GWJw7Q7/Ries.jpg",
    opts: {
      Game: ["Sora"],
      notboy: true,
    },
  },
  {
    name: "Campanella",
    img: "https://i.ibb.co/sQqdsTN/Campanella.png",
    opts: {
      Game: ["Sora"],
      notgirl: true,
      NPC: true,
    },
  },
  {
    name: "Loewe",
    img: "https://i.ibb.co/S6r80NX/Loewe.webp",
    opts: {
      Game: ["Sora"],
      notgirl: true,
      NPC: true,
    },
  },
  {
    name: "Novartis",
    img: "https://i.ibb.co/F5PdQMR/Novartis.webp",
    opts: {
      Game: ["Sora"],
      notgirl: true,
      NPC: true,
    },
  },
  {
    name: "Weissman",
    img: "https://i.ibb.co/hgQPWSZ/Weissman.webp",
    opts: {
      Game: ["Sora"],
      notgirl: true,
      NPC: true,
    },
  },
  {
    name: "Bleublanc",
    img: "https://i.ibb.co/d61xmKh/Bleublanc.webp",
    opts: {
      Game: ["Sora"],
      notgirl: true,
      NPC: true,
    },
  },
  {
    name: "Walter",
    img: "https://i.ibb.co/VNbThxY/Walter.webp",
    opts: {
      Game: ["Sora", "Kuro"],
      notgirl: true,
    },
  },
  {
    name: "Luciola",
    img: "https://i.ibb.co/D8pW5pC/Luciola.webp",
    opts: {
      Game: ["Sora"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Ein",
    img: "https://i.ibb.co/bBf3B9r/Ein.webp",
    opts: {
      Game: ["Sora"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Lloyd",
    img: "https://i.ibb.co/Bgg2jrp/Lloyd.jpg",
    opts: {
      Game: ["Crossbell"],
      notgirl: true,
    },
  },
  {
    name: "Elie",
    img: "https://i.ibb.co/Nn8vcvN/Elie.jpg",
    opts: {
      Game: ["Crossbell"],
      notboy: true,
    },
  },
  {
    name: "Tio",
    img: "https://i.ibb.co/4TQ3dyC/Tio.jpg",
    opts: {
      Game: ["Crossbell"],
      notboy: true,
    },
  },
  {
    name: "Randy",
    img: "https://i.ibb.co/5nm880X/Randy.jpg",
    opts: {
      Game: ["Crossbell"],
      notgirl: true,
    },
  },
  {
    name: "Noel",
    img: "https://i.ibb.co/HrWsxNF/Noel.jpg",
    opts: {
      Game: ["Crossbell"],
      notboy: true,
    },
  },
  {
    name: "Fran",
    img: "https://i.ibb.co/k25ZYCJ/Fran.png",
    opts: {
      Game: ["Crossbell"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Wazy",
    img: "https://i.ibb.co/McF7qwz/Wazy.jpg",
    opts: {
      Game: ["Crossbell"],
      notgirl: true,
    },
  },
  {
    name: "Alex",
    img: "https://i.ibb.co/BKwPLrX/Alex.jpg",
    opts: {
      Game: ["Crossbell"],
      notgirl: true,
    },
  },
  {
    name: "Rixia",
    img: "https://i.ibb.co/NyTpnQ2/Rixia.jpg",
    opts: {
      Game: ["Crossbell"],
      notboy: true,
    },
  },
  {
    name: "Arios",
    img: "https://i.ibb.co/vmxvnbq/Arios.jpg",
    opts: {
      Game: ["Crossbell"],
      notgirl: true,
    },
  },
  {
    name: "Arianrhod",
    img: "https://i.ibb.co/qMD1XqF/Arianrhod.webp",
    opts: {
      Game: ["Crossbell"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Mariabell",
    img: "https://i.ibb.co/zfCh30x/Mariabell.webp",
    opts: {
      Game: ["Crossbell"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Shirley",
    img: "https://i.ibb.co/64H8jm0/Shirley.webp",
    opts: {
      Game: ["Crossbell"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Wald",
    img: "https://i.ibb.co/fHtnmDJ/Wald.webp",
    opts: {
      Game: ["Crossbell"],
      notgirl: true,
      NPC: true,
    },
  },
  {
    name: "Abbas",
    img: "https://i.ibb.co/ygvP0Wy/Abbas.webp",
    opts: {
      Game: ["Crossbell"],
      notgirl: true,
      NPC: true,
    },
  },
  {
    name: "Fie",
    img: "https://i.ibb.co/C9kPKfk/Fie.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Gaius",
    img: "https://i.ibb.co/HCtqj40/Gaius.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "George",
    img: "https://i.ibb.co/mBMzdrd/George.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Ines",
    img: "https://i.ibb.co/Lv0zNf5/Ines.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Juna",
    img: "https://i.ibb.co/BgZ4nt4/Juna.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Jusis",
    img: "https://i.ibb.co/NKByq99/Jusis.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "KeA",
    img: "https://i.ibb.co/j6qzL0s/KeA.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Kurt",
    img: "https://i.ibb.co/CHhSFgQ/Kurt.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Laura",
    img: "https://i.ibb.co/G07LM8v/Laura.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Lechter",
    img: "https://i.ibb.co/749TrcV/Lechter.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Machias",
    img: "https://i.ibb.co/HrpzqWs/Machias.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Musse",
    img: "https://i.ibb.co/Hq9fdnq/Musse.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Rean",
    img: "https://i.ibb.co/qgdncs7/Rean.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Roselia",
    img: "https://i.ibb.co/wLNkVmq/Roselia.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Sara",
    img: "https://i.ibb.co/qdxpthd/Sara.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Sharon",
    img: "https://i.ibb.co/p3tTY9K/Sharo.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Toval",
    img: "https://i.ibb.co/L0sXG6H/Toval.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Towa",
    img: "https://i.ibb.co/yFMq6ZG/Towa.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Victor",
    img: "https://i.ibb.co/fSp8JxB/Victor.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Vita",
    img: "https://i.ibb.co/kXgL6SQ/Vita.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Alfin",
    img: "https://i.ibb.co/2Yb3H58/Alfin.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Alisa",
    img: "https://i.ibb.co/tKhFY4b/Alisa.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Altina",
    img: "https://i.ibb.co/LCMpfLs/Altina.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Angelica",
    img: "https://i.ibb.co/sy3hncv/Angelica.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Ash",
    img: "https://i.ibb.co/vkvR6JQ/Ash.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Aurelia",
    img: "https://i.ibb.co/T8nb6mn/Aurelia.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Celine",
    img: "https://i.ibb.co/C9Ytdtf/Celine.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Claire",
    img: "https://i.ibb.co/L0tgrqK/Claire.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Crow",
    img: "https://i.ibb.co/JQRsLTx/Crow.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Duvalie",
    img: "https://i.ibb.co/Pgws9xB/Duvalie.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Elise",
    img: "https://i.ibb.co/MZqfvmb/Elise.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Elliot",
    img: "https://i.ibb.co/j8mxf9m/Elliot.jpg",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Emma",
    img: "https://i.ibb.co/d5V2phw/Emma.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "Ennea",
    img: "https://i.ibb.co/d49CStJ/Ennea.jpg",
    opts: {
      Game: ["Sen"],
      notboy: true,
    },
  },
  {
    name: "McBurn",
    img: "https://i.ibb.co/s6Kg6d7/McBurn.png",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Xeno",
    img: "https://i.ibb.co/LQNd496/Xeno.png",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Leo",
    img: "https://i.ibb.co/q7nh8rz/Leonidas.png",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Cedric",
    img: "https://i.ibb.co/JFPLfF0/Cedric.png",
    opts: {
      Game: ["Sen"],
      notgirl: true,
    },
  },
  {
    name: "Scarlet",
    img: "https://i.ibb.co/y8G1xp8/Scarlet.png",
    opts: {
      Game: ["Sora"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Rosine",
    img: "https://i.ibb.co/Z8hZ64r/Rosine.png",
    opts: {
      Game: ["Sora"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Thomas",
    img: "https://i.ibb.co/3B3SKvW/Thomas.png",
    opts: {
      Game: ["Sora"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "C",
    img: "https://i.ibb.co/R3qmJ4Y/C.jpg",
    opts: {
      Game: ["Hajimari"],
      notgirl: true,
    },
  },
  {
    name: "Nadia",
    img: "https://i.ibb.co/QdfJBP6/Nadia.jpg",
    opts: {
      Game: ["Hajimari"],
      notboy: true,
    },
  },
  {
    name: "Swin",
    img: "https://i.ibb.co/1rRpnB2/Swin.jpg",
    opts: {
      Game: ["Hajimari"],
      notgirl: true,
    },
  },
  {
    name: "Lapis",
    img: "https://i.ibb.co/VD57zz0/Lapis.jpg",
    opts: {
      Game: ["Hajimari"],
      notboy: true,
    },
  },

  {
    name: "Bergard",
    img: "https://i.ibb.co/4MVxbwK/Bergard.jpg",
    opts: {
      Game: ["Kuro"],
      notgirl: true,
    },
  },
  {
    name: "Feri",
    img: "https://i.ibb.co/7zfNJQg/Feri.jpg",
    opts: {
      Game: ["Kuro"],
      notboy: true,
    },
  },
  {
    name: "Judith",
    img: "https://i.ibb.co/ZGnXF89/Judith.jpg",
    opts: {
      Game: ["Kuro"],
      notboy: true,
    },
  },
  {
    name: "Quatre",
    img: "https://i.ibb.co/Vvpnt9k/Quatre.jpg",
    opts: {
      Game: ["Kuro"],
      notgirl: true,
    },
  },
  {
    name: "Risette",
    img: "https://i.ibb.co/6B8jyKY/Risette.jpg",
    opts: {
      Game: ["Kuro"],
      notboy: true,
    },
  },
  {
    name: "Shizuna",
    img: "https://i.ibb.co/b7gdQ1n/Shizuna.jpg",
    opts: {
      Game: ["Kuro"],
      notboy: true,
    },
  },
  {
    name: "Van",
    img: "https://i.ibb.co/dPKvxGM/Van.jpg",
    opts: {
      Game: ["Kuro"],
      notgirl: true,
    },
  },
  {
    name: "Aaron",
    img: "https://i.ibb.co/jDBSt14/Aaron.jpg",
    opts: {
      Game: ["Kuro"],
      notgirl: true,
    },
  },
  {
    name: "Agnes",
    img: "https://i.ibb.co/zmW1nqp/Agnes.jpg",
    opts: {
      Game: ["Kuro"],
      notboy: true,
    },
  },
  {
    name: "Elaine",
    img: "https://i.ibb.co/c1td5c2/Elaine.png",
    opts: {
      Game: ["Kuro"],
      notboy: true,
    },
  },
  {
    name: "Harwood",
    img: "https://i.ibb.co/y0Z6Fw4/Harwood.png",
    opts: {
      Game: ["Kuro"],
      notgirl: true,
      NPC: true,
    },
  },
  {
    name: "Lucrezia",
    img: "https://i.ibb.co/3yNfFKs/Lucrezia.png",
    opts: {
      Game: ["Kuro"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Ixs",
    img: "https://i.ibb.co/ThLKrC4/Ixs.png",
    opts: {
      Game: ["Kuro"],
      notgirl: true,
      NPC: true,
    },
  },
  {
    name: "Jorda",
    img: "https://i.ibb.co/YjmgF8j/Jolda.png",
    opts: {
      Game: ["Kuro"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Celis",
    img: "https://i.ibb.co/KFZmL6h/Celis.png",
    opts: {
      Game: ["Kuro"],
      notboy: true,
      NPC: true,
    },
  },
  {
    name: "Leon",
    img: "https://i.ibb.co/1Lt3pCR/Leon.png",
    opts: {
      Game: ["Kuro"],
      notgirl: true,
      NPC: true,
    },
  },
];
