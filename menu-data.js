/*
 * CARDÁPIO — Annie Cake Shop (valores conforme o cardápio online).
 * Para editar: mude name, description, price ou image (arquivos em img/produtos/).
 */
const MENU_DATA = [
 {
  "category": "Annie Truffé",
  "items": [
   {
    "name": "Truffé Tortinha de Limão",
    "description": "Picolé cremoso de limão, trufado com crumble.",
    "price": "a partir de R$ 22,00",
    "image": "img/produtos/tortinha-limao.jpg",
    "alt": "Truffé Tortinha de Limão",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Prestígio",
    "description": "Picolé cremoso de coco trufado, com brigadeiro ao leite.",
    "price": "a partir de R$ 22,00",
    "image": "img/produtos/prestigio.jpg",
    "alt": "Truffé Prestígio",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Pavlove",
    "description": "Picolé ninho trufado, com geleia de morangos, banhado em chocolate crocante.",
    "price": "a partir de R$ 22,00",
    "image": "img/produtos/pavlove.jpg",
    "alt": "Truffé Pavlove",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Franuí",
    "description": "Picolé trufado com geleia de framboesa, banhado no chocolate nobre ao leite.",
    "price": "a partir de R$ 22,00",
    "image": "img/produtos/franui.jpg",
    "alt": "Truffé Franuí",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Pudim",
    "description": "Picolé trufado pudim, banhado no chocolate branco.",
    "price": "a partir de R$ 22,00",
    "image": "img/produtos/truffe-pudim.jpg",
    "alt": "Truffé Pudim",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Chocobrownie",
    "description": "Picolé chocolate trufado com brownie, banhado em chocolate crocante.",
    "price": "a partir de R$ 22,00",
    "image": "img/produtos/chocobrownie.jpg",
    "alt": "Truffé Chocobrownie",
    "badge": ""
   },
   {
    "name": "Truffé Ninho com Nutella",
    "description": "Picolé ninho trufado com nutella, banhado em chocolate.",
    "price": "a partir de R$ 22,00",
    "image": "img/produtos/ninho-nutella.jpg",
    "alt": "Truffé Ninho com Nutella",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Bolo de Rolo",
    "description": "Picolé de bolo de rolo trufado com goiabada, banhado no chocolate branco.",
    "price": "a partir de R$ 24,00",
    "image": "img/produtos/bolo-de-rolo.jpg",
    "alt": "Truffé Bolo de Rolo",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Crunchy",
    "description": "Picolé de chocolate trufado, crocante à base de nutella, banhado em chocolate crocante.",
    "price": "a partir de R$ 24,00",
    "image": "img/produtos/crunchy.jpg",
    "alt": "Truffé Crunchy",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Cheesecake",
    "description": "Picolé com base de cream cheese trufado, com geleia de frutas vermelhas.",
    "price": "a partir de R$ 26,00",
    "image": "img/produtos/truffe-cheesecake.jpg",
    "alt": "Truffé Cheesecake",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Pistache com Frutas Vermelhas",
    "description": "Picolé de pistache trufado com geleia de frutas vermelhas e pasta de pistache.",
    "price": "a partir de R$ 28,00",
    "image": "img/produtos/pistache.jpg",
    "alt": "Truffé Pistache com Frutas Vermelhas",
    "badge": "Novidade"
   },
   {
    "name": "Truffé Kinder",
    "description": "Picolé chocolate trufado com creme Kinder Bueno, banhado em chocolate.",
    "price": "a partir de R$ 24,00",
    "image": "img/produtos/kinder.jpg",
    "alt": "Truffé Kinder",
    "badge": ""
   }
  ]
 },
 {
  "category": "Annie Lunch",
  "items": [
   {
    "name": "Escalope Sauce",
    "description": "Estrogonoff de carne no molho flambado, acompanhado de arroz branco e batatinhas fritas.",
    "price": "R$ 36,90",
    "image": "img/produtos/escalope.jpg",
    "alt": "Escalope Sauce",
    "badge": ""
   },
   {
    "name": "Parmê do Chef",
    "description": "Filé de frango à parmegiana, com espaguete al pomodoro, queijo gratinado e batata frita.",
    "price": "R$ 36,90",
    "image": "img/produtos/parme.jpg",
    "alt": "Parmê do Chef",
    "badge": ""
   },
   {
    "name": "Lê Polpe",
    "description": "Polpetone crocante de carne empanada e recheado com queijo, ao molho pomodoro com espaguete.",
    "price": "R$ 38,00",
    "image": "img/produtos/polpe.jpg",
    "alt": "Lê Polpe",
    "badge": ""
   },
   {
    "name": "Filet Gorgonzola",
    "description": "Massa tagliatelle com tiras de carne ao molho cremoso de gorgonzola e parmesão.",
    "price": "R$ 39,00",
    "image": "img/produtos/gorgonzola.jpg",
    "alt": "Filet Gorgonzola",
    "badge": ""
   },
   {
    "name": "Risoto Gran Filet",
    "description": "Risoto cremoso com toque marcante de provolone, servido com iscas de carne.",
    "price": "R$ 36,90",
    "image": "img/produtos/risoto.jpg",
    "alt": "Risoto Gran Filet",
    "badge": ""
   }
  ]
 },
 {
  "category": "Salgados",
  "items": [
   {
    "name": "Cestinha de Mini Coxinha de Frango Cremoso",
    "description": "Massa de batata crocante com frango cremoso. 8 unidades.",
    "price": "R$ 14,90",
    "image": "img/produtos/coxinha.jpg",
    "alt": "Cestinha de Mini Coxinha de Frango Cremoso",
    "badge": ""
   },
   {
    "name": "Cestinha de Bolinha de Queijo",
    "description": "Deliciosos bolinhos com massa de batata e queijo provolone. 8 unidades.",
    "price": "R$ 14,90",
    "image": "img/produtos/bolinha.jpg",
    "alt": "Cestinha de Bolinha de Queijo",
    "badge": ""
   },
   {
    "name": "Cestinha Bolinho de Calabresa",
    "description": "Deliciosos bolinhos de massa de batata e recheio de calabresa. 8 unidades.",
    "price": "R$ 14,90",
    "image": "img/produtos/calabresa.jpg",
    "alt": "Cestinha Bolinho de Calabresa",
    "badge": ""
   },
   {
    "name": "Pastelzinho de Festa",
    "description": "Pastelzinhos de festa recheados com carne moída e banhados no açúcar refinado. 6 unidades.",
    "price": "R$ 14,90",
    "image": "img/produtos/pastelzinho.jpg",
    "alt": "Pastelzinho de Festa",
    "badge": ""
   },
   {
    "name": "Croissant Especial",
    "description": "Delicado croissant recheado com frango desfiado, tiras de bacon crocante e queijo mussarela maçaricado.",
    "price": "R$ 32,00",
    "image": "img/produtos/croissant-especial.jpg",
    "alt": "Croissant Especial",
    "badge": ""
   },
   {
    "name": "Croissant Sertanejo",
    "description": "Croissant recheado com carne seca bem temperada, cebola caramelizada e queijo maçaricado.",
    "price": "R$ 32,00",
    "image": "img/produtos/croissant-sertanejo.jpg",
    "alt": "Croissant Sertanejo",
    "badge": ""
   }
  ]
 },
 {
  "category": "Cookies e Brownies",
  "items": [
   {
    "name": "Cookie de Nutella",
    "description": "Cookie recheado com Nutella.",
    "price": "R$ 18,90",
    "image": "img/produtos/cookie-nutella.jpg",
    "alt": "Cookie de Nutella",
    "badge": ""
   },
   {
    "name": "Cookie Lemon Nuts",
    "description": "Cookie com leve acidez de limão, combinado com chocolate branco e amêndoas laminadas.",
    "price": "R$ 18,90",
    "image": "img/produtos/cookie-lemon.jpg",
    "alt": "Cookie Lemon Nuts",
    "badge": ""
   },
   {
    "name": "Brownie Ninho com Morangos",
    "description": "Massa brownie recheada com brigadeiro branco e geleia de morangos.",
    "price": "R$ 15,90",
    "image": "img/produtos/brownie-morango.jpg",
    "alt": "Brownie Ninho com Morangos",
    "badge": ""
   },
   {
    "name": "Brownie Choco Belga",
    "description": "Massa brownie recheada com brigadeiro ao leite, decorada com brigadeiro e Kit Kat.",
    "price": "R$ 15,90",
    "image": "img/produtos/brownie-belga.jpg",
    "alt": "Brownie Choco Belga",
    "badge": ""
   },
   {
    "name": "Brownie Docemaltine",
    "description": "Massa brownie recheada com brigadeiro de doce de leite e creme de ovomaltine.",
    "price": "consulte o valor",
    "image": "img/produtos/docemaltine.jpg",
    "alt": "Brownie Docemaltine",
    "badge": ""
   },
   {
    "name": "Brownie Bites · Chocolate",
    "description": "Brownie encapsulado com brigadeiro ao leite, banhado no chocolate nobre.",
    "price": "R$ 12,90",
    "image": "img/produtos/bites-choc.jpg",
    "alt": "Brownie Bites · Chocolate",
    "badge": ""
   },
   {
    "name": "Brownie Bites · Ninho",
    "description": "Brownie encapsulado no brigadeiro branco, banhado no chocolate nobre branco e leite em pó.",
    "price": "R$ 12,90",
    "image": "img/produtos/bites-ninho.jpg",
    "alt": "Brownie Bites · Ninho",
    "badge": ""
   },
   {
    "name": "Brownie Bites · Farinha Láctea",
    "description": "Brownie encapsulado no doce de leite, banhado no chocolate nobre branco e finalizado na farinha láctea. Apenas para delivery.",
    "price": "R$ 12,90",
    "image": "img/produtos/bites-farinha.jpg",
    "alt": "Brownie Bites · Farinha Láctea",
    "badge": ""
   },
   {
    "name": "Cheesecake Frutas Vermelhas",
    "description": "Tradicionalmente americana, torta à base de cream cheese com massa de biscoito.",
    "price": "R$ 25,00",
    "image": "img/produtos/cheesecake-fv.jpg",
    "alt": "Cheesecake Frutas Vermelhas",
    "badge": ""
   }
  ]
 },
 {
  "category": "Potes e Diversos",
  "items": [
   {
    "name": "Bolo de Pote · Red Velvet com Cream Cheese",
    "description": "Com geleia artesanal de morangos.",
    "price": "R$ 18,90",
    "image": "img/produtos/pote-redvelvet.jpg",
    "alt": "Bolo de Pote · Red Velvet com Cream Cheese",
    "badge": ""
   },
   {
    "name": "Bolo no Pote · Chocomousse",
    "description": "Massa de chocolate fofinha com recheio de mousse belga.",
    "price": "R$ 18,90",
    "image": "img/produtos/pote-chocomousse.jpg",
    "alt": "Bolo no Pote · Chocomousse",
    "badge": ""
   },
   {
    "name": "Pudim dos Deuses",
    "description": "Pudim de leite condensado com textura macia, que derrete na boca.",
    "price": "R$ 15,90",
    "image": "img/produtos/pudim-deuses.jpg",
    "alt": "Pudim dos Deuses",
    "badge": ""
   },
   {
    "name": "Pipoca Gourmet",
    "description": "Pipoca super crocante, sabor Ninho.",
    "price": "R$ 18,00",
    "image": "img/produtos/pipoca.jpg",
    "alt": "Pipoca Gourmet",
    "badge": ""
   },
   {
    "name": "Torradinha de Leite Ninho",
    "description": "Torradas de bolo, sequinhas e crocantes, sabor leite Ninho. Aprox. 200 g.",
    "price": "R$ 14,90",
    "image": "img/produtos/torradinha.jpg",
    "alt": "Torradinha de Leite Ninho",
    "badge": ""
   },
   {
    "name": "Cesta Personalizada",
    "description": "Para montar com os itens que desejar. Acompanha embalagem e fita personalizada.",
    "price": "R$ 14,90",
    "image": "img/produtos/cesta.jpg",
    "alt": "Cesta Personalizada",
    "badge": ""
   }
  ]
 },
 {
  "category": "Vulcões e Bebidas",
  "items": [
   {
    "name": "Vulcão Bem Casado",
    "description": "Massa de chocolate com recheio de bem-casado. Aprox. 1 kg.",
    "price": "R$ 59,90",
    "image": "img/produtos/vulcao-bemcasado.jpg",
    "alt": "Vulcão Bem Casado",
    "badge": ""
   },
   {
    "name": "Bolo Vulcão de Ninho com Morangos",
    "description": "Massa ninho, cobertura de creme ninho e nutella, recheio de geleia de morango. Aprox. 1 kg.",
    "price": "R$ 59,90",
    "image": "img/produtos/vulcao-ninho.jpg",
    "alt": "Bolo Vulcão de Ninho com Morangos",
    "badge": ""
   },
   {
    "name": "Chocolate Quente",
    "description": "Chocolate ao leite, meio amargo e 50%. 300 ml. Não esquente a garrafa no micro-ondas.",
    "price": "R$ 19,90",
    "image": "img/produtos/choc-quente.jpg",
    "alt": "Chocolate Quente",
    "badge": ""
   },
   {
    "name": "Coca-Cola 350 ml",
    "description": "Lata 350 ml.",
    "price": "R$ 8,00",
    "image": "img/produtos/coca.jpg",
    "alt": "Coca-Cola 350 ml",
    "badge": ""
   },
   {
    "name": "Guaraná Antarctica 350 ml",
    "description": "Lata 350 ml.",
    "price": "R$ 8,00",
    "image": "img/produtos/guarana.jpg",
    "alt": "Guaraná Antarctica 350 ml",
    "badge": ""
   },
   {
    "name": "Água mineral 330 ml",
    "description": "",
    "price": "R$ 5,90",
    "image": "img/produtos/agua.jpg",
    "alt": "Água mineral 330 ml",
    "badge": ""
   },
   {
    "name": "Água com gás Eleve 500 ml",
    "description": "",
    "price": "R$ 8,90",
    "image": "img/produtos/agua-gas.jpg",
    "alt": "Água com gás Eleve 500 ml",
    "badge": ""
   }
  ]
 }
];
