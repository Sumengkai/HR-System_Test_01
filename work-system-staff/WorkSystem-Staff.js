$(document).ready(function () {    
    let{ employeeCode }=JSON.parse(sessionStorage.getItem('login'))
    $('#employeeCode').val(employeeCode)
    $('#searchEmployeeCode').val(employeeCode)
//打卡上班
$('#workBtn').click(function (e) {
    e.preventDefault()
    

    let strName = $('#employeeCode').val()
    punchToWork(strName)
})
//下班打卡
$('#workOffBtn').click(function (e) {
    e.preventDefault()
    let strName = $('#employeeCode').val()

    getWorkInfoListToday(strName)
})
$(document).on('click', 'button[id*=btnUpdate]', function (e) {
    e.preventDefault()
    let uuid = $(this).prop('id').split('_')[1];
    let strName = $('#employeeCode').val()
    punchToOffWork(uuid, strName)
})
$('#searchWorkInfoListForStaffBut').click(function (e) {
    e.preventDefault()
    let strName = $('#searchEmployeeCode').val()
    let startDate = $('#startDate').val()
    let endDate = $('#endDate').val()
    searchWorkInfoForStaff(strName, startDate, endDate)
})
//剛開始登入綁定員工帳號(可以不用)
// $(document).ready(function () {
//     $(document).on('click', 'input[id*=onclick-submit]', function (e) {
//         e.preventDefault()
//         let epCode = $('#logCode').val()
//         console.log(epCode)
//         employeeCodeLogin(epCode)

//     })
// })
})