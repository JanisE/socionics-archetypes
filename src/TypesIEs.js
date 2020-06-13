import {Component} from "react";
import types from "./types";
import React from "react";
import {IconFe, IconFi, IconNe, IconNi, IconSe, IconSi, IconTe, IconTi} from "./IeIcons";

import { withNamespaces } from 'react-i18next';

const ieIcons = {
	Fi: IconFi,
	Fe: IconFe,
	Ti: IconTi,
	Te: IconTe,
	Ni: IconNi,
	Ne: IconNe,
	Si: IconSi,
	Se: IconSe
};

class TypesIEs extends Component {
	render ()
	{
		const {t} = this.props;

		return Object.keys(types).map(type =>
		{
			const elements = [];
			for (let i = 0; i < types[type].functions.length; i++) {
				const Icon = ieIcons[types[type].functions[i]];
				elements.push(<li key={i}><Icon/></li>);
			}

			return (
				<div className={type} key={type}>
					<h3>{t([
						'type info.' + types[type].epithet + '.epithet',
						'type info.' + types[type].epithet + '.epithet - full'
					])}</h3>
					<ol>
						{elements}
					</ol>
				</div>
			);
		});
	}
}

export default withNamespaces()(TypesIEs);
