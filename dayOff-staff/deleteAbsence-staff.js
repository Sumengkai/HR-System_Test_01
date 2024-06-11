$(document).ready(function () {

    getAllAbsenceByEmployeeCodeDelete();

    $(document).on('click', 'button[id*=btnDelete]', function () {
        var yes = confirm('你確定要刪除嗎？');
        if (yes) {

            let uuid = $(this).prop('id').split('_')[1]

            deleteAbsence(uuid)
            window.location.href = 'http://127.0.0.1:5501/dayOff-staff/deleteAbsence-staff.html'
        } else {
            alert('再考慮一下');
        }

    }
    )


})
