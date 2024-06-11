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
                                        <button id="btnUpdate_${employeeInfo.employeeCode}" class="btn btn-primary btn-sm ms-auto" >Update</button>
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
function readOneEmployeeInfo(epCode) {
    let objPostData = { employee_code: epCode }

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/read_one_employee_info',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (employeeInfoRes) {
            let { message, employeeInfo } = employeeInfoRes
            $('#ulemployeeInfoList').empty()

            if (message == 'Not found !!') {
                alert('沒有這筆資料 !')
            } else {
                // console.log(employeeInfo.employeeEmail)
                sessionStorage.setItem('update', JSON.stringify({
                    employeeCode: employeeInfo.employeeCode,
                    name: employeeInfo.name,
                    id: employeeInfo.id,
                    employeeEmail: employeeInfo.employeeEmail,
                    section: employeeInfo.section,
                    situation: employeeInfo.situation ,
                    title: employeeInfo.level
                })
                )
                alert('進入修改資料頁面')
                window.location.href='http://127.0.0.1:5501/employeeInfo-boss/update-system-employeeInfo-boss.html'
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
            } else {
                window.location.href='http://127.0.0.1:5501/employeeInfo-boss/update-employeeInfo-boss.html'
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
            let { employeeCode } = JSON.parse(sessionStorage.getItem('login'))
            if (message == 'Not found !!') {
                alert('資料輸入錯誤')
            } else {
                if (epCode == employeeCode) {
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
                    })
                    )
                }
                window.location.href = 'http://127.0.0.1:5501/employeeInfo-boss/update-employeeInfo-boss.html'

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
            $('.form').empty()
            if (message === 'Not found !!') {
                alert('資料輸入錯誤')
                window.location.href = 'http://127.0.0.1:5501/employeeInfo-boss/employeeInfo-boss.html'
            } else if (!employeeInfoList || !employeeInfoList.length) {
                alert('資料輸入錯誤')
            }else{
                window.location.href = 'http://127.0.0.1:5501/employeeInfo-boss/employeeInfo-boss.html'

            }
        },
        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}
function loginJudgment(epCode, epId) {
    let objPostData = {
        employee_code: epCode,
        id: epId
    }

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/login_judgment',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (employeeInfoRes) {
            let { message, employeeInfo } = employeeInfoRes
            $('#foorm').empty()

            if (message == 'Not found !!') {
                alert('資料不正確，再重新試一次 !')
            } else {
                //sessionStorage{存檔:要存的資訊}
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
                if (employeeInfo.level === 0) {
                    window.location.href = './employeeInfo-Staff-frontpage/employeeInfo-staff-frontpage.html'
                } else if(employeeInfo.level === 1) {
                    window.location.href = './employeeInfo-boss-frontpage.html'
                }else {
                    window.location.href = './director-employeeInfo-boss-frontpage.html'
                }

            }

        },
        xhrFields: {
            withCredentials: true
        },

        error: function (e) {
            console.log(e)
            alert('Failed')
        },
    })
}