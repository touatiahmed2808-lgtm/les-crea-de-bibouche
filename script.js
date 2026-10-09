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
    ]
  };

  if (produits[category]) {
   message.textContent = category === 'Déco'
  ? 'Découvrez nos créations de décoration artisanale.'
  : category === 'Porte-clés'
    ? 'Découvrez nos porte-clés artisanaux à 6 € pièce.'
    : 'Découvrez nos coques de téléphone.';

    productList.innerHTML = produits[category].map((produit, index) => {
     const nom = category === 'Déco'
  ? `Décoration ${index + 1}`
  : category === 'Porte-clés'
    ? `Porte-clés ${index + 1}`
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
