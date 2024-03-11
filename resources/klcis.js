/*

KLCIS SCRIPTS

*/

var amountDropdown = document.getElementById('amountDropdown');
var numberInput = document.getElementById('numberInput');
var amountToPay = document.getElementById('amountToPay');
var contactNumber = document.getElementById('contactNumber');
var qrcodeContainer = document.getElementById('qrcode');
var gcashCaption = document.getElementById('gcashCaption');
var form = document.getElementById('paymentForm');


function updateCheckoutCard() {
  var amount = amountDropdown.value;
  var number = numberInput.value;
  amountToPay.textContent = '₱' + amount + '.00';
  contactNumber.textContent = number;
  
  if (number.length === 11) {
    generateQR();  
  }else if(number.length > 11) {  
  
     Swal.fire({
            title: "Mobile number is invalid!",
            text: "You have typed more than 11 digits. Please re-check.",
            icon: "warning",
            timer: 3000
			});
			
    qrcodeContainer.style.display = 'none';
    gcashCaption.style.display = 'none';
    qrcodeContainer.innerHTML = '';  
  } else {
    qrcodeContainer.style.display = 'none';
    gcashCaption.style.display = 'none';
    qrcodeContainer.innerHTML = '';
  }
  
}

function generateQR() {
  var token = document.getElementById('tokenInput').value;
  var number = numberInput.value;
  var amount = amountDropdown.value;
  var baseLink = 'https://s2.klinternetservices.com/xendit/payment';
  var regexPattern = /^(09)\d{9}$/;

  if (!regexPattern.test(number)) {
  qrcodeContainer.style.display = 'none';
  gcashCaption.style.display = 'none';
  qrcodeContainer.innerHTML = '';
  } else {
  qrcodeContainer.innerHTML = '';
  var paymentLink = baseLink + '?token=' + encodeURIComponent(token) + '&number=' + encodeURIComponent(number) + '&amount=' + encodeURIComponent(amount);
  new QRCode(qrcodeContainer, {
    text: paymentLink,
    width: 120,
    height: 120
  });
  qrcodeContainer.style.display = 'block';
  gcashCaption.style.display = 'block';
  }
}

amountDropdown.addEventListener('change', updateCheckoutCard);
numberInput.addEventListener('input', updateCheckoutCard);

