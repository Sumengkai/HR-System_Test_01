function readEmployeeInfo(epCode) {
    let objPostData = { employee_code: epCode }

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/read_employee_info',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (employeeInfoRes) {
            let { message, employeeInfoList } = employeeInfoRes
            $('#ulemployeeInfoList').empty()

            if (message == 'Not found !!') {
                $('#ulemployeeInfoList').append('Not found !!')
            } else if (!employeeInfoList || !employeeInfoList.length) {
                $('#ulemployeeInfoList').append('暫無資料')
            } else {
                for (let employeeInfo of employeeInfoList) {

                    $('#ulemployeeInfoList').append(`
                <li class="list-group-item d-flex align-items-center gap-3">
                                        <label class="form-label align-middle">${employeeInfo.employeeCode}</label>
                                        <button id="btnUpdate_${employeeInfo.employeeCode}" class="btn btn-primary btn-sm ms-auto" onclick="window.location.href='http://127.0.0.1:5500/employee/update-system.html'">Update</button>
                                        <button id="btnDelete_${employeeInfo.employeeCode}" class="btn btn-danger btn-sm">Delete</button>
                                    </li>
                `)
                }
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}
function deleteEmployeeInfo(epCode) {
    let objPostData = { employee_code: epCode }

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/delete_employee_info',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (employeeInfoRes) {
            let { message, employeeInfoList } = employeeInfoRes
            $('#ulemployeeInfoList').empty()

            if (message == 'Not found !!') {
                $('#ulemployeeInfoList').append('Not found !!')
            } else if (!employeeInfoList || !employeeInfoList.length) {
                $('#ulemployeeInfoList').append('暫無資料')
            } else {
                for (let employeeInfo of employeeInfoList) {

                    $('#ulemployeeInfoList').append(`
                <li class="list-group-item d-flex align-items-center gap-3">
                                        <label class="form-label align-middle">${employeeInfo.employeeCode}</label>
                                        <button id="btnUpdate_${employeeInfo.employeeCode}" class="btn btn-primary btn-sm ms-auto">Update</button>
                                        <button id="btnDelete_${employeeInfo.employeeCode}" class="btn btn-danger btn-sm">Delete</button>
                                    </li>
                `)
                }
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}
function updateEmployeeInfo(epCode, epName, epId, epEmail, epSet, epTt, epSit) {
    let objPostData = {
        employee_code: epCode,
        name: epName,
        id: epId,
        employee_email: epEmail,
        section: epSet,
        title: epTt,
        situation: epSit
    }

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/update_employee_info',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (employeeInfoRes) {
            let { message, employeeInfo } = employeeInfoRes
            $('#ulemployeeInfoList').empty()

            if (message == 'Not found !!') {
                alert('資料錯誤')
            } else {
                sessionStorage.setItem('login', JSON.stringify({
                    employeeCode: employeeInfo.employeeCode,
                    name: employeeInfo.name,
                    id: employeeInfo.id,
                    employeeEmail: employeeInfo.employeeEmail,
                    section: employeeInfo.section,
                    title: employeeInfo.level,
                    situation: employeeInfo.situation,
                    seniority: employeeInfo.seniority,
                    joinTime: employeeInfo.joinTime,
                    message: message
                })
                )
                window.location.href = 'http://127.0.0.1:5501/employeeInfo-staff/employeeInfo-staff.html'
            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}
function createEmployeeInfo(epCode, epName, epId, epEmail, epSet, epTt, epSit) {
    let objPostData = {
        employee_code: epCode,
        name: epName,
        id: epId,
        employee_email: epEmail,
        section: epSet,
        title: epTt,
        situation: epSit
    }

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/create_employee_info',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (employeeInfoRes) {
            let { message, employeeInfoList } = employeeInfoRes
            $('#foorm').empty()

            if (message == 'Not found !!') {
                $('#ulemployeeInfoList').append('Not found !!')
            } else if (!employeeInfoList || !employeeInfoList.length) {
                $('#ulemployeeInfoList').append('暫無資料')
            } else {

            }

        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}