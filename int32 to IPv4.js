function int32ToIp(n) {
	list = []
	i = 2
	r = 0
	q = 1
	while (i != 0) {
		if (n != 0) {
			r = n % 2
			q = Math.floor(n / 2)
			list.push(r)
			n = q
		} else {
			break;
		}

		i = i + 1;
	}
	if (n % 2 == 0) {
		list.reverse()
	}
	console.log(list)
	decimal1 = 0
	decimal2 = 0
	decimal3 = 0
	decimal4 = 0
	i = 0
	a = 0
	b = 0
	c = 0
	for (j = list.length - 1; j >= 0; j--) {
		if (list.length <= 8) {
			decimal1 = list[j] * Math.pow(2, i) + decimal1
			console.log(decimal1)
			i = i + 1
		} else if (list.length > 8 && list.length <= 16) {
			if (j >= list.length - 8) {
				decimal1 = list[j] * Math.pow(2, i) + decimal1
				i = i + 1
				console.log(decimal1)
			} else {
				decimal2 = list[j] * Math.pow(2, a) + decimal2
				a = a + 1
				console.log(decimal2)
			}
		} else if (list.length > 16 && list.length <= 24) {
			if (j >= list.length - 8) {
				decimal1 = list[j] * Math.pow(2, i) + decimal1;
				i = i + 1
			} else if (j < list.length - 8 && j >= list.length - 16) {
				decimal2 = list[j] * Math.pow(2, a) + decimal2;
				a = a + 1
			} else {
				decimal3 = list[j] * Math.pow(2, b) + decimal3;
				b = b + 1
			}
		} else {
			if (j >= list.length - 8) {
				decimal1 = list[j] * Math.pow(2, i) + decimal1;
				i = i + 1
			} else if (j < list.length - 8 && j >= list.length - 16) {
				decimal2 = list[j] * Math.pow(2, a) + decimal2;
				a = a + 1
			} else if (j < list.length - 16 && j >= list.length - 24) {
				decimal3 = list[j] * Math.pow(2, b) + decimal3;
				b = b + 1
			} else {
				decimal4 = list[j] * Math.pow(2, c) + decimal4;
				c = c + 1
			}
		}

	}
	return decimal4.toString() + "." + decimal3.toString() + "." + decimal2.toString() + "." + decimal1.toString()
}
