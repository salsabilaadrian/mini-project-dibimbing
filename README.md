# Merchant-Service
Merchant service app is a service for merchants to handle products. First thing to do is register and login into merchant service to access the application. In this application merchant can edit merchant account and products. Merchant can access to create, update and delete of merchant account or products.

## Entity Relationship Diagram
This is entity relationship of merchant service.

![ERD Merchant Service](/asset/erd.jpg)


## Architecture Diagram Merchant Service
This is a architecture of merchant service.

![Architecture Diagram Merchant Service](/asset/architecture.jpg)


## These are the List of API

/API/register
```
[POST] /register
====== To register or create account on merchant service
```

/API/login
```
[POST] /login
====== To login on merchant service
```

After merchant register and login they can explore merchant service

/API/merchant
```
[GET] /merchant
===== To get all list of merchant account

[GET] /merchant/:id
===== To get one merchant detail account

[PUT] /merchant/:id
===== To update merchant account

[DEL] /merchant/:id
===== To delete account merchant
```

/API/product
```
[POST] /product
====== To create product

[DEL] /merchant/:merchant_id/product/:id
===== To delete spesific product with spesific merchant id

[PUT] /merchant/:merchant_id/product/:id
===== To update spesific product with spesific merchant id

[GET] /product
===== To view all products

[GET] /merchant/:merchant_id/product
===== To view all product with spesific merchant id

[GET] /merchant/:merchant_id/product/:id
===== To view spesific product with spesific merchant id
```