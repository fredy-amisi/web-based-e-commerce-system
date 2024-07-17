<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

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

// Query to fetch categories
$sql = "SELECT id, name FROM categories";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Fetch data from each row and store in an array
    $categories = [];
    while ($row = $result->fetch_assoc()) {
        $categories[] = $row;
    }

    // Output data as JSON
    echo json_encode($categories);
} else {
    // No categories found
    echo json_encode([]);
}

// Close database connection
$conn->close();
?>
