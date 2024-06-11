$(document).ready(function () {

    getAbsenceBySectionAndLevel();

    $(document).on('click', 'button[id*=btnYes]', function () {
        var yes = confirm('你確定要批准嗎？');
        if (yes) {

            let uuid = $(this).prop('id').split('_')[1]
            let yesOrNo = 1

            managerCheckYesOrNo(uuid, yesOrNo)
            window.location.href = 'http://127.0.0.1:5501/dayOff-boss/checkAbsence-boss.html'
        } else {
            alert('再考慮一下');
        }

    }
    )

    $(document).on('click', 'button[id*=btnNo]', function () {
        var yes = confirm('你確定要拒絕嗎？');
        if (yes) {

            let uuid = $(this).prop('id').split('_')[1]
            let yesOrNo = 2

            managerCheckYesOrNo(uuid, yesOrNo)
            window.location.href = 'http://127.0.0.1:5501/dayOff-boss/checkAbsence-boss.html'
        } else {
            alert('再考慮一下');
        }
    }
    )


})



