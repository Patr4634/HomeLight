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
            <div>
                {this.getLights().map((light) => {
                    return (
                        <Button key={light.Id} title={light.DeviceId + ' - ' + light.LightPin} color="#841584" onPress={() => ToggleLight(light.Id, light.State)}></Button>
                    );
                })}
            </div>
        )
    }
}

//{lights.map((light) => {
//    return (
//        <Button color="#841584" onPress={ToggleLight(light.Id, light.State)}>{light.LightPin}</Button>
//    );
//})}