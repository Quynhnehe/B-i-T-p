/**
 * Đầu vào
 *  điểm môn 1
 *  điểm môn 2
 *  điểm môn 3
 * 
 * Xử lý
 *  //DOM vào nút Tính Điểm
 * 
 *  //DOM value vào  khu vực ưu tiên
 * 
 *  //DOM value vào đối tượng ưu tiên
 * 
 *  //Công thức tính điểm 
 * 
 * Đầu ra
 *  //Xuất đậu/rớt
 *  //Xuất điểm 
 */


var btnTinhDiem = document.getElementById("btnTinhDiem");
btnTinhDiem.onclick = function()
{
    var content = "";
    //console.log("123");
    var điemmon1 = document.getElementById("điemmon1").value*1;
    var điemmon2 = document.getElementById("điemmon2").value*1;
    var điemmon3 = document.getElementById("điemmon3").value*1;
    var khuvuc = document.getElementById("khuvuc").value*1;
    var doituong = document.getElementById("doituong").value*1;
    var điemchuan = document.getElementById("điemchuan").value*1;

    var tongDiem = (điemmon1+điemmon2+điemmon3+khuvuc+doituong);
    if (tongDiem>=điemchuan)
    {
        content = "<p> Chúc mừng bạn đậu Đại học với số điểm là: "+ tongDiem +" điểm </p>";
    }
    else 
    {
        content = "<p> Chúc bạn may mắn lần sau";
    }
    document.getElementById("footerTinhDiem").innerHTML = content;
    
}

/**
 * TÍNH TIỀN ĐIỆN
 */

function KwDau(soKw) 
{
    return soKw * 500;
}
function KwTiepTheo(soKw) 
{
    return (50*500) + (soKw-50)*650;
}
function KwTiepTheo2(soKw) 
{
    return (50*500) + (50*650) + (soKw-100)*850;
}
function KwTiepTheo3 (soKw) 
{
    return (50*500) + (50*650) + (100*850) + (soKw-200)*1100;
}
function KwConLai(soKw) 
{
    return (50*500) + (50*650) + (100*850) + (150*1100) + (soKw-350)*1300;    
}
 
var nhap = 0;

var btnTinhTienDien = document.getElementById("btnTinhTienDien");
btnTinhTienDien.onclick = function ()
{
    var content1 = "";
    var soKw = document.getElementById("soKw").value*1;
    var hoTen = document.getElementById("hoTen").value;
    
   if (soKw<=50)
   {
    nhap = KwDau (soKw);
    content1 = "<p> Số tiền điện của "+hoTen+" là: " + nhap + " VNĐ</p>";
   }
   else if (soKw<=100 || soKw>50)
   {
    nhap = KwTiepTheo (soKw);
    content1 = "<p> Số tiền điện của "+hoTen+" là: " + nhap + " VNĐ</p>";
   }
   else if (soKw>100 || soKw<=200)
   {
    nhap = KwTiepTheo2(soKw);
    content1 = "<p> Số tiền điện của "+hoTen+" là: " + nhap + " VNĐ</p>";
   }
   else if (soKw>200 || soKw<=350)
   {
    nhap = KwTiepTheo3 (soKw);
    content1 = "<p> Số tiền điện của "+hoTen+" là: " + nhap + " VNĐ</p>";
   }
   else 
   {
    nhap = KwConLai (soKw);
    content1 = "<p> Số tiền điện của "+hoTen+" là: " + nhap + " VNĐ</p>";
   }

   document.getElementById("footerTinhTienDien").innerHTML = content1;
}

/**
 * TÍNH TIỀN THUẾ
*/

var thuNhapChiuThue =0;
var content2 = "";

function tienThue (thuNhapChiuThue) 
{
    var hoTen1 = document.getElementById("hoTen1").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value*1;
    var soNguoi = document.getElementById("soNguoi").value*1;
    
    thuNhapChiuThue = thuNhapNam - 4 - soNguoi*1.6; 
    

    if (thuNhapChiuThue <= 60 )
    {
        content2 = "<p> Thu nhập năm của " + hoTen1 +" là: " + thuNhapNam + " triệu. Thuế suất là 5% . Thu nhập chịu thuế cá nhân là: " +thuNhapChiuThue+ " triệu </p>";
    }
    else if (thuNhapChiuThue>60 || thuNhapChiuThue<=120)
    {
        content2 = "<p> Thu nhập năm của " + hoTen1 +" là: " + thuNhapNam + " triệu. Thuế suất là 10% . Thu nhập chịu thuế cá nhân là: " +thuNhapChiuThue+ " triệu </p>";
    }
    else if (thuNhapChiuThue>120 || thuNhapChiuThue<=210)
    {
        content2 = "<p> Thu nhập năm của " + hoTen1+" là: " + thuNhapNam + " triệu. Thuế suất là 15% . Thu nhập chịu thuế cá nhân là: " +thuNhapChiuThue+ " triệu </p>";
    }
    else if (thuNhapChiuThue>210 || thuNhapChiuThue<=384)
    {
        content2 = "<p> Thu nhập năm của " + hoTen1 +" là: " + thuNhapNam + " triệu. Thuế suất là 20% . Thu nhập chịu thuế cá nhân là: " +thuNhapChiuThue+ " triệu </p>";
    }
    else if (thuNhapChiuThue>384 || thuNhapChiuThue<=642)
    {
        content2 = "<p> Thu nhập năm của " +hoTen1 +" là: " + thuNhapNam + " triệu. Thuế suất là 25% . Thu nhập chịu thuế cá nhân là: " +thuNhapChiuThue+ " triệu </p>";
    }
    else if (thuNhapChiuThue>624 || thuNhapChiuThue<=960)
    {
        content2 = "<p> Thu nhập năm của " + hoTen1 +" là: " + thuNhapNam + " triệu. Thuế suất là 30% . Thu nhập chịu thuế cá nhân là: " +thuNhapChiuThue+ " triệu </p>";
    }
    else 
    {
        content2 = "<p> Thu nhập năm của " + hoTen1 +" là: " + thuNhapNam + " triệu. Thuế suất là 35% . Thu nhập chịu thuế cá nhân là: " +thuNhapChiuThue+ " triệu </p>";
    }
    console.log(content2);
}

var btnTinhTienThue = document.getElementById("btnTinhTienThue");
btnTinhTienThue.onclick = function ()
{
    var hoTen1 = document.getElementById("hoTen1").value*1;
    var thuNhapNam = document.getElementById("thuNhapNam").value*1;
    var soNguoi = document.getElementById("soNguoi").value*1;
    
    tienThue (thuNhapChiuThue);

    document.getElementById("footerTinhTienThue").innerHTML = content2;
}

/**
 * TÍNH TIỀN CÁP
 */

function kiemtrahodan ()
{
    var nhadan = document.getElementById("nhadan");
    var doanhnghiep = document.getElementById("doanhnghiep");
    var type = "";

    if (nhadan.checked)
    {
        type = "nhadan";
    }
    else if (doanhnghiep.checked)
    {
        type = "doanhnghiep";
    }
    else
    {
        alert("Vui lòng chọn loại khách hàng! ");
    }
    return type;
}

var btnTinhTienCap = document.getElementById("btnTinhTienCap");
btnTinhTienCap.onclick = function ()
{
    var makh = document.getElementById("makh");
    var soKenh = document.getElementById("soKenh");
    var soKenhCaoCap = document.getElementById("soKenhCaoCap");

    function tinhTienTheoLoai(makh, soKenh, soKenhCaoCap)
    {
        
    }
}