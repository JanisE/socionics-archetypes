import {Component} from "react";
import React from "react";
import {IconFi, IconFe, IconTe, IconTi, IconNi, IconNe, IconSi, IconSe} from './IeIcons';

import { withNamespaces } from 'react-i18next';

class ArchetypeInfo extends Component {
	constructor (props) {
		super (props);

		this.enabled = true;
	}

	getIconByType (imElement) {
		switch (imElement) {
		case 'Fe':
			return IconFe;
		case 'Fi':
			return IconFi;
		case 'Ne':
			return IconNe;
		case 'Ni':
			return IconNi;
		case 'Se':
			return IconSe;
		case 'Si':
			return IconSi;
		case 'Te':
			return IconTe;
		case 'Ti':
			return IconTi;
		default:
			console.error('getIconByType: Unknown IM element:', imElement);
			return IconTi;
		}
	}

	render () {
		const {t} = this.props;

		const Icon1 = this.getIconByType(this.props.functions[0]);
		const Icon2 = this.getIconByType(this.props.functions[1]);

		return (
			<div className={'archetype-info type-' + this.props.socionicsAbbr
				+ ' dichotomy-' + this.props.dichotomyAbbr[0]
				+ ' dichotomy-' + this.props.dichotomyAbbr[1]
				+ ' dichotomy-' + this.props.dichotomyAbbr[2]
				+ ' dichotomy-' + this.props.dichotomyAbbr[3]}>
				<div className="epithet"><div>{t([
					'type info.' + this.props.epithet + '.epithet',
					'type info.' + this.props.epithet + '.epithet - full'
				])}</div></div>
				<div className="socionicsAbbr">{t('type info.' + this.props.epithet + '.socionics abbr')}</div>
				<div className="dichotomyAbbr">{this.props.dichotomyAbbr}</div>
				<div className="socialRole"><div>{t([
					'type info.' + this.props.epithet + '.social role',
					'type info.' + this.props.epithet + '.social role - full'
				])}</div></div>
				<Icon1 />
				<Icon2 />
			</div>
		);
	}
}

export default withNamespaces()(ArchetypeInfo);
