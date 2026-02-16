document.getElementById('orderForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const table = Number(document.getElementById('table').value);
  const food = document.getElementById('food').value;
  const foodQty = Number(document.getElementById('foodQty').value);
  const drink = document.getElementById('drink').value;
  const drinkQty = Number(document.getElementById('drinkQty').value);

  const items = [];

  if (foodQty > 0) {
    items.push({ type: 'food', name: food, qty: foodQty });
  }

  if (drinkQty > 0) {
    items.push({ type: 'drink', name: drink, qty: drinkQty });
  }

  const order = {
    table,
    items
  };

  try {
    await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });

    e.target.reset();
  } catch (error) {
    console.error('Error sending order:', error);
  }
});
