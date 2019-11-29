import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { Divider } from 'react-native-paper';

export default ({departingDate="25 July", departingTimeStart="20:00", departingTimeEnd="22:12", departStop="1", departingHour="4h 12m", plane="Westjet", returningDate="29 July", returningTimeStart="19:00", returningTimeEnd="21:12", returnStop="Non", returningHour="4h 12 m"}) => {
    return (
      <View style={{flex: 2, flexWrap: "wrap"}}>
        <Card elevation={10} style={{flex: 1, margin: 10, padding: 10, borderRadius: '10px', width: 300, height: 120}}>
          <View style={{flex: 1, justifyContent: "space-between"}}>
            <View>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: '10px'}}>{'Departing · '}{departingDate}</Text>
              <Text style={{fontSize: '10px', marginRight: 15, color: 'gray'}}>Shortest</Text>
              <IconButton
                icon="menu-down"
                size={15}
                color="gray"
                style={{position: 'absolute', right: -8, bottom: -11}}
              />
            </View>
            <Divider style={{margin: 4}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Avatar.Image style={{flex: 1, backgroundColor: 'transparent'}} size={36} 
              source={require('img/logo1.png')} />
              <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>{departingTimeStart}</Text>
                <Text>YYZ</Text>
              </View>
              <Avatar.Icon size={24} color="black" style={{flex: 1, backgroundColor: 'transparent'}}
              icon="arrow-right" />
              <View style={{flex: 3}}>
                <Text style={{fontWeight: 'bold'}}>{departingTimeEnd}</Text>
                <Text>YYC</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: '10px', marginTop: 5, color: 'gray'}}>{departStop}{" Stop · "}{departingHour}{' · '}{plane}</Text>
              <Text style={{fontSize: '10px', fontWeight: 'bold', marginTop: 5}}>C$163</Text>
            </View>
          </View>
        </Card>

        <Card elevation={10} style={{flex: 1, margin: 10, padding: 10, borderRadius: '10px', width: 300, height: 120}}>
          <View style={{flex: 1, justifyContent: "space-between"}}>
            <View>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: '10px'}}>{"Returning · "}{returningDate}</Text>
              <Text style={{fontSize: '10px', marginRight: 15, color: 'gray'}}>Shortest</Text>
              <IconButton
                icon="menu-down"
                size={15}
                color="gray"
                style={{position: 'absolute', right: -8, bottom: -11}}
              />
            </View>
            <Divider style={{margin: 4}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Avatar.Image style={{flex: 1, backgroundColor: 'transparent'}} size={36} 
              source={require('img/logo1.png')} />
              <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>{returningTimeStart}</Text>
                <Text>YYZ</Text>
              </View>
              <Avatar.Icon size={24} color="black" style={{flex: 1, backgroundColor: 'transparent'}}
              icon="arrow-right" />
              <View style={{flex: 3}}>
                <Text style={{fontWeight: 'bold'}}>{returningTimeEnd}</Text>
                <Text>YYC</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{fontSize: '10px', marginTop: 5, color: 'gray'}}>{returnStop}{' Stop · '}{returningHour} {' · '}{plane}</Text>
              <Text style={{fontSize: '10px', fontWeight: 'bold', marginTop: 5}}>C$163</Text>
            </View>
          </View>
        </Card>
      </View>
    )
  }