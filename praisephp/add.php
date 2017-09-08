<?php  
    header ( 'Content-Type:application/json; charset=utf-8' );
    $con = null;
    $response = new stdClass;
    if(!isset($_SERVER['REQUEST_METHOD'])){
        $response = array('code'=>'no','content'=>'server error','data'=>'');
        echo json_encode($response);
        return;
    }
    
    if(!strcasecmp($_SERVER['REQUEST_METHOD'],'GET') && isset($_GET['count']) && isset($_GET['id'])){

        // $data=file_get_contents("php://input");
        // $arr = json_decode($data, true);

        $count = $_GET['count'];
        $id = $_GET['id'];
        $con = connect();
        $result = modify($con,$count,$id);       
        if($result){
            $response = array('code'=>'ok','content'=>'add success','data'=>'');
            echo json_encode($response);
            return;
        }else{
            $response = array('code'=>'no','content'=>'add failed','data'=>'');
            echo json_encode($response);
            return;
        }
        
    }elseif(!strcasecmp($_SERVER['REQUEST_METHOD'],'GET') && isset($_GET['id'])){
        $id = $_GET['id'];
        $con = connect();
        $data = query($con);
        while($row = mysqli_fetch_array($data)){
            if($row['id'] == $id){
                $response = array('code'=>'ok','content'=>'get success','data'=>array('id'=>$row['id'],'count'=>$row['count']));
                echo json_encode($response);
                return;
            }else{
                $response = array('code'=>'no','content'=>'get failed','data'=>'');
                echo json_encode($response);
                return;
            }
        }
        
    }else{
        $response = array('code'=>'no','content'=>'error method','data'=>'');
        echo json_encode($response);
        return;
    }


    //连接数据库  
    function connect(){
        $servername="localhost";  
        $username="root";  
        $userpassword="";  
        $dbname = "praise";  
        $connent=new mysqli($servername,$username,$userpassword,$dbname);
        $connent->set_charset('utf8');  
        if($connent->connect_error){  
            die("连接失败: " . $connent->connect_error);
        }
        return $connent;
    }
    
    //查询数据
    function query($connent){
        $result = $connent->query("select * from praisecount");
        mysqli_close($connent);  
        return $result;
    }

    //修改数据
    function modify($connent,$count,$id){
        $result = $connent->query("update praisecount set count={$count} where id={$id}");
        mysqli_close($connent);  
        return $result;
    }

?>