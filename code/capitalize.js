const capitalize = (string) => {
    let myArray = string.split(" ");
    for (let i=0; i < myArray.length; i++) {
        myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1)
    }
    let text = myArray.toString();
    text = text.replace(/,/g, " ");
    return text;
}

export default capitalize;