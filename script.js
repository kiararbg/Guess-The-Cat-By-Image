// Attach event listener to the button once the page is loaded
document.getElementById('catbtn').addEventListener('click', displayCat);
  const catType = ['Javanese',`Norwegian forest`,'Calico', ];
function displayCat() { 
  randomCat(catType);
  document.getElementById('catbtn').style.display = "none";   
}

function randomCat(catType){
    // making the button holding the cat container bigger and clearing the instructions
    document.getElementById('container2').style.display = "none";
    document.getElementById('question').style.display = "block";
    const randomIndex = Math.floor(Math.random() * catType.length);
    if(catType[randomIndex] === 'Javanese'){
        document.getElementById('image').innerHTML = `<img src="javanese-Cat.jpeg" width="320px" height="230px"><br>
        <input type="radio" name="typeCat" id="correct">
        <label type="radio" name="typeCat" value="Javanese" id="cat">Javanese Cat<br>
        <input type="radio" name="typeCat" id="wrong">
        <label type="radio" name="typeCat" value="Norwegian forest" id="cat">Norwegian Forest Cat<br>
        <input type="radio" name="typeCat" id="wrong2">
        <label type="radio" name="typeCat" value="Ociocat" id="cat">Ociocat<br>
        <button onclick="handleSubmit()" id="sub">Submit</button>
        `;
    }else if(catType[randomIndex] === 'Calico'){
      document.getElementById('image').innerHTML =
      `<img src="calico.wep.webp" width="320px" height="230px"><br>
        <input type="radio" name="typeCat" id="wrong2">
        <label type="radio" name="typeCat" value="Munchkin" id="cat">Munchkin Cat<br>
        <input type="radio" name="typeCat" id="wrong">
        <label type="radio" name="typeCat" value="Siberian" id="cat">Siberian Cat<br>
        <input type="radio" name="typeCat" id="correct">
        <label type="radio" name="typeCat" value="Calico" id="cat">Calico Cat<br>
        <button onclick="handleSubmit()" id="sub">Submit</button>
        `}else if(catType[randomIndex] === 'Norwegian forest'){
          document.getElementById('image').innerHTML =
      `<img src="forest-cat.jpeg" width="320px" height="230px"><br>
        <input type="radio" name="typeCat" id="wrong">
        <label type="radio" name="typeCat" value="Maine coon" id="cat">Maine Coon Cat<br>
        <input type="radio" name="typeCat" id="correct">
        <label type="radio" name="typeCat" value="Norwegian forest" id="cat">Norwegian Forest Cat<br>
        <input type="radio" name="typeCat" id="wrong2">
        <label type="radio" name="typeCat" value="Ragdoll" id="cat">Ragdoll cat<br>
        <button onclick="handleSubmit()" id="sub">Submit</button>`
        }
}

function handleSubmit(){
  const correctAnswer = document.getElementById('correct');
  const wrongAnswer = document.getElementById('wrong');
  const wrongAnswer2 = document.getElementById('wrong2');
    if(correctAnswer.checked){
    document.getElementById('header').style.display = "none";
    document.getElementById('image').style.display = "none";
    document.getElementById('result').innerHTML =  `<div id="output"><p style="color:green;">Correct!</p><br>
    <a href="index.html">Play again?</a><br>
    <p style="color:#f8eFae;">*You'll get a new cat*</p></div>`;
} else if(wrongAnswer.checked || wrongAnswer2.checked){
  document.getElementById('header').style.display = "none";
  document.getElementById('image').style.display = "none";
  document.getElementById('result').innerHTML = `<div id="output"><p style="color:red;">Wrong!</p><br>
  <a href="index.html">Play again?</a><br>
  <p style="color:#f8eFae;">*You'll get a new cat*</p></div>`;
} 
}

