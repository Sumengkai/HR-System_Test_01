// Wrap every letter in a span
var textWrapper = document.querySelector('.International-Organization');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: true })
//   .add({
//     targets: '.International-Organization .letter',
//     scale: [4, 1],
//     opacity: [0, 1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70 * i
//   }).add({
//     targets: '.International-Organization',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

$(document).ready(function () {

  $(document).on('click', 'input[id*=onclick-submit]', function (e) {
    e.preventDefault()
    // id是屬性
    let epCode = $('#logCode').val()
    let epId = $('#logId').val()
    console.log(epCode)
    console.log(epId)

    if ($('#logCode').val() == "") {
      alert("未填入「員工編號」資料");
      return false;
    } else if ($('#logId').val() == "") {
      alert("未填入「身分證」資料");
      return false;
    } else {
      loginJudgment(epCode, epId)
    }
  })
})



