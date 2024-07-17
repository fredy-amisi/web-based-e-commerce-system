CREATE TABLE `orders` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `product` varchar(255) NOT NULL,
    `quantity` int(11) NOT NULL,
    `total_price` decimal(10,2) NOT NULL,
    `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
    `status` varchar(50) NOT NULL DEFAULT 'pending',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
