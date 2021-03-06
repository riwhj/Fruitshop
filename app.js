const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const productData = require('./routes/products');
//const product = require('./routes/product'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", productData.routes);

//app.use("/", product.routes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

mongoConnect(() => {
    app.listen(3000);
});