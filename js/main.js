// создали функцию, в которой создали массив объектов для объявлений
'use strict';
var сreateAdvertisement = function (title, price, rooms, guests, description, coordinateX, coordinateY, typeFix, wigth, checkinFix, checkoutFix) {
  var arr = [];
  var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  for (var i = 1; i < 9; i++) {
    var numFeatures = randomNumber(1, 6);
    var wigthX = randomNumber(1, wigth);
    var numPhotos = randomNumber(1, 3);
    var higthY = randomNumber(130, 630);
    switch (numFeatures) {
      case 1:
        var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
        break;
      case 2:
        features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];
        break;
      case 3:
        features = ['wifi', 'dishwasher', 'parking', 'washer'];
        break;
      case 4:
        features = ['wifi', 'dishwasher', 'parking'];
        break;
      case 5:
        features = ['wifi', 'dishwasher'];
        break;
      case 6:
        features = ['wifi'];
        break;
    }
    switch (numPhotos) {
      case 1:
        var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
        break;
      case 2:
        photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'];
        break;
      case 3:
        photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg'];
        break;
    }
  }
  if (typeFix === 1) {
    var type = 'palace';
  } else {
    if (typeFix === 2) {
      type = 'flat';
    } else {
      if (typeFix === 3) {
        type = 'house';
      } else {
        if (typeFix === 4) {
          type = 'bungalo';
        } else {
          type = 'NaN';
        }
      }
    }
  }
  if (checkinFix === 1) {
    var checkin = '12:00';
  } else {
    if (checkinFix === 2) {
      checkin = '13:00';
    } else {
      if (checkinFix === 3) {
        checkin = '14:00';
      } else {
        checkin = 'NaN';
      }
    }
  }
  if (checkoutFix === 1) {
    var checkout = '12:00';
  } else {
    if (checkoutFix === 2) {
      checkout = '13:00';
    } else {
      if (checkoutFix === 3) {
        checkout = '14:00';
      } else {
        checkout = 'NaN';
      }
    }
  }

  var adressImg = 'img/avatars/user0' + i + '.png';
  var address = coordinateX + ', ' + coordinateY;
  var advertisement = {
    'author': {
      'avatar': adressImg
    },
    'offer': {
      'title': title,
      'address': address,
      'price': price,
      'type': type,
      'rooms': rooms,
      'guests': guests,
      'checkin': checkin,
      'checkout': checkout,
      'features': features,
      'description': description,
      'photos': photos
    },
    'location': {
      'x': wigthX,
      'y': higthY
    }
  };
  arr[i] = advertisement;
  return arr;
};

var elementLocation = function (wigthX, higthY, imgUrl) {
  var pin = document.querySelector('#pin');
  var widthPin = 20;
  var heightPin = 40;
  pin.style = 'left:' + wigthX + widthPin + 'px top:' + higthY + heightPin + 'px';
  pin.src = imgUrl;
  pin.alt = 'Метки объявлений';
  return pin;
};

var elementAppend = function () {
  var pins = document.querySelectorAll('.map__pin');
  var fragment = document.createDocumentFragment();
  var data = сreateAdvertisement(); // функция возвратит нам коллекцию элементов
  for (var i = 1; i < 9; i++) {
    var meta = elementLocation(data[i].location.x, data[i].location.y, data[i].author.avatar);
    fragment.appendChild(meta);
  }
  pins.appendChild(fragment);
};
elementAppend();

