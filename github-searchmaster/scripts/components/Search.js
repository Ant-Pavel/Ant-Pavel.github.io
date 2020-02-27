function Search(element) {
  Component.apply(this, arguments);

  this._render();

  var self = this;
  this._debouncedTrigger = debounce(this._trigger, 700);

  this.on('input', '[data-element="search-input"]', function (event) {
    self._debouncedTrigger('searchInput', { search: event.delegateTarget.value });
  });

};

Search.prototype = Object.create(Component.prototype);
Search.prototype.constructor = Search;

Search.prototype.changeValue = function(value) {
  var InputElement = this._element.querySelector('[data-element="search-input"]');
  InputElement.value = value;
};

Search.prototype._render = function() {
  this._element.innerHTML = 
  '<div class="search"> \n' + 
  '  <div class="search__container"> \n' +
  '    <div class="search__input-wrap"> \n' +
  '      <input class="search__input" type="text" placeholder="Search..." data-element="search-input"> \n' +
  '    </div> \n' +
  '  </div> \n' +
  '</div> \n';
}

function debounce(f, ms) {
  var timerId = null;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(function() {
     f.apply(context, args); 
   }, ms);
  }
};