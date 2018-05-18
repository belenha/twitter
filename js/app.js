var tweet = function(){
    var text = document.getElementById('tweetText').value;
    var textNode = document.createTextNode(text);
    var writedText = document.createElement('p');
    writedText.appendChild(textNode);
    var fatherOfP = document.getElementById('newText');
    fatherOfP.appendChild(writedText);
    document.getElementById('tweetText').value = '';
};

var showTweet = document.getElementById('tweet');
showTweet.addEventListener('click', tweet);

// var showTweet = document.getElementById('tweet');

// showTweet.addEventListener('click', function(){
//     var text = document.getElementById('tweetText').value;
//     if(text === null){
//         var deshabilitado = '';
//         showTweet.disabled = true;
//     };
//     var textNode = document.createTextNode(text);
//     var writedText = document.createElement('p');
//     writedText.appendChild(textNode);
//     var fatherOfP = document.getElementById('newText');
//     fatherOfP.appendChild(writedText);
//     document.getElementById('tweetText').value = '';
// });
