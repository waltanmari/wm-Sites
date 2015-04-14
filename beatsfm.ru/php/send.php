<?
# получаем данные и отсекаем пробельные символы в начале и конце:
$url = @ trim ($_POST['url']);
$city = @ trim ($_POST['city']);
$email = @ trim ($_POST['email']);



if (($name != "") or ($surname != "") or ($email != "") or ($message != ""))
// Если существуют проверяем... 
{
   
	# отправка данных на мыло админу
	mail ("beatsfm@ya.ru, froz174@ya.ru", 
		  "$subject ! Заказ - стикер ",
	      "$message \n 
	      \n ВКонтакте: \n $url 
	      \n Адрес: \n $city
	      \n E-Mail: \n $email");


}
// Если не существуют выводим сообщение... 
else
{
	echo "Error ";
	echo ":(";
}

   if (($url) and ($city) and ($email))
{
   	header ("Location: /success.html");
} 


?>