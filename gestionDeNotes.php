        
<?php
    require "./H & F/header.php";
?>


    <main>
        <div class="notesask">
            <h1>Session d'automne 2021/2022 : Résultats Modules</h1>
            <h3>Veuillez saisir votre CNE ou votre code Massar</h3>
            <form action="resultats.php" method="POST">
                <input type="text" name="cne" placeholder="CNE / code Massar">
                <button type="submit" name="submit">Resultats</button>    
            </form>
        </div>
        <?php 
        if(isset($_SESSION['html'])){
            echo $_SESSION['html'];
            session_destroy();
        }?>
    </main>


<?php
    require "./H & F/footer.php";
?>