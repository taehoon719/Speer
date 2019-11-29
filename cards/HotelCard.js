import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { Card, Title } from 'react-native-paper';

export default ({rate, comment, url='http://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3', star, name, minutes, cost}) => {
    return (
      <View style={{flexDirection: 'row',  flexWrap: "wrap"}}>
        <Card elevation={10} style={{margin: 10, borderRadius: '10px', width: 300}}>
          <View style={{flex: 2}}>
            <Image style={{flex: 1, overflow: 'hidden', borderTopLeftRadius: 10, borderTopRightRadius: 10, width: 300}}
            source={{ 
              uri: 
              url }} 
              />
            <View style={{position: 'absolute', top: 0, left: 10, right: 0, bottom: 30, 
            justifyContent: 'center', alignItems: 'flex-start'}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>{rate}{' · '}{comment}{' · '}{star}{' Star Hotel'}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <Card.Content>
                <Title style={{fontWeight: 'bold'}}>{name}</Title>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Event Partner</Text>
                <Text>Exclusive Deal</Text>
                </View>
              </Card.Content>
              <View style={{marginLeft: 10, marginRight: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{minutes}{' minutes walk to destination'}</Text>
                <Text>{'C$'}{cost}{' /night'}</Text>
              </View>
            </View>
            </View>
          </Card>          
        </View>
    )
  }