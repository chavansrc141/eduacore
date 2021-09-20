function setcookie() {
    var u = document.getElementById('username').value;
    var p = document.getElementById('password').value;

    
    document.cookie="myusrname="+u+";path=http://127.0.0.1:5501/login.html";
    document.cookie="mypswd="+p+";path=http://127.0.0.1:5501/login.html";
}

function getcookiedata() {
    console.log(document.cookie);

    var user = getCookie('myusrname');
    var pswd = getCookie('mypswd');

    document.getElementById('username').value = user;
    document.getElementById('password').value = pswd;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}