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
  if(!cart.length){alert('Ton panier est vide.');return;}
  alert('La prochaine étape sera de connecter la commande et le paiement.');
}
renderCart();
