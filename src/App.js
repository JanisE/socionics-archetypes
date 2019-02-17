import React, {Component} from 'react';
import './App.css';
import Archetypes from './Archetypes';
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withNamespaces } from 'react-i18next';

class App extends Component
{
	constructor (props)
	{
		super(props);

		const initProperties = this.props.match.params.properties || '';

		let initQuadra = '';

		if (initProperties.indexOf('α') > -1) {
			initQuadra = 'α'
		}
		else if (initProperties.indexOf('β') > -1) {
			initQuadra = 'β'
		}
		else if (initProperties.indexOf('γ') > -1) {
			initQuadra = 'γ'
		}
		else if (initProperties.indexOf('δ') > -1) {
			initQuadra = 'δ'
		}

		this.state = {
			quadra: initQuadra,
			dichotomies: {
				introvert: initProperties.indexOf('I') > -1,
				extrovert: initProperties.indexOf('E') > -1,
				intuition: initProperties.indexOf('N') > -1,
				sensing: initProperties.indexOf('S') > -1,
				logic: initProperties.indexOf('T') > -1,
				ethics: initProperties.indexOf('F') > -1,
				rational: initProperties.indexOf('j') > -1,
				irrational: initProperties.indexOf('p') > -1
			},
			relationsFor: this.props.match.params.relationsFor || '',
			introvertsInside: false,
			language: undefined,
			drawerOpen: false
		};

		this.onIntrovertSwitch = this.onIntrovertSwitch.bind(this);
		this.onExtrovertSwitch = this.onExtrovertSwitch.bind(this);
		this.onLogicSwitch = this.onLogicSwitch.bind(this);
		this.onEthicsSwitch = this.onEthicsSwitch.bind(this);
		this.onIntuitionSwitch = this.onIntuitionSwitch.bind(this);
		this.onSensingSwitch = this.onSensingSwitch.bind(this);
		this.onRationalSwitch = this.onRationalSwitch.bind(this);
		this.onIrrationalSwitch = this.onIrrationalSwitch.bind(this);
		this.onQuadraSwitch = this.onQuadraSwitch.bind(this);
		this.onRemoveRelations= this.onRemoveRelations.bind(this);
		this.onToggleRelations= this.onToggleRelations.bind(this);
		this.onLanguageSwitch= this.onLanguageSwitch.bind(this);
	}

	onIntrovertSwitch (event)
	{
		this.setState({dichotomies: {...this.state.dichotomies, introvert: event.target.checked}});
	}

	onExtrovertSwitch (event)
	{
		this.setState({dichotomies: {...this.state.dichotomies, extrovert: event.target.checked}});
	}

	onLogicSwitch (event)
	{
		this.setState({dichotomies: {...this.state.dichotomies, logic: event.target.checked}});
	}

	onEthicsSwitch (event)
	{
		this.setState({dichotomies: {...this.state.dichotomies, ethics: event.target.checked}});
	}

	onIntuitionSwitch (event)
	{
		this.setState({dichotomies: {...this.state.dichotomies, intuition: event.target.checked}});
	}

	onSensingSwitch (event)
	{
		this.setState({dichotomies: {...this.state.dichotomies, sensing: event.target.checked}});
	}

	onRationalSwitch (event)
	{
		this.setState({dichotomies: {...this.state.dichotomies, rational: event.target.checked}});
	}

	onIrrationalSwitch (event)
	{
		this.setState({dichotomies: {...this.state.dichotomies, irrational: event.target.checked}});
	}

	onQuadraSwitch (event) {
		this.setState({quadra: event.target.value});
	}

	onRemoveRelations () {
		this.setState({relationsFor: ''})
	}

	onToggleRelations (type) {
		this.setState({relationsFor: type === this.state.relationsFor ? '' : type})
	}

	changeLanguage (lang) {
		this.props.i18n.changeLanguage(lang);
	};

	onLanguageSwitch (event) {
		this.changeLanguage(event.target.value);
		this.setState({language: event.target.value});
	};

	static getRoutePropertyStatus (state) {
		return {
			'E': state.dichotomies.extrovert,
			'I': state.dichotomies.introvert,
			'N': state.dichotomies.intuition,
			'S': state.dichotomies.sensing,
			'F': state.dichotomies.ethics,
			'T': state.dichotomies.logic,
			'j': state.dichotomies.rational,
			'p': state.dichotomies.irrational,
			'α': state.quadra === 'α',
			'β': state.quadra === 'β',
			'δ': state.quadra === 'δ',
			'γ': state.quadra === 'γ'
		}
	}

