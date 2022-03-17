function checkPalindrome(str){
    const arrayvalues= string.split('');
    const reverseArrayValues= arrayValues.reverse();
    const reverseString= reverseArrayValues.join('');
    if(string==reverseString){
        console.log("String is Palindrome :)")
    }
    else{
        console.log("String is not Palindrome :(");
    }
    
}
var myString="iqramalik";
checkPalindrome(myString);