$(document).ready(function(){
    $('.save').click(function(){
        let input = $('.add-input')
        let newTr = document.createElement('tr')
        $(newTr).attr('class','new-tr')
        let newTd = document.createElement('td')
        let newTd1 = document.createElement('td')
        let newTd2 = document.createElement('td')
        let newTd3 = document.createElement('td')
        let editButton = $('<h3>Edit</h3>')
        let deleteButton = $('<h3>Delete</h3>')
        $(editButton,).attr('class','edit-button')
        $(deleteButton).attr('class','delete-button')
        newTr.appendChild(newTd)
        newTr.appendChild(newTd1)
        newTr.appendChild(newTd2)
        newTr.appendChild(newTd3)
        $(newTr).append(editButton)
        $(newTr).append(deleteButton)
        newTd.innerText = input[0].value
        newTd1.innerText = input[1].value
        newTd2.innerText = input[2].value
        newTd3.innerText = input[3].value
        $('.first-tr').after(newTr)
       
        input[0].value = "";
        input[1].value = "";
        input[2].value = "";
        input[3].value = "";
        // $('.new-user').css('display','none')

        $(deleteButton).click(function(){
            $(newTr).css('display','none')
        })
    })
    $('.add-button').click(function(){
        $('.new-user').css('display','block')
    })
    
})