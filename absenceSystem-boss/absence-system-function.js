function addAbsence(startDate, endDate, epEmail, epReason, epStr) {
    let objPostData = {
        email: epEmail,
        absenceStartDate: startDate,
        absenceEndDate: endDate,
        absenceReason: epReason,
        absenceStr: epStr
    }

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/addAbsences',
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

function getManagerEmailByEmployeeCode() {

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/getManagerEmailByEmployeeCode',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (showManagerEmail) {
            let { message, employeeInfoList } = showManagerEmail

            if (message == '員工編號為空,或錯誤') {
                alert('員工編號為空,或錯誤')
            } else if (!employeeInfoList || !employeeInfoList.length) {
                alert('暫無主管資料')
            } else {

                for (let item of employeeInfoList) {
                    $('#managerEmail').append(` <option id=epEmail  value=${item.employeeEmail}>${item.name}</option>`)

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

function getAllAbsenceByEmployeeCode() {

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/getAbsenceByEmployeeCode',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (showAllAbsence) {
            let { message, absenceSystemList } = showAllAbsence
            $('#absenceList').empty()

            if (message == '員工編號為空,或錯誤') {
                $('#absenceList').append('Not !!')
            } else if (!absenceSystemList || !absenceSystemList.length) {
                $('#absenceList').append('暫無資料')
            } else {


                for (let item of absenceSystemList) {
                    $('#absenceList').append(`<p>
                ${item.employeeCode}
                ${item.absenceReason}
                ${item.absenceDate}
                <p/>`)

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


function getAllAbsenceByEmployeeCodeAndDate(abYear, abMonth) {

    let objPostData = {
        year: abYear,
        month: abMonth,
    }
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/getAbsenceByEmployeeCodeAndDate',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function (showAllAbsence) {
            let { message, absenceSystemList } = showAllAbsence
            $('#absenceList').empty()

            if (message == '員工編號為空,或錯誤') {
                $('#absenceList').append('Not found !!')
            } else if (!absenceSystemList || !absenceSystemList.length) {
                $('#absenceList').append('暫無資料')
            } else if (message == '輸入日期為空') {
                $('#absenceList').append('請輸入日期')
            }
            for (let item of absenceSystemList) {
                $('#absenceList').append(`<p>
                ${item.employeeCode}
                ${item.absenceReason}
                ${item.absenceDate}
                <p/>`)

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

function getAbsenceBySectionAndLevel() {

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/getAbsenceBySectionAndLevel',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (showAllAbsence) {
            let { message, absenceSystemResList } = showAllAbsence
            $('#absenceList').empty()

            if (message == '員工編號為空,或錯誤') {
                $('#absenceList').append('EmployeeCode Error!!')
            } else if (!absenceSystemResList || !absenceSystemResList.length) {
                $('#absenceList').append('暫無資料')
            } else {

                for (let item of absenceSystemResList) {
                    $('#absenceList').append(`<p>
               
                <li class="list-group-item d-flex align-items-center gap-3">
                                        <label class="form-label align-middle">${item.employeeCode}</label>
                                        <label class="form-label align-middle">${item.name}</label>
                                        <label class="form-label align-middle">${item.section}</label>
                                        <label class="form-label align-middle">${item.absenceReason}</label>
                                        <label class="form-label align-middle">${item.absenceDate}</label>
                                        <button id="btnYes_${item.uuid}"  type='button' >批准</button>
                                        <button id="btnNo_${item.uuid}" type='button'>拒絕</button>
                                    </li>
                                    
                <p/>`)

                }
            }
            // onclick="window.location.href='http://127.0.0.1:5501/dayOff-boss/checkAbsence-boss.html'"

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

function getAllAbsenceByEmployeeCodeDelete() {

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/getAbsenceByEmployeeCode',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (showAllAbsence) {
            let { message, absenceSystemList } = showAllAbsence
            $('#absenceList').empty()

            if (message == '員工編號為空,或錯誤') {
                $('#absenceList').append('Not !!')
            } else if (!absenceSystemList || !absenceSystemList.length) {
                $('#absenceList').append('暫無資料')
            } else {


                for (let item of absenceSystemList) {
                    $('#absenceList').append(`<p>
               
                <li class="list-group-item d-flex align-items-center gap-3">
                                    
                                        <input class="form-label align-middle" type="radio" name="radioTest" >${item.employeeCode} 
                                        <label class="form-label align-middle" type="radio" name="radioTest">${item.absenceReason}</label>
                                        <label class="form-label align-middle" type="radio" name="radioTest">${item.absenceDate}</label>
                                        <button id="btnDelete_${item.uuid}"  type='button' >刪除</button>
                                    </li>
                                    
                <p/>`)


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

function managerCheckYesOrNo(uuid, yesOrNo) {

    // 讓後端跟前端的屬性做配對(req:前端)
    let objPostData = { uuid: uuid, yesOrNo: yesOrNo }


    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/checkYesOrNo',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function () {


        },
        xhrFields: {
            withCredentials: true
        }

        ,
        error: function (e) {
            console.log(e)
            alert('Failed')

        }
    })
}

function deleteAbsence(uuid) {

    // 讓後端跟前端的屬性做配對(req:前端)
    let objPostData = { uuid: uuid }


    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/deleteAbsence',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function () {


        },
        xhrFields: {
            withCredentials: true
        }

        ,
        error: function (e) {
            console.log(e)
            alert('Failed')

        }
    })
}

function getAllAbsenceByEmployeeCodeUpdate() {

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/getAbsenceByEmployeeCode',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(),
        success: function (showAllAbsence) {
            let { message, absenceSystemList } = showAllAbsence
            $('#absenceList').empty()

            if (message == '員工編號為空,或錯誤') {
                $('#absenceList').append('Not !!')
            } else if (!absenceSystemList || !absenceSystemList.length) {
                $('#absenceList').append('暫無資料')
            } else {


                for (let item of absenceSystemList) {
                    $('#absenceList').append(`<p>
               
                <li class="list-group-item d-flex align-items-center gap-3">
                                        <label class="form-label align-middle">${item.employeeCode}</label>
                                        <label class="form-label align-middle">${item.absenceReason}</label>
                                        <label class="form-label align-middle">${item.absenceDate}</label>
                                        <button id="btnUpdate_${item.uuid}"  type='button' >更新假單</button>
                                    </li>
                                    
                <p/>`)

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

function updateAbsence(uuid, epDate, epReason) {

    // 讓後端跟前端的屬性做配對(req:前端)
    let objPostData = { uuid: uuid, absenceDate: epDate, absenceReason: epReason }


    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/updateAbsence',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(objPostData),
        success: function () {

            alert('更新完成')

            window.location.href = 'http://127.0.0.1:5501/dayOff-boss/updateAbsence-boss.html'

        },
        xhrFields: {
            withCredentials: true
        }

        ,
        error: function (e) {
            console.log(e)
            alert('Failed')

        }
    })
}