/**
 * Icons for information elements.
 */

import {Component} from "react";
import React from "react";

class IconLogic extends Component {
	constructor (props) {
		super(props);

		this.style = {
			fill: '#ffffff',
			stroke: '#555555',
			strokeWidth: 10
		};
	}

	render () {
		return (
			<svg viewBox="0 0 100 100">
				<rect style={this.style}
					  x={this.style.strokeWidth / 2} y={this.style.strokeWidth / 2}
					  width={100 - this.style.strokeWidth} height={100 - this.style.strokeWidth} />
			</svg>
		);
	}
}

class IconEthics extends Component {
	constructor (props) {
		super(props);

		this.style = {
			fill: '#ffffff',
			stroke: '#555555',
			strokeWidth: 10
		};
	}

	render () {
		const halfStrokeWidth = this.style.strokeWidth / 2;

		return (
			<svg viewBox="0 0 100 100">
				<polygon style={this.style}
						 points={halfStrokeWidth + ',' + halfStrokeWidth
						 + ' 50,' + halfStrokeWidth
						 + ' 50,50'
						 + ' ' + (100 - halfStrokeWidth) + ',50'
						 + ' ' + (100 - halfStrokeWidth) + ',' + (100 - halfStrokeWidth)
						 + ' ' + halfStrokeWidth + ',' + (100 - halfStrokeWidth)
						 } />
			</svg>
		);
	}
}

class IconSensing extends Component {
	constructor (props) {
		super(props);

		this.style = {
			fill: '#ffffff',
			stroke: '#555555',
			strokeWidth: 10
		};

		// This is as a workaround, so the sides do not get sliced off for small circles.
		this.outerBorderMargin = 3;
	}

	render () {
		return (
			<svg viewBox="0 0 100 100">
				<circle style={this.style}
					  cx="50" cy="50"
					  r={(100 - this.style.strokeWidth) / 2 - this.outerBorderMargin} />
			</svg>
		);
	}
}

class IconIntuition extends Component {
	constructor (props) {
		super (props);

		this.style = {
			fill: '#ffffff',
			stroke: '#555555',
			strokeWidth: 10
		};
	}

	render () {
		const strokeWidth = this.style.strokeWidth;
		const topOffset = strokeWidth / 2 * Math.sqrt(5);
		const sideOffset = strokeWidth / 2 / Math.tan(Math.atan(2) / 2);

		return (
			<svg viewBox="0 0 100 100">
				<polygon style={this.style}
						 points={'50,' + topOffset
						 + ' ' + (100 - sideOffset) + ',' + (100 - strokeWidth / 2)
						 + ' ' + (sideOffset) + ',' + (100 - strokeWidth / 2)} />
			</svg>
		);
	}
}

export class IconTi extends IconLogic {
	constructor (props) {
		super(props);

		this.style.fill = '#ffffff';
		this.style.strokeWidth = 10;
	}
}

export class IconTe extends IconLogic {
	constructor (props) {
		super(props);

		this.style.fill = '#000000';
		this.style.strokeWidth = 0;
	}
}

export class IconFi extends IconEthics {
	constructor (props) {
		super(props);

		this.style.fill = '#ffffff';
		this.style.strokeWidth = 10;
	}
}

export class IconFe extends IconEthics {
	constructor (props) {
		super(props);

		this.style.fill = '#000000';
		this.style.strokeWidth = 0;
	}
}

export class IconSi extends IconSensing {
	constructor (props) {
		super(props);

		this.style.fill = '#ffffff';
		this.style.strokeWidth = 10;
	}
}

export class IconSe extends IconSensing {
	constructor (props) {
		super(props);

		this.style.fill = '#000000';
		this.style.strokeWidth = 0;
	}
}

export class IconNi extends IconIntuition {
	constructor (props) {
		super(props);

		this.style.fill = '#ffffff';
		this.style.strokeWidth = 10;
	}
}

export class IconNe extends IconIntuition {
	constructor (props) {
		super(props);

		this.style.fill = '#000000';
		this.style.strokeWidth = 0;
	}
}
