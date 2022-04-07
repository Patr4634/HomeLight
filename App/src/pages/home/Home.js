import React, { Component } from 'react';
import { Button } from 'react-native';
import { GetLights, ToggleLight } from '../../service/LightServie';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lights: []
        };
    }

    async componentDidMount() {
        this.setState({ lights: await GetLights() });
    }

    getLights = () => {
        return this.state.lights;
    }

    render() {
        return (
            <div style={{ fontFamily: 'Helvetica', display: 'inline-block', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', textAlign: 'center' }}>
                <h1 style={{ color: '#444444', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '30px' }}>HomeLight</h1>
                <h3 style={{ color: '#444444', marginBottom: '50px' }}>Yes</h3>
                {this.getLights().map((light) => {
                    let title = `${light.DeviceId} - ${light.LightPin} - ${light.State == '1' ? 'On' : 'Off'}`;
                    return (
                        <Button key={light.Id} title={title} color="#841584" onPress={() => ToggleLight(light.Id, light.State == '1' ? '0' : '1')}
                            styles={{ display: 'block', width: '80px', backgroundColor: '#1ABC0C', border: 'none', color: 'white', padding: '13px 30px', TextDecoder: 'none', fontSize: '25px', marginTop: '0px', maringLeft: 'auto', maringRight: 'auto', maringBottom: '35px', cursor: 'pointer', borderRadius: '4px' }}
                        ></Button>
                    );
                })}
            </div>
        )
    }
}