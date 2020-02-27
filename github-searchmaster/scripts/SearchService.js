
var SearchService = {
  searchResults: function(searchStr, callback) {
    if (searchStr.indexOf('https://api.github.com/search/repositories?q') === -1) {
      searchStr = 'https://api.github.com/search/repositories?q=' + searchStr + '&sort=stars&order=desc';
    }

    sendSearchRequest(searchStr, callback);
  },
};

function sendSearchRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();

  xhr.onload = function () {
    var nextPageLink = "";
    var responseData = []
    
    if (xhr.status !== 200) {
      callback(xhr.statusText, responseData, nextPageLink);
      return;
    }

    responseData = JSON.parse(xhr.responseText);
    var LinkHeader = xhr.getResponseHeader("Link");
    var SearchPagination = {};
    if (LinkHeader) {
      LinkHeader = LinkHeader.split(",");
      LinkHeader.forEach(function(p) {
        var section = p.split(";");
        var url = section[0].replace(/<(.*)>/, '$1').trim();
        var name = section[1].replace(/rel="(.*)"/, '$1').trim();
        SearchPagination[name] = url;
      });
    }
    if (SearchPagination.next && SearchPagination.next.length) {
      nextPageLink = SearchPagination.next;
    }
    callback(xhr.statusText, responseData.items, nextPageLink);
  }
};