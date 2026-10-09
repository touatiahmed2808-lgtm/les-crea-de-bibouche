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

  if (category === 'Coques de téléphone') {

    message.textContent = 'Découvrez nos coques de téléphone à 12 € chacune.';

    const coques = [
      '1000037144.jpg',
      '1000037148.jpg',
      '1000037149.jpg',
      '1000037150.jpg',
      '1000037262.png',
      '1000037263.png'
    ];

    productList.innerHTML = coques.map((photo, index) => `
      <article class="product-card">

        <div class="product-image">
          <img
            src="images/${photo}"
            alt="Coque de téléphone ${index + 1}"
            loading="lazy"
          >
        </div>

        <div class="product-info">

          <h3>Coque de téléphone ${index + 1}</h3>

          <p>Une coque originale pour votre téléphone.</p>

          <div class="product-bottom">

            <strong>12,00 €</strong>

            <button onclick="addToCart('Coque de téléphone ${index + 1}', 12)">
              Ajouter au panier
            </button>

          </div>

        </div>

      </article>
    `).join('');

  } else {

    message.textContent =
      'Les créations de cette catégorie seront bientôt disponibles.';

  }

  section.scrollIntoView({
    behavior: 'smooth'
  });

}
