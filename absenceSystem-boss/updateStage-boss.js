$(document).ready(function () {

    let { uuid } = JSON.parse(sessionStorage.getItem('uuid'));

    $(document).on('click', 'input[id*=absenceUpdate]', function () {

        var yes = confirm('你確定要更新嗎？');
        if (yes) {

            let epDate = $('#epDate').val()
            let epReason = $('#epReason').val()

            updateAbsence(uuid, epDate, epReason)
            alert('出來囉')

            window.location.href = 'http://127.0.0.1:5501/dayOff-boss/updateAbsence-boss.html'

            alert('要出來囉')
        } else {
            alert('你到底有甚麼問題');
        }

    }
    )


})