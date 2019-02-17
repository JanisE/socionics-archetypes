import {Component} from "react";
import types from "./types";
import ArchetypeInfo from "./ArchetypeInfo";
import React from "react";
import {withNamespaces} from "react-i18next";

const classNames = {
	α: 'alpha',
	β: 'beta',
	γ: 'gamma',
	δ: 'delta'
};

class Archetypes extends Component {
	render() {
		const {t} = this.props;

		if (this.props.introvertsInside) {
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
		} else {
			types.EIE.pos = {col: 4, row: 2};
			types.EII.pos = {col: 1, row: 5};
			types.ESE.pos = {col: 3, row: 2};
			types.ESI.pos = {col: 6, row: 5};
			types.IEE.pos = {col: 2, row: 4};
			types.IEI.pos = {col: 5, row: 1};
			types.ILE.pos = {col: 2, row: 3};
			types.ILI.pos = {col: 5, row: 6};
			types.LIE.pos = {col: 4, row: 5};
			types.LII.pos = {col: 1, row: 2};
			types.LSE.pos = {col: 3, row: 5};
			types.LSI.pos = {col: 6, row: 2};
			types.SEE.pos = {col: 5, row: 4};
			types.SEI.pos = {col: 2, row: 1};
			types.SLE.pos = {col: 5, row: 3};
			types.SLI.pos = {col: 2, row: 6};
		}

		return (
			<div className={"archetypes" + (this.props.relationsFor ? ' rel-for-' + this.props.relationsFor : '')}>
				<div className="quadra-alpha-boundary" onClick={this.props.onRemoveRelations}> </div>
				<div className="quadra-beta-boundary" onClick={this.props.onRemoveRelations}> </div>
				<div className="quadra-gamma-boundary" onClick={this.props.onRemoveRelations}> </div>
				<div className="quadra-delta-boundary" onClick={this.props.onRemoveRelations}> </div>

				<div className="rationality-marker-vertical left hidden"> </div>
				<div className="rationality-marker-vertical right hidden"> </div>

				<div className="rationality-marker-horizontal top"> </div>
				<div className="rationality-marker-horizontal bottom"> </div>

				<div className="intro-extra-boundary" onClick={this.props.onRemoveRelations}> </div>

				<ul>
					{Object.keys(types).map(type =>
					{
						let enabled = this.props.dichotomies.reduce((enabled, dichotomy) => {
							if (enabled) {
								switch (dichotomy.name) {
								case 'introvert':
									enabled = ! dichotomy.value || types[type].dichotomyAbbr[0] === 'I';
									break;

								case 'extrovert':
									enabled = ! dichotomy.value || types[type].dichotomyAbbr[0] === 'E';
									break;

								case 'intuition':
									enabled = ! dichotomy.value || types[type].dichotomyAbbr[1] === 'N';
									break;

								case 'sensing':
									enabled = ! dichotomy.value || types[type].dichotomyAbbr[1] === 'S';
									break;

								case 'logic':
									enabled = ! dichotomy.value || types[type].dichotomyAbbr[2] === 'T';
									break;

								case 'ethics':
									enabled = ! dichotomy.value || types[type].dichotomyAbbr[2] === 'F';
									break;

								case 'irrational':
									enabled = ! dichotomy.value || types[type].dichotomyAbbr[3] === 'p';
									break;

								case 'rational':
									enabled = ! dichotomy.value || types[type].dichotomyAbbr[3] === 'j';
									break;

								case 'aristocraticNotDemocratic':
									enabled = dichotomy.value === null
										|| dichotomy.value === types[type].dichotomies.aristocraticNotDemocratic;
									break;

								case 'yieldingNotObstinate':
									enabled = dichotomy.value === null
										|| dichotomy.value === types[type].dichotomies.yieldingNotObstinate;
									break;

								case 'positiveNotNegative':
									enabled = dichotomy.value === null
										|| dichotomy.value === types[type].dichotomies.positiveNotNegative;
									break;

								case 'carefreeNotFarsighted':
									enabled = dichotomy.value === null
										|| dichotomy.value === types[type].dichotomies.carefreeNotFarsighted;
									break;

								default:
									console.error('Archetypes: Unexpected dichotomy:', dichotomy);
								}
							} // Disabled if the type does not match all of the dichotomies.

							return enabled;
						}, true);

						if(this.props.quadra){
							enabled = enabled && this.props.quadra === types[type].quadra;
						}

						return (
							<li className={'pos-col-' + types[type].pos.col + ' pos-row-' + types[type].pos.row
							+ ' quadra-' + classNames[types[type].quadra] + ' type-' + types[type].socionicsAbbr
							+ (enabled ? '' : ' disabled')}
								onClick={this.props.onToggleRelations.bind(null, type)}
								key={types[type].socionicsAbbr}>
								<ArchetypeInfo {...types[type]} />

								<div className="overlays">
									<div className="rel-duality">
										<div>{t('relationships.duality.abbr')}</div><div>{t('relationships.duality.name')}</div>
									</div>
									<div className="rel-identity">
										<div>{t('relationships.identity.abbr')}</div><div>{t('relationships.identity.name')}</div>
									</div>
									<div className="rel-activity">
										<div>{t('relationships.activity.abbr')}</div><div>{t('relationships.activity.name')}</div>
									</div>
									<div className="rel-mirror">
										<div>{t('relationships.mirror.abbr')}</div><div>{t('relationships.mirror.name')}</div>
									</div>
									<div className="rel-semidual">
										<div>{t('relationships.semidual.abbr')}</div><div>{t('relationships.semidual.name')}</div>
									</div>
									<div className="rel-illusionary">
										<div>{t('relationships.illusionary.abbr')}</div><div>{t('relationships.illusionary.name')}</div>
									</div>
									<div className="rel-cooperation">
										<div>{t('relationships.cooperation.abbr')}</div><div>{t('relationships.cooperation.name')}</div>
									</div>
									<div className="rel-quasiidentity">
										<div>{t('relationships.quasiidentity.abbr')}</div><div>{t('relationships.quasiidentity.name')}</div>
									</div>
									<div className="rel-kindred">
										<div>{t('relationships.kindred.abbr')}</div><div>{t('relationships.kindred.name')}</div>
									</div>
									<div className="rel-beneficiary">
										<div>{t('relationships.beneficiary.abbr')}</div><div>{t('relationships.beneficiary.name')}</div>
									</div>
									<div className="rel-benefactor">
										<div>{t('relationships.benefactor.abbr')}</div><div>{t('relationships.benefactor.name')}</div>
									</div>
									<div className="rel-supervisee">
										<div>{t('relationships.supervisee.abbr')}</div><div>{t('relationships.supervisee.name')}</div>
									</div>
									<div className="rel-supervisor">
										<div>{t('relationships.supervisor.abbr')}</div><div>{t('relationships.supervisor.name')}</div>
									</div>
									<div className="rel-superego">
										<div>{t('relationships.superego.abbr')}</div><div>{t('relationships.superego.name')}</div>
									</div>
									<div className="rel-contrary">
										<div>{t('relationships.contrary.abbr')}</div><div>{t('relationships.contrary.name')}</div>
									</div>
									<div className="rel-conflict">
										<div>{t('relationships.conflict.abbr')}</div><div>{t('relationships.conflict.name')}</div>
									</div>

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

export default withNamespaces()(Archetypes);
