        
<?php
    require "./H & F/header.php";
?>


    <main>
		<form action="check_login.php" method="POST" class="proflogin">
            <h1>Professeurs Login</h1>
            <label for="username">Username</label>
			<input type="text" name="username" placeholder="Username" required>
            <label for="password">Password</label>
			<input  type="password" name="password" placeholder="Password" required>
			<button type="submit" name="submit"> Login </button>
		</form>
    </main>


<?php
    require "./H & F/footer.php";
?>