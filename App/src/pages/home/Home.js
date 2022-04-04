import React from 'react';
import { Button } from 'react-native';
import { GetLights, ToggleLight } from '../../service/LightServie';

export default function Home() {
    return (
        <div>
                <Button onPress={ToggleLight}
                title="Get Lights"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"></Button>
        </div>
    )
}