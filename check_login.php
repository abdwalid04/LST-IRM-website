<?php
session_start();
require 'connection.php';

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(isset($_POST['submit'])){
		$username=trim(stripslashes(htmlspecialchars($_POST['username'])));
		$password=$_POST['password'];

		$stmt=$con->prepare('SELECT * FROM proffesors WHERE username LIKE :username and password LIKE :password');
		$stmt->bindParam(':username',$username);
		$stmt->bindParam(':password',$password);
		$stmt->execute();



		if($stmt->rowCount()>0){
			$stmt=$con->prepare('SELECT DISTINCT modules.nom, modules.module_id from proffesors JOIN modules ON proffesors.proffesor_id=modules.professor_id WHERE username LIKE :username');
			$stmt->bindParam(':username',$username);
			$stmt->execute();
			$stmt->setFetchMode(PDO::FETCH_ASSOC);
			$res=$stmt->fetchAll();
			foreach ($res as $row) {
				$_SESSION['username']=$username;
			}
			$module_nb=$stmt->rowCount();
             header('location:insertNotes.php?prof='.$username.'&nb_module='.$module_nb);
		}else{
			echo 'no exist';
		}

	}
}else{
	header('location:index1.html');
}

?>