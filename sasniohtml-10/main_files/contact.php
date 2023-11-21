<?php
 
  $to = 'winsfolio@gmail.com' . "\r\n";
  $subject = 'Get a Quote Request From landio';
  $name = $_POST['Complete_Name'];
  $email = $_POST['Email_Address']; 
  $phone = $_POST['Phone_No']; 
  $language = $_POST['fav_language']; 

   $headers .= "Reply-To: $name <$email>\r\n"; 
    $headers .= "Return-Path: The Sender <$email>\r\n"; 
    $headers .= "From: $email" ."\r\n" .
    $headers .= "landio Get A Quote\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;


  $message = "************************************************** \r\n" .
  	         "Request from landio Get a Quote Form!  \r\n" .
             "************************************************** \r\n" .	
    
  	        "Name: " . $name . "\r\n" .
  	        "E-mail: " . $email . "\r\n" .
            "Phone: " . $phone . "\r\n" .
  	        "Preferred Consult Method:: " . $language . "\r\n"; 


	$mail = mail($to, $subject, $message, $headers); 

 ?>