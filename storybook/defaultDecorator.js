import React from 'react';
import { View } from 'react-native'

const defaultDecorator = story => <View style={{
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'white'
}}>{story()}
</View>

export default defaultDecorator