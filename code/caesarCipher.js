const caesarCipher = (string) => {
    let cipher = {
        1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 
        10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 
        18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'
    };
    let encrypted = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' || string[i] === ',' || string[i] === '?' || string[i] === '.' || string[i] === '!' || string[i] === "'") {
            encrypted += string[i];
            continue;
        }
        for (let num in cipher) {
            if (string[i] === cipher[num]) {
                if ( num == 26) {
                    encrypted += cipher[1];
                } else {
                    encrypted += cipher[parseInt(num) + 1];
                }
                
            }
        }
    }
    return encrypted;
}

export default caesarCipher;