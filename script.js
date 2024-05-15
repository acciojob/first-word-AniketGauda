function firstWord(s) {
  // your code here
	s = s.trim();
    if(s==null || s.length==0)
        return s;
    else{
        let ans="";
        for(let i=0;i<s.length;i++){
            if(s[i]==' '){
                break;
            }
            else
                ans+=s[i];
        }
        return ans;
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
