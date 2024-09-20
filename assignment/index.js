

const questions = document.getElementById('questions')
const form = document.getElementById('myForm')


form.addEventListener('submit', (e)=>{
     
    let correctAnswer = ''
    let score = null

    // const check = document.createElement('input')
    // check.type = 'radio'
    // check.value = `${(a), (b), (c), (d)}`

  const quest1 = document.createElement('li')
   quest1.textContent = 'Which year was the nothern and southern protectorate almagamated ? (a)1905, (b)1916, (c)1914'
     correctAnswer = '(b)1916'
     if(correctAnswer){
        score += 1
     }
     else{
        score += 0
     }
    questions.appendChild(quest1)
    e.preventDefault
    
   

    const quest2 = document.createElement('li')
    quest2.textContent = 'Who almagamated the nothern and the southern protectorate ? (a)Lord Lugard, (b) Mary Slessor, (c)Bobby Charlton, (d) M.K.O Abiola '
    correctAnswer = '(a)Lord Lugard'
    if(correctAnswer){
        score += 1
     }
     else{
        score += 0
     }
    questions.appendChild(quest2)
    e.preventDefault
    
    
    const quest3 = document.createElement('li')
    quest3.textContent = 'Who stopped the killing of twins in Nigeria ? (a)Lord Lugard, (b) Mary Slessor, (c)Wayne Rooney, (d) Dennis Irwin '
    correctAnswer = '(b) Mary Slessor'
    if(correctAnswer){
        score += 1
     }
     else{
        score += 0
     }
    questions.appendChild(quest3)
    e.preventDefault
    
    
    const quest4 = document.createElement('li')
    quest4.textContent = 'Which year was the killing of twin stopped in Nigeria? (a)1876, (b) 1891, (c)1900, (d) 1867 '
    correctAnswer = '(a)1876'
    if(correctAnswer){
        score += 1
     }
     else{
        score += 0
     }
    questions.appendChild(quest4)
    e.preventDefault
    
    
    const quest5 = document.createElement('li')
    quest5.textContent = 'Who is the current manager of the football club Manchester United ? (a)Eric Ten Hag, (b) Carlo Anceloti, (c)Jose Mourinho, (d)David Moyes '
    correctAnswer = '(a)ERic Ten Hag'
    if(correctAnswer){
        score += 1
     }
     else{
        score += 0
     }
    questions.appendChild(quest5)
    e.preventDefault

    
    
    }) 
    
    


// submit.addEventListener('click', (e)=>{})