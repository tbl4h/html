var allClasses = [];
var allClassesName = [];
var allElements = document.body.querySelectorAll('[class*=tag]');
elementLoop:
for(var i =0;i<allElements.length;i++){
    var potential = allElements[i];
    classLoop:
    for(var j=0;j<potential.classList.length;j++){
        if(potential.classList[j].match(/^tag/)) {
            let tmp = potential.classList[j];            
            if(allClassesName.indexOf(tmp) === -1)
                allClassesName.push(tmp);
        }
    }
}

for (i = 0; i<allClasses.length;i++){

}
console.log("akl");
console.log(allClassesName);
console.log(allClasses.length);