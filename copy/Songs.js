
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,StatusBar,Image,FlatList,ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@ant-design/icons-react-native';
import Carousel from 'react-native-snap-carousel';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

 
const SONGS = [
  {
    id: 1,
    title: 'Song 1',
    url: require('./assets/KappaleriPoyaachu.mp3'),
    artist:'S.P.Balasubrahmanyam, P.Susheela',
    image:require('./assets/KappaleriPoyaachu.jpg')
  },
  {
    id: 2,
    title: 'Song 2',
    url: require('./assets/En-Peru-Padayappa.mp3'),
    artist:'S.P.Balasubrahmanyam',
    image:require('./assets/En-Peru-Padayappa.jpg')
  },
  {
    id: 3,
    title: 'Song 3',
    url: require('./assets/Romeo-Aatam-Potal.mp3'),
    artist:'Udit Narayan, Hariharan',
    image:require('./assets/mrromeo.jpg')
  },{
    id: 4,
    title: 'Song 4',
    url: require('./assets/Parthen-Rasithen.mp3'),
    artist:'Yugendran, Reshmi',
    image:require('./assets/Parthen-Rasithen.jpg')
  },{
    id: 5,
    title: 'Song 5',
    url: require('./assets/Ussumu-Laresay.mp3'),
    artist:'Vijay Antony, Emcee Jazz and Janani',
    image:require('./assets/Ussumu-Laresay.jpg')
  },
  {
    id: 6,
    title: 'Song 6',
    url: require('./assets/Ussumu-Laresay.mp3'),
    artist:'Vijay Antony, Emcee Jazz and Janani',
    image:require('./assets/Ussumu-Laresay.jpg')
  },
  {
    id: 7,
    title: 'Song 7',
    url: require('./assets/Parthen-Rasithen.mp3'),
    artist:'Yugendran, Reshmi',
    image:require('./assets/Parthen-Rasithen.jpg')
  },
  {
    id: 8,
    title: 'Song 8',
    url: require('./assets/Romeo-Aatam-Potal.mp3'),
    artist:'Udit Narayan, Hariharan',
    image:require('./assets/mrromeo.jpg')
  },
  {
    id: 9,
    title: 'Song 9',
    url: require('./assets/En-Peru-Padayappa.mp3'),
    artist:'S.P.Balasubrahmanyam',
    image:require('./assets/En-Peru-Padayappa.jpg')
  },
  {
    id: 10,
    title: 'Song 10',
    url: require('./assets/KappaleriPoyaachu.mp3'),
    artist:'S.P.Balasubrahmanyam, P.Susheela',
    image:require('./assets/KappaleriPoyaachu.jpg')
  },
];

