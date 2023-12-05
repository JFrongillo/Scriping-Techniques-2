<?php
include 'db.php';

header('Access-Control-Allow-Origin: *'); // Replace with your front-end origin
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// Read the JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true); // Decoding JSON to PHP array

// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO `freelanceproject`.`customers` (`customer_name`, `customer_company`, `customer_phoneNumber`, `description`) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $customer_name, $customer_company, $customer_phoneNumber, $description);

// Assigning variables from the decoded JSON
$customer_name = $data['customer_name'];
$customer_company = $data['customer_company'];
$customer_phoneNumber = $data['customer_phoneNumber'];
$description = $data['description'];

// Execute the statement
$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>
