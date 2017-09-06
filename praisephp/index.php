<?php  

    //连接数据库  
    $servername="localhost";  
    $username="root";  
    $userpassword="";  
    $dbname = "praise";  
      
    $connent=new mysqli($servername,$username,$userpassword,$dbname);
    $connent->set_charset('utf8');  
    if($connent->connect_error){  
        die("连接失败: " . $connent->connect_error);  
    }else{  
        echo "连接成功<br>";  
    }  
    
    //查询数据
    function query($connent){
        $result = $connent->query("select * from praisecount ");
        while($row = mysqli_fetch_array($result)){
            echo("id:".$row['id'] . "<br>" ."count:". $row['count']);
        }
        $result->close();
    }

    //查询数据
    function modify($count,$connent){
        $result = $connent->query("update praisecount set count={$count} where id=1");
        if ($result) {
            echo("sql_update table ok");
        } else {
            echo("sql_update table failed:" . mysqli_error($con));
        }
    }



    //关闭数据库  
    mysqli_close($connent);  
?>  