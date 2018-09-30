import {Component} from "react";
import types from "./types";
import ArchetypeInfo from "./ArchetypeInfo";
import React from "react";

export default class Archetypes extends Component {
	render() {
		types.EIE.pos = {col: 6, row: 2};
		types.EII.pos = {col: 3, row: 5};
		types.ESE.pos = {col: 1, row: 2};
		types.ESI.pos = {col: 4, row: 5};
		types.IEE.pos = {col: 2, row: 6};
		types.IEI.pos = {col: 5, row: 3};
		types.ILE.pos = {col: 2, row: 1};
		types.ILI.pos = {col: 5, row: 4};
		types.LIE.pos = {col: 6, row: 5};
		types.LII.pos = {col: 3, row: 2};
		types.LSE.pos = {col: 1, row: 5};
		types.LSI.pos = {col: 4, row: 2};
		types.SEE.pos = {col: 5, row: 6};
		types.SEI.pos = {col: 2, row: 3};
		types.SLE.pos = {col: 5, row: 1};
		types.SLI.pos = {col: 2, row: 4};

		return (
			<div className="archetypes">
				<div className="quadra-alpha-boundary"> </div>
				<div className="quadra-beta-boundary"> </div>
				<div className="quadra-gamma-boundary"> </div>
				<div className="quadra-delta-boundary"> </div>

				<div className="rational-marker left"> </div>
				<div className="rational-marker right"> </div>

				<div className="irrational-marker top"> </div>
				<div className="irrational-marker bottom"> </div>

				<div className="intro-extra-boundary"> </div>

				<ul>
					{Object.keys(types).map(type =>
						<li className={'pos-col-' + types[type].pos.col + ' pos-row-' + types[type].pos.row}
							key={types[type].socionicsAbbr}>
							<ArchetypeInfo {...types[type]} />
						</li>
					)}
				</ul>
			</div>
		);
	}
}
