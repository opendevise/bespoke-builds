Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke'),
  builds = require('../../lib/bespoke-builds.js');

describe('bespoke-builds', function() {
  var deck,
    createDeck = function() {
      var parent = document.createElement('article');
      for (var i = 1; i <= 5; i++) {
        var section = document.createElement('section');
        parent.appendChild(section);
      }

      document.body.appendChild(parent);

      deck = bespoke.from(parent, [
        builds()
      ]);
    },
    destroyDeck = function() {
      deck.fire('destroy');
      var parentNode = deck.parent.parentNode;
      if (parentNode) parentNode.removeChild(deck.parent);
      deck = null;
    };

  beforeEach(createDeck);
  afterEach(destroyDeck);

  describe('behavior a', function() {
    beforeEach(function() {
      deck.slide(0);
    });

    it('should do something', function() {
    });
  });
});
