$(document).ready(function () {    
    let { employeeCode,
        name,
        id,
        employeeEmail,
        section,
        situation,
        title
    } = JSON.parse(sessionStorage.getItem('update'))
    $('#epCode').val(employeeCode)
    $('#epName').val(name)
    $('#epId').val(id)
    $('#epEmail').val(employeeEmail)
    $('#epSet').val(section)
    $('#epSit').val(situation)
    if(title === 0){
        $('#epTt').val('員工')
    }else if(title === 1){
        $('#epTt').val('主管')
    }else if(title === 2){
        $('#epTt').val('經理')
    }
    


    $(document).on('click', 'button[id*=up-btn]', function (e) {
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
            // console.log(epName)

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