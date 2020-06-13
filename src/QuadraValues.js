import {Component} from "react";
import React from "react";
import {IconFe, IconFi, IconNe, IconNi, IconSe, IconSi, IconTe, IconTi} from "./IeIcons";

import { withNamespaces } from 'react-i18next';

class QuadraValues extends Component {
	render ()
	{
		const {t} = this.props;

		return (
			<div>
				<div title={t('quadra values labels.alpha & beta')}>
					<div className="icon fe"><IconFe /></div>
					<div className="icon ti"><IconTi /></div>
				</div>
				<div title={t('quadra values labels.beta & gamma')}>
					<div className="icon ni"><IconNi /></div>
					<div className="icon se"><IconSe /></div>
				</div>
				<div title={t('quadra values labels.gamma & delta')}>
					<div className="icon fi"><IconFi /></div>
					<div className="icon te"><IconTe /></div>
				</div>
				<div title={t('quadra values labels.delta & alpha')}>
					<div className="icon ne"><IconNe /></div>
					<div className="icon si"><IconSi /></div>
				</div>
			</div>
		);
	}
}

export default withNamespaces()(QuadraValues);
