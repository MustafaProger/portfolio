<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$textarea = $_POST['textarea'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'mustafacoder@yandex.ru';
$mail->Password = 'saxoufnxjgizamfe';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
 
$mail->setFrom('mustafacoder@yandex.ru', "Mustafa's Portfolio");
$mail->addAddress('diertojiev@yandex.ru', 'User');
$mail->isHTML(true);

$mail->Subject ='Сайт';

$html_content = file_get_contents('email.html');
if ($html_content === false) {
    die('Не удалось прочитать файл HTML');
}

$html_content = str_replace('{NAME}', $name, $html_content);
$html_content = str_replace('{E-MAIL}', $email, $html_content);
$html_content = str_replace('{PHONE}', $phone, $html_content);
$html_content = str_replace('{TEXTAREA}', $textarea, $html_content);

$mail->Body = $html_content;

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>