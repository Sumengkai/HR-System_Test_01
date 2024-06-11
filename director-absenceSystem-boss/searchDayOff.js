$(document).ready(function () {
    $(document).on('click', 'input[id*=intSearch]', function (e) {
        e.preventDefault()

        if (abYear.value == "") {
            alert("請輸入年份");
            return false;
        } else if (abMonth.value == "") {
            alert("請輸入月份");
            return false;
        } else {
            // id是屬性
            let abYear = $('#abYear').val()
            let abMonth = $('#abMonth').val()


            console.log(abYear)
            console.log(abMonth)
            getAllAbsenceByEmployeeCodeAndDate(abYear, abMonth)
        }
    })
})