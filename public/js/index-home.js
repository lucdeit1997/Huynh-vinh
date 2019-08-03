$(document).ready(function () {
  var userName = '';
  userName = window.localStorage.getItem('userName');
  $('#userName').text(userName);
  $.ajax({
    type: 'post',
    url: `/get-list-products`,
    data: {},
    dataType: "json",
    success: function (data) {
      try {
        data.listProduct.forEach(product => {
          $('#tbody-data-table').append(`
              <tr id = 'tr${product._id}' class='huynhvinh'>
                         <td>${product._id}</td>
                         <td>${product.ProductName}</td>
                         <td>${product.Price}</td>
                         <td>${product.Image}</td>
                         <td>${product.CategoryId}</td>
                         <td>${product.Amount}</td>
                         <td>${product.status}</td>
                         <td>
                         <ul class="d-flex justify-content-center">
                             <li id = '${product._id}' class="mr-3"><button type="button" class="btn btn-inverse-primary"><i class="fa fa-edit"></i></button></li>
                             <li><button type="button" class="btn btn-inverse-danger"><i class="ti-trash"></i></button></li>
                         </ul>
                     </td>
                         
              </tr>`)
        });

        console.log(data)
      } catch (error) {
        alert(error)
      }
    }, error: function (err) {
      console.log(err)
    }
  })
  var idProductUpdate = '';
  $('body').on('click', '.btn-update-product', function () {
    $('#update-product-form').show();
    let id = 'tr' + $(this).attr('id');
    let data  = $(`#${id}`).children().text();
    console.log(data)
    $('#input-name').val(data[2].toString());
    idProductUpdate = data[0];    
  });
  $('#btn-update-one-product').click(function(){

  })
})