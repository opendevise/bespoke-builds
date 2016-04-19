module.exports = function() {
  return function(deck) {
    console.log('registered builds on deck with root ' + deck.parent.outerHTML.match(/<[^>]+>/)[0]);
  };
};
