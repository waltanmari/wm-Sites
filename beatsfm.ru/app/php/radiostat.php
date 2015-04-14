  <?php
        //НАСТРОЙКИ СКРИПТА//
        //Ссылка на картинку, которая будет отображаться, если изображение не найдено в базе LAST.FM
        $no_photo_url='http://upload.wikimedia.org/wikipedia/commons/3/37/No_person.jpg';
        $width='100'; //ширина картинки
        $height='100';  //высота картинки
        //НЕ ИЗМЕНЯЙТЕ НИЧЕГО НИЖЕ///
        //LIVE STREAM
        $data=file_get_contents("http://s5.radioheart.ru:8019/status2.xsl?mount=/live");
        $data=explode(",",$data);
        if(($data[14]=='')OR(strlen($data[14])<2))
        {
          //NONSTOP
          $data=file_get_contents("http://s5.radioheart.ru:8019/status2.xsl?mount=/nonstop");
          $data=explode(",",$data);
        }
        $stream_title=$data[14];
        //Если сайт в кодировке windows-1251 (cp-1251), раскомментируйте следующую строчку
        //$stream_title=iconv("UTF-8","WINDOWS-1251",$stream_title); 
        $stream_description=$data[16];
        $listeners=$data[15];
        $mlisteners=$data[19];
        $song=$data[17];
        $image='';
        //Если сайт в кодировке windows-1251 (cp-1251), раскомментируйте следующую строчку
        //$song=iconv("UTF-8","WINDOWS-1251",$song);
                // Выводим данные
        echo "<div id='player_songname'>";
        

        

        

        echo "$song";

        

        echo "</div>";
                 ?>