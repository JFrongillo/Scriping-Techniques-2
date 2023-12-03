<?php
include 'db.php';
header('Access-Control-Allow-Origin: *'); // Replace with your front-end origin
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');


$stmt = $conn->prepare("INSERT INTO `freelanceproject`.`customers` (`customer_name`, `customer_company`, `customer_phoneNumber`, `description`) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $customer_name, $customer_company, $customer_phoneNumber, $description);

$customer_name = $_POST['customer_name'];
$customer_company = $_POST['customer_company'];
$customer_phoneNumber = $_POST['customer_phoneNumber'];
$description = $_POST['description'];

$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>