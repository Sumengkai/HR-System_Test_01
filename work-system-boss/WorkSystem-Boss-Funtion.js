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
                    <label class="form-check-label align-middle" for="ckb_${item.uuid}"> ${item.employeeCode} 上班時間 : ${item.workTime}  下班時間 : ${item.offWorkTime}</label>
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
            alert(message)
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
//---員工搜尋打卡資料 *
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
            let { message, workSystem, workInfoList } = WorkSystemRes
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
//---主管搜尋所有人打卡資料
function searchWorkInfoForManager(stringemployeeCode, startDate, endDate, managerEmployeeCode) {
    let workData = { employeeCode: stringemployeeCode, searchStartDate: startDate, searchEndDate: endDate, managerEmployeeCode: managerEmployeeCode }
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/searchWorkInfoForManager',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            $('#searchEmployeeCode1').empty()
            $('#startDate').empty()
            $('#endDate').empty()
            $('#searchWorkInfoList').empty()
            let { message, workInfoList } = WorkSystemRes
            if (message != null) {
                alert(message)
            }
            let i = 0;
            let { title } = JSON.parse(sessionStorage.getItem('login'))
            if (title < 2) {
                for (let item of workInfoList) {
                    i++;
                    if (item.attendanceStatus == null) {
                        $('#searchWorkInfoList').append(`
                        <li class="list-group-item d-flex align-items-center gap-3">
                    <hr />
                    <label class="form-check-label align-middle" style="font-size:20px;" > ${i} : 員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime} <br/>下班時間 : ${"空"}<br/> 當天上班狀況 : ${"空"} 當天時數 : ${item.attendanceHours}</label>
                    <hr/>
                    </li>
                `)
                    } else if (item.offWorkTime == null) {
                        $('#searchWorkInfoList').append(`
                        <li class="list-group-item d-flex align-items-center gap-3">
                    <hr />
                    <label class="form-check-label align-middle" style="font-size:20px;" > ${i} : 員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime} <br/>下班時間 : ${"空"}<br/> 當天上班狀況 : ${item.attendanceStatus} 當天時數 : ${item.attendanceHours}</label>
                    <hr/>
                    </li>
                `)
                    } else {
                        $('#searchWorkInfoList').append(`
                            <li class="list-group-item d-flex align-items-center gap-3">
                        <hr />
                        <label class="form-check-label align-middle" style="font-size:20px;" > ${i} : 員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime} <br/>下班時間 : ${item.offWorkTime}<br/> 當天上班狀況 : ${item.attendanceStatus} 當天時數 : ${item.attendanceHours}</label>
                        <hr/>
                        </li>
                    `)
                    }
                }
            } else {
                for (let item of workInfoList) {
                    i++;
                    if (item.attendanceStatus == null) {
                        $('#searchWorkInfoList').append(`
                        <li class="list-group-item d-flex align-items-center gap-3">
                    <hr />
                    <label class="form-check-label align-middle" style="font-size:20px;" > ${i} : 員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime} <br/>下班時間 : ${"空"}<br/> 當天上班狀況 : ${"空"} 當天時數 : ${item.attendanceHours}</label>
                    <button id="btnUpManager_${item.uuid}" value="員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime}"class="btn btn-primary btn-sm ms-auto">員工沒打卡</button>
                    <hr/>
                    </li>
                `)
                    } else if (item.offWorkTime == null) {
                        $('#searchWorkInfoList').append(`
                        <li class="list-group-item d-flex align-items-center gap-3">
                    <hr />
                    <label class="form-check-label align-middle" style="font-size:20px;" > ${i} : 員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime} <br/>下班時間 : ${"空"}<br/> 當天上班狀況 : ${item.attendanceStatus} 當天時數 : ${item.attendanceHours}</label>
                    <button id="btnUpManager_${item.uuid}" value="員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime}"class="btn btn-primary btn-sm ms-auto">員工沒打卡</button>
                    <hr/>
                    </li>
                `)
                    } else {
                        $('#searchWorkInfoList').append(`
                            <li class="list-group-item d-flex align-items-center gap-3">
                        <hr />
                        <label class="form-check-label align-middle" style="font-size:20px;" > ${i} : 員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime} <br/>下班時間 : ${item.offWorkTime}<br/> 當天上班狀況 : ${item.attendanceStatus} 當天時數 : ${item.attendanceHours}</label>
                        <button id="btnUpManager_${item.uuid}" value="員工編號 : ${item.employeeCode} 上班時間 : ${item.workTime}"class="btn btn-primary btn-sm ms-auto">員工沒打卡</button>
                        <hr/>
                        </li>
                    `)
                    }
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
// ---曠職行為新增
function creatAbsenteeismForManager(stringemployeeCode, absenteeismDate, managerEmployeeCode) {
    let workData = { employeeCode: stringemployeeCode, absenteeismDate: absenteeismDate, managerEmployeeCode: managerEmployeeCode }
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/creatAbsenteeismForManager',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            $('#searchEmployeeCode').empty()
            $('#absenteeismDate').empty()
            $('#searchWorkInfoList').empty()
            $('#workInfoAbsenteeismList').empty()
            let { message, workSystem } = WorkSystemRes
            if (message != null) {
                alert(message)
            }
            $('#workTime').append(`${workSystem.workTime}`)
            $('#attendanceStatus').append(`${workSystem.attendanceStatus}`)
            $('#attendanceHours').append(`${workSystem.attendanceHours}`)


        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}
//---刪除曠職前，叫出list藉由按鈕取得uuid
function getWorkInfoListAbsenteeism(stringemployeeCode, absenteeismDate, managerEmployeeCode) {
    let workData = { employeeCode: stringemployeeCode, absenteeismDate: absenteeismDate, managerEmployeeCode: managerEmployeeCode }
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/getWorkInfoListAbsenteeism',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            $('#workInfoAbsenteeismList').empty()
            $('#workTime').empty()
            $('#offWorkTime').empty()
            $('#attendanceStatus').empty()
            $('#attendanceHours').empty()

            let { message, workInfoList } = WorkSystemRes

            alert(message)


            for (let item of workInfoList) {
                $('#workInfoAbsenteeismList').append(`
                    <li class="list-group-item d-flex align-items-center gap-3">
                    <label class="form-check-label align-middle" style="font-size:20px;" > ${item.employeeCode} 曠職時間 : ${item.workTime} 當天情況 : ${item.attendanceStatus}</label>
                    <button id="btnDeleteAbsenteeism_${item.uuid}" class="btn btn-primary btn-sm ms-auto" style="color: red; font-size: 30px;" >刪除曠職</button>
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
//---刪除曠職
function deleteAbsenteeismForManager(uuid, stringemployeeCode, managerEmployeeCode) {
    let workData = { uuid: uuid, employeeCode: stringemployeeCode, managerEmployeeCode: managerEmployeeCode }
    // alert(uuid)
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/deleteAbsenteeismForManager',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            $('#workInfoAbsenteeismList').empty()
            $('#workTime').empty()
            $('#offWorkTime').empty()
            $('#attendanceStatus').empty()
            $('#attendanceHours').empty()
            let { message, workSystem, workInfoList } = WorkSystemRes
            if (message != null) {
                alert(message)
            }
            $('#workTime').append(`${workSystem.workTime}`)
            $('#offWorkTime').append(`${workSystem.offWorkTime}`)
            $('#attendanceStatus').append(`${workSystem.attendanceStatus}`)
            $('#attendanceHours').append(`${workSystem.attendanceHours}`)
            for (let item of workInfoList) {
                $('#workInfoAbsenteeismList').append(`
                 <li class="list-group-item d-flex align-items-center gap-3">
                <label class="form-check-label align-middle" for="ckb_${item.uuid}"> ${item.employeeCode} 上班時間 : ${item.workTime} 下班時間 : ${item.offWorkTime}</label>
                <button id="btnUpdate_${item.uuid}" class="btn btn-primary btn-sm ms-auto">????</button>
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
// --- 刪除區間內的所有資料
function deleteWorkInfoByDateBetween(startDate, endDate, password) {
    let workData = { searchStartDate: startDate, searchEndDate: endDate, password: password }

    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/deleteWorkInfoByDateBetween',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            $('#startDate').empty()
            $('#endDate').empty()
            $('#deleteInput').empty()
            $('#searchWorkInfoList').empty()
            $('#deleteInput').empty()
            let { message, workInfoList } = WorkSystemRes
            if (message != null) {
                alert(message)

            }
            let i = 0;
            for (let item of workInfoList) {
                i++;
                $('#searchWorkInfoList').append(`
                    <li class="list-group-item d-flex align-items-center gap-3">
                    <hr style="font-size: 30px;"/>
                   <label class="form-check-label align-middle" style="font-size: 30px;"> ${i} : 員工編號 : ${item.employeeCode}<br/> 上班時間 : ${item.workTime}<br/> 下班時間 : ${item.offWorkTime} <br/>當天上班狀況 : ${item.attendanceStatus} 當天時數 : ${item.attendanceHours}</label>
                   </li>
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
//---修改下班打卡
function updeateWorkOffTimeForManager(uuid, offWorkTime) {
    let workData = { uuid: uuid, offWorkTime: offWorkTime }
    let managerName = $('#managerEmployeeCode').val()
    $.ajax({
        url: 'https://hr-system-test-02.onrender.com/api/updeateWorkOffTimeForManager',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(workData),
        success: function (WorkSystemRes) {
            let { message } = WorkSystemRes
            if (message != null) {
                alert(message)
            }
            searchWorkInfoForManager(null, null, null, managerName)

        }, xhrFields: {
            withCredentials: true

        }, error: function (e) {
            console.log(e)
            alert('failed')
        }
    })
}
//剛開始登入綁定員工帳號
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

