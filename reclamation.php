
<?php 
    require 'connection.php';
?>
        
<?php
    require "./H & F/header.php";
?>


    <main>
        <h1>Contacts</h1>
        <div class="toast__container">
            <?php 
                $stmt=$con->prepare('SELECT * FROM reclamations ORDER BY date');
                $stmt->execute();
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
                $res=$stmt->fetchAll();
                foreach($res as $row){
                    echo'
                        <div class="toast add-margin">
                            <div class="toast__content">
                                <p class="toast__type">'.$row['email'].'</p>
                                <p class="toast__message">'.$row['message'].'</p>
                                <br>
                                <p class="toast__date">'.$row['date'].'</p>
                            </div>
                        </div>
                    ';
                }
            ?>
        </div>
    </main>


<?php
    require "./H & F/footer.php";
?>