	static stateMatchesRoute (state, {properties: routeProperties, relationsFor}) {
		const actualRouteProperties = (routeProperties || '').split('').sort().join('');
		const matchingRouteProperties = App.getRouteProperties(state).split('').sort().join('');

		return actualRouteProperties === matchingRouteProperties && (relationsFor || '') == state.relationsFor;
	}

	static getRouteProperties (state) {
		const propertyStatus = App.getRoutePropertyStatus(state);

		return Object.keys(propertyStatus).filter(routeProperty => propertyStatus[routeProperty]).join('');
	}

	shouldComponentUpdate (nextParams, nextState, nextContext) {
		// Update the URL/route.
		if (!App.stateMatchesRoute(nextState, nextParams.match.params)) {
			this.props.history.push('/' + App.getRouteProperties(nextState) + (nextState.relationsFor ? '/' + nextState.relationsFor : ''));
			return false;
		}

		return true;
	}

	toggleDrawer (open) {
		return () => {
			this.setState({
				drawerOpen: open,
			});
		}
	}

	handleSwitch (switchName) {
		return (event) => {
			this.setState({
				[switchName]: event.target.checked
			});
		};
	}

	render ()
	{
		const {t} = this.props;

		return (
			<div className="App">
				<Archetypes
					properties={Object.keys(this.state.dichotomies).filter(key => this.state.dichotomies[key])
						.map(key => ({name: key, value: this.state[key]}))}
					quadra={this.state.quadra}
					relationsFor={this.state.relationsFor}
					introvertsInside={this.state.introvertsInside}
					onRemoveRelations={this.onRemoveRelations}
					onToggleRelations={this.onToggleRelations}
				/>
				<div className="switches">
					<div className="dichotomies">
						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.introvert} onChange={this.onIntrovertSwitch}/>}
								label={t('controls.Introvert')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.extrovert} onChange={this.onExtrovertSwitch}/>}
								label={t('controls.Extravert')}
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.logic} onChange={this.onLogicSwitch}/>}
								label={t('controls.Logical')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.ethics} onChange={this.onEthicsSwitch}/>}
								label={t('controls.Ethical')}
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.intuition} onChange={this.onIntuitionSwitch}/>}
								label={t('controls.Intuitive')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.sensing} onChange={this.onSensingSwitch}/>}
								label={t('controls.Sensory')}
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.rational} onChange={this.onRationalSwitch}/>}
								label={t('controls.Rational')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.irrational} onChange={this.onIrrationalSwitch}/>}
								label={t('controls.Irrational')}
							/>
						</div>
					</div>
					<div className="quadras">
						<RadioGroup
							value={this.state.quadra}
							onChange={this.onQuadraSwitch}
						>
							<FormControlLabel value="" control={<Radio />} label="?" />
							<FormControlLabel value="α" control={<Radio />} label={'1. ' + t('quadras.Alpha')} />
							<FormControlLabel value="β" control={<Radio />} label={'2. ' + t('quadras.Beta')} />
							<FormControlLabel value="δ" control={<Radio />} label={'4. ' + t('quadras.Delta')} />
							<FormControlLabel value="γ" control={<Radio />} label={'3. ' + t('quadras.Gamma')} />
						</RadioGroup>
					</div>

					<div className="preferences-icon">
						<IconButton color="secondary" aria-label="Preferences" onClick={this.toggleDrawer(true)}>
							<SettingsIcon />
						</IconButton>
					</div>
				</div>

				<SwipeableDrawer
					anchor="right"
					className="preferences-drawer"
					open={this.state.drawerOpen}
					onClose={this.toggleDrawer(false)}
					onOpen={this.toggleDrawer(true)}
				>
					<div className="drawer-content">
						<FormControl component="fieldset">
							<FormLabel component="legend">{t('controls.Language')}</FormLabel>
							<RadioGroup
								value={this.state.language}
								onChange={this.onLanguageSwitch}
							>
								<FormControlLabel value="en" control={<Radio />} label="English" />
								<FormControlLabel value="lv" control={<Radio />} label="Latviešu" />
								<FormControlLabel value="ru" control={<Radio />} label="Русский" />
							</RadioGroup>
						</FormControl>

						<FormGroup>
							<FormControlLabel
								control={
									<Switch
										checked={this.state.introvertsInside}
										onChange={this.handleSwitch('introvertsInside')}
									/>
								}
								label={t('prefs.Introverts Inside')}
							/>
						</FormGroup>
					</div>

				</SwipeableDrawer>
			</div>
		);
	}
}

export default withNamespaces()(App);
