$(document).ready(function () {
    readEmployeeInfo()

    $('#btnInInputBar').click(function (e) {
        e.preventDefault()

        let epCode = $('#txtName').val()
        readEmployeeInfo(epCode)
        $('#txtName').val('')
    })

    $(document).on('click', 'button[id*=btnDelete]', function (e) {
        e.preventDefault()
        // id是屬性
        let epCode = $(this).prop('id').split('_')[1]
        var yes = confirm('你確定要刪除嗎？');
        if (yes) {
            alert('已刪除資料');
            deleteEmployeeInfo(epCode)
        } else {
            alert('再考慮一下');
        }
    })

    $(document).on('click', 'button[id*=btnUpdate]', function (e) {
        e.preventDefault()
        // id是屬性
        let epCode = $(this).prop('id').split('_')[1]
        readOneEmployeeInfo(epCode)
    })
})