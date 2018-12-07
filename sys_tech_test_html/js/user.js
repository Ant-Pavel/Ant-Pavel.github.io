"use strict";
(function() {

var BASE_URL = location.pathname;

var env = new nunjucks.Environment(new nunjucks.WebLoader('../parts'));

env.addFilter('split', function(str, seperator) {
    return str.split(seperator);
});

function getData(method, url, callback) {

  let xhr = new XMLHttpRequest;
  xhr.open(method, BASE_URL + url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status !== 200 ) {
      console.log(xhr.status +' ' + xhr.statusText);
    } else {
      callback(JSON.parse(xhr.responseText));
    }
  }
}

  getData("GET", 'products.json', function(products) {
    products.forEach(function(item) {
      item['date'] = item['date'].slice(0, item['date'].indexOf(' '));
      item['date'] = formatDate(item['date']);
    });

    products = makeKeyFromProp(products, 'date');
    for (var day in products) {
      products[day] = makeKeyFromProp(products[day], 'document_id');
    }

    document.getElementById('wrapper').innerHTML = env.render(
        "daysList.html", {
          data: products,
        }
      );

    var daysList = document.querySelector('#documentsByDays');

    daysList.addEventListener('click', function(event) {
      let target = event.target;
      let productsToggler = target.closest('[data-products-toggler]');
      let docsToggler = target.closest('[data-docs-toggler]');
      if (productsToggler) {
        productsToggler.classList.toggle('js-show-products');
      }

      if (docsToggler) {
        docsToggler.classList.toggle('js-show-docs');
      }
    });
  });

  function makeKeyFromProp(array, prop) {
  var sum = 0;
  var rep = [];
  var result = array.reduce(function(acc, item, index, arr) {
    var key = arr[index][prop];
        sum += arr[index]['price'] *  arr[index]['quantity'];
        rep.push(arr[index]);

    if ( (index === arr.length - 1) || (arr[index][prop] !== arr[index + 1][prop]) ) {
      acc[key + '_' + (+sum.toFixed(10)).toLocaleString()] = rep;
      rep = [];
      sum = 0;
    }
    return acc;
  }, {});

  return result;
  }

  function formatDate(date) {
    date = new Date(date);
    var monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return date.getDate() + ' ' + monthNames[date.getMonth()];
  }

})();