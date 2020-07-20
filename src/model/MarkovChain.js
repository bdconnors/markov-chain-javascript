class MarkovChain{
    constructor(txt){
        this.txt = txt;
        this.dictionary = {};
    }
    generate(){
        this.makeDictionary();
        const allWords = this.getAllWords();
        let chain = '';
        let word = this.getWord();
        for (let i = 0; i < allWords.length; i++ ) {
            chain +=  word + ' ';
            word = this.getNextWord(word);
        }
        return chain;
    }
    makeDictionary(){
        const txtArray = this.txt.split(' ');
        let word;
        let nextWord;
        for (let i = 0; i < txtArray.length; i++) {
            word = this.format(txtArray[i]);
            if (!this.dictionary[word]) {
                this.addWord(word);
            }
            if (txtArray[i + 1]) {
                nextWord = this.format(txtArray[i+1]);
                this.addToChain(word,nextWord);
            }
        }
    }
    getWord(){
        const allWords = this.getAllWords();
        const randomIndex = Math.floor(Math.random() * allWords.length);
        return allWords[randomIndex];
    }
    getNextWord(currentWord){
        let nextWord;
        let wordArray;
        let hasWord = this.hasWord(currentWord);
        if(!hasWord){
            nextWord = this.getWord();
        }else{
            wordArray = this.dictionary[currentWord];
            nextWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        }
        return nextWord;
    }
    hasWord(word){
        return this.dictionary.hasOwnProperty(word);
    }
    getAllWords(){
        return Object.keys(this.dictionary);
    }
    getDictionary(){
        return this.dictionary;
    }
    addWord(word){
        this.dictionary[word] = [];
    }
    addToChain(word,value){
        this.dictionary[word].push(value);
    }
    format(txt){
        return txt.toLowerCase().replace(/[\W_]/, "");
    }
}
module.exports = MarkovChain;