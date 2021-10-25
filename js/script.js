const row = document.querySelector('.row');

for (let i=1; i<=100; i++){
  const box = document.createElement('div');

  box.className = 'box';
  box.innerHTML = i; //+ 1; //i +1 serve a noi per visualizzare il numero del box
  row.append(box);

  //versione più elegante
  if (!(i % 3) && !(i % 5)) {
    box.classList.add('all');
  }else if (!(i % 3)){
    box.classList.add('three');
  }else if (!(i % 5)){
    box.classList.add('five');
  }
}