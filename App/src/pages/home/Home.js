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

//String SendHTML(vector<Light> lights)
//{
//    String ptr = "<!DOCTYPE html> <html>\n";
//    ptr += "<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n";
//    ptr += "<title>LED Control</title>\n";
//    ptr += "<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;}\n";
//    ptr += "body{margin-top: 50px;} h1 {color: #444444;margin: 50px auto 30px;} h3 {color: #444444;margin-bottom: 50px;}\n";
//    ptr += ".button {display: block;width: 80px;background-color: #1abc9c;border: none;color: white;padding: 13px 30px;text-decoration: none;font-size: 25px;margin: 0px auto 35px;cursor: pointer;border-radius: 4px;}\n";
//    ptr += ".button-on {background-color: #1abc9c;}\n";
//    ptr += ".button-on:active {background-color: #16a085;}\n";
//    ptr += ".button-off {background-color: #34495e;}\n";
//    ptr += ".button-off:active {background-color: #2c3e50;}\n";
//    ptr += "p {font-size: 14px;color: #888;margin-bottom: 10px;}\n";
//    ptr += "</style>\n";
//    ptr += "</head>\n";
//    ptr += "<body>\n";
//    ptr += "<h1>ESP8266 Web Server</h1>\n";
//    ptr += "<h3>Using Station(STA) Mode</h3>\n";
//
//    for (int i = 0; i < lights.size(); ++i)
//    {
//        Light light = lights[i];
//
//        ptr += "<p>";
//        ptr += String("PIN") + light.Pin() + ' ';
//        ptr += String("Status: ") + light.Status ? "ON" : "OFF";
//        ptr += "</p>";
//
//        ptr += "<a class=\"button button-";
//        ptr += light.Status ? "off" : "on";
//        ptr += "\" href=\"/led";
//        ptr += light.Status ? "off" : "on";
//        ptr += "\\";
//        ptr += light.Pin();
//        ptr += "\">";
//        ptr += light.Status ? "OFF" : "ON";
//        ptr += "</a>";
//    }
//
//    ptr += "</body>\n";
//    ptr += "</html>\n";
//    return ptr;