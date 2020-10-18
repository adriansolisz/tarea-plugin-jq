$(document).ready(function () {
    $('#btn-insert').click(function (e) { 
        e.preventDefault();
        console.log("llamando la función")
        let manufacturer = $('#console-manufacturer').val();
        let name = $('#console-name').val();
        let sales = $('#console-sales').val();
        if(!manufacturer || !name || !sales) {
            console.log(manufacturer, name, sales);
            alert("Todos los espacios son obligatorios")
        }
        else {
            console.log(manufacturer, name, sales);
            let newRecord = document.createElement('tr');
            newRecord.innerHTML = `<td>${manufacturer}</td>
                                <td>${name}</td>
                                <td>${sales}</td>`
            $('#statistics').append(newRecord);
            $('#console-form')[0].reset();
            alert($('tbody').children().length);
            if($('tbody').children().length == 2) {
                let converter = document.createElement('button');
                converter.setAttribute('id','btn-convert');
                converter.setAttribute('class','btn-insert');
                converter.setAttribute('onclick',"$('#statistics').tblToExcel();");
                converter.textContent = "Convertir tabla"
                $('#btn-convert-container').append(converter);
            }
        }
    });
});