$(document).ready(function () {

    $(document).on('click', 'input[id*=intCreate]', function (e) {
        e.preventDefault()

        if (epEmail.value == "") {
            alert("未填入「信箱」資料");
            return false;
        } else if (startDate.value == "") {
            alert("未選擇「開始日期」資料");
            return false;
        }
        else if (endDate.value == "") {
            alert("未選擇「結束日期」資料");
            return false;
        } else if (epReason.value == "") {
            alert("未選擇「假別」資料");
            return false;
        } else {
            // id是屬性

            let epEmail = $('#epEmail').val()
            let startDate = $('#startDate').val()
            let endDate = $('#endDate').val()
            let epReason = $('#epReason').val()
            let epStr = $('#epStr').val()

            sessionStorage.setItem('ulemployeeInfoList', JSON.stringify({
                email: epEmail,
                absenceStartDate: startDate,
                absenceEndDate: endDate,
                absenceReason: epReason,
                absenceStr: epStr
            })
            )
            var yes = confirm('你確定要新增嗎？');
            if (yes) {
                alert('已新增資料');
                addAbsence(startDate, endDate, epEmail, epReason, epStr)
                window.location.href = 'http://127.0.0.1:5501/dayOff-boss/dayOff-boss.html'
            } else {
                alert('再考慮一下');
            }
        }
    })
})


