function KTUsername() {
    let regex = /^[a-z0-9_-]{3,16}$/
    let chuoiKT = document.getElementById("txtUser").value;
    let kq = regex.test(chuoiKT)
    if (kq == true) {
        document.getElementById("checkUser").innerHTML = "Usermame dung"
    } else {
        document.getElementById("checkUser").innerHTML = "Username sai"
    }
}

function KTPassword() {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%&*])[a-zA-Z0-9!@$%&*]{8,10}$/
    let chuoiKT = document.getElementById("txtPassword").value;
    let kq = regex.test(chuoiKT)
    if (kq == true) {
        document.getElementById("checkPassword").innerHTML = "Pass dung"
    } else {
        document.getElementById("checkPassword").innerHTML = "Pass sai"

    }
}

function KTEmail() {
    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let chuoiKT = document.getElementById("txtEmail").value;
    let kq = regex.test(chuoiKT)
    if (kq == true) {
        document.getElementById("checkEmail").innerHTML = "Email dung"
    } else {
        document.getElementById("checkEmail").innerHTML = "Email sai"

    }
}