$(document).ready(function () {
    let { employeeCode } = JSON.parse(sessionStorage.getItem('login'))
    $('#employeeCode').val(employeeCode)
    $('#searchEmployeeCode').val(employeeCode)
    $('#managerEmployeeCode').val(employeeCode)

    //上班打卡按鈕
    $('#workBtn').click(function (e) {
        e.preventDefault()
        let strName = $('#employeeCode').val()

        punchToWork(strName)
    })
    //產生下班打卡按鈕list
    $('#workOffBtn').click(function (e) {
        e.preventDefault()
        let strName = $('#employeeCode').val()
        getWorkInfoListToday(strName)
    })
    //下班打卡
    $(document).on('click', 'button[id*=btnUpdate]', function (e) {
        e.preventDefault()
        let uuid = $(this).prop('id').split('_')[1];
        let strName = $('#employeeCode').val()
        // alert(uuid)
        punchToOffWork(uuid, strName)
    })
    //員工搜尋打卡資訊按鈕
    $('#searchWorkInfoListForStaffBut').click(function (e) {
        e.preventDefault()
        let strName = $('#searchEmployeeCode').val()
        let startDate = $('#startDate').val()
        let endDate = $('#endDate').val()
        searchWorkInfoForStaff(strName, startDate, endDate)
    })
    //主管搜尋所有人的資訊按鈕
    $('#searchWorkInfoListForBossBut').click(function (e) {
        e.preventDefault()
        let strName = $('#searchEmployeeCode1').val()
        let startDate = $('#startDate').val()
        let endDate = $('#endDate').val()
        let manager = $('#managerEmployeeCode').val()

        searchWorkInfoForManager(strName, startDate, endDate, manager)
    })
    //新增曠職
    $('#creatAbsenteeismBtn').click(function (e) {
        e.preventDefault()
        let strName = $('#employeeCode1').val()
        let managerName = $('#managerEmployeeCode').val()
        let startDate = $('#absenteeismDate').val()
        creatAbsenteeismForManager(strName, startDate, managerName)

    })
    //產生刪除曠職按鈕list
    $('#deletetAbsenteeismBtn').click(function (e) {
        e.preventDefault()
        let strName = $('#employeeCode1').val()
        let startDate = $('#absenteeismDate').val()
        let managerName = $('#managerEmployeeCode').val()
        console.log(strName)
        console.log(startDate)
        console.log(managerName)
        getWorkInfoListAbsenteeism(strName, startDate, managerName)
    })
    //刪除曠職
    $(document).on('click', 'button[id*=btnDeleteAbsenteeism]', function (e) {
        e.preventDefault()
        let uuid = $(this).prop('id').split('_')[1];
        let strName = $('#employeeCode').val()
        let managerName = $('#managerEmployeeCode').val()
        deleteAbsenteeismForManager(uuid, strName, managerName)
    })
    //刪除區間內的所有打卡資訊
    $('#deleteWorkInfoListForBossBut').click(function (e) {
        e.preventDefault()
        let startDate = $('#startDate').val()
        let endDate = $('#endDate').val()
        let deleteInput = $('#deleteInput').val()
        var yes = confirm('你確定要刪除嗎？');
        if (yes) {
            deleteWorkInfoByDateBetween(startDate, endDate, deleteInput)
        } else {
            alert('再考慮一下');
        }
    })

    // ====
    //監聽修改薪水資料前的產生按鈕(按下修改按鈕)
    $(document).on('click', 'button[id*=btnUpManager]', function (e) {
        e.preventDefault()
        $('#updateDiv').empty()
        let uuid = $(this).prop('id').split('_')[1];
        let info = $(this).prop('value')
        let button = document.createElement('input');//監聽
        button.type = 'button';
        button.id = 'updateButForManager';
        button.value = '確認修改';
        button.className = 'btn';
        let nameSalary = document.createElement('h3');//標題
        nameSalary.textContent = info;
        let type = document.createElement('input');//日期
        type.type = 'datetime-local';
        type.id = 'date';
        let dateP = document.createElement('span');
        dateP.textContent = '補打卡下班 -> ';
        var brDiv = document.createElement('br');
        var brDiv2 = document.createElement('br');
        var brDiv3 = document.createElement('br');
        var brDiv4 = document.createElement('br');
        brDiv.innerHTML = "<br>";
        var container = document.getElementById('updateDiv');
        container.appendChild(nameSalary);
        container.appendChild(brDiv);
        container.appendChild(dateP);
        container.appendChild(type);
        container.appendChild(brDiv2);
        container.appendChild(brDiv4);
        container.appendChild(button);
        //監聽修改薪水資料後的產生按鈕(按下確認修改按鈕)
        $('#updateButForManager').click(function (e) {
            let strName = $('#searchEmployeeCode').val()
            e.preventDefault()
            let type = $('#date').val()//日期
            updeateWorkOffTimeForManager(uuid, type)
        })
    })
})
