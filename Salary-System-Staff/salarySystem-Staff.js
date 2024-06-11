$(document).ready(function () {
    let{ employeeCode }=JSON.parse(sessionStorage.getItem('login'))
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
            let epCode = $('#epCode').val()
            let salaryCode = $('#salaryCode').val()
            let epDate = $('#epDate').val()
            console.log(epCode)
            console.log(epDate)
            alert(epDate)
            var yes = confirm('你確定要新增嗎？');
            if (yes) {
                creatSalarySystem(epCode, epDate, salaryCode)
            } else {
                alert('再考慮一下');
            }
        }
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