function comb_deux_chiffres (){
    let a = 0;
    while (a <= 8){
        let b = a + 1;
        while (b <= 9);{
        console.log(`${a}${b}`);
        b++;
    }
    a++;
}
}
comb_deux_chiffres();