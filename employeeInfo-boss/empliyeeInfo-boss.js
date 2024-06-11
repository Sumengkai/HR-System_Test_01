$(document).ready(function () {
    let { employeeCode,
        name,
        id,
        employeeEmail,
        section,
        title,
        situation,
        seniority,
        joinTime
    } = JSON.parse(sessionStorage.getItem('login'))
    $('#epCode').val(employeeCode)
    $('#epName').val(name)
    $('#epId').val(id)
    $('#epEmail').val(employeeEmail)
    $('#epSet').val(section)
    $('#epTt').val(title)
    $('#epSit').val(situation)
    $('#epSnr').val(seniority)
    $('#epJt').val(joinTime)
})