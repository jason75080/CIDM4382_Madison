var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr)
{
    for (var idx in censoredWords)
    {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (var idx in customCensoredWords)
    {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr;
}
function addCensoredWord(word)
{
    customCensoredWords.push(word);
}
function getCensoredWords()
{
    return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;