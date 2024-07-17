<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'DbConnect.php';
$dbConnect = new DbConnect();
$conn = $dbConnect->conn;

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM orders";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($orders);
        break;

    case "POST":
        $order = json_decode(file_get_contents('php://input'));

        // Check if all required fields are provided
        if (isset($order->order_id) && isset($order->customer_name) && isset($order->product) && isset($order->quantity) && isset($order->total_price)) {
            
            // Insert new order
            $sql = "INSERT INTO orders(order_id, customer_name, product, quantity, total_price) VALUES (:order_id, :customer_name, :product, :quantity, :total_price)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':order_id', $order->order_id);
            $stmt->bindParam(':customer_name', $order->customer_name);
            $stmt->bindParam(':product', $order->product);
            $stmt->bindParam(':quantity', $order->quantity);
            $stmt->bindParam(':total_price', $order->total_price);

            if ($stmt->execute()) {
                $response = ['success' => true, 'message' => 'Order created successfully.'];
                echo json_encode($response);
            } else {
                $response = ['success' => false, 'message' => 'Failed to create order.'];
                echo json_encode($response);
            }
        } else {
            // Required data not provided, send error response
            $response = ['success' => false, 'message' => 'Missing required fields.'];
            http_response_code(400); // Bad request
            echo json_encode($response);
        }
        break;
}
?>
