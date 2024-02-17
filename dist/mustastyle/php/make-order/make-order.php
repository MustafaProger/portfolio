<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$model = $_POST['model-watch'];
$additional_info = $_POST['additional-info'];

require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'mustastylefeedback@gmail.com';
$mail->Password = 'uwre bhfd oynd sxxi';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
 
$mail->setFrom('mustastylefeedback@gmail.com', 'MystaStyle');
$mail->addAddress('todzievdier@gmail.com', 'User');
$mail->addCC($email); // Добавим копию письма пользователю
$mail->isHTML(true);

$mail->Subject ='Оформить заказ';

$html_content = file_get_contents('make-order.html');
if ($html_content === false) {
    die('Не удалось прочитать файл HTML');
    
}

$html_content = str_replace('{NAME}', $name, $html_content);
$html_content = str_replace('{E-MAIL}', $email, $html_content);
$html_content = str_replace('{PHONE}', $phone, $html_content);
$html_content = str_replace('{MODEL}', $model, $html_content);
$html_content = str_replace('{MORE_INFO}', $additional_info, $html_content);

$mail->Body = $html_content;

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

if(!$mail->send()) {
    return false;
} else {
    echo 'Письмо успешно отправлено';

    // Отправим копию письма пользователю
    $userMail = new PHPMailer;
    $userMail->CharSet = 'utf-8';

    $userMail->isSMTP();
    $userMail->Host = 'smtp.gmail.com';
    $userMail->SMTPAuth = true;
    $userMail->Username = 'mustastylefeedback@gmail.com';
    $userMail->Password = 'uwre bhfd oynd sxxi';
    $userMail->SMTPSecure = 'ssl';
    $userMail->Port = 465;

    $userMail->setFrom('mustastylefeedback@gmail.com', 'MystaStyle');
    $userMail->addAddress($email, $name);
    $userMail->isHTML(true);

    $userMail->Subject ='Благодарность!';

    $userHtmlContent = file_get_contents('thanks.html');
    $userHtmlContent = str_replace('{NAME}', $name, $userHtmlContent);


    $userMail->Body = $userHtmlContent;

    $userMail->send(); // Отправим письмо пользователю
}

?>