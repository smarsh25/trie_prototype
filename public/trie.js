Trie = function() {
  this.isWord = false;
  this.characters = {};
};

Trie.prototype.learn = function(word) {
  // reached end of word (or given no word)
  if (word.length === 0) {
    return;
  }

  var charKey, child;
  // save the first character, then extract/pop it from word
  charKey = word[0];
  word = word.substr(1);

  // add the new character if it doesn't exist already
  if (this.characters[charKey] === undefined) {    
    this.characters[charKey] = new Trie();
  }

  // if at end of word, create child node and set isWord to true
  if (word.length === 0) {
    this.characters[charKey].isWord = true;
    return;
  }

  // have the child learn the rest of the word
  child = this.characters[charKey];
  child.learn(word);
};

Trie.prototype.getWords = function(words, currentWord) {
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.
};

Trie.prototype.find = function(word) {
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.
  // Be sure to consider what happens if the word is not in this Trie.

  // if have successfully found preceding letters, and word is now empty, done/at end.
  if (word === "") {
    return this;
  }

  var charKey, child;
  // get the leading character of current word
  charKey = word[0];
  word = word.substr(1);

  if (this.characters[charKey] === undefined) {
    return null;
  }
  else {
    child = this.characters[charKey];
  }

  return child.find(word);
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};