form.addEventListener('submit', function(event) {
  var number = numberInput.value;
  if (contactNumber.textContent === '-' || amountToPay.textContent === '₱0.00' || number.length !== 11) {
  event.preventDefault();
  
    Swal.fire({
            title: "Mobile number is invalid!",
            text: "Please select a promo and enter a valid 11-digit mobile number.",
            icon: "warning",
            timer: 3000
            });
  
  }
});

  $(document).ready(function() {
  $('#checkNumberForm').on('submit', function(e) {
      e.preventDefault();

      var numberSearch = $('#numberSearch').val();
      var key = $('#key').val();
      var vouchers = $('#getVouchers').val();
      var transactions = $('#getTransactions').val();
      var regexPattern = /^(09)\d{9}$/;

      if (!regexPattern.test(numberSearch)) {
        $('#result').text('Please enter a valid mobile number.');
      }else{

        var buttonId = $(document.activeElement).attr('id');

        if (buttonId === 'checkVouchers') {

          $('#transactionTable').hide();

          $.ajax({
            url: 'https://s2.klinternetservices.com/client/api',
            type: 'GET',
            data: { 
                number: numberSearch,
                api_key: key,
                search: vouchers},

            success: function(response){

              if (response.error){
                  $('#result').text(response.error);
              } else if (response.status === 'exists'){                 
                  $('#vouchersTable').show();
                  var vouchersHtml = '';
                  response.vouchers.forEach(function(voucher) {
                      vouchersHtml += '<tr>' +

                          '<td class="text-sm text-muted">' + (new Date(voucher.date_sold).getMonth() + 1) + '-' + new Date(voucher.date_sold).getDate() + '-' + new Date(voucher.date_sold).getFullYear() + '</td>' +
                          '<td class="text-success text-sm">' + htmlspecialchars(voucher.voucher) + '</td>' +
                          '<td class="text-sm text-center text-muted">₱' + htmlspecialchars(voucher.amount.toString()) + '</td>' +
                          '<td class="text-sm text-muted">' + htmlspecialchars(voucher.tran_code) + '</td>' +
                          '</tr>';
                  });
                  
                  $('#vouchersTableBody').html(vouchersHtml);
				  
				   Swal.fire({
                      title: "Vouchers loaded successfully!",
                      text: "You last 10 purchased vouchers has been successfully loaded.",
                      icon: "success",
                      timer: 2000
                      });
					  
                  $('#result').text('Showing the last 10 transactions. For more details please log-in to https://s2.klinternetservices.com/client');
				  
				  
              } else if (response.status === 'not_exists') {  

					Swal.fire({
                      title: "Error",
                      text: "Either your mobile number is not registered or your KLCiS Client API Secret is wrong.",
                      icon: "error",
                      timer: 2000
                      });
					  
                  $('#result').text('Either your mobile number is not registered or your KLCiS Client API Secret is wrong.');
                  $('#vouchersTable').hide();
              }
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.error('AJAX error:', textStatus, ', Details:', errorThrown);
			  
			   Swal.fire({
                    title: "Error",
                    text: "An error occurred while checking the number.",
                    icon: "error",
                    timer: 2000
                });
				
              $('#result').text('An error occurred while checking the number.');
          }
      });

        } else if (buttonId === 'checkTransactions') {

          $('#vouchersTable').hide();

          $.ajax({
            url: 'https://s2.klinternetservices.com/client/api',
            type: 'GET',
            data: { 
                number: numberSearch,
                api_key: key,
                search: transactions},

            success: function(response){

              if (response.error){
                  $('#result').text(response.error);
              } else if (response.status === 'exists'){                 
                  $('#transactionTable').show();
                  var vouchersHtml = '';
                  response.transactions.forEach(function(transactions) {

                    var statColorClass = transactions.stat === 'UNPAID' ? 'text-danger' : 'text-success';

                    vouchersHtml += '<tr>' +
                          '<td class="text-center text-sm text-muted">' + (new Date(transactions.transaction_date).getMonth() + 1) + '-' + new Date(transactions.transaction_date).getDate() + '-' + new Date(transactions.transaction_date).getFullYear() + '</td>' +
                          '<td class="text-sm ' + statColorClass + ' text-center">' + htmlspecialchars(transactions.stat) + '</td>' +
                          '<td class="text-sm text-center text-muted">₱' + htmlspecialchars(transactions.amount.toString()) + '</td>' +
                          `<td class="text-center text-muted"><a class="btn btn-success btn-xs" href="${transactions.invoice_url}">Check Status</a></td>` +
                          '</tr>';
                  });
                  
                  $('#transactionTableBody').html(vouchersHtml);
				  
				  
                  Swal.fire({
                      title: "Transactions loaded successfully!",
                      text: "You last 10 transaction has been successfully loaded.",
                      icon: "success",
                      timer: 2000
                      });
					  
                  $('#result').text('Showing the last 10 transactions. For more details please log-in to https://s2.klinternetservices.com/client');
                  
              } else if (response.status === 'not_exists') {

				Swal.fire({
                      title: "Error!",
                      text: "Either your mobile number is not registered or your KLCiS Client API Secret is wrong.",
                      icon: "error",
                      timer: 2000
                      });
					  
                  $('#result').text('Either your mobile number is not registered or your KLCiS Client API Secret is wrong.');
                  $('#transactionTable').hide();
              }
          },
          error: function(jqXHR, textStatus, errorThrown) {
			  
			  console.error('AJAX error:', textStatus, ', Details:', errorThrown);
			  
			   Swal.fire({
                    title: "Error",
                    text: "An error occurred while checking the number.",
                    icon: "error",
                    timer: 2000
                });
				
              //$('#result').text('An error occurred while checking the number.');
          }
      });
            
      }
    }
  });
});

function htmlspecialchars(text) {
  var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}