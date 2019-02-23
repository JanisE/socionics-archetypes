import React, {Component} from 'react';
import './App.css';
import Archetypes from './Archetypes';
import {IconFi, IconFe, IconTe, IconTi, IconNi, IconNe, IconSi, IconSe} from './IeIcons';
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
				irrational: initProperties.indexOf('p') > -1,
				aristocraticNotDemocratic: null,
				yieldingNotObstinate: null,
				positiveNotNegative: null,
				carefreeNotFarsighted: null
			},
			imElements: {
				Fi: null,
				Fe: null,
				Ti: null,
				Te: null,
				Ni: null,
				Ne: null,
				Si: null,
				Se: null
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

		this.onAristocraticSwitch = this.onAristocraticSwitch.bind(this);
		this.onDemocraticSwitch = this.onDemocraticSwitch.bind(this);
		this.onYieldingSwitch = this.onYieldingSwitch.bind(this);
		this.onObstinateSwitch = this.onObstinateSwitch.bind(this);
		this.onPositiveSwitch = this.onPositiveSwitch.bind(this);
		this.onNegativeSwitch = this.onNegativeSwitch.bind(this);
		this.onCarefreeSwitch = this.onCarefreeSwitch.bind(this);
		this.onFarsightedSwitch = this.onFarsightedSwitch.bind(this);
		this.onAskingSwitch = this.onAskingSwitch.bind(this);
		this.onDeclaringSwitch = this.onDeclaringSwitch.bind(this);
		this.onStaticSwitch = this.onStaticSwitch.bind(this);
		this.onDynamicSwitch = this.onDynamicSwitch.bind(this);

		this.onImFiSwitch = this.onImFiSwitch.bind(this);
		this.onImFeSwitch = this.onImFeSwitch.bind(this);
		this.onImTiSwitch = this.onImTiSwitch.bind(this);
		this.onImTeSwitch = this.onImTeSwitch.bind(this);
		this.onImNiSwitch = this.onImNiSwitch.bind(this);
		this.onImNeSwitch = this.onImNeSwitch.bind(this);
		this.onImSiSwitch = this.onImSiSwitch.bind(this);
		this.onImSeSwitch = this.onImSeSwitch.bind(this);

		this.onQuadraSwitch = this.onQuadraSwitch.bind(this);
		this.onRemoveRelations= this.onRemoveRelations.bind(this);
		this.onToggleRelations= this.onToggleRelations.bind(this);
		this.onLanguageSwitch= this.onLanguageSwitch.bind(this);
	}

	onIntrovertSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.dichotomies.introvert;

			const newValues = {introvert: checked};
			if (checked) {
				newValues.extrovert = ! checked;
			}

			return {dichotomies: {...oldState.dichotomies, ...newValues}};
		});
	}

	onExtrovertSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.dichotomies.extrovert;

			const newValues = {extrovert: checked};
			if (checked) {
				newValues.introvert = ! checked;
			}

			return {dichotomies: {...oldState.dichotomies, ...newValues}};
		});
	}

	onLogicSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.dichotomies.logic;

			const newDichotomyValues = {logic: checked};
			const newImElementValues = {};

			if (checked) {
				newDichotomyValues.ethics = false;

				newImElementValues.Fi = null;
				newImElementValues.Fe = null;
			}
			else {
				newImElementValues.Ti = null;
				newImElementValues.Te = null;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onImTiSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.imElements.Ti;

			const newDichotomyValues = {};
			const newImElementValues = {Ti: checked ? true : null};

			if (checked) {
				newImElementValues.Te = null;
				newImElementValues.Fi = null;
				newImElementValues.Fe = null;

				newDichotomyValues.ethics = false;
				newDichotomyValues.logic = true;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onImTeSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.imElements.Te;

			const newDichotomyValues = {};
			const newImElementValues = {Te: checked ? true : null};

			if (checked) {
				newImElementValues.Ti = null;
				newImElementValues.Fi = null;
				newImElementValues.Fe = null;

				newDichotomyValues.ethics = false;
				newDichotomyValues.logic = true;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			}
		});
	}

	onEthicsSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.dichotomies.ethics;

			const newDichotomyValues = {ethics: checked};
			const newImElementValues = {};

			if (checked) {
				newDichotomyValues.logic = false;

				newImElementValues.Ti = null;
				newImElementValues.Te = null;
			}
			else {
				newImElementValues.Fi = null;
				newImElementValues.Fe = null;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onImFiSwitch ()
	{
		this.setState(oldstate => {
			// Opposite of the old state.
			const checked = ! oldstate.imElements.Fi;

			const newDichotomyValues = {};
			const newImElementValues = {Fi: checked ? true : null};

			if (checked) {
				newDichotomyValues.ethics = true;
				newDichotomyValues.logic = false;

				newImElementValues.Fe = null;
				newImElementValues.Ti = null;
				newImElementValues.Te = null;
			}

			return {
				dichotomies: {...oldstate.dichotomies, ...newDichotomyValues},
				imElements: {...oldstate.imElements, ...newImElementValues}
			};
		});
	}

	onImFeSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.imElements.Fe;

			const newDichotomyValues = {};
			const newImElementValues = {Fe: checked ? true : null};

			if (checked) {
				newDichotomyValues.ethics = true;
				newDichotomyValues.logic = false;

				newImElementValues.Fi = null;
				newImElementValues.Ti = null;
				newImElementValues.Te = null;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onIntuitionSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.dichotomies.intuition;

			const newDichotomyValues = {intuition: checked};
			const newImElementValues = {};

			if (checked) {
				newDichotomyValues.sensing = false;

				newImElementValues.Si = null;
				newImElementValues.Se = null;
			}
			else {
				newImElementValues.Ni = null;
				newImElementValues.Ne = null;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onImNiSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.imElements.Ni;

			const newDichotomyValues = {};
			const newImElementValues = {Ni: checked ? true : null};

			if (checked) {
				newDichotomyValues.intuition = true;
				newDichotomyValues.sensing = false;

				newImElementValues.Ne = null;
				newImElementValues.Si = null;
				newImElementValues.Se = null;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onImNeSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.imElements.Ne;

			const newDichotomyValues = {};
			const newImElementValues = {Ne: checked ? true : null};

			if (checked) {
				newDichotomyValues.intuition = true;
				newDichotomyValues.sensing = false;

				newImElementValues.Ni = null;
				newImElementValues.Si = null;
				newImElementValues.Se = null;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onSensingSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.dichotomies.sensing;

			const newDichotomyValues = {sensing: checked};
			const newImElementValues = {};

			if (checked) {
				newDichotomyValues.intuition = false;

				newImElementValues.Ni = null;
				newImElementValues.Ne = null;
			}
			else {
				newImElementValues.Si = null;
				newImElementValues.Se = null;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onImSiSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.imElements.Si;

			const newDichotomyValues = {};
			const newImElementValues = {Si: checked ? true : null};

			if (checked) {
				newDichotomyValues.intuition = false;
				newDichotomyValues.sensing = true;

				newImElementValues.Se = null;
				newImElementValues.Ni = null;
				newImElementValues.Ne = null;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onImSeSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.imElements.Se;

			const newDichotomyValues = {};
			const newImElementValues = {Se: checked ? true : null};

			if (checked) {
				newDichotomyValues.intuition = false;
				newDichotomyValues.sensing = true;

				newImElementValues.Si = null;
				newImElementValues.Ni = null;
				newImElementValues.Ne = null;
			}

			return {
				dichotomies: {...oldState.dichotomies, ...newDichotomyValues},
				imElements: {...oldState.imElements, ...newImElementValues}
			};
		});
	}

	onRationalSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.dichotomies.rational;

			const newValues = {rational: checked};
			if (checked) {
				newValues.irrational = ! checked;
			}

			return {dichotomies: {...oldState.dichotomies, ...newValues}};
		});
	}

	onIrrationalSwitch ()
	{
		this.setState(oldState => {
			// Opposite of the old state.
			const checked = ! oldState.dichotomies.irrational;

			const newValues = {irrational: checked};
			if (checked) {
				newValues.rational = ! checked;
			}

			return {dichotomies: {...oldState.dichotomies, ...newValues}};
		});
	}

	onAristocraticSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, aristocraticNotDemocratic: event.target.checked ? true : null}});
	}

	onDemocraticSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, aristocraticNotDemocratic: event.target.checked ? false : null}});
	}

	onYieldingSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, yieldingNotObstinate: event.target.checked ? true : null}});
	}

	onObstinateSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, yieldingNotObstinate: event.target.checked ? false : null}});
	}

	onPositiveSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, positiveNotNegative: event.target.checked ? true : null}});
	}

	onNegativeSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, positiveNotNegative: event.target.checked ? false : null}});
	}

	onCarefreeSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, carefreeNotFarsighted: event.target.checked ? true : null}});
	}

	onFarsightedSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, carefreeNotFarsighted: event.target.checked ? false : null}});
	}

	onAskingSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, askingNotDeclaring: event.target.checked ? true : null}});
	}

	onDeclaringSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, askingNotDeclaring: event.target.checked ? false : null}});
	}

	onStaticSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, staticNotDynamic: event.target.checked ? true : null}});
	}

	onDynamicSwitch (event) {
		this.setState({dichotomies: {...this.state.dichotomies, staticNotDynamic: event.target.checked ? false : null}});
	}

	onQuadraSwitch (event) {
		this.setState({quadra: event.target.checked ? event.target.value : null});
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
		if (! App.stateMatchesRoute(nextState, nextParams.match.params)) {
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

	render () {
		const {t} = this.props;

		return (
			<div className="App">
				<Archetypes
					dichotomies={Object.keys(this.state.dichotomies)
						.map(key => ({name: key, value: this.state.dichotomies[key]}))}
					imElements={Object.keys(this.state.imElements)
						.map(key => ({name: key, value: this.state.imElements[key]}))}
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

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.aristocraticNotDemocratic === true} onChange={this.onAristocraticSwitch}/>}
								label={t('controls.Aristocratic')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.aristocraticNotDemocratic === false} onChange={this.onDemocraticSwitch}/>}
								label={t('controls.Democratic')}
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.yieldingNotObstinate === true} onChange={this.onYieldingSwitch}/>}
								label={t('controls.Yielding')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.yieldingNotObstinate === false} onChange={this.onObstinateSwitch}/>}
								label={t('controls.Obstinate')}
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.positiveNotNegative === true} onChange={this.onPositiveSwitch}/>}
								label={t('controls.Positive')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.positiveNotNegative === false} onChange={this.onNegativeSwitch}/>}
								label={t('controls.Negative')}
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.carefreeNotFarsighted === true} onChange={this.onCarefreeSwitch}/>}
								label={t('controls.Carefree')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.carefreeNotFarsighted === false} onChange={this.onFarsightedSwitch}/>}
								label={t('controls.Farsighted')}
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.askingNotDeclaring === true} onChange={this.onAskingSwitch}/>}
								label={t('controls.Asking')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.askingNotDeclaring === false} onChange={this.onDeclaringSwitch}/>}
								label={t('controls.Declaring')}
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.staticNotDynamic === true} onChange={this.onStaticSwitch}/>}
								label={t('controls.Static')}
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.dichotomies.staticNotDynamic === false} onChange={this.onDynamicSwitch}/>}
								label={t('controls.Dynamic')}
							/>
						</div>
					</div>

					<div class="im-elements-and-quadras">
						<div class="im-elements">
							<div className="pair">
								<div class="form-control-label" onClick={this.onImFiSwitch}>
									<Checkbox checked={this.state.imElements.Fi === true} />
									<IconFi />
								</div>

								<div class="form-control-label" onClick={this.onImFeSwitch}>
									<Checkbox checked={this.state.imElements.Fe === true} />
									<IconFe />
								</div>
							</div>
							<div className="pair">
								<div className="form-control-label" onClick={this.onImTiSwitch}>
									<Checkbox checked={this.state.imElements.Ti === true} />
									<IconTi/>
								</div>

								<div className="form-control-label" onClick={this.onImTeSwitch}>
									<Checkbox checked={this.state.imElements.Te === true} />
									<IconTe/>
								</div>
							</div>
							<div className="pair">
								<div className="form-control-label" onClick={this.onImSiSwitch}>
									<Checkbox checked={this.state.imElements.Si === true} />
									<IconSi/>
								</div>

								<div className="form-control-label" onClick={this.onImSeSwitch}>
									<Checkbox checked={this.state.imElements.Se === true} />
									<IconSe/>
								</div>
							</div>
							<div className="pair">
								<div className="form-control-label" onClick={this.onImNiSwitch}>
									<Checkbox checked={this.state.imElements.Ni === true} />
									<IconNi/>
								</div>

								<div className="form-control-label" onClick={this.onImNeSwitch}>
									<Checkbox checked={this.state.imElements.Ne === true} />
									<IconNe/>
								</div>
							</div>
						</div>

						<div className="quadras">
							<FormControlLabel value="α" control={<Checkbox checked={this.state.quadra === 'α'} onChange={this.onQuadraSwitch} />} label={'1. ' + t('quadras.Alpha')} />
							<FormControlLabel value="β" control={<Checkbox checked={this.state.quadra === 'β'} onChange={this.onQuadraSwitch} />} label={'2. ' + t('quadras.Beta')} />
							<FormControlLabel value="δ" control={<Checkbox checked={this.state.quadra === 'δ'} onChange={this.onQuadraSwitch} />} label={'4. ' + t('quadras.Delta')} />
							<FormControlLabel value="γ" control={<Checkbox checked={this.state.quadra === 'γ'} onChange={this.onQuadraSwitch} />} label={'3. ' + t('quadras.Gamma')} />
						</div>
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
