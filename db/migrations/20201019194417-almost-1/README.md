# Migration `20201019194417-almost-1`

This migration has been generated by Yadukrishnan Nair at 10/20/2020, 1:14:17 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX `userId` ON `Cart`

DROP INDEX `userId` ON `Order`

DROP INDEX `OrderDetail_productId_unique` ON `OrderDetail`

DROP INDEX `orderId` ON `OrderDetail`

DROP INDEX `catId` ON `Product`

DROP INDEX `userId` ON `Session`

DROP INDEX `userId` ON `TopSellingItem`

ALTER TABLE `Order` MODIFY `orderStatus` ENUM('NULL', 'PENDING', 'DELIVERED') NOT NULL DEFAULT 'NULL'

ALTER TABLE `OrderDetail` DROP COLUMN `productId`,
    ADD COLUMN `goodsId` int  

ALTER TABLE `Cart` ADD FOREIGN KEY (`productId`) REFERENCES `itkfodcz_freshcart`.`Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Cart` ADD FOREIGN KEY (`userId`) REFERENCES `itkfodcz_freshcart`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Order` ADD FOREIGN KEY (`userId`) REFERENCES `itkfodcz_freshcart`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `OrderDetail` ADD FOREIGN KEY (`orderId`) REFERENCES `itkfodcz_freshcart`.`Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Product` ADD FOREIGN KEY (`catId`) REFERENCES `itkfodcz_freshcart`.`Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `Session` ADD FOREIGN KEY (`userId`) REFERENCES `itkfodcz_freshcart`.`User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `TopSellingItem` ADD FOREIGN KEY (`userId`) REFERENCES `itkfodcz_freshcart`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201019114122-saq..20201019194417-almost-1
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -64,10 +64,10 @@
   description String?    
   price       Float      
   stock       Boolean    
   minQuantity Float?     
-  category    Category   @relation(fields: [catId], references:[id])
-  catId       Int 
+  category    Category?   @relation(fields: [catId], references:[id])
+  catId       Int? 
   cart        Cart?
 }
 model Cart {
@@ -110,9 +110,9 @@
   updatedAt DateTime @updatedAt
   quantity  Float    
   order     Order    @relation(fields: [orderId], references: [id])
   orderId   Int
-  goodsId Int?
+  goodsId   Int?
   productPrice Float    
 }
 enum PayStatus{
```


