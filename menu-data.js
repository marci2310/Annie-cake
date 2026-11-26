/*
 * CARDÁPIO EDITÁVEL — Annie Cake Shop
 *
 * Os itens abaixo são exemplos e não representam o cardápio ou preços reais.
 * Para editar: troque nome, descrição, preço e imagem. Mantenha isExample: true
 * enquanto o item ainda for demonstrativo; quando publicar o cardápio real,
 * remova o texto [exemplo] do nome e mude isExample para false.
 */
const MENU_DATA = [
  {
    category: 'Tortas e Bolos',
    icon: '✿',
    items: [
      { name: '[exemplo] Bolo de chocolate com brigadeiro', description: 'Massa fofinha, recheio cremoso e cobertura generosa.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85', alt: 'Bolo de chocolate demonstrativo', isExample: true },
      { name: '[exemplo] Torta de frutas vermelhas', description: 'Base amanteigada, creme leve e frutas da estação.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=700&q=85', alt: 'Torta de frutas demonstrativa', isExample: true },
      { name: '[exemplo] Bolo de festa personalizado', description: 'Escolha o sabor, o tamanho e o clima da sua comemoração.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=700&q=85', alt: 'Bolo decorado demonstrativo', isExample: true }
    ]
  },
  {
    category: 'Doces e Brownies',
    icon: '✦',
    items: [
      { name: '[exemplo] Brownie da casa', description: 'Casquinha delicada por fora e muito chocolate por dentro.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=700&q=85', alt: 'Brownie demonstrativo', isExample: true },
      { name: '[exemplo] Brigadeiro de colher', description: 'Clássico, cremoso e servido no potinho para comer sorrindo.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1582176604856-e824b4736522?auto=format&fit=crop&w=700&q=85', alt: 'Doce de chocolate demonstrativo', isExample: true },
      { name: '[exemplo] Caixa de doces variados', description: 'Uma seleção especial para presentear ou dividir.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=700&q=85', alt: 'Caixa de doces demonstrativa', isExample: true }
    ]
  },
  {
    category: 'Bolos no Pote',
    icon: '♡',
    items: [
      { name: '[exemplo] Bolo no pote de ninho', description: 'Camadas macias, creme de ninho e muito aconchego.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=700&q=85', alt: 'Bolo no pote demonstrativo', isExample: true },
      { name: '[exemplo] Bolo no pote de churros', description: 'Doce de leite, canela e aquela vontade de repetir.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=700&q=85', alt: 'Bolo no pote de churros demonstrativo', isExample: true },
      { name: '[exemplo] Bolo no pote de red velvet', description: 'Massa aveludada e creme suave em porção individual.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1614707267537-2b9f34c1c8a1?auto=format&fit=crop&w=700&q=85', alt: 'Bolo red velvet demonstrativo', isExample: true }
    ]
  },
  {
    category: 'Annie Truffé',
    icon: '❋',
    items: [
      { name: '[exemplo] Picolé trufado de morango', description: 'Geladinho, cremoso e coberto com chocolate.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=700&q=85', alt: 'Picolé de morango demonstrativo', isExample: true },
      { name: '[exemplo] Picolé trufado de maracujá', description: 'O azedinho da fruta com uma casquinha de chocolate.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1523442958206-2a9d6a9e0f4a?auto=format&fit=crop&w=700&q=85', alt: 'Picolé demonstrativo', isExample: true },
      { name: '[exemplo] Caixa Annie Truffé', description: 'Uma caixinha com sabores para experimentar e amar.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=85', alt: 'Sorvete demonstrativo', isExample: true }
    ]
  },
  {
    category: 'Salgados',
    icon: '✣',
    items: [
      { name: '[exemplo] Coxinha cremosa', description: 'Massa douradinha e recheio cremoso de frango.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=85', alt: 'Salgado demonstrativo', isExample: true },
      { name: '[exemplo] Empada da casa', description: 'Massa que desmancha e recheio bem temperado.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85', alt: 'Empada demonstrativa', isExample: true },
      { name: '[exemplo] Combo de salgados', description: 'Uma seleção gostosa para acompanhar o café.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=700&q=85', alt: 'Salgados variados demonstrativos', isExample: true }
    ]
  },
  {
    category: 'Lanches',
    icon: '⌁',
    items: [
      { name: '[exemplo] Croissant recheado', description: 'Folhado, dourado e recheado na medida.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85', alt: 'Croissant demonstrativo', isExample: true },
      { name: '[exemplo] Sanduíche artesanal', description: 'Pão macio, recheio caprichado e montagem fresquinha.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=700&q=85', alt: 'Sanduíche demonstrativo', isExample: true },
      { name: '[exemplo] Toast da Annie', description: 'Uma pausa salgada, quentinha e cheia de sabor.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=700&q=85', alt: 'Toast demonstrativo', isExample: true }
    ]
  },
  {
    category: 'Cafés e Bebidas',
    icon: '⌘',
    items: [
      { name: '[exemplo] Café coado especial', description: 'Aquele café passado na hora para acompanhar o doce.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=85', alt: 'Café demonstrativo', isExample: true },
      { name: '[exemplo] Cappuccino cremoso', description: 'Espuma macia, café e um toque de carinho.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=85', alt: 'Cappuccino demonstrativo', isExample: true },
      { name: '[exemplo] Chocolate quente', description: 'Quentinho e aveludado para os dias que pedem colo.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=700&q=85', alt: 'Chocolate quente demonstrativo', isExample: true }
    ]
  },
  {
    category: 'Kits Festa',
    icon: '✺',
    items: [
      { name: '[exemplo] Kit parabéns', description: 'Bolo + docinhos para celebrar sem complicação.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=85', alt: 'Bolo de aniversário demonstrativo', isExample: true },
      { name: '[exemplo] Kit café da tarde', description: 'Uma seleção doce e salgada para compartilhar.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=85', alt: 'Mesa de café demonstrativa', isExample: true },
      { name: '[exemplo] Kit festa personalizado', description: 'Conte a ocasião e montamos uma combinação especial.', price: 'Consultar preço', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=700&q=85', alt: 'Festa decorada demonstrativa', isExample: true }
    ]
  }
];
