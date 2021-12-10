/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button} from '@ant-design/react-native/lib/button';
import Grid from '@ant-design/react-native/lib/grid';

const App = () => {
  const data: Array<{icon: string; text: string}> = [
    {icon: 'data', text: 'Name'},
    {icon: 'data', text: 'Status'},
    {icon: 'data', text: 'Cohort size'},
    {icon: 'data', text: 'Tags'},
    {icon: 'data', text: 'Actions'},
  ];

  const renderTableItem = (el: {icon: string; text: string}, index: number) => {
    return (
      <Text>
        {el.text} - {index}
      </Text>
    );
  };

  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={{fontSize: 100}}>Hello world!</Text>
      </View>
      <Button>Test</Button>
      <Grid data={data} columnNum={5} renderItem={renderTableItem} />
    </SafeAreaView>
  );
};

export default App;
