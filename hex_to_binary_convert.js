


function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}


var num='f030c48108e08';

let result="";
num.split(" ").forEach(str=>{
  result +=hex2bin(str);
});


console.log(result);

/*
‭1111000000110000110001001000000100001000111000001000‬
1111000000110000110001001000000100001000111000001000


*/
