function SearchPage(element) {
  Component.apply(this, arguments);
  this._render();
  this._initSearch();
  this._initResultsList();

  this._results = [];
  this._infoMessageText = "";
  this._userSearchString = "";
  this._isRequestProcessing = false;
  this._nextPageLink = "";


  this._startScrollListening();

  if (sessionStorage) {
    this._StateOnUnloadControl("save");
  
    if (sessionStorage.getItem('searchPageState')) {
      this._restoreComponentState(sessionStorage.getItem('searchPageState'));
    }
  }
};

SearchPage.prototype = Object.create(Component.prototype);
SearchPage.prototype.constructor = SearchPage;

SearchPage.prototype._initResultsList = function() {
  this._resultsList = new ResultsList(this._element.querySelector('[data-component="resultsList"]'));
};

SearchPage.prototype._initSearch = function() {
  this._search = new Search(this._element.querySelector('[data-component="search"]'));

  var self = this;

  this._search.on('searchInput', function (event) {
    self._userSearchString = event.detail.search.trim();
    self._infoMessageText = '';
    self._resultsList.setInfoMessageText(self._infoMessageText);
    self._results = [];
    self._resultsList.hideAllResults();

    if (self._userSearchString === "") return;

    self._resultsList.showPreloader();
    self._isRequestProcessing = true;
    SearchService.searchResults(self._userSearchString, self._requestHandler.bind(self));
  });
};

SearchPage.prototype._requestHandler = function(responseStatus, response, nextPageLink) {
  var self = this;
  self._isRequestProcessing = false;
  self._nextPageLink = nextPageLink;
  self._resultsList.hidePreloader();
  if (responseStatus != "OK") {
    self._infoMessageText = 'Oops, an error occured. Please try again later.';
    self._resultsList.setInfoMessageText(self._infoMessageText);
    sessionStorage && this._StateOnUnloadControl("clear");
    return;
  }

  if (response.length) {
    self._results = self._results.concat(self._extractInfoFromResponse(response));
    self._resultsList.showMoreResults(self._extractInfoFromResponse(response));
    if (!self._nextPageLink) {
      var message = "";
      if (self._results.length > 1) {
        message = self._results.length + ' results were found.';
      } else if (self._results.length === 1) {
        message = self._results.length + ' result was found.';
      }
      self._infoMessageText = message;
      self._resultsList.setInfoMessageText(self._infoMessageText);
    }
  } else {
    self._infoMessageText = 'Nothing was found.'
    self._resultsList.setInfoMessageText(self._infoMessageText);
  }
};

SearchPage.prototype._startScrollListening = function() {
  var self = this;

  document.addEventListener("scroll", function(event) {
    var remainigScrollDistanceToBottom = 
    document.documentElement.getBoundingClientRect().bottom - document.documentElement.clientHeight;
    if (remainigScrollDistanceToBottom < 100 && !self._isRequestProcessing && self._nextPageLink) {
      self._isRequestProcessing = true;
      self._resultsList.showPreloader();

      SearchService.searchResults(self._nextPageLink, self._requestHandler.bind(self));
    }
  });
};

SearchPage.prototype._extractInfoFromResponse = function(response) {
  var results = response.map(function(r) {
    return {
      name: r.name,
      html_url: r.html_url,
      stargazers_count: r.stargazers_count,
      description: r.description,
      owner_html_url: r.owner.html_url,
      owner_avatar_url: r.owner.avatar_url,
    }
  });
  return results;
};

SearchPage.prototype._restoreComponentState = function(searchPageState) {
  searchPageState = JSON.parse(searchPageState);
  this._userSearchString = searchPageState._userSearchString
  this._search.changeValue(this._userSearchString);

  this._results = searchPageState._results;
  this._resultsList.showMoreResults(this._results);

  this._infoMessageText = searchPageState._infoMessageText;
  this._resultsList.setInfoMessageText(this._infoMessageText);

  window.scrollTo(0, searchPageState.pageYOffset);
  this._nextPageLink = searchPageState._nextPageLink;

  if (searchPageState._isRequestProcessing) {
    this._resultsList.showPreloader();
    if (this._nextPageLink) {
      SearchService.searchResults(this._nextPageLink, this._requestHandler.bind(this));
    } else {
      SearchService.searchResults(this._userSearchString, this._requestHandler.bind(this));
    }
  }
};

SearchPage.prototype._StateOnUnloadControl = function(s) {
  if (s == "save") {
    window.addEventListener("beforeunload", this);
  } else if (s == "clear") {
    sessionStorage.clear();
    window.removeEventListener("beforeunload", this);
  }
};

SearchPage.prototype.handleEvent = function(event) {
  switch(event.type) {
    case 'beforeunload':
      var searchPageState = {
        _results: this._results,
        _userSearchString: this._userSearchString,
        _nextPageLink: this._nextPageLink,
        _infoMessageText: this._infoMessageText,
        _isRequestProcessing: this._isRequestProcessing,
        pageYOffset: pageYOffset,
      };
      sessionStorage.setItem('searchPageState', JSON.stringify(searchPageState));

    break;
  }
}

SearchPage.prototype._render = function() {
  this._element.innerHTML = 
    '<div data-component="search"> \n' + 
    '</div> \n' + 
    '<div data-component="resultsList"> \n' + 
    '</div>';
};