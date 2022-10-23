import { Switch } from '@mantine/core';
import {MantineProvider} from '@mantine/core';

export function StyledSwitch({checked, setChecked}){
    return(
        <MantineProvider 
            theme = {{
                colors: {
                    'queeryPink': ['#ffe2e9','#ffb2bf','#ff758c','#fe4e6a','#fd2041','#e40b27','#b2041f', '#800015','#4e000c','#1f0002'],
                },
            }}>
            <Switch color = 'queeryPink.3' checked = {checked} onChange = {setChecked}/>
        </MantineProvider>
    );

}