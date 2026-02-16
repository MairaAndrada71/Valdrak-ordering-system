const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Simulación de base de datos
let orders = [];


// CREAR NUEVA COMANDA
app.post('/orders', (req, res) => {
  const { table, items } = req.body;

  if (!table || !items || items.length === 0) {
    return res.status(400).json({ message: 'Incomplete order data' });
  }

  const newOrder = {
    id: orders.length + 1,
    table,
    items, // [{ name, qty }]
    status: 'Pending',
    time: Date.now()
  };

  orders.push(newOrder);

  console.log('New order received:', newOrder);

  res.status(201).json(newOrder);
});


// VER COMANDAS (COCINA)
app.get('/orders', (req, res) => {
  const sortedOrders = [...orders].sort(
    (a, b) => b.time - a.time
  );

  res.json(sortedOrders);
});


// ACTUALIZAR ESTADO
app.patch('/orders/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const order = orders.find(o => o.id === Number(id));

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  order.status = status;

  res.json(order);
});


// HEALTH CHECK
app.get('/', (req, res) => {
  res.send('ValDrak API is running 🔥');
});


// SERVER
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
