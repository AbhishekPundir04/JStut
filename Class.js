

var li =document.getElementsByClassName('list-group-item');
console.log(li);
console.log(li[1]);
li[2].style.backgroundColor='green'
for (var i=0;i < li.length;i++){
    li[i].style.fontWeight= 'bold';
}




var li =document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

li[2].style.backgroundColor='green'
for (var i=0;i < li.length;i++){
    li[i].style.fontWeight= 'bold';
}