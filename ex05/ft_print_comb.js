function comb_trois_chiffres(){
    let a = 0;
    while (a <= 7) {
        let b = a + 1;
        while (b <= 8) {
            let c = b + 1;
            while (c <= 9) {
                console.log(`${a}${b}${c}`);
                c++;
            }
            b++;
        }
        a++;
    } 
}

comb_trois_chiffres()