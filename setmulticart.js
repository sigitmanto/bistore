$("#tombol-kirim").click(function(){
    if ($("#nama-lengkap").val() == "") {
      $("#nama-lengkap").focus();
      return false;
    } else if ($("#nomor-wa").val() == "") {
      $("#nomor-wa").focus();
      return false;
    } else if ($("#gmail").val() == "") {
      $("#gmail").focus();
      return false;
    } else if ($("#alamat-lengkap").val() == "") {
      $("#alamat-lengkap").focus();
      return false;
    }  
    } else {
      var walink = 'https://api.whatsapp.com/send';
      var nomorAdmin = 6289677337414;
      var nama = $("#nama-lengkap").val();
      var nomorWA = $("#nomor-wa").val();
      var gmail = $("#gmail").val();
      var alamat = $("#alamat-lengkap").val();
      cartItem = '';
      counter = 1;
      waItems = JSON.parse(localStorage.getItem('simpleCart_items'));
      waItems = Object.values(waItems);
      waItems.forEach((item,i)=>{     
        cartItem += '*'+counter+'.  '+ item.name +'* %0A';
        cartItem += '     ' + 'Harga' + ' : ' + toRp(item.price) +' %0A';
        if(item.size!=undefined){
          cartItem += '     ' + item.size + ' %0A';
        }
        cartItem += '     ' + 'Qty' +' : ' + item.quantity + ' %0A';
        cartItem += '     ' + 'Sub Total' + ' : ' + toRp(item.price * item.quantity) + ' %0A';
        cartItem += '%0A';
        counter++;
      });
      var WA = "";
      WA += "*DATA PEMBELI* "+ "%0A";
      WA += "=============================%0A";
      WA += "*Nama* : " + nama + "%0A";
      WA += "*Nomor HP* : " + nomorWA.split(/[^0-9]/).join("").replace(/^[0]/, "62") + "%0A";
      WA += "*Email* : " + gmail + "%0A";
      WA += "*Alamat* : " + alamat + "%0A" + "%0A";
      WA += "*DATA PRODUK*" + "%0A";
      WA += "=============================%0A";
      WA += cartItem;
      WA += '=============================%0A%0A';
      WA += '*Total* :  '+ $(".checkout-wrap .simpleCart_total").text() + '(' + $(".checkout-wrap .simpleCart_quantity").text() + ' items) %0A';
      WA += '=============================';
      var whatsapp = walink + "?phone=" + nomorAdmin + "&text=" + WA;
      window.open(whatsapp,'_blank');
      localStorage.removeItem('simpleCart_items');
      window.location.href = window.location.href;
      return false;
    }
  });
