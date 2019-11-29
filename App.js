import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';
import { Chip } from 'react-native-paper';
import { IconButton, FAB } from 'react-native-paper';
import CarCard from './cards/CarCard';
import FlightCard from './cards/FlightCard';
import HotelCard from './cards/HotelCard';


export default () => {
  const [list, setList] = useState(
    [{"section": "Flight", "info": "Return, 1 person", "cost": "C$ 650", "chip": ["Airlines", "Stops", "Time in", "Time out"]}, 
    {"section": "Hotel", "info": "2 Nights, 1 room", "cost": "C$ 129", "chip": ["Name", "Price", "Type", "Location"]}, 
    {"section": "Car", "info": "2 Days", "cost": "C$ 129", "chip": ["Supplier", "Price", "Type", "Pickup", "Drop off"]}, 
    {"section": "Trip Overview", "cost": "C$ 976", "chip": []}])

  const [flightList, setFlightList] = useState([
    {"departingDate":"25 July", "departingTimeStart":"20:00", "departingTimeEnd":"22:12", "departStop":"1", "departingHour":"4h 12m", "plane":"Westjet", "returningDate":"29 July", "returningTimeStart":"19:00", "returningTimeEnd":"21:12", "returnStop":"Non", "returningHour":"4h 12 m"}, 
    {"departingDate":"25 June", "departingTimeStart":"20:00", "departingTimeEnd":"22:12", "departStop":"1", "departingHour":"1h 12m", "plane":"Westjet", "returningDate":"29 November", "returningTimeStart":"07:00", "returningTimeEnd":"10:12", "returnStop":"Non", "returningHour":"1h 12 m"},
    {"departingDate":"29 August", "departingTimeStart":"10:00", "departingTimeEnd":"15:12", "departStop":"Non", "departingHour":"4h 12m", "plane":"Westjet", "returningDate":"29 December", "returningTimeStart":"19:00", "returningTimeEnd":"21:12", "returnStop":"Non", "returningHour":"3h 12 m"}]);
  
  const [hotelList, setHotelList] = useState([
    {"rate": "9.5", "comment": "Superb", "url":'http://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3', "star": "4", "name": "Alt Hotel Calgary East Village", "minutes": "5", "cost": "163"},
  {"rate": "10", "comment": "Superb", "url":'https://q-cf.bstatic.com/images/hotel/max1024x768/456/45669260.jpg', "star": "5", "name": "4 Seasons Toronto", "minutes": "10", "cost": "200"},
  {"rate": "10", "comment": "Superb", "url":'https://img1.10bestmedia.com/Images/Photos/134835/Hotel-Georgia_55_660x440_201404221608.jpg', "star": "5", "name": "Hotel Vancouver", "minutes": "50", "cost": "200"},
  ]);
  const [carList, setCarList] = useState([
    {"name": "Kia Rio", "rank": "Economy", "seats": "4", "url": 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Kia-Rio.png', "rate": "8.7", "cost": "44"},
    {"name": "Lamborghini", "rank": "Business", "seats": "2", "url": 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/evo-slider/model/Huracan%20Spyder_scontorno.png', "rate": "10", "cost": "100"},
    {"name": "Kia Morning", "rank": "Economy", "seats": "4", "url": 'https://www.corejeju.com/wp-content/uploads/2016/10/Morning-Mini.jpg', "rate": "1.0", "cost": "5"},
    ]);

  const [bookMark, setBookMark] = useState(false);
  const [openedItem, setOpenedItem] = useState(1);
  const [radioButtonChecked, setRadioButtonChecked] = useState([false, false, false]);
  const [length, setLength] = useState('shortest');

  const RadioButton = (index) => {
    return (
        <View style={[{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#31A285",
          alignItems: 'center',
          justifyContent: 'center',
        }]}>
          {
            radioButtonChecked[index] ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#31A285",
              }}/>
              : null
          }
        </View>
    );
}

  const radioPress = (index) => {
    var radio = [...radioButtonChecked];
    radio[index] = !radio[index];
    setRadioButtonChecked(radio);
  }
  const handlePress = (index) => {
    if (index < 3) setOpenedItem(index);
  }
  const getColor = (index) => {
    if (index === 0) {
      return "#F9FAFE"
    } else if (index === 1) {
      return "#FFFFFF"
    } else if (index === 2) {
      return "#F0F3F8"
    } else if (index === 3) {
      return "#FFFFFF"
    }
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.safeAreaView}>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
            }}>
              <View style={styles.header}>
                <IconButton
                  icon="keyboard-backspace"
                  color='white'
                  size={25}
                  onPress={() => {}}
                  style={{position: 'absolute',
                    left: 0,
                    bottom: 35}}
                />
                <View style={styles.dateLocation}>
                  <Text style={{color: 'white', fontWeight: 'bold', fontFamily: 'Roboto'}}>Calgary Tech Conference</Text>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'white', marginTop: 10, fontFamily: 'Roboto'}}>July 25 . 8:30</Text> 
                  <IconButton
                                icon="pencil"
                                color="white"
                                size={15}
                              />
                  <Text style={{color: 'white', marginTop: 10, fontFamily: 'Roboto'}}>July 29 . 8:30</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontFamily: 'Roboto', marginRight: 10}}>Toronto, ON</Text>
                    <IconButton
                                  icon="swap-horizontal"
                                  color="white"
                                  size={15}
                                  style={{position: 'absolute', left: 70, bottom: -10}}
                                />
                    <Text style={{color: 'white', fontFamily: 'Roboto', marginLeft: 10}}>Calgary, AB</Text>
                  </View>
                </View>
                <FAB
                  style={{
                    position: 'absolute',
                    marginRight: 10,
                    right: 0,
                    bottom: 40,
                    backgroundColor: (bookMark) ? 'orange' : 'transparent',
                    borderColor: 'white'
                  }}
                  small
                  color="white"
                  icon="bookmark-outline"
                  onPress={() => setBookMark(!bookMark)}
                />
              </View>
              
              <View style={{flex: 6}}>
                {list.map((value, index) => (
                  
                  <View style={{flex: (openedItem === index) ? 9 : 1, backgroundColor: getColor(index-1)}}>
                    <View style={{overflow: 'hidden', borderTopLeftRadius: '25px', flex: 1, justifyContent: 'space-between',           
                    backgroundColor: getColor(index)}}>

                      <View>
                      <TouchableWithoutFeedback onPress={()=> {handlePress(index)}}>
                        <View style={{marginLeft: 12, marginRight: 10, marginTop: 10, flexDirection: 'row', 
                        justifyContent: 'space-between',}}>
                          {index === 0
                            ?
                              <IconButton
                                icon="airplane-takeoff"
                                disabled
                                size={25}
                                style={{position: 'absolute', 
                                  left: -10, top: -12}}
                              />
                            : 
                            index === 1
                              ?
                                <IconButton
                                  icon="hotel"
                                  disabled
                                  size={25}
                                  style={{position: 'absolute', 
                                  left: -10, top: -12}}
                                />
                              : 
                              index === 2
                                ?
                                  <IconButton
                                    icon="car"
                                    disabled
                                    size={25}
                                    style={{position: 'absolute', 
                                  left: -10, top: -12}}
                                  />
                                : null
                          }
                          <Text style={{marginLeft: 35, fontSize: (openedItem === index) ? 20 : 14, fontWeight: (openedItem === index) ? 'bold' : null, fontFamily: 'Roboto', color: (openedItem === index) ? 'black': ((index === 3) ? '' : 'gray')}}>{value.section}</Text>
                          <Text style={{fontSize: 14, marginRight: 10, color: 'gray', fontFamily: 'Roboto'}}>{value.info}</Text>
                          <Text style={{marginRight: 35, fontSize: 14, color: (openedItem === index) ? 'black': (index === 3) ? 'black' : 'gray', fontWeight: (openedItem === index) ? 'bold' : null, 
                          fontFamily: 'Roboto'}}>{value.cost}</Text>
                          {index === 3
                            ? null
                            :
                            <IconButton
                            icon="dots-vertical"
                            color='gray'
                            size={25}
                            disabled={openedItem !== index}
                            onPress={() => alert("do something")}
                            style={{position: 'absolute',
                              right: -15, bottom: (openedItem===index) ? -15 : -20}}
                          />
                          }
                          
                        </View>
                        </TouchableWithoutFeedback>
                        {openedItem === index
                          ?
                          <View style={styles.chipRow}>
                            {value.chip.map((chipText) => (
                              <Chip onPress={() => alert("do something")} style={(index === 2)? {backgroundColor: "#FFFFFF", margin: 5, fontSize: 5} 
                              :styles.chip} textStyle={styles.chipText}>{chipText}</Chip>
                            ))}
                          </View>
                        : null}
                      </View>

                      
                      {openedItem === index
                        ?
                        <>
                          <View style={{flex: 2}}>
                          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {index === 0
                              ?
                              flightList.map((value) => (
                                <FlightCard departingDate={value.departingDate} departingTimeStart={value.departingTimeStart} departingTimeEnd={value.departingTimeEnd} departStop={value.departStop} departingHour={value.departingHour} plane={value.plane} returningDate={value.returningDate} returningTimeStart={value.returningTimeStart} returningTimeEnd={value.returningTimeEnd} returnStop={value.returnStop} returningHour={value.returningHour}/>
                              ))
                              : (index === 1
                                  ?
                                    hotelList.map((value) => (
                                      <HotelCard rate={value.rate} comment={value.comment} url={value.url} star={value.star} name={value.name} minutes={value.minutes} cost={value.cost}/>
                                    ))
                                  : 
                                    carList.map((value) => (
                                      <CarCard name={value.name} rank={value.rank} seats={value.seats} url={value.url} rate={value.rate} cost={value.cost}/>
                                    ))
                              )
                            }
                          </ScrollView>
                          </View>

                        <View style={{marginLeft: 12, marginRight: 10, marginBottom: 15, flexDirection: 'row', 
                        justifyContent: 'space-between'}}>
                          <View>
                            <Chip mode='outlined' style={{backgroundColor: 'transparent', borderColor: "#31A285"}} 
                              textStyle={styles.bookingText}>
                              {index === 2 
                                ? <Text>Book with Rentalcars.com</Text> 
                                : <Text>Book with Booking.com</Text>
                              }
                              </Chip>
                          </View>
                          <View style={{flexDirection:'row', marginTop: 7}}>
                            <Text style={{marginRight: 8, fontSize: 15, color: 'gray'}}>Booked?</Text>
                            <TouchableWithoutFeedback onPress={()=> radioPress(index)}>
                              {RadioButton(index)}
                            </TouchableWithoutFeedback>
                          </View>
                        </View>
                        </>
                        :
                        null
                      }
                      
                    </View>
                  </View>
                
              ))}
              </View>

            </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
    },
  chip: {
    	backgroundColor: '#DFF3F1',
      margin: 5,
  },
  chipText: {
    color: '#7DB8B2',
    fontSize: 12,
    fontWeight: 'bold'
  },
  bookingText: {
    color: "#31A285",
    fontSize: 12,
    fontWeight: 'bold'
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 12,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "#5ACCCD"
  },
  header: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
    
  },
  dateLocation: {
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'center',
    marginRight: 20
  },
});