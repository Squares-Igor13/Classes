class Options {
	constructor(obj) {
		this.height = obj.height
		this.width = obj.width
		this.bg = obj.bg
		this.fontSize = obj.fontSize
		this.textAlign = obj.textAlign
		this.rad = obj.rad
	}

	createNewDiv(html) {
		let div = document.createElement('div')
		div.textContent = html
		document.body.append(div)
		div.style.cssText = `
			width: ${this.width}px;
			height: ${this.height}px;
			font-size: ${this.fontSize}em;
			text-align: ${this.textAlign};
			background-color: ${this.bg};
			border-radius: ${this.rad}%;
		`
		console.log('SQ')
		return div
	}
}

class Circle extends Options {
	constructor(obj) {
		super(obj)
		this.size = obj.size
		this.width = this.size
		this.height = this.size
	}
	createNewDiv(html) {
		super.createNewDiv(html)
	}
}

let div_1 = new Options({
	width: 400,
	height: 50,
	bg: 'red',
	fontSize: 2,
	textAlign: 'right'
})

let div_2 = new Options({
	height: 200,
	width: 300,
	bg: 'blue',
	fontSize: 3,
	textAlign: 'center'
})

let circ = new Circle({
	size: 50,
	bg: 'green',
	rad: 50
})



