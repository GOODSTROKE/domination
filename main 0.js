// PART 1

// 1. Write a function that puts a line through the text of the first `<li>` in the unordered "Arguments" list (`<ul`). Since this function always does the same thing, it requires no parameters!
// 2. Now call it! The first list item (`<li>`) should get what's known as a "strikethrough" style.

function addStrikethrough(){
    let argumentItem1 = document.querySelector('li');
    argumentItem1.style.textDecoration = "line-through";
}

addStrikethrough();

// 3. Write a function that takes in a string representing an DOM element's `id` and a string representing a url. The function should set the image with that `id` to have that url as its image source.

// 4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!

function setImage(id, url){

    let image = document.querySelector('#' + id)
    //or '#${id}' Interpolationor Concadination
    image.src = url;
    // adjust size
    image.style.height = "200px"
    
}

setImage('image-1', 'https://img1.wsimg.com/isteam/ip/25cc4b35-502b-40c1-a869-4006148d1cb5/KME%20-%20FETUS%20-%20015.png/:/rs=w:1160,h:387');
setImage('image-2', 'https://schulzmuseum.org/wp-content/uploads/2020/12/1968-07-31_WEB-scaled.jpg')
setImage('image-3', 'https://1.bp.blogspot.com/-LoD9TAVEtck/T1keS91SCyI/AAAAAAAABzw/Ur_zqIQL-U0/s1600/04-23-99.gif')

// 5. This next function also doesn't require any parameters: write a function that always removes the first `<li>` from the Arguments `<ul>`

function removeArgument (){
    let itemToRemove =document.querySelector('li');
    itemToRemove.remove();

}
// 6. Now use it to remove the first two items from that list. You'll need to call it twice!

removeArgument(); // remove 1st list item
removeArgument(); // remove 2nd list item

// 7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.


function adjustFont(size, id){
    let myId = document.querySelect('#${id}');
    myId.style.fontSize = size;

}

adjustFont("100px", "heading");

// PART 2

//1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.



function addElementToList(element){
    let arguments = document.querySelector('#arguments');
    arguments.appendChild(element);
}

// 2. Let's use it! Create an image element in Javascript and pass it into your function.

let newImage = document.createElement('img');
newImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Twemoji_1f351.svg/1200px-Twemoji_1f351.svg.png";
// newImage.style.height = '100px'
let newText = document.createElement('li');
newText.inner = "Mother"
addElementToList(newImage);
addElementToList(newText);


// 3. Write a function that takes in an image element and modifies its height to be 30 pixels.
function adjustImageHeight(img) {
    img.style

}


// 4. Let's use it. Query an image element and then pass it into the function.



// 5. Write a function that takes in an element and gives it the class `invisible`.

function makeInvisible(element){
    element.newImage = 'invisible'

}

//PART 3

// 1. Write a function that takes in text and returns a new `<li>` with the given text parameter as its `innerText`.

////Fuction returns Line <li>
function bondText(theStr){
    let listItem = document.createElement('li');
    listItem.innerText = theStr;
    return listItem;
    
}
//// Call
let newLine = bondText("New List Item");
appendChild(newLine);


//// New Header
function newHeader(size, text){
    let headerSize = 'h${size}'
    let header = document.createElement(headerSize);
    header.innerText = text;
    return header;

}

// 2. Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).

// *** - Need Help


// 3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.

// *** - Need Help




// 4. Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).

// *** - Need Help
