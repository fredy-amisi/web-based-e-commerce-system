<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set CORS headers to allow requests from your frontend
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Include database connection file
require_once 'DbConnect.php';
$dbConnect = new DbConnect();
$conn = $dbConnect->conn;

// Receive data from the frontend
$data = json_decode(file_get_contents('php://input'), true);

// Validate and sanitize data (optional)
$amount = $data['amount'];
$phoneNumber = $data['phoneNumber'];
$orders = $data['orders'];

$response = array();

// Example SQL query to insert order data into the database
$sql = "INSERT INTO orders (product, quantity, total_price, order_date, phone_number) VALUES (:product, :quantity, :total_price, NOW(), :phone_number)";

try {
  // Prepare the SQL statement
  $stmt = $conn->prepare($sql);

  // Bind parameters and execute for each order
  foreach ($orders as $order) {
    $stmt->bindParam(':product', $order['product']);
    $stmt->bindParam(':quantity', $order['quantity']);
    $stmt->bindParam(':total_price', $order['total_price']);
    $stmt->bindParam(':phone_number', $phoneNumber);

    // Execute the statement
    if (!$stmt->execute()) {
      throw new Exception("Failed to insert order: " . $stmt->errorInfo()[2]);
    }
  }

  // If all orders are inserted successfully
  $response['success'] = true;
  $response['message'] = 'Orders stored successfully.';
  echo json_encode($response);
} catch (Exception $e) {
  // If an error occurs
  $response['success'] = false;
  $response['message'] = 'Failed to store orders in the database: ' . $e->getMessage();
  echo json_encode($response);
}
?>
