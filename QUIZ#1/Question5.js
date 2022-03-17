Myobj=["a","b","c","d,e,f","a,b,c"]
var UniqueValues= new Array();
for(let i=0;i,Myobj.length; i++){
    var word= Myobj[i];
    let sum=0;
    for(let i=0; i<Myobj.length; i++){
        if (Myobj[i].includes(word)){
            sum = sum+1;
        

        }
    }
    if (sum==1){
        UniqueValues.push(word);
    }
}
console.log(UniqueValues);