<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set CORS headers to allow requests from your frontend
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Include database connection file
require_once 'DbConnect.php';
$dbConnect = new DbConnect();
$conn = $dbConnect->conn;

// Prepare and execute the query to fetch fruit products with price
$query = "SELECT p.id, p.name, p.description, p.image_path, p.price 
          FROM products p
          JOIN categories c ON p.category = c.id
          WHERE c.name = 'Fruits'";
$stmt = $conn->prepare($query);
$stmt->execute();

// Fetch results as an associative array
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the results as a JSON response
echo json_encode($result);
?>
