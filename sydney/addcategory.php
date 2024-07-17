<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow specific methods
header("Access-Control-Allow-Methods: POST");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type");

// Set content type for JSON response
header("Content-Type: application/json");

// Database connection details
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "sydney"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from POST request
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->name) || empty($data->name)) {
    $response = [
        'success' => false,
        'message' => 'Category name is required'
    ];
} else {
    $name = $data->name;

    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO categories (name) VALUES (?)");
    $stmt->bind_param("s", $name);

    // Execute SQL statement
    if ($stmt->execute()) {
        $response = [
            'success' => true,
            'message' => 'Category added successfully'
        ];
    } else {
        $response = [
            'success' => false,
            'message' => 'Error adding category: ' . $conn->error
        ];
    }

    // Close statement
    $stmt->close();
}

// Close database connection
$conn->close();

// Send JSON response back to React component
echo json_encode($response);
?>
