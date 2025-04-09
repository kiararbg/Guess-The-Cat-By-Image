// Attach event listener to the button once the page is loaded
document.getElementById('catbtn').addEventListener('click', displayCat);
  const catType = ['Javanese','Norwegian forest','Calico', 'Ragdoll', 'Persian', 'Munchkin', 'Sphynx', 'Russian Blue', 'Abyssinian', 'Scottish Fold', 'Balinese', //'Turkish Van', 'Ociocat', 'Snowshoe', 'Somali', 'Burmilla' ];
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
        document.getElementById('image').innerHTML = `<img src="Javanese-Cat.jpeg" width="320px" height="230px"><br>
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
        <label type="radio" name="typeCat" value="Birman" id="cat">Birman Cat<br>
        <button onclick="handleSubmit()" id="sub">Submit</button>`
        }else if(catType[randomIndex] === 'Ragdoll'){
            document.getElementById('image').innerHTML =
        `<img src="Ragdoll.jpg" width="320px" height="230px"><br>
          <input type="radio" name="typeCat" id="wrong">
          <label type="radio" name="typeCat" value="Maine coon" id="cat">Maine Coon Cat<br>
          <input type="radio" name="typeCat" id="wrong2">
          <label type="radio" name="typeCat" value="Munchkin" id="cat">Munchkin Cat<br>
          <input type="radio" name="typeCat" id="correct">
          <label type="radio" name="typeCat" value="Ragdoll" id="cat">Ragdoll Cat<br>
          <button onclick="handleSubmit()" id="sub">Submit</button>`
          }else if(catType[randomIndex] === 'Persian'){
            document.getElementById('image').innerHTML =
        `<img src="Ragdoll.jpg" width="320px" height="230px"><br>
          <input type="radio" name="typeCat" id="correct">
          <label type="radio" name="typeCat" value="Persian" id="cat">Persian Cat<br>
          <input type="radio" name="typeCat" id="wrong2">
          <label type="radio" name="typeCat" value="Munchkin" id="cat">Munchkin Cat<br>
          <input type="radio" name="typeCat" id="wrong">
          <label type="radio" name="typeCat" value="Siamnese" id="cat">Siamnese Cat<br>
          <button onclick="handleSubmit()" id="sub">Submit</button>`
          }else if(catType[randomIndex] === 'Munchkin'){
            document.getElementById('image').innerHTML =
        `<img src="Munchkin.jpg" width="320px" height="230px"><br>
          <input type="radio" name="typeCat" id="wrong2">
          <label type="radio" name="typeCat" value="Persian" id="cat">Persian Cat<br>
          <input type="radio" name="typeCat" id="correct">
          <label type="radio" name="typeCat" value="Munchkin" id="cat">Munchkin Cat<br>
          <input type="radio" name="typeCat" id="wrong">
          <label type="radio" name="typeCat" value="Ragdoll" id="cat">Siamnese Cat<br>
          <button onclick="handleSubmit()" id="sub">Submit</button>`
          }else if(catType[randomIndex] === 'Sphynx'){
            document.getElementById('image').innerHTML =
        `<img src="Sphynx_About_Tetsu.jpg" width="320px" height="230px"><br>
          <input type="radio" name="typeCat" id="wrong2">
          <label type="radio" name="typeCat" value="Javanese" id="cat">Javanese Cat<br>
          <input type="radio" name="typeCat" id="wrong">
          <label type="radio" name="typeCat" value="Ocicat" id="cat">Ocicat<br>
          <input type="radio" name="typeCat" id="correct">
          <label type="radio" name="typeCat" value="sphnx" id="cat">Sphynx Cat<br>
          <button onclick="handleSubmit()" id="sub">Submit</button>`
          }else if(catType[randomIndex] === 'Russian Blue'){
            document.getElementById('image').innerHTML =
        `<img src="russian-blue-cats.jpg" width="320px" height="230px"><br>
          <input type="radio" name="typeCat" id="wrong2">
          <label type="radio" name="typeCat" value="Devon Rex" id="cat">Devon Rex Cat<br>
          <input type="radio" name="typeCat" id="wrong">
          <label type="radio" name="typeCat" value="British Shorthair" id="cat">British Shorthair Cat<br>
          <input type="radio" name="typeCat" id="correct">
          <label type="radio" name="typeCat" value="Russian Blue" id="cat">Russian Blue Cat<br>
          <button onclick="handleSubmit()" id="sub">Submit</button>`
          }else if(catType[randomIndex] === 'Abyssinian'){
            document.getElementById('image').innerHTML =
        `<img src="Abyssinian.jpg" width="320px" height="230px"><br>
          <input type="radio" name="typeCat" id="correct">
          <label type="radio" name="typeCat" value="Abyssinian" id="cat">Abyssinian Cat<br>
          <input type="radio" name="typeCat" id="wrong">
          <label type="radio" name="typeCat" value="Sphynx" id="cat">Sphynx Cat<br>
          <input type="radio" name="typeCat" id="wrong2">
          <label type="radio" name="typeCat" value="Persian" id="cat">Persian Cat<br>
          <button onclick="handleSubmit()" id="sub">Submit</button>`
          }else if(catType[randomIndex] = 'Scottish Fold'){
    document.getElementById('image').innerHTML =
      `<img src="scottishFold.format-jpeg.jpg" width="320px" height="230px"><br>
        <input type="radio" name="typeCat" id="wrong">
        <label type="radio" name="typeCat" value="Sphynx" id="cat">Sphynx Cat<br>
        <input type="radio" name="typeCat" id="wrong2">
        <label type="radio" name="typeCat" value="Burmilla" id="cat">Burmilla Cat<br>
        <input type="radio" name="typeCat" id="correct">
        <label type="radio" name="typeCat" value="Scottish Fold" id="cat">Scottish fold cat<br>
        <button onclick="handleSubmit()" id="sub">Submit</button>`
}else if(catType[randomIndex] = 'Balinese'){
    document.getElementById('image').innerHTML =
      `<img src="balinese.jpg" width="320px" height="230px"><br>
        <input type="radio" name="typeCat" id="wrong">
        <label type="radio" name="typeCat" value="British long hair" id="cat">British long hair Cat<br>
        <input type="radio" name="typeCat" id="wrong2">
        <label type="radio" name="typeCat" value="Ragamuffin" id="cat">Ragamuffin cat<br>
        <input type="radio" name="typeCat" id="correct">
        <label type="radio" name="typeCat" value="balinese" id="Balinese cat<br>
        <button onclick="handleSubmit()" id="sub">Submit</button>`
}else if(catType[randomIndex] = 'Turkish Van'){
    document.getElementById('image').innerHTML =
      `<img src="turkish-van.webp" width="320px" height="230px"><br>
        <input type="radio" name="typeCat" id="wrong">
        <label type="radio" name="typeCat" value="Singapura" id="cat">Singapura Cat<br>
        <input type="radio" name="typeCat" id="correct">
        <label type="radio" name="typeCat" value="turkish van" id="cat">Turkish van Cat<br>
        <input type="radio" name="typeCat" id="wrong2">
        <label type="radio" name="typeCat" value="Balinese" id="cat">Balinese cat<br>
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
