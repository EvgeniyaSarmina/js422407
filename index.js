//Инпуты
let StudentSurname = document.querySelector('#Surname')
let StudentName = document.querySelector('#Name')

//Кнопки
let addStudentButton = document.querySelector('.add-student')

//Таблица
let studentsListElement = document.querySelector('.students-list')

let studentsArray = []

addStudentButton.addEventListener('click', function(event) {
    let StudentSurnameValue = StudentSurname.value
    let StudentNameValue = StudentName.value

    let studentsString = `${StudentSurnameValue} ${StudentNameValue}`
    
    studentsArray.push(studentsString)

    console.log(studentsArray)
    let innerHTMLWithStudents = ''

    studentsArray.forEach((item, i) => {
        innerHTMLWithStudents += `<div>${i+1} ${item}</div>`
    })

    studentsListElement.innerHTML = innerHTMLWithStudents
})

