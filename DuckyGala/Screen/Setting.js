import {View, Switch} from 'react-native';
import React from 'react';
export const Setting = (navigation) => {
        const [isEnabled, setIsEnabled] = React.useState(false);
        const toggleSwitch = () => {
                setIsEnabled((previousState) => !previousState);
            };
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              );
}