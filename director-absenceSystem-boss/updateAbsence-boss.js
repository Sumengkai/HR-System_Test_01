$(document).ready(function () {

    getAllAbsenceByEmployeeCodeUpdate();

    $(document).on('click', 'button[id*=btnUpdate]', function () {

        var yes = confirm('確定是這個假單？');
        if (yes) {

            let uuid = $(this).prop('id').split('_')[1]

            sessionStorage.setItem('uuid', JSON.stringify({
                uuid: uuid
            })
            )

            window.location.href = 'http://127.0.0.1:5501/dayOff-boss/updateStage-boss.html'
        } else {
            alert('按錯? 還是你在旋轉我?');
        }

    }
    )


})