const express = require('express');
const bodyParser = require('body-parser');

const Store = require('./controllers/Store');
const Sales = require('./controllers/sales');

const app = express();

app.use(bodyParser.json());

const PORT_NUMBER = 3000;
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
app.post('/products', Store.create);
app.post('/sales', Sales.create);
app.get('/sales', Sales.getAll);
app.get('/sales/:id', Sales.findById);
app.put('/sales/:id', Sales.updateById);
app.delete('/sales/:id', Sales.deleteSale);
app.put('/products/:id', Store.updateById);
app.get('/products', Store.getAll);
app.get('/products/:id', Store.findById);
app.delete('/products/:id', Store.deleteProduct);

const PORT = process.env.PORT || PORT_NUMBER;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
