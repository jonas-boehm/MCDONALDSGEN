fetch("data.json")
  .then(response => response.json())
  .then(data => {
    
    var randomIndex = Math.floor(Math.random() * data.produkte.length);
    var randomObject = data.produkte[randomIndex];

    var template = document.getElementById('burger-templ').content;

    var imgElement = template.querySelector('.img').setAttribute("src", randomObject.img );
    var nameElement = template.querySelector('.name').innerText = randomObject.name;
    var caloriesElement = template.querySelector('.calories').innerText = randomObject.kalorien;

    var clone = document.importNode(template, true);
    document.getElementById('burger').appendChild(clone);
  });
