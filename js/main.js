$(document).ready(function(){
    var txtMa = $("#txtMa");
    function KiemtraMa(){
        var re = /^[a-zA-Z0-9_-]{4,16}$/;
        if(txtMa.val()==""){
            alert("Nhap ten dang nhap")
            return false;
        }
     if(!re.test(txtMa.val())){
           alert("Khong nhap ki tu dac biet");
          return false;
       }
    }
    txtMa.blur(KiemtraMa);

    // Kiem tra email
    var txtEmail = $("#txtEmail");
    function KiemtraEmail(){
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
        if(txtEmail.val()==""){
            alert("Bat buoc nhap")
            return false;
        }
     if(!re.test(txtEmail.val())){
           alert("Vui long nhap dung dinh dang email");
          return false;
       }
    }
    txtEmail.blur(KiemtraEmail);
    // kiem tra ho ten
    var txtName = $("#txtName");
    function KiemtraName(){
        var re = /^([A-Z][a-z]+\s){0,2}[A-Z][a-z]+\s([A-Z][a-z]+\s){0,2}[A-Z][a-z]+$/ ;
        if(txtName.val()==""){
            alert("Nhap tên")
            return false;
        }
     if(!re.test(txtName.val())){
           alert("Nhap sai");
          return false;
       }
    }
    txtName.blur(KiemtraName);
    // Kiem tra mat khau
    var txtPassword = $("#txtPassword");
    function KiemtraPassword(){
        var re =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]\\:';"<>?,./-])[a-zA-Z0-9!@#$%^&*()_+~`|}{[\]\\:';"<>?,./-]{8,}$/;
        if(txtPassword.val()==""){
            alert("Nhap password")
            return false;
        }
     if(!re.test(txtPassword.val())){
           alert("Pass phai co chu cai,chu hoa va ki tu dac biet");
          return false;
       }
    }
    txtPassword.blur(KiemtraPassword);
    // Kiem tra lai password
    var checkPass = $("#checkPass");
    function checklaiPass(){
        if(checkPass.val()==""){
            alert("Nhap lai password")
            return false;
        }
        if (txtPassword.val() !== checkPass.val()) {
           alert("Nhap lai pass chua dung");
          return false;
       }
    }
    checkPass.blur(checklaiPass);
})