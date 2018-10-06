import React, {Component} from 'react';
import './App.css';
import Archetypes from './Archetypes';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


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
			introvert: initProperties.indexOf('I') > -1,
			extrovert: initProperties.indexOf('E') > -1,
			intuition: initProperties.indexOf('N') > -1,
			sensing: initProperties.indexOf('S') > -1,
			logic: initProperties.indexOf('T') > -1,
			ethics: initProperties.indexOf('F') > -1,
			rational: initProperties.indexOf('j') > -1,
			irrational: initProperties.indexOf('p') > -1
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
	}

	onIntrovertSwitch (event)
	{
		this.setState({introvert: event.target.checked});
	}

	onExtrovertSwitch (event)
	{
		this.setState({extrovert: event.target.checked});
	}

	onLogicSwitch (event)
	{
		this.setState({logic: event.target.checked});
	}

	onEthicsSwitch (event)
	{
		this.setState({ethics: event.target.checked});
	}

	onIntuitionSwitch (event)
	{
		this.setState({intuition: event.target.checked});
	}

	onSensingSwitch (event)
	{
		this.setState({sensing: event.target.checked});
	}

	onRationalSwitch (event)
	{
		this.setState({rational: event.target.checked});
	}

	onIrrationalSwitch (event)
	{
		this.setState({irrational: event.target.checked});
	}

	onQuadraSwitch (event) {
		this.setState({quadra: event.target.value});
	}

	static getRoutePropertyStatus (state) {
		return {
			'E': state.extrovert,
			'I': state.introvert,
			'N': state.intuition,
			'S': state.sensing,
			'F': state.ethics,
			'T': state.logic,
			'j': state.rational,
			'p': state.irrational,
			'α': state.quadra === 'α',
			'β': state.quadra === 'β',
			'δ': state.quadra === 'δ',
			'γ': state.quadra === 'γ'
		}
	}

	static stateMatchesRoute (state, routeProperties) {
		const actualRouteProperties = (routeProperties || '').split('').sort().join('');
		const matchingRouteProperties = App.getRouteProperties(state).split('').sort().join('');

		return actualRouteProperties === matchingRouteProperties;
	}

	static getRouteProperties (state) {
		const propertyStatus = App.getRoutePropertyStatus(state);

		return Object.keys(propertyStatus).filter(routeProperty => propertyStatus[routeProperty]).join('');
	}

	shouldComponentUpdate (nextParams, nextState, nextContext) {
		// Update the URL/route.
		if (!App.stateMatchesRoute(nextState, nextParams.match.params.properties)) {
			this.props.history.push('/' + App.getRouteProperties(nextState));
			return false;
		}

		return true;
	}


	render ()
	{
		return (
			<div className="App">
				<Archetypes properties={Object.keys(this.state).filter(key => this.state[key])
					.map(key => ({name: key, value: this.state[key]}))}/>
				<div className="switches">
					<div className="dichotomies">
						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.introvert} onChange={this.onIntrovertSwitch}/>}
								label="Introverts"
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.extrovert} onChange={this.onExtrovertSwitch}/>}
								label="Ekstraverts"
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.logic} onChange={this.onLogicSwitch}/>}
								label="Loģiskais"
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.ethics} onChange={this.onEthicsSwitch}/>}
								label="Ētiskais"
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.intuition} onChange={this.onIntuitionSwitch}/>}
								label="Intuīts"
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.sensing} onChange={this.onSensingSwitch}/>}
								label="Sensorais"
							/>
						</div>

						<div className="pair">
							<FormControlLabel
								control={<Checkbox checked={this.state.rational} onChange={this.onRationalSwitch}/>}
								label="Racionāls"
							/>

							<FormControlLabel
								control={<Checkbox checked={this.state.irrational} onChange={this.onIrrationalSwitch}/>}
								label="Iracionāls"
							/>
						</div>
					</div>
					<div className="quadras">
						<RadioGroup
							value={this.state.quadra}
							onChange={this.onQuadraSwitch}
						>
							<FormControlLabel value="" control={<Radio />} label="?" />
							<FormControlLabel value="α" control={<Radio />} label="1. Alfa" />
							<FormControlLabel value="β" control={<Radio />} label="2. Beta" />
							<FormControlLabel value="γ" control={<Radio />} label="3. Gamma" />
							<FormControlLabel value="δ" control={<Radio />} label="4. Delta" />
						</RadioGroup>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
