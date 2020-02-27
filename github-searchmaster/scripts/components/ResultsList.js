function ResultsList(element) {
  Component.apply(this, arguments);
  this._render();
}

ResultsList.prototype = Object.create(Component.prototype);
ResultsList.prototype.constructor = ResultsList;

ResultsList.prototype.showPreloader = function () {
  var PreloaderElement = this._element.querySelector(".results__preloader");
  PreloaderElement.classList.add('results__preloader--visible');
};

ResultsList.prototype.hidePreloader = function () {
  var PreloaderElement = this._element.querySelector(".results__preloader");
  PreloaderElement.classList.remove('results__preloader--visible');
};

ResultsList.prototype.showMoreResults = function (results) {
  var ListElement = this._element.querySelector(".results__list");

  results.forEach(function(item) {

    item.stargazers_count = ((+item.stargazers_count > 1000) ? Math.round(item.stargazers_count/1000) + 'k' : item.stargazers_count);
    if (item.description) {
      item.description = (item.description.length > 250) ? (item.description.slice(0, 250) + "...") : item.description;
    }
    
    ListElement.insertAdjacentHTML('beforeend', 
    '        <li class="results__item res"> \n' + 
    '          <a href="' + item.owner_html_url + '" class="res__image-link" target="_blank"> \n' + 
    '            <img class="res__image" src="' + item.owner_avatar_url + '" alt="avatar_url"> \n' + 
    '          </a> \n' + 
    '          <div class="res__text-wrap"> \n' + 
    '            <div class="res__header"> \n' + 
    '              <a href="' + item.html_url + '" target="_blank" class="res__title">'+ item.name + '</a> \n' + 
    '              <div class="res__rating"> \n' + 
    '                 <svg class="res__rating-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"> \n' + 
    '                   <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path> \n' + 
    '                 </svg> ' + 
    '                 <span class="res__rating-text">' + item.stargazers_count + '</span>' + 
    '              </div> \n' + 
    '            </div> \n' + 
    '            ' + (item.description ? ('<p class="res__descr">' + item.description + '</p>') : '') + ' \n' + 
    '          </div> \n' + 
    '        </li> \n'
    );
  });
};

ResultsList.prototype.hideAllResults = function () {
  var ListElement = this._element.querySelector(".results__list");
  ListElement.innerHTML = '';
};

ResultsList.prototype.setInfoMessageText = function(text) {
  var MessageElement = this._element.querySelector(".results__message");
  MessageElement.textContent = text;
};

ResultsList.prototype._render = function() {
  var html = 
  '<div class="results"> \n' + 
  '  <div class="results__container"> \n' + 
  '    <div class="results__title">Results</div> \n' + 
  '      <ul class="results__list"> \n' + 
  '      </ul> \n' + 
  '      <div class="results__preloader"><div></div><div></div><div></div></div>' + 
  '      <div class="results__message"></div>' + 
  '    </div> \n' + 
  '</div> \n';
  
  this._element.innerHTML = html;
};