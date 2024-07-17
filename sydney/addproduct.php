<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Database connection
require_once 'DbConnect.php';
$dbConnect = new DbConnect();
$conn = $dbConnect->conn;

// Check if form data is received
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate and sanitize inputs
    $name = $_POST['name'] ?? '';
    $category = $_POST['category'] ?? '';
    $description = $_POST['description'] ?? '';
    $price = $_POST['price'] ?? 0; // Default to 0 if not provided

    // Handle file upload
    $uploadDir = './uploads/'; // Directory where the files will be uploaded
    $uploadedFile = $_FILES['image']['tmp_name'];
    $fileName = $_FILES['image']['name'];
    $targetFile = $uploadDir . basename($fileName);

    // Check if file is selected
    if (!empty($uploadedFile)) {
        // Move uploaded file to target directory
        if (move_uploaded_file($uploadedFile, $targetFile)) {
            // File uploaded successfully, insert data into database
            $sql = "INSERT INTO products (name, category, description, price, image_path) VALUES (:name, :category, :description, :price, :image_path)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':category', $category);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':image_path', $targetFile);

            if ($stmt->execute()) {
                $response = ['success' => true, 'message' => 'Product added successfully.'];
                echo json_encode($response);
            } else {
                $response = ['success' => false, 'message' => 'Failed to add product to database.'];
                echo json_encode($response);
            }
        } else {
            $response = ['success' => false, 'message' => 'Failed to move uploaded file.'];
            echo json_encode($response);
        }
    } else {
        $response = ['success' => false, 'message' => 'No file uploaded.'];
        echo json_encode($response);
    }
} else {
    $response = ['success' => false, 'message' => 'Method not allowed.'];
    http_response_code(405); // Method not allowed
    echo json_encode($response);
}
?>
