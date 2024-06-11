$(document).ready(function () {
    $(document).on('click', 'input[id*=intCreate]', function (e) {
        e.preventDefault()

        if (epCode.value == "") {
            alert("未填入「員工編號」資料");
            return false;
        } else if (epName.value == "") {
            alert("未填入「姓名」資料");
            return false;
        } else if (epId.value == "") {
            alert("未填入「身分證」資料");
            return false;
        } else if (epEmail.value == "") {
            alert("未填入「信箱」資料");
            return false;
        } else if (epSet.value == "") {
            alert("未選擇「部門」資料");
            return false;
        } else if (epTt.value == "") {
            alert("未選擇「職位」資料");
            return false;
        } else if (epSit.value == "") {
            alert("未選擇「狀況」資料");
            return false;
        } else {
            // id是屬性
            let epCode = $('#epCode').val()
            let epEmail = $('#epEmail').val()
            let epName = $('#epName').val()
            let epId = $('#epId').val()
            let epSet = $('#epSet').val()
            let epTt = $('#epTt').val()
            let epSit = $('#epSit').val()
            console.log(epCode)
            console.log(epEmail)
            var yes = confirm('你確定要新增嗎？');
            if (yes) {
                alert('已新增資料');
                createEmployeeInfo(epCode, epName, epId, epEmail, epSet, epTt, epSit)
            } else {
                alert('再考慮一下');
            }
        }
    })


})