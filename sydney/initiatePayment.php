<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set CORS headers to allow requests from your frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Safaricom Daraja API credentials
$consumerKey = 'UR55RrCWswUIbBLwz4NGSv94j6iziPf3Ah6zfg65tX86VVOw'; // Replace with your Consumer Key
$consumerSecret = '1PGOZqLNxWb5NYy52yZZ0TtbvzZQjQtWJyTSgnGG7mV9W8gyqeC4KbrWXiuAjtX5'; // Replace with your Consumer Secret
$shortCode = '174379'; // Replace with your Shortcode
$lipaNaMpesaOnlinePasskey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'; // Replace with your Passkey

// Function to get the access token
function getAccessToken($consumerKey, $consumerSecret) {
    $credentials = base64_encode($consumerKey . ':' . $consumerSecret);
    $url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Basic ' . $credentials));
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    $curl_response = curl_exec($curl);
    $result = json_decode($curl_response);
    return $result->access_token;
}

// Function to initiate the payment
function lipaNaMpesaOnline($amount, $phoneNumber, $shortCode, $lipaNaMpesaOnlinePasskey, $accessToken) {
    $url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    $timestamp = date("YmdHis");
    $password = base64_encode($shortCode . $lipaNaMpesaOnlinePasskey . $timestamp);
    $curl_post_data = array(
        'BusinessShortCode' => $shortCode,
        'Password' => $password,
        'Timestamp' => $timestamp,
        'TransactionType' => 'CustomerPayBillOnline',
        'Amount' => $amount,
        'PartyA' => $phoneNumber,
        'PartyB' => $shortCode,
        'PhoneNumber' => $phoneNumber,
        'CallBackURL' => 'https://yourcallbackurl.com/callback',
        'AccountReference' => 'Test123',
        'TransactionDesc' => 'Payment for order'
    );
    $data_string = json_encode($curl_post_data);
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type:application/json', 'Authorization:Bearer ' . $accessToken));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($curl, CURLOPT_HEADER, false);
    $curl_response = curl_exec($curl);
    return json_decode($curl_response);
}

// Get data from frontend
$data = json_decode(file_get_contents('php://input'), true);
$amount = $data['amount'];
$phoneNumber = $data['phoneNumber'];

// Get access token
$accessToken = getAccessToken($consumerKey, $consumerSecret);

// Initiate payment
$response = lipaNaMpesaOnline($amount, $phoneNumber, $shortCode, $lipaNaMpesaOnlinePasskey, $accessToken);

// Return response as JSON
echo json_encode($response);
?>
