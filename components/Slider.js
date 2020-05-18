
function Slider() {

    return (
        <html>
            <head>
                <title>Bootstrap Example</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            </head>
            <body>
                <div id="demo" class="carousel slide" data-ride="carousel">

                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="me.jpg" alt="Los Angeles" width="20%" height="50%" />
                        </div>
                        <div class="carousel-item">
                            <img src="ast.jpg" alt="Chicago" width="1100" height="500" />
                        </div>
                        <div class="carousel-item">
                            <img src="ny.jpg" alt="New York" width="1100" height="500" />
                        </div>
                    </div>


                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </body>
        </html>

    )
}

export default Slider