export default function Songs() {
  
const [modalVisible,setmodalvisible] = useState(false)
const [playPause, setPlayPause] = useState({ play: true, pause: false });
const [playingsong,setplayingsong]=useState(null)
const [audio,setaudio]=useState()

const playsong = async(item) => {
    setplayingsong(item)
        setmodalvisible(false)
        setPlayPause({play:false,pause:true})
    
    let  {audio} =await Audio.Sound.createAsync(require(playingsong.song));
    
    setaudio(audio);
    await audio.playAsync();
    
      }
    
      useEffect (()=>{
    
    return audio 
    ? () => {
    audio.unloadAsync();
    } :
    undefined;
    
      },[audio])

const playPause=()=>{
    
}

    



  //carousal
  const renderItem = ({ item }) => {
    return (
      <ScrollView horizontal={true}>
        <View style={{paddingVertical:5,width:100}}>
          <TouchableOpacity >
        <Image source={item.image} style={styles.songImage} />
        {/* <Text style={styles.songName}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text> */}
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  

  return (
    <>
    <View style={{flex:1}}>

    <View style={styles.functions}>

{/*  back*/}

<TouchableOpacity style={styles.icons} onPress={back}>
  <Ionicons name="play-back" size={32} color="white" />
</TouchableOpacity>
{/* Play pause button*/}
{
  playPause.play && <TouchableOpacity onPress={() => setPlayPause({ play: false, pause: true })} style={{ top: 2.5 }}>
    <Ionicons name="play" size={50} color="white" />
  </TouchableOpacity>
}
{
  playPause.pause && <TouchableOpacity onPress={() => setPlayPause({ play: true, pause: false })} style={{ top: 2.5 }}>
    <Ionicons name="pause" size={50} color="white" />
  </TouchableOpacity>
}
{/*next */}
<TouchableOpacity>
  <Ionicons name="play-forward" size={32} color="white" />
</TouchableOpacity>

</View>
<Modal visible={modalVisible}>
    {SONGS.map((music, index) => (
                  <TouchableOpacity key={index} onPress={playsong.bind(this,music)} style={{ backgroundColor: '#045F5F' }}>

                    <View style={styles.outercard} >

                      <View style={styles.card}>

                        <View style={{ width: "20%",height:'100%',left:5 }}>
                         <Image source={{uri: music.img}} style={{width:"100%",height:'100%'}}/>
                        </View>

                        <View style={{ left: 15, width: "70%" ,height:'100%' }}>
                          <Text style={styles.title}>{music.title}</Text>
                          <Text style={styles.artist}>{music.artist}</Text>
                        </View>

                        <TouchableOpacity style={styles.favicon2}>
                          <View >
                            <Ionicons name="heart-outline" size={20} color="white" />
                            {/* <Ionicons name="heart" size={25} color="#FA2A55" /> */}
                          </View>
                        </TouchableOpacity>

                      </View>
                      
                    </View>
                  </TouchableOpacity>
                ))}
                </Modal>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9E2EC',
 backgroundColor: '#FEF6FB',
    
    // alignItems: 'center',
    // justifyContent: 'center',
    height:'100%',
    width:'100%'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  songImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    // marginRight: 10,
    // marginHorizontal:15
    justifyContent: 'space-between',
    left:5
  },
  // songName: {
  //   fontWeight: 'bold',
  //   fontSize: 16,
  //   marginBottom: 5,
  // },
  // songArtist: {
  //   color: 'gray',
  //   fontSize: 14,
  // },
  bottomnav:
  {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 38,
    height: 50,
    // paddingVertical:15,
    // borderTopColor:'#393E46',
    // borderWidth:1
    // backgroundColor: 'red',
  },
  nav:
  {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  img:
  {

    height: 280,
    width: 280,
    borderRadius: 20,
    // shadowOffset:{width:-2,height:4},
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 20,
    // backgroundColor: transparent,
    // filter:'blur'
  },
  top:
  {

    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },
  favandsongdetail:
  {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'blue',
    paddingHorizontal: 10,
    height: 80,

    // backgroundColor: 'white',

  },
  songdetails:
  {
    // paddingHorizontal: 10,
    fontSize: 30,
    color: '#C0C0C0',
    
  },
  favicon2:
  {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // shadowOffset:{width:-2,height:4},
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 20,
  },
  // favicon1:
  // {
  //   position:'absolute',
  //   right:5,
  //   top:20

  // },
  // textdec:
  // {
  //   color: '#C0C0C0',
  //   // position:'absolute',
  //   // left:20,
  // },
  functions:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    // left:0,
    // right:0
    top: 30,
    height: 50,
    backgroundColor: '#0C090A',
    alignItems: 'center'
  },
  icons:{
    borderRadius: 20,
    // shadowOffset:{width:-2,height:4},
    // shadowColor: 'white',
    // shadowOpacity: 0.2,
    // shadowRadius: 0,
    // elevation: 20,
  },
  // slider:
  // {
  //   paddingVertical: 5,
  //   paddingHorizontal: '40%',
  // },
  bottomnav:
  {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 38,
    height: 50,
    // paddingVertical:15,
    // borderTopColor:'#393E46',
    // borderWidth:1
    // backgroundColor: 'red',
  },
  // textdec1:
  // {
  //   color: '#C0C0C0',
  //   fontSize: 20
  //   // bottom:10
  // },
  nav:
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
   outercard:
  {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,


  },
  card: {
    width: '95%',
    height:100,

    flexDirection: 'row',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#ffffff',
    shadowOpacity: 0.2,
    shadowRadius: 3

  },
  bottomnav:
  {
    position: 'absolute',
    bottom: 2,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 38,
    height: 50,
    // paddingBottom:15,
    borderTopColor: '#393E46',
    borderWidth: 1
    // backgroundColor: 'red',
  },
  nav:
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:
  {
    fontSize: 25,
    // color: "#C0C0C0",

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    
  },
  artist: {
    fontSize: 15,
    color: "#C0C0C0"
  },
  favicon2:
  {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0
  },
});
