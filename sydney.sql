-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2024 at 04:47 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sydney`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`) VALUES
(5, 'dairy', '2024-07-09 11:08:22'),
(6, 'Fruits', '2024-07-25 07:42:10'),
(7, 'vegetables', '2024-07-26 12:13:49'),
(8, 'meat', '2024-07-26 12:32:37');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `product` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `phone_number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `product`, `quantity`, `total_price`, `order_date`, `phone_number`) VALUES
(9, 'Fresh Milk', 1, 330.00, '2024-07-24 08:37:55', '0113918190'),
(10, 'Fermented milk', 1, 430.00, '2024-07-24 08:41:06', '12345678'),
(11, 'Fresh Milk', 1, 330.00, '2024-07-24 10:07:48', '0987654321'),
(12, 'Yogurt', 1, 230.00, '2024-07-25 07:40:09', '0742534185'),
(13, 'Fermented milk', 2, 860.00, '2024-07-26 10:17:20', '0103556809'),
(14, 'Strawberry', 4, 400.00, '2024-07-26 10:17:20', '0103556809'),
(15, 'Yogurt', 2, 460.00, '2024-07-26 12:11:46', '0742534185'),
(16, 'Fresh Milk', 1, 330.00, '2024-07-26 12:11:46', '0742534185'),
(17, 'Yogurt', 3, 690.00, '2024-07-26 12:30:23', '0742534185'),
(18, 'Mango', 1, 50.00, '2024-07-26 12:30:23', '0742534185');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `description` text DEFAULT NULL,
  `image_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `description`, `image_path`) VALUES
(1, 'Mango', 'Fruit', 100, 'Delicious tropical fruit with sweet, juicy flesh and vibrant flavor.', './uploads/mango.jpeg'),
(4, 'Yogurt', '5', 230, 'Creamy, probiotic-rich yogurt, perfect for a healthy and delicious snack.', './uploads/y1.jpeg'),
(5, 'Fresh Milk', '5', 330, 'Pure, refreshing fresh milk for a healthy and nutritious boost.', './uploads/m2.jpeg'),
(6, 'Fermented milk', '5', 430, 'Tangy, probiotic-rich fermented milk for a healthy digestive boost.', './uploads/k1.jpeg'),
(7, 'Mango', '6', 50, 'Sweet, juicy tropical fruit with vibrant orange flesh and smooth skin.', './uploads/mango.jpeg'),
(8, 'Strawberry', '6', 100, 'Juicy, sweet red fruit with seeds on the surface, summer delight.', './uploads/strawberry.jpeg'),
(9, 'Apple', '6', 30, 'Crisp, juicy fruit with a sweet or tart flavor, often red.', './uploads/apple.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `role` enum('customer','farmer','admin') NOT NULL,
  `phonenumber` varchar(15) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `is_admin` tinyint(1) GENERATED ALWAYS AS (if(`role` = 'Admin',1,NULL)) STORED,
  `signin_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `role`, `phonenumber`, `password`, `signin_date`) VALUES
(12, 'shirley', 'sydneyshirley1@gmail', 'sysy', 'admin', '113918190', '$2y$10$o/nN8M7wiIHBc91PyJb5d.Om.UCc.e13pfaSROqYJfcECuOzjgC5W', '2024-07-09 07:18:12'),
(14, 'shirley sydney', 'sydneyshirley1@gmail', 'sysy', 'customer', '0742534185', '$2y$10$2LmxfF968xry6ZnooKVzZeTc3j7JfbjKN5CgbQ8q6gGiou1Qo35rO', '2024-07-22 10:05:32'),
(15, 'Essie', 'essie@gmail.com', 'essie1', 'customer', '113918190', '$2y$10$koP3yBsDY.TKZpV3fzVukOIuDRNBmaHSj5tOGGJ37M4qpCNMpwLru', '2024-07-24 10:05:11'),
(17, 'fred', 'fred@gmail.com', 'fred', 'farmer', '113918190', '$2y$10$ZQf5K6GIYvqcAj2D9zKiDestk3/yuxj12jVHE.6VZhHNg7AKssBC.', '2024-07-26 08:53:39'),
(18, 'bro', 'bro1@gmail.com', 'bro', 'customer', '113918190', '$2y$10$98DgQLaEe8mY120QjSKePODX7IdsEDgPV49mbH6IdfJ7/jwA7mzL2', '2024-07-26 09:03:41'),
(19, 'atieno', 'saieno974@gmail.com', 'tieno', 'customer', '0712077920', '$2y$10$oLzhliaNRCLYvHz3w0fHBe7cPWzmPGY9FbteQ5b1sIqq2myKnaaUG', '2024-07-26 10:15:45'),
(20, 'juma', 'jumma@gmail.com', 'juma', 'customer', '0742534185', '$2y$10$BqlSvsTXNpqkEzm2Zz5xmOU8bSqBIk94nqd3dMxr2fX0zDPdwIzM.', '2024-07-26 12:10:02'),
(21, 'shirley', 'shirleysydney@gmail.', 'shirley', 'customer', '0742534185', '$2y$10$jZB/lbegyCp18YZjwvmiXurM2RRIgOdcEqvloC6Xd0CeIgqeO8SiC', '2024-07-26 12:28:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_admin` (`is_admin`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
