<?php
  header ("Content-Type:text/html;charset=UTF8", false);
  header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
  header("Last-Modified: " . gmdate("D, d M Y H:i:s")." GMT");
  header("Cache-Control: no-cache, must-revalidate");
  header("Cache-Control: post-check=0,pre-check=0", false);
  header("Cache-Control: max-age=0", false);
  header("Pragma: no-cache");
?>
<!DOCTYPE HTML>
<html>

<head>

  <title>magicScroll</title>
  
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link href="css/magic.css" rel="stylesheet" />
  <link href="css/animate.css" rel="stylesheet" />
  
  <style>

  body{
  	background: #10283d;
  }

  *{
    margin: 0;
    padding : 0;
    position: relative;
    box-sizing: border-box;
  }
  .post{
    height:100%;
    cursor: pointer;
  }
  .wrap{
    margin: auto;
    margin-top: 11%;
    height: 50%;
    display: block;
    text-align: center;
  }
  @media screen and (max-width: 600px) { 
    h1{
      font-size: 13px;
    }
  }
  h1{
    margin: auto;
    padding: 11px;
    margin-bottom: 33px;
    color: white;
    font-weight: bold;
  }
  section{
    border: 5px solid white;
  }
  </style>
  
</head>

<body>

    <div class="post2">

    <?php
      
      $imgs = glob('img/*');

      foreach($imgs as $key=>$img) {
        if (preg_match('/\.(jpg|png|gif)$/', $img)) {
          echo "<section>
                <div class='wrap' id='$key'>
                <h1 class='text$key'>jQuery.magicScroll.js
</h1>
                <img class='post' src='$img'>
                </div>
                </section>";
        }
      }

    ?>

  </div>
 
  <script src="js/jquery-1.11.1.min.js"></script>
  <script src="js/jquery.lettering.js"></script>
  <script src="js/jquery.textillate.js"></script>
  <script src="js/jQuery.magicScroll.js"></script>
  <script src="js/script.js"></script>

</body>

</html>