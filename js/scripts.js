var gallons = parseInt(prompt("How many gallons?"));

var conversion = function (gallons) {
	return (gallons / .26417);
};
alert (conversion(gallons));
