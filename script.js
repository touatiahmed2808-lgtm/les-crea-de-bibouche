let cart = [];
function addToCart(name, price){
  const item = cart.find(x => x.name === name);
  if(item) item.qty++;
  else cart.push({name, price, qty:1});
  renderCart();
  openCart();
}
function removeFromCart(name){
  cart = cart.filter(x => x.name !== name);
  renderCart();
}
function renderCart(){
  const items = document.getElementById('cartItems');
  const count = cart.reduce((s,x)=>s+x.qty,0);
  const total = cart.reduce((s,x)=>s+x.price*x.qty,0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = total.toFixed(2).replace('.',',') + ' €';
  if(!cart.length){items.innerHTML='<p class="empty">Ton panier est vide.</p>';return;}
  items.innerHTML = cart.map(x => `
    <div class="cart-item">
      <div><strong>${x.name}</strong><br><small>${x.qty} × ${x.price.toFixed(2).replace('.',',')} €</small></div>
      <button class="remove" onclick="removeFromCart('${x.name.replaceAll("'", "\\'")}')">Supprimer</button>
    </div>`).join('');
}
function toggleCart(){
  document.getElementById('cart').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}
function openCart(){
  document.getElementById('cart').classList.add('open');
  document.getElementById('overlay').classList.add('open');
}
function checkout(){
  if(!cart.length){
    alert('Ton panier est vide.');
    return;
  }

  alert('La prochaine étape sera de connecter la commande et le paiement.');
}


function showCategory(category) {
  const section = document.getElementById('categoryProducts');
  const title = document.getElementById('categoryTitle');
  const message = document.getElementById('categoryMessage');
  const productList = document.getElementById('categoryProductList');

  title.textContent = category;
  section.style.display = 'block';
  productList.innerHTML = '';

  const produits = {
    'Coques de téléphone': [
      { photo: '1000037144.jpg', prix: 12 },
      { photo: '1000037148.jpg', prix: 12 },
      { photo: '1000037149.jpg', prix: 12 },
      { photo: '1000037150.jpg', prix: 12 },
      { photo: '1000037262.png', prix: 12 },
      { photo: '1000037263.png', prix: 12 }
    ],

    'Déco': [
      { photo: '1000036985.jpg', prix: 40 },
      { photo: '1000037010.jpg', prix: 40 },
      { photo: '1000037011.jpg', prix: 40 },
      { photo: '1000037138.jpg', prix: 6 },
      { photo: '1000037139.jpg', prix: 6 },
      { photo: '1000037140.jpg', prix: 6 },
      { photo: '1000037474.png', prix: 12 },
      { photo: '1000037475.jpg', prix: 12 }
    ],
         'Porte-clés': [
      { photo: '1000036998.jpg', prix: 6 },
      { photo: '1000036999.jpg', prix: 6 },
      { photo: '1000037000.jpg', prix: 6 },
      { photo: '1000037001.jpg', prix: 6 },
      { photo: '1000037002.jpg', prix: 6 },
      { photo: '1000037003.jpg', prix: 6 },
      { photo: '1000037004.jpg', prix: 6 },
      { photo: '1000037005.jpg', prix: 6 },
      { photo: '1000037006.jpg', prix: 6 },
      { photo: '1000037478.jpg', prix: 6 },
      { photo: '1000037480.jpg', prix: 6 },
      { photo: '1000037481.jpg', prix: 6 }
    ],

    'Lampes': [
      { photo: '1000036978.jpg', prix: 15 },
      { photo: '1000036979.jpg', prix: 15 },
      { photo: '1000036980.jpg', prix: 15 },
      { photo: '1000036981.jpg', prix: 15 },
      { photo: '1000036982.jpg', prix: 15 },
      { photo: '1000036983.jpg', prix: 15 },
      { photo: '1000036984.jpg', prix: 15 }
    ],
        'Autres créations': [
      { photo: '1000036986.jpg', prix: 15 },
      { photo: '1000036987.jpg', prix: 15 },
      { photo: '1000036988.jpg', prix: 15 },
      { photo: '1000037013.jpg', prix: 8 },
      { photo: '1000037014.jpg', prix: 8 },
      { photo: '1000037025.jpg', prix: 8 },
      { photo: '1000037026.jpg', prix: 8 },
      { photo: '1000037027.jpg', prix: 8 },
      { photo: '1000037031.jpg', prix: 6 },
      { photo: '1000037032.jpg', prix: 0 },
      { photo: '1000037132.jpg', prix: 0 },
      { photo: '1000037134.jpg', prix: 0 },
      { photo: '1000037135.jpg', prix: 0 },
      { photo: '1000037136.jpg', prix: 6 },
      { photo: '1000037137.jpg', prix: 6 },
      { photo: '1000037345.png', prix: 6 },
      { photo: '1000037346.jpg', prix: 6 },
      { photo: '1000037347.jpg', prix: 0 },
      { photo: '1000037348.jpg', prix: 0 },
      { photo: '1000037349.jpg', prix: 0 },
      { photo: '1000037350.jpg', prix: 0 },
      { photo: '1000037351.jpg', prix: 0 },
      { photo: '1000037352.jpg', prix: 0 },
      { photo: '1000037353.jpg', prix: 0 },
      { photo: '1000037354.jpg', prix: 0 },
      { photo: '1000037355.jpg', prix: 0 },
      { photo: '1000037356.jpg', prix: 0 },
      { photo: '1000037362.jpg', prix: 0 },
      { photo: '1000037363.jpg', prix: 0 },
      { photo: '1000037364.jpg', prix: 0 },
      { photo: '1000037365.jpg', prix: 0 },
      { photo: '1000037385.png', prix: 0 },
      { photo: '1000037476.jpg', prix: 0 },
      { photo: '1000037477.jpg', prix: 0 },
      { photo: '1000037483.jpg', prix: 0 },
      { photo: '1000037484.jpg', prix: 0 },
      { photo: '1000037485.jpg', prix: 0 },
      { photo: '1000037486.jpg', prix: 6 },
      { photo: '1000037487.jpg', prix: 10 },
      { photo: '1000037488.jpg', prix: 0 },
      { photo: '1000037489.jpg', prix: 0 },
      { photo: '1000037490.jpg', prix: 0 },
      { photo: '1000037505.jpg', prix: 0 }
    ]
  };

  if (produits[category]) {
  message.textContent = category === 'Déco'
  ? 'Découvrez nos créations de décoration artisanale.'
  : category === 'Porte-clés'
    ? 'Découvrez nos porte-clés artisanaux à 6 € pièce.'
    : category === 'Lampes'
      ? 'Découvrez nos lampes artisanales à 15 € pièce.'
      : 'Découvrez nos coques de téléphone.';

    productList.innerHTML = produits[category].map((produit, index) => {
    const nom = category === 'Déco'
  ? `Décoration ${index + 1}`
  : category === 'Porte-clés'
    ? `Porte-clés ${index + 1}`
    : category === 'Lampes'
      ? `Lampe ${index + 1}`
      : `Coque de téléphone ${index + 1}`;
      return `
        <article class="product-card">
          <div class="product-image">
            <img
              src="images/${produit.photo}"
              alt="${nom}"
              loading="lazy"
              style="width:100%;height:100%;object-fit:contain;"
            >
          </div>

          <div class="product-info">
            <h3>${nom}</h3>
            <p>Création artisanale à découvrir.</p>

            <div class="product-bottom">
              <strong>${produit.prix.toFixed(2).replace('.', ',')} €</strong>

              <button onclick="addToCart('${nom}', ${produit.prix})">
                Ajouter au panier
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  } else {
    message.textContent =
      'Les créations de cette catégorie seront bientôt disponibles.';
  }

  section.scrollIntoView({ behavior: 'smooth' });
}
