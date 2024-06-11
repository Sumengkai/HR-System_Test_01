$(document).ready(function () {
    let { employeeCode,
        name,
        id,
        employeeEmail,
        section,
        title,
        situation,
        seniority,
        joinTime
    } = JSON.parse(sessionStorage.getItem('login'))
    $('#epCode').val(employeeCode)
    $('#epName').val(name)
    $('#epId').val(id)
    $('#epEmail').val(employeeEmail)
    $('#epSet').val(section)
    // $('#epTt').val(title)
    $('#epSit').val(situation)
    $('#epSnr').val(seniority)
    $('#epJt').val(joinTime)

    $(document).on('click', 'button[id*=upBtn]', function (e) {
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
            console.log(title)

            var yes = confirm('你確定要修改嗎？');
            if (yes) {
                alert('已修改資料');
                updateEmployeeInfo(epCode, epName, epId, epEmail, epSet, epTt, epSit)
            } else {
                alert('再考慮一下');
            }
        }
    })
    // })
})