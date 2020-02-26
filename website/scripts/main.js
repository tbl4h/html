var allClasses = [];

var allElements = document.body.querySelectorAll('[class*=tag]');
elementLoop:
for(var i =0;i<allElements.length;i++){
    var potential = allElements[i];
    classLoop:
    for(var j=0;j<potential.classList.length;j++){
        if(potential.classList[j].match(/^tag/)){
            allClasses.push(potential); 
        }
    }
}

console.log(allClasses);