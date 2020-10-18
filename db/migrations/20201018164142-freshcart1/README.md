# Migration `20201018164142-freshcart1`

This migration has been generated by Yadukrishnan Nair at 10/18/2020, 10:11:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX `userId` ON `Session`

ALTER TABLE `User` ADD COLUMN `contactNo` varchar(191)  ,
    ADD COLUMN `whatsapp` varchar(191)  ,
    ADD COLUMN `address` varchar(191)  ,
    ADD COLUMN `openingHrs` varchar(191)  ,
    ADD COLUMN `closingHrs` varchar(191)  ,
    ADD COLUMN `mostSell` varchar(191)  

CREATE TABLE `Category` (
`id` int  NOT NULL  AUTO_INCREMENT,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`name` varchar(191)  NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Product` (
`id` int  NOT NULL  AUTO_INCREMENT,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`name` varchar(191)  NOT NULL ,
`imageUrl` varchar(191)  NOT NULL ,
`description` varchar(191)  ,
`price` decimal(65,30)  NOT NULL ,
`stock` boolean  NOT NULL ,
`minQuantity` decimal(65,30)  ,
`catId` int  NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Cart` (
`id` int  NOT NULL  AUTO_INCREMENT,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`quantity` decimal(65,30)  NOT NULL ,
`productId` int  NOT NULL ,
`userId` int  NOT NULL ,
UNIQUE INDEX `Cart_productId_unique`(`productId`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Order` (
`id` int  NOT NULL  AUTO_INCREMENT,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`phone` varchar(191)  NOT NULL ,
`address` varchar(191)  NOT NULL ,
`pinCode` varchar(191)  NOT NULL ,
`userId` int  NOT NULL ,
`status` ENUM('PENDING', 'DELIVERED')  NOT NULL DEFAULT 'PENDING',
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `OrderDetail` (
`id` int  NOT NULL  AUTO_INCREMENT,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`quantity` decimal(65,30)  NOT NULL ,
`orderId` int  NOT NULL ,
`productId` int  NOT NULL ,
UNIQUE INDEX `OrderDetail_productId_unique`(`productId`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Payment` (
`id` int  NOT NULL  AUTO_INCREMENT,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`total` decimal(65,30)  NOT NULL ,
`mode` varchar(191)  NOT NULL ,
`userId` int  NOT NULL ,
`orderId` int  NOT NULL ,
`status` ENUM('PENDING', 'PAID')  NOT NULL DEFAULT 'PENDING',
UNIQUE INDEX `Payment_orderId_unique`(`orderId`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `Product` ADD FOREIGN KEY (`catId`) REFERENCES `itkfodcz_freshcart`.`Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Cart` ADD FOREIGN KEY (`productId`) REFERENCES `itkfodcz_freshcart`.`Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Cart` ADD FOREIGN KEY (`userId`) REFERENCES `itkfodcz_freshcart`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Order` ADD FOREIGN KEY (`userId`) REFERENCES `itkfodcz_freshcart`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `OrderDetail` ADD FOREIGN KEY (`orderId`) REFERENCES `itkfodcz_freshcart`.`Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `OrderDetail` ADD FOREIGN KEY (`productId`) REFERENCES `itkfodcz_freshcart`.`Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Payment` ADD FOREIGN KEY (`userId`) REFERENCES `itkfodcz_freshcart`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Payment` ADD FOREIGN KEY (`orderId`) REFERENCES `itkfodcz_freshcart`.`Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Session` ADD FOREIGN KEY (`userId`) REFERENCES `itkfodcz_freshcart`.`User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201018081129-1..20201018164142-freshcart1
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
@@ -19,9 +19,18 @@
   name           String?
   email          String    @unique
   hashedPassword String?
   role           String    @default("user")
+  contactNo      String?
+  whatsapp       String?
+  address        String?
+  openingHrs     String?
+  closingHrs     String?
+  mostSell       String?
   sessions       Session[]
+  cart           Cart[]
+  orders         Order[]
+  payments       Payment[]
 }
 model Session {
   id                 Int       @id @default(autoincrement())
@@ -35,4 +44,89 @@
   antiCSRFToken      String?
   publicData         String?
   privateData        String?
 }
+
+model Category {
+  id        Int       @default(autoincrement()) @id
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+  name      String    
+  product   Product[] 
+}
+
+model Product {
+  id          Int        @default(autoincrement()) @id
+  createdAt   DateTime   @default(now())
+  updatedAt   DateTime   @updatedAt
+  name        String     
+  imageUrl    String     
+  description String?    
+  price       Float      
+  stock       Boolean    
+  minQuantity Float?     
+  category    Category   @relation(fields: [catId], references:[id])
+  catId       Int 
+  cart        Cart
+  orderDetail OrderDetail       
+}
+
+model Cart {
+  id        Int      @default(autoincrement()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  quantity  Float    
+  product   Product  @relation(fields: [productId], references: [id])
+  productId Int      
+  user      User     @relation(fields: [userId], references: [id])
+  userId    Int      
+}
+
+model Order {
+  id           Int           @default(autoincrement()) @id
+  createdAt    DateTime      @default(now())
+  updatedAt    DateTime      @updatedAt
+  phone        String        
+  address      String        
+  pinCode      String        
+  user         User          @relation(fields: [userId], references: [id])
+  userId       Int           
+  orderDetails OrderDetail[] 
+  payment      Payment
+  status       Status        @default(PENDING)       
+}
+
+enum Status {
+  PENDING
+  DELIVERED
+}
+
+model OrderDetail {
+  id        Int      @default(autoincrement()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  quantity  Float    
+  order     Order    @relation(fields: [orderId], references: [id])
+  orderId   Int
+  product   Product  @relation(fields: [productId], references: [id])
+  productId Int    
+}
+
+model Payment {
+  id        Int      @default(autoincrement()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  total     Float    
+  mode      String   
+  user      User     @relation(fields: [userId], references: [id])
+  userId    Int      
+  order     Order    @relation(fields: [orderId], references: [id])
+  orderId   Int
+  status    PayStatus @default(PENDING)      
+}
+
+enum PayStatus{
+  PENDING
+  PAID
+}
+
+
```

