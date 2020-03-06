// создали функцию, в которой создали массив объектов для объявлений
var сreateAdvertisement = function (title, price, rooms, guests, description, coordinateX, coordinateY, typeFix, wigth, checkinFix, checkoutFix) {
  var arr = [];
  for (var i = 1; i < 9; i++) {
    var numFeatures = randomInteger(1, 6);
    var wigthX = randomInteger(1, wigth);
	var numPhotos = randomInteger(1, 3);
    var higthY = randomInteger(130, 630);
    switch (numFeatures) {
			case 1:
				var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
			break;
			case 2:
				var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];
			break;
			case 3:
				var features = ['wifi', 'dishwasher', 'parking', 'washer'];
			break;
			case 4:
				var features = ['wifi', 'dishwasher', 'parking'];
			break;
			case 5:
				var features = ['wifi', 'dishwasher'];
			break;
			case 6:
				var features = ['wifi'];
			break;
		}
		switch (numPhotos) {
			case 1:
				var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
			break;
			case 2:
				var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg'];
			break;
			case 3:
				var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg'];
			break;
		}
	}
		if (typeFix === 1) {
			var type = 'palace';
		} else {
			if (typeFix === 2) {
				var type = 'flat';
			} else {
				if (typeFix === 3) {
					var type = 'house';
				} else {
					if (typeFix === 4) {
						var type = 'bungalo';
					} else {
						var type = 'NaN';
					}
				}
			}
		}

		if (checkinFix === 1) {
			var checkin = '12:00';
		} else {
			if (checkinFix === 2) {
				var checkin = '13:00';
			} else {
				if (checkinFix === 3) {
					var checkin = '14:00';
				} else {
					var checkin = 'NaN';
				}	
			}
		}

	if (checkoutFix === 1) {
		var checkout = '12:00';
	} else {
		if (checkoutFix === 2) {
			var checkout = '13:00';
		} else {
			if (checkoutFix === 3) {
				var checkout = '14:00';
			} else {
				var checkout = 'NaN';
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


