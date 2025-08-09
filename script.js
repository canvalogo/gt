







const inputName = document.getElementById('name')
const inputPassword = document.getElementById('password')
const sentBtn = document.getElementById('sentBtn')


let accauntStydent = [
    {
        stydentId: 1110,
        stydentPassword: 2021,
        stydentName: 'Behruz',
        stydentGroup: 'NF2074',
        stydentGrading: 3,
        studentCoyn:428,
        studentEnrgy:428,
    },
    {
        stydentId: 1107,
        stydentPassword: 2017,
        stydentName: 'figmachi🧟‍♀️',
        stydentGroup: 'NF2074',
          stydentGrading: 5,
          studentCoyn:428,
        studentEnrgy:428,
    },

]
sentBtn.addEventListener('click', () => {
    const userId = Number(inputName.value); // Raqamga aylantirdik
    const userPassword = Number(inputPassword.value);

    const foundStudent = accauntStydent.find(student =>
        student.stydentId === userId && student.stydentPassword === userPassword
    );

    if (foundStudent) {
        alert('Siz: ' + foundStudent.stydentName);
        localStorage.setItem('student', JSON.stringify(foundStudent))
        window.location.href = 'home.html'

    } else {
        alert('Login yoki parol noto‘g‘ri!');
    }
});
