# Annie Cake Shop — Piedade

Site institucional estático, responsivo e mobile-first para a Annie Cake Shop. O projeto usa apenas HTML, CSS e JavaScript puros e pode ser publicado no GitHub Pages, Cloudflare Pages ou hospedagem estática equivalente.

## Estrutura principal

- `index.html`: conteúdo, SEO local, seções da página, mapa incorporado e Schema.org.
- `styles.css`: identidade visual, layout responsivo e animações suaves.
- `app.js`: links configuráveis, status de aberto/fechado, navegação, abas, avaliações e renderização.
- `menu-data.js`: fonte editável de todas as categorias e itens do cardápio.
- `public/manus-routes.json`: manifesto da rota principal para o Preview.

## Como editar o cardápio

Abra `menu-data.js` e edite os objetos dentro de `MENU_DATA`. Cada item aceita `name`, `description`, `price`, `image`, `alt` e `isExample`. Os itens entregues estão marcados com `[exemplo]`, têm `isExample: true` e usam “Consultar preço” para não inventar valores reais. Quando o cardápio oficial estiver pronto, substitua os textos, URLs e preços, remova `[exemplo]` do nome e troque `isExample` para `false`.

As categorias também podem ser renomeadas, reordenadas ou duplicadas. Para uma foto própria, substitua o valor de `image` pela URL pública da imagem e atualize o `alt` com uma descrição acessível.

## Como editar links e horários

No início de `app.js`, altere `STORE_CONFIG`. Os campos `rappiUrl`, `googleReviewUrl`, `mapsUrl`, `routeUrl` e `wazeUrl` controlam os botões correspondentes. O número do WhatsApp fica em `phoneDigits` (somente números, com `55`) e o texto exibido fica em `phoneDisplay`. O status de aberto/fechado usa `hours.weekday` e `hours.weekend`.

O endereço aparece no HTML, no mapa e no Schema.org; se ele mudar, atualize os três pontos. Para trocar textos de “Sobre a Annie” e avaliações, edite diretamente as respectivas seções em `index.html` e o array `REVIEWS` em `app.js`.

## Rodar localmente

Na pasta do projeto, use um servidor HTTP simples:

```bash
python3 -m http.server 3000
```

Depois, abra `http://localhost:3000`. Não abra o `index.html` diretamente no arquivo, pois alguns navegadores limitam scripts e imagens nesse modo.

## Imagens

As imagens atuais são demonstrativas e carregadas de URLs públicas do Unsplash para representar a direção visual. Substitua-as por fotos próprias dos produtos e da loja antes da publicação comercial. Todas as imagens de conteúdo usam `alt` e `loading="lazy"` quando não são a foto principal.

## Interatividade (versão revisada)

- **Pedido online:** botões levam ao cardápio online (CardápioWeb) e ao iFood; o WhatsApp fica para encomendas e dúvidas. Links em `STORE_CONFIG` no `app.js`.
- **Cabeçalho vivo:** barra de progresso de rolagem, sombra ao rolar e destaque do menu conforme a seção visível.
- **Hero:** a foto inclina de leve com o mouse; o selo e a estrela têm movimento sutil. Faixa em rolagem com as categorias da casa.
- **Galeria:** clique para ampliar, com setas e teclado (← → Esc).
- **Fotos:** ficam em `img/`. Para trocar uma foto do cardápio, edite `image` no `menu-data.js`.
- Todas as animações respeitam `prefers-reduced-motion`.

## Cardápio

Os itens e valores ficam em `menu-data.js` e as fotos em `img/produtos/`. Os valores foram copiados do cardápio online e **não atualizam sozinhos**: se mudarem lá, edite o `price` aqui.
