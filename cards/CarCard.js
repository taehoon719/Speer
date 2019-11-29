import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Card } from 'react-native-paper';

export default ({name, rank, seats, url='https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Kia-Rio.png', rate, cost}) => {
    return (
      <View style={{flexDirection: 'row',  flexWrap: "wrap"}}>
        <Card elevation={10} style={{margin: 10, borderRadius: '10px', width: 300}}>
          <View style={{flex: 2}}>
            <Image style={{flex: 1, overflow: 'hidden', 
            borderTopLeftRadius: '10px', borderTopRightRadius: '10px', width: 300}}
            source={{ 
              uri: 
              url }} 
              />
            <View style={{flex: 1, marginLeft: 15, marginRight: 15}}>
              <View style={{flex: 1, flexDirection: 'row', 
              justifyContent: 'space-between', marginTop: 15}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: "bold"}}>{name}</Text>
                  <Text style={{marginLeft: 5, fontSize: 12, 
                  color: 'gray'}}>or similar</Text>
                </View>
                <Image style={{height: 10, width: 40, marginTop: 4}}
source={require('img/car_logo.png')} />
              </View>

              <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
                <Text style={{fontSize: 12}}>{rank}</Text>
                <Text style={{fontSize: 12}}>  {seats} Seats</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'gray'}}>1 Large · 1 Small Bags</Text>
                <Text style={{fontSize: 10, color: 'gray', fontWeight: 'bold'}}>Great Deal</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color: 'gray'}}>{rate} / 10</Text>
              </View>
              <View style={{marginBottom: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 10, color: 'gray'}}>Pick up: <Text style={{color:'black'}}>In Terminal</Text></Text>
                <Text style={{fontSize: 11, fontWeight: 'bold', marginBottom: 1}}>C$ {cost} <Text style={{fontSize: 10, color: 'gray', marginTop: 4}}>/day</Text></Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    )
  }