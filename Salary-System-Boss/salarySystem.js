//新增薪水資料
$(document).ready(function () {
    let{ employeeCode }=JSON.parse(sessionStorage.getItem('login'))
    $('#salaryCode').val(employeeCode)
    $('#employeeCode').val(employeeCode)
    $(document).on('click', 'input[id*=intCreate]', function (e) {
        e.preventDefault()
        if (epCode.value == "") {
            alert("未填入「員工編號」資料");
            return false;
        } else if (epDate.value == "") {
            alert("未填入「姓名」資料");
            return false;
        }
        else {
            // id是屬性
            let epCode = $('#epCode').val()
            let salaryCode = $('#salaryCode').val()
            let epDate = $('#epDate').val()
            console.log(epCode)
            console.log(epDate)
            // sessionStorage.setItem('ulemployeeInfoList', JSON.stringify({
            //     employee_code: epCode,
            //     name: epName,
            //     id: epId,
            //     employee_email: epEmail,
            //     section: epSet,
            //     title: epTt,
            //     situation: epSit
            // })
            // )
            var yes = confirm('你確定要新增嗎？');
            if (yes) {
                creatSalarySystem(epCode, epDate, salaryCode)
            } else {
                alert('再考慮一下');
            }
        }
    })

})
//查詢薪水資料主管
$('#searchSalaryInfoListForSManagerBut').click(function (e) {
    e.preventDefault()
    let strName = $('#searchEmployeeCode').val()
    let salaryCode = $('#salaryCode').val()
    let startDate = $('#startDate').val()
    let endDate = $('#endDate').val()
    $('#updateDiv').empty()
    searchSalarySystemForManager(strName, startDate, endDate, salaryCode)
})

//監聽修改薪水資料前的產生按鈕(按下修改按鈕)
$(document).on('click', 'button[id*=btnUpdate]', function (e) {
    e.preventDefault()
    $('#updateDiv').empty()

    let uuid = $(this).prop('id').split('_')[1];
    let info = $(this).prop('value')
    // alert(info)
    let button = document.createElement('input');//監聽
    button.type = 'button';
    button.id = 'updateBut';
    button.value = '確認修改';
    button.className = 'btn';
    let nameSalary = document.createElement('h3');//標題
    nameSalary.textContent = info;
    let salary = document.createElement('input');//薪資
    let salaryP = document.createElement('span');
    salary.type = 'text';
    salary.id = 'salaryInput';
    salaryP.textContent = '輸入要修改的底薪 ->';
    let type = document.createElement('input');//日期
    type.type = 'date';
    type.id = 'date';
    let dateP = document.createElement('span');
    dateP.textContent = '輸入日期 -> (可以不填)';
    var brDiv = document.createElement('br');
    var brDiv2 = document.createElement('br');
    var brDiv3 = document.createElement('br');
    var brDiv4 = document.createElement('br');
    brDiv.innerHTML = "<br>";
    var container = document.getElementById('updateDiv');
    container.appendChild(nameSalary);
    container.appendChild(salaryP);
    container.appendChild(salary);
    container.appendChild(brDiv);
    container.appendChild(brDiv3);
    container.appendChild(dateP);
    container.appendChild(type);
    container.appendChild(brDiv2);
    container.appendChild(brDiv4);
    container.appendChild(button);

    //監聽修改薪水資料後的產生按鈕(按下確認修改按鈕)
    $('#updateBut').click(function (e) {
        e.preventDefault()
        // $('#searchSalaryInfoList').empty()
        let salaryCode = $('#salaryCode').val()//主管編號
        let type = $('#date').val()//日期
        let salary = $('#salaryInput').val()//薪資
        updateSalarySystem(uuid, salaryCode, salary, type)
    })
})
$('#searchSalaryInfoListForStaffBut').click(function (e) {
    e.preventDefault()
    let strName = $('#employeeCode').val()
    let startDate = $('#startDate').val()
    let endDate = $('#endDate').val()
    searchSalarySystemForStaff(strName, startDate, endDate)
})
//剛開始登入綁定員工帳號 (可以不用)
$(document).ready(function () {
    $(document).on('click', 'input[id*=onclick-submit]', function (e) {
        e.preventDefault()
        let epCode = $('#logCode').val()
        console.log(epCode)
        salarySystemEmployeeCodeLogin(epCode)

    })
})

