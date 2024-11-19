function produceCipher(){

    // Ceasar Chipher
    const ceasrChiper = function(plaintext = "Hello World", offest = 10){
        let cipherText = '';
        
        // Loop through all of text input and change to cipher text
        let text = plaintext.split('')
        for(let i = 0; i < text.length; i++){
            let charCode = text[i].charCodeAt(0)
            // If the cap letters
            if(charCode >= 65 && charCode <= 90){
                newCharCode = (((charCode - 64)  + offest) % 26) + 64
            }else if(charCode >= 97 && charCode <= 122){
                newCharCode = (((charCode - 96 )  + offest) % 26) + 96
            }else{
                newCharCode = plaintext.charCodeAt(i)
            }

            cipherText += String.fromCharCode(newCharCode)
        }

        return cipherText;
    }

    // Return the Ceasar Chiper
    const getCaesrChiper = (plaintext,offest) => ceasrChiper(plaintext,offest);

    // =========================================================================== //

    

    return{
        getCaesrChiper
    }
}

let cipherMachine = produceCipher();
let hiddenMessage = cipherMachine.getCaesrChiper("Hello",3);
console.log(hiddenMessage)
