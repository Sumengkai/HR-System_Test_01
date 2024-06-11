// ---打卡上班
function punchToWork(stringemployeeCode) {
    let workData = { employeeCode: stringemployeeCode }
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/punchToWork',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            $('#workInfoList').empty()
            $('#workTime').empty()
            $('#offWorkTime').empty()
            $('#attendanceStatus').empty()
            $('#attendanceHours').empty()
            let { message, workSystem } = WorkSystemRes
            if (message != null) {
                alert(message)
            }
            let workTime = (workSystem.workTime).replace('T', ' ');
            $('#workTime').append(`${workTime}`)


        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}
//---打卡下班前，叫出list藉由按鈕取得uuid
function getWorkInfoListToday(stringemployeeCode) {
    let workData = { employeeCode: stringemployeeCode }
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/getWorkInfoListToday',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            $('#workInfoList').empty()
            $('#workTime').empty()
            $('#offWorkTime').empty()
            $('#attendanceStatus').empty()
            $('#attendanceHours').empty()
            let { message, workInfoList } = WorkSystemRes
            if (message != null) {
                alert(message)
            }
            for (let item of workInfoList) {
                $('#workInfoList').append(`
                    <li class="list-group-item d-flex align-items-center gap-3">
                    <label class="form-check-label align-middle" for="ckb_${item.uuid}"> ${item.employeeCode} 上班時間 : ${item.workTime} 下班時間 : ${item.offWorkTime}</label>
                    <button id="btnUpdate_${item.uuid}" class="btn btn-primary btn-sm ms-auto" style="color: red; font-size: 30px;" >打卡下班囉!</button>
                    </li>
            `)
            }

        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}
//---打卡下班
function punchToOffWork(uuid, stringemployeeCode) {
    let workData = { uuid: uuid, employeeCode: stringemployeeCode }
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/punchToOffWork',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            $('#workInfoList').empty()
            $('#workTime').empty()
            $('#offWorkTime').empty()
            $('#attendanceStatus').empty()
            $('#attendanceHours').empty()
            let { message, workSystem, workInfoList } = WorkSystemRes
            if (message != null) {
                alert(message)
            }
            let offWorkTime = (workSystem.offWorkTime).replace('T', ' ');
            let workTime = (workSystem.workTime).replace('T', ' ');
            $('#workTime').append(`${workTime}`)
            $('#offWorkTime').append(`${offWorkTime}`)
            $('#attendanceStatus').append(`${workSystem.attendanceStatus}`)
            $('#attendanceHours').append(`${workSystem.attendanceHours}`)
            for (let item of workInfoList) {
                $('#workInfoList').append(`
                 <li class="list-group-item d-flex align-items-center gap-3">
                <label class="form-check-label align-middle" for="ckb_${item.uuid}"> ${item.employeeCode} 上班時間 : ${item.workTime} 下班時間 : ${item.offWorkTime}</label>
                <button id="btnUpdate_${item.uuid}" class="btn btn-primary btn-sm ms-auto">打卡下班囉!</button>
                </li>
            `)
            }

        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}
//---員工搜尋打卡資料
function searchWorkInfoForStaff(stringemployeeCode, startDate, endDate) {
    let workData = { employeeCode: stringemployeeCode, searchStartDate: startDate, searchEndDate: endDate }
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/searchWorkInfoForStaff',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            $('#searchEmployeeCode').empty()
            $('#startDate').empty()
            $('#endDate').empty()
            $('#searchWorkInfoList').empty()
            let { message, workInfoList } = WorkSystemRes
            if (message != null) {
                alert(message)
            }
            let i = 0;
            for (let item of workInfoList) {
                i++;
                if (item.attendanceStatus == null) {
                    $('#searchWorkInfoList').append(`
                    <li class="list-group-item d-flex align-items-center gap-3">
                    <hr style="font-size: 30px;"/>
                <label class="form-check-label align-middle" style="font-size:20px; "> ${i}.員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime}<br/> 下班時間 : ${"空"}<br/> 當天上班狀況 : ${"空"} 當天時數 : ${item.attendanceHours}</label>
                </li>
            `)
                } else if (item.offWorkTime == null) {
                    $('#searchWorkInfoList').append(`
                    <li class="list-group-item d-flex align-items-center gap-3">
                    <hr style="font-size: 30px;"/>
                <label class="form-check-label align-middle" style="font-size:20px; "> ${i}.員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime}<br/> 下班時間 : ${"空"}<br/> 當天上班狀況 : ${item.attendanceStatus} 當天時數 : ${item.attendanceHours}</label>
                </li>
            `)
                }
                else {
                    $('#searchWorkInfoList').append(`
                        <li class="list-group-item d-flex align-items-center gap-3">
                        <hr style="font-size: 30px;"/>
                    <label class="form-check-label align-middle" style="font-size:20px; "> ${i}.員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime}<br/> 下班時間 : ${item.offWorkTime}<br/> 當天上班狀況 : ${item.attendanceStatus} 當天時數 : ${item.attendanceHours}</label>
                    </li>
                `)
                }
            }

        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}
//剛開始登入綁定員工帳號 <這裡不用>
function employeeCodeLogin(stringemployeeCode) {
    let workData = { employeeCode: stringemployeeCode }
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/employeeCodeLogin',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            window.location.href = 'http://127.0.0.1:5501/work-system-boss/work-boss.html'//這邊可以槓掉
            $('#logCode').empty()
            let { message } = WorkSystemRes
            if (message != null) {
                alert(message)
            }
        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}