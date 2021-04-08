const express = require('express');

const { check } = require('express-validator')
const router = express.Router();

const productsController = require('../controllers/products');

// /admin/add-product => GET
router.get('/', productsController.getshopProduct);
router.get('/shop', productsController.getshopProduct);

router.get('/insert', productsController.getAddProduct);

router.get('/update/:product_id', productsController.getUpdateProduct);

router.get('/detail/:product_id', productsController.detailProduct);
router.get('/product', productsController.getSearchProduct_edit);

router.get('/fruits', productsController.getSearchProductByfruits);
router.get('/vegetables', productsController.getSearchProductByvegetables);

// /admin/add-product => POST
router.post('/insert', [
    check('product_name').trim().not().isEmpty().withMessage("product name is required"),
    check('price').isFloat({ gt: 0 }).withMessage("greater than zero")
], productsController.postAddProduct);

router.post('/update', [
    check('product_id').not().isEmpty().withMessage("empty"),
    check('product_name').trim().isLength({ min: 1 }).withMessage("product name is required"),
    check('price').isFloat({ gt: 0 }).withMessage("greater than zero")
], productsController.postUpdateProduct);

router.get('/delete/:product_id', productsController.getDeleteProduct);

exports.routes = router;