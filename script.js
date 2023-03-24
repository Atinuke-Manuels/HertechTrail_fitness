const change = document.getElementById('image1');

change.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = 'red'
    event.target.style.color = "white";
    prompt('do you love nature too?', 'yes');
});

const change2 = document.getElementById('image2');

change2.addEventListener('click', (event) => {
    event.target.style.background = "green";
    event.target.style.color = 'red';
    alert("This is a beautiful landscape");
});

const change3 = document.getElementById('image3');

change3.addEventListener('click', (event) => {
    event.target.style.background = "purple";
    event.target.style.color = 'brown';
    alert("Sunset is beautiful");
});

const change4 = document.getElementById('image4');

change4.addEventListener('click', (event) => {
    event.target.style.background = "yellow";
    event.target.style.color = 'pink';
    prompt('do you love flowers?', 'yes');
});

const change5 = document.getElementById('image5');

change5.addEventListener('click', (event) => {
    event.target.style.background = "orange";
    event.target.style.color = 'green';
    alert("Butterflies");
});

const change6 = document.getElementById('image6');

change6.addEventListener('click', (event) => {
    event.target.style.background = "olive";
    event.target.style.color = 'orange';
    alert("King of the jungle");
});

const change7 = document.getElementById('image7');

change7.addEventListener('click', (event) => {
    event.target.style.background = "pink";
    event.target.style.color = 'darkorange';
    alert("I am unique");
});

const change8 = document.getElementById('image8');

change8.addEventListener('click', (event) => {
    event.target.style.background = "grey";
    event.target.style.color = 'blue';
    alert("colourful");
});

const change9 = document.getElementById('image9');

change9.addEventListener('click', (event) => {
    event.target.style.background = "darkslategrey";
    event.target.style.color = 'darkkhaki';
    alert("Family is everything");
});