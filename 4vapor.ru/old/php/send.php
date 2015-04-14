<?
# получаем данные и отсекаем пробельные символы в начале и конце:
$name = @ trim ($_POST['name']);
$email = @ trim ($_POST['email']);
$phone = @ trim ($_POST['phone']);
$adres = @ trim ($_POST['adres']);
$msg = @ trim ($_POST['msg']);
$hard = @ trim ($_POST['hard']);
$medium = @ trim ($_POST['medium']);
$null = @ trim ($_POST['null']);



if (($name != "") or ($email != "") or ($adres != "") or ($hard != "") or ($medium != "") or ($null != ""))
// Если существуют проверяем... 
{
   
	// отправка данных на мыло админу
	mail ("forvapor@ya.ru", 
		  "$subject [4VAPOR] ! Заказ",
	      "$message \n 
	      \n Имя: \n $name 
	      \n E-Mail: \n $email
	      \n Телефон: \n $phone
	      \n Адрес: \n $adres
	      \n
	      \n ========================
	      \n Жидкости:
	      \n
	      \n 12mg: \n $hard
	      \n 6mg: \n $medium
	      \n 0mg: \n $null
	      \n
	      \n ========================
	      \n Сообщение: \n $msg");


}
// Если не существуют выводим сообщение... 
else
{
	echo "Error. ";
	echo ":(";
}

   if (($name) and ($email) and ($adres))
{
   	header ("Location: /send.html");
} 


?>