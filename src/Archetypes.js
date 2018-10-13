import {Component} from "react";
import types from "./types";
import ArchetypeInfo from "./ArchetypeInfo";
import React from "react";

const classNames = {
	α: 'alpha',
	β: 'beta',
	γ: 'gamma',
	δ: 'delta'
};

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
			<div className={"archetypes" + (this.props.relationsFor ? ' rel-for-' + this.props.relationsFor : '')}>
				<div className="quadra-alpha-boundary" onClick={this.props.onRemoveRelations}> </div>
				<div className="quadra-beta-boundary" onClick={this.props.onRemoveRelations}> </div>
				<div className="quadra-gamma-boundary" onClick={this.props.onRemoveRelations}> </div>
				<div className="quadra-delta-boundary" onClick={this.props.onRemoveRelations}> </div>

				<div className="rational-marker left"> </div>
				<div className="rational-marker right"> </div>

				<div className="irrational-marker top"> </div>
				<div className="irrational-marker bottom"> </div>

				<div className="intro-extra-boundary" onClick={this.props.onRemoveRelations}> </div>

				<ul>
					{Object.keys(types).map(type =>
					{
						const enabled = this.props.properties.reduce((enabled, property) => {
							if (enabled) {
								switch (property.name) {
								case 'introvert':
									enabled = types[type].dichotomyAbbr[0] === 'I';
									break;

								case 'extrovert':
									enabled = types[type].dichotomyAbbr[0] === 'E';
									break;

								case 'intuition':
									enabled = types[type].dichotomyAbbr[1] === 'N';
									break;

								case 'sensing':
									enabled = types[type].dichotomyAbbr[1] === 'S';
									break;

								case 'logic':
									enabled = types[type].dichotomyAbbr[2] === 'T';
									break;

								case 'ethics':
									enabled = types[type].dichotomyAbbr[2] === 'F';
									break;

								case 'irrational':
									enabled = types[type].dichotomyAbbr[3] === 'p';
									break;

								case 'rational':
									enabled = types[type].dichotomyAbbr[3] === 'j';
									break;

								case 'quadra':
									enabled = types[type].quadra === property.value;
									break;

								default:
									console.error('Archetypes: Unexpected property:', property);
								}
							} // Disabled if the type does not have any one of the properties.

							return enabled;
						}, true);

						return (
							<li className={'pos-col-' + types[type].pos.col + ' pos-row-' + types[type].pos.row
							+ ' quadra-' + classNames[types[type].quadra] + ' type-' + types[type].socionicsAbbr
							+ (enabled ? '' : ' disabled')}
								onClick={this.props.onToggleRelations.bind(null, type)}
								key={types[type].socionicsAbbr}>
								<ArchetypeInfo {...types[type]} />

								<div className="overlays">
									<div className="rel-duality"><div>D</div><div>duālais</div></div>
									<div className="rel-identity"><div>V</div><div>vienādais</div></div>
									<div className="rel-activity"><div>A</div><div>aktivators</div></div>
									<div className="rel-mirror"><div>S</div><div>spogulis</div></div>
									<div className="rel-semidual"><div>pd</div><div>pusduālais</div></div>
									<div className="rel-illusionary"><div>M</div><div>mirāža</div></div>{/* mirage*/}
									<div className="rel-business"><div>d</div><div>darbabiedrs</div></div>{/* look-a-like*/}
									<div className="rel-quasiidentity"><div>šv</div><div>šķietami vienādais</div></div>
									<div className="rel-kindred"><div>ra</div><div>radniecīgais</div></div>
									<div className="rel-beneficiary"><div>u</div><div>uztvērējs</div></div>
									<div className="rel-benefactor"><div>P</div><div>pārraidītājs</div></div>
									<div className="rel-supervisee"><div>r</div><div>revidējamis</div></div>
									<div className="rel-supervisor"><div>R</div><div>revidētājs</div></div>
									<div className="rel-superego"><div>se</div><div>superego</div></div>
									<div className="rel-contrary"><div>pp</div><div>pilnīgi pretējs</div></div>{/* extinguishment*/}
									<div className="rel-conflict"><div>K</div><div>konfliktieris</div></div>

									<div className="disabler"> </div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
