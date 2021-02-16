<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" href="{{asset('css/fontawesome-free-5.6.3-web/css/fontawesome.min.css')}}" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PTBCSI</title>
</head>
<body>
  <div class="container" style="text-align:center">
  <div class="state" style="margin-top:10px;">
  <img  style="max-width:180px;max-height:120px;position:relative;top;2px;margin-top:20px;" src="{{asset('images/brand.png')}}">
    <img  style="max-width:180px;max-height:120px;position:relative;top;2px;margin-top:20px;" src="{{asset('images/ultimate.png')}}">
    <br>
    <div style="font-size:15px;margin-top:15px;">
    <i class="fa fa-key key-login" style="color: #e0be36;margin-top:10px;"></i><b class="text-info" > Account Login</b>

    </div>
  </div>
    
    <div class="panel panel-default">

      <div class="form">
        <div class=form-group>
          <b><label for="username" class="align-left">Username or email address</label></b>
          <div class="col-md-6">
            <input type="text" id="username" name="username" class="form-control">
          </div>
          
        </div>
        <div class="form-group">
          <b><label for="password" class="align-left">Password</label></b>
              <a href="" class="align-right">Forget password?</a>
          <div class="col-md-6">
            <input type="password" id="password" name="password" class="form-control">
          </div>
        </div>
            

        <div class="login">Login</div>
      </div>
    </div>
  </div>
  <div class="footer" style="text-align: center;padding: 10px;z-index: 3;color:gray">
    ©{{date('Y')}} PTBCSI All Rights Reserved.
</div>

</body>
</html>

<style>



* {
  padding: 0;
  margin: 0;
}
input {
  outline: none;
}
html,
body {
  height: 100%;
}
body {
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
}
.panel {
    max-width: 450px;
    max-height: 350px;
    border-radius: 10px;
    padding:8px;
    box-shadow: 0 0 5px #636b6f;
    background-color:#e1e4e8e8;   
    margin: 50px auto;
}

.align-left{
    float:left;
}
.align-right{
    float:right;
}
a{
    text-decoration:none !important;
    color:blue;
}

.panel .form {
  width: 340px;
  margin: 20px auto;
}
.panel .login {
  height: 45px;
  width: 100%;
  background-color: #28a745;
  border-radius:10px;
  position: relative;
  line-height: 45px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
  transition: background .2s;
  cursor: pointer;
}
.panel .login:active {
    -webkit-transform: translateY(2px);
    -moz-transform: translateY(2px);
    -ms-transform: translateY(2px);
    -o-transform: translateY(2px);
    transform: translateY(2px);
}
.login i {
    position: absolute;
    width: 45px;
    height: 45px;
    background-color: black;
    color: #fff;
    left: 0;
    top: 0;
    border-radius:10px;
    line-height: 45px;
}
.panel input[type='text'],.panel input[type='password'] {
  background-color: white;
  border-radius: 10px;
  font-size: 15px;
  height: 45px;
  box-shadow: 0 0 3px #74a8fc;
  border-color:#74a8fc;
  padding-left: 15px;
  width:100%;
  margin-bottom: 30px;
  margin-top:15px;
}
.panel input[type='text'][placeholder] {
  color: black;
  font-size: 15px;
  font-weight: 500;
}


</style>
