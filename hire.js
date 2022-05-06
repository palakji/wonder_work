function show() {
    document.getElementById('slidebar').classList.toggle('active');
}







function error1() {
    var name = document.getElementById('name1').value;
    console.log(name);
    if (name == "") {
        a = document.getElementById('n').style.display = "block"
    } else {
        a = document.getElementById('n').style.display = "none"
    }
}



function error2() {

    var mail = document.getElementById('mail1').value;
    console.log(mail);
    mail1 = mail.toString();
    if (mail1.includes("@", ".")) {
        m = document.getElementById('m').style.display = "none"
    } else {
        m = document.getElementById('m').style.display = "block"
    }

}

function error3() {
    var num = document.getElementById('num1').value;
    console.log(num);

    num = num.toString();
    if (num.length == 10) {
        n = document.getElementById('no').style.display = "none"
    } else {
        n = document.getElementById('no').style.display = "block"
    }
}

function error4() {

    var add = document.getElementById('add1').value;
    console.log(add);

    add = add.toString();
    if (add.length > 7) {
        a = document.getElementById('a').style.display = "none"
    } else {
        a = document.getElementById('a').style.display = "block"
    }

}

function error5() {
    var date = document.getElementById('dat1').value;
    console.log(date);

    d = d.toString();
    console.log(d.length)
    if (d.length = 27) {
        d = document.getElementById('d').style.display = "none"
    } else {
        d = document.getElementById('d').style.display = "block"
    }



}








function hello() {
    var number = document.getElementById('num1').value;
    var name23 = document.getElementById('name1').value;
    var mail = document.getElementById('mail1').value;
    var date = document.getElementById('dat1').value;
    var num = number.toString();
    var m = mail.toString();
    var nm = name23.toString();





    var nameee = document.getElementById('nameee').innerHTML = nm;
    var sdate = document.getElementById('sdate').innerHTML = date;




    if (m.includes("@", ".") && num.length == 10) {

        var loader = document.getElementById("load").style.display = "block";
        setTimeout(() => {

            var msg = document.getElementById('message').style.display = "block";

            var error = document.getElementById('error').style.display = "none";

            var loader = document.getElementById("load").style.display = "none"

        }, 3000)




    } else {

        var loader = document.getElementById("load").style.display = "block";
        setTimeout(() => {

            var error = document.getElementById('error').style.display = "block";

            var msg = document.getElementById('message').style.display = "none";

            var loader = document.getElementById("load").style.display = "none"

        }, 3000)




    }
}