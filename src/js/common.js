$(document).ready(function () {
  $(".menu-btn-toggle").click(function (e) { 
    $(".navigation__wrapper").toggleClass("hidden");
    $("#icon-mobile-menu").toggleClass("fa-bars fa-times")
  });
});

function AjaxFormRequest(result_id, formMain, url) {
  jQuery.ajax({
    url: url,
    type: "POST",
    dataType: "html",
    data: jQuery("#" + formMain).serialize(),
    success: function (response) {
      $(':input', '#' + formMain)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
      setTimeout(() => {
        $("#message").hide();
      }, 5000);
    },
    error: function (response) {
      var par = document.getElementById(result_id);
      var error = document.createElement('p');
      error.classList.add("mt-3");
      error.innerHTML = "Возникла ошибка при отправке формы.";
      par.appendChild(error);
      setTimeout(func, 700);
    }
  });
}

function func() {
  $("p.mt-3").detach();
}
$('#feedback-form').submit(function (e) {
  e.preventDefault();
  AjaxFormRequest('result', 'feedback-form', '../feedback.php');
});