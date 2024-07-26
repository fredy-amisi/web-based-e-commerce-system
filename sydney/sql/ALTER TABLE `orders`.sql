ALTER TABLE `orders`
ADD COLUMN `phone_number` VARCHAR(15) AFTER `order_date`;

ALTER TABLE `orders`
DROP COLUMN `status`;
