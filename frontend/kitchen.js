const ordersContainer = document.getElementById('orders');

async function loadOrders() {
  const res = await fetch('http://localhost:3000/orders');
  const orders = await res.json();

  ordersContainer.innerHTML = '';

  orders
    .sort((a, b) => new Date(b.time) - new Date(a.time))
    .forEach(order => {
      const card = document.createElement('div');
      card.className = 'order-card';

      card.innerHTML = `
        <h3>Table ${order.table}</h3>
        <ul>
          ${order.items.map(i =>
            `<li>${i.qty} x ${i.name}</li>`
          ).join('')}
        </ul>
        <p>Status: <strong>${order.status}</strong></p>
        <button onclick="updateStatus(${order.id}, 'Preparing')">Preparing</button>
        <button onclick="updateStatus(${order.id}, 'Ready')">Ready</button>
      `;

      ordersContainer.appendChild(card);
    });
}

async function updateStatus(id, status) {
  await fetch(`http://localhost:3000/orders/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });

  loadOrders();
}

loadOrders();
setInterval(loadOrders, 3000); // auto refresh
