
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,StatusBar,Image,FlatList,ScrollView, Modal ,} from 'react-native';
import { Audio } from 'expo-av';
// import Slider from 'react-native-slider';
import LinearGradient from 'react-native-linear-gradient';
// import { AntDesign } from '@ant-design/icons-react-native';
// import Carousel from 'react-native-snap-carousel';
import Ionicons from '@expo/vector-icons/Ionicons';
// import Songs from './Songs';
// import { ViewPropTypes } from 'deprecated-react-native-prop-types';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

const deImg = require('./assets/defaultimage.png')
const defcolor = ['#663399', "#4B0150", "#36013F", "#0C090A", "#000000"]
const SONGS = [
  // {
  //   id: 0,
  //   title: '',
  //   url: " ",
  //   artist:'',
  //   image:require('./assets/defaultimage.png')
  // },
  {
    id: 1,
    title: 'KappaleriPoyaachu',
    url: require('./assets/KappaleriPoyaachu.mp3'),
    artist:'S.P.Balasubrahmanyam, P.Susheela',
    image:require('./assets/KappaleriPoyaachu.jpg')
  },
  {
    id: 2,
    title: 'En-Peru-Padayappa',
    url: require('./assets/En-Peru-Padayappa.mp3'),
    artist:'S.P.Balasubrahmanyam',
    image:require('./assets/En-Peru-Padayappa.jpg')
  },
  {
    id: 3,
    title: 'Romeo-Aatam-Potal',
    url: require('./assets/Romeo-Aatam-Potal.mp3'),
    artist:'Udit Narayan, Hariharan',
    image:require('./assets/mrromeo.jpg')
  },{
    id: 4,
    title: 'Parthen-Rasithen',
    url: require('./assets/Parthen-Rasithen.mp3'),
    artist:'Yugendran, Reshmi',
    image:require('./assets/Parthen-Rasithen.jpg')
  },{
    id: 5,
    title: 'Ussumu-Laresay',
    url: require('./assets/Ussumu-Laresay.mp3'),
    artist:'Vijay Antony and Janani',
    image:require('./assets/Ussumu-Laresay.jpg')
  },
  {
    id: 6,
    title: 'Ussumu-Laresay',
    url: require('./assets/Ussumu-Laresay.mp3'),
    artist:'Vijay Antony and Janani',
    image:require('./assets/Ussumu-Laresay.jpg')
  },
  {
    id: 7,
    title: 'Parthen-Rasithen',
    url: require('./assets/Parthen-Rasithen.mp3'),
    artist:'Yugendran, Reshmi',
    image:require('./assets/Parthen-Rasithen.jpg')
  },
  {
    id: 8,
    title: 'Romeo-Aatam-Potal',
    url: require('./assets/Romeo-Aatam-Potal.mp3'),
    artist:'Udit Narayan, Hariharan',
    image:require('./assets/mrromeo.jpg')
  },
  {
    id: 9,
    title: 'En-Peru-Padayappa',
    url: require('./assets/En-Peru-Padayappa.mp3'),
    artist:'S.P.Balasubrahmanyam',
    image:require('./assets/En-Peru-Padayappa.jpg')
  },
  {
    id: 10,
    title: 'KappaleriPoyaachu',
    url: require('./assets/KappaleriPoyaachu.mp3'),
    artist:'S.P.Balasubrahmanyam, P.Susheela',
    image:require('./assets/KappaleriPoyaachu.jpg')
  },
];

export default function N() {


  const [song, setSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  let [modalVisible,setModalVisible]=useState(false)
  // const [defaulfimg,setdefaultimg] = useState({def:true,sel:false})
  const [icon,seticon]=useState({ play  : true, pause : false})

  useEffect(() => {
    console.log("test1")
    console.log(song !== null)
    if (song !== null) {

      isPlaying ? song.playAsync() : song.pauseAsync();
    }
  }, [isPlaying]);

  const loadSong = async () => {
    const { sound } = await Audio.Sound.createAsync(SONGS[currentSongIndex].url);
    setSong(sound);
// seticon({play:false,pause:true})
  };

  //play
  // const play =async ()=>{


  // }

  useEffect( async () => {
    
     await  loadSong();
    
      // loadSong();
      if (song !== null) {
        
        // loadSong();
       await  song.playAsync()
      }
      else{

      }
    
  }, [currentSongIndex]);

  const handlePlayPause = async() => {
   setIsPlaying(!isPlaying);
    // seticon({play:!play,pause:!pause})
  };

  const handleNext = async () => {
    if (currentSongIndex === SONGS.length - 1) {
      
      // setIsPlaying(false);//new change
      seticon({play:false,pause:true})
      await song.stopAsync();
      await song.unloadAsync();
      // await song.unloadAsync()
      setCurrentSongIndex(0);
    } else {
      
      // setIsPlaying(false);//new change
      await song.stopAsync();
      await song.unloadAsync();
      setCurrentSongIndex(currentSongIndex + 1);
      // await song.unloadAsync()
      seticon({play:false,pause:true})
    }
  };

  const handlePrevious = async( ) => {
    if (currentSongIndex === 0) {
      
      // setIsPlaying(false);//new change
      seticon({play:false,pause:true})
      await song.stopAsync();
      await song.unloadAsync();
      await setCurrentSongIndex(SONGS.length - 1);
    } else {
      
      // setIsPlaying(false);//new change
      seticon({play:false,pause:true})
       await song.stopAsync();
       await song.unloadAsync();
       setCurrentSongIndex(currentSongIndex - 1);
    }
  };


  const selected =async (index)=>{
    await song.stopAsync();
    await song.unloadAsync();
    await setCurrentSongIndex(index);
   await setModalVisible(!modalVisible);

  }
  const modal = ()=>{
     setModalVisible(!modalVisible)
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
  // const handleSliderValueChange = async (value) => {
  //   setSliderValue(value);
  //   await song.setPositionAsync(value * 1000);
  // };
  

  return (
    <>
    <StatusBar backgroundColor={'#2f7693'}/>
    <View style={styles.container}>
      {/* <LinearGradient colors={defcolor} style={{ flex: 1 }} > */}

      <View style={{height:70,width:'100%',backgroundColor:'#B7CEEE',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
      <Image source={require('./assets/logo.png')} style={{width:50,height:50,borderRadius:25}} />
      <View style={{width:70,flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <TouchableOpacity> 
        <Ionicons name="person"  size={20}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity> 
        <Ionicons name="settings"  size={20}></Ionicons>
        </TouchableOpacity>
      
      
      </View>
      
      </View>
      <View style={styles.top}>

            <View style={styles.img}>
              <Image style={{ width: 280, height: 280, borderRadius: 16 }} source={SONGS[currentSongIndex].image || defImg} />
            </View>

            {/* linebreak */}

            <View
      style={{
        width: 325,
        height: 1,
        backgroundColor: '#BAB8B9',
        position:'relative',
        // top: '50%',
        // left: '50%',
        Left: -125, // Half of the width
        top:50
      }}
    />

          </View >
          <View style={styles.favandsongdetail}>
            <TouchableOpacity style={styles.favicon2}>
              <Ionicons name="heart-outline" size={40} color="#2f7693" style={{ top: 0 }} />

              {/*<Ionicons name="heart" size={25} color="#FA2A55" /> */}

            </TouchableOpacity>
            <View style={{ left: 40 }}>
              <Text style={styles.songdetails}>{SONGS[currentSongIndex].title || '' }</Text>
              <Text style={{fontSize:18, color: '#2f7693',Right:10,height:50}}>{SONGS[currentSongIndex].artist || ''}</Text>
            </View>
          </View>

      {/* slider */}
       {/*<View style={styles.sliderContainer}>
  <Slider
    style={styles.slider}
    minimumValue={0}
    maximumValue={song ? Math.floor(song.getDurationAsync() / 1000) : 0}
    value={sliderValue}
    minimumTrackTintColor="#000"
    maximumTrackTintColor="#ccc"
    thumbTintColor="#000"
    onSlidingComplete={handleSliderValueChange}
  /> 
  <View style={styles.durationContainer}>
    <Text style={styles.durationText}>{formatTime(sliderValue * 1000)}</Text>
    <Text style={styles.durationText}>{formatTime(song ? song.getDurationAsync() : 0)}</Text>
  </View>
</View>*/}



      
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:30,top:20}}>
      <TouchableOpacity style={{top:10}} onPress={handlePrevious}>
      <Ionicons name="play-back" size={32} color="#2f7693" />
      </TouchableOpacity>
     
      <TouchableOpacity  onPress={handlePlayPause}>
        <Text>
          {isPlaying ? 
                <Ionicons name="pause" size={50} color="#2f7693" /> :
                <Ionicons name="play" size={50} color="#2f7693" />
          }
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{top:10}} onPress={handleNext}>
      <Ionicons name="play-forward" size={32} color="#2f7693" />
      </TouchableOpacity>
      
      
      </View>


      <View style={styles.bottomnav}>



            <TouchableOpacity style={styles.nav}>
              <Ionicons onPress={() => setModalVisible(true)} name="musical-notes" size={28} color="#2f7693" />
              <Text style={{ fontSize: 10, color: "#2f7693" }}>Songs </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav}>
              <Ionicons name="home" size={28} color="#2f7693" />
              <Text style={{ fontSize: 10, color: "#2f7693" }}>Home </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav}>
              <Ionicons name="heart" size={28} color="#2f7693" />
              <Text style={{ fontSize: 10, color: "#2f7693" }}>Favoirtes</Text>
            </TouchableOpacity>
          </View>

{/* repeat view */}

<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:20,paddingHorizontal:28}}>
<Ionicons name="repeat" size={28} color='#2f7693'></Ionicons>
<Ionicons name="download"  size={25} color='#2f7693'></Ionicons>
</View>

{/* </LinearGradient> */}
<Modal  visible={modalVisible}>
    <View style={{backgroundColor:'#e3e9ee'}}>
    <View style={{height:50}}>
  <View style={{ alignItems: 'flex-end', paddingTop: 20, paddingRight: 20 }}>
    <TouchableOpacity onPress={modal}>
    <Ionicons name="close-circle-outline" size={30} color='#393E46'></Ionicons>
    </TouchableOpacity>
  </View>
  
</View>

      <ScrollView>
        {
          SONGS.map((item,index)=>{
            return(
              <TouchableOpacity onPress={selected.bind(this,index)} key={index}>
                {/* <Text>{item.title}</Text> */}
                <View style={styles.outercard} >

                      <View style={styles.card}>

                        <View style={{ width: "20%",height:'100%',left:5 }}>
                         <Image source={item.image} style={{width:"100%",height:'100%'}}/>
                        </View>

                        <View style={{ left: 15, width: "70%" ,height:'100%' }}>
                          <Text style={styles.title}>{item.title}</Text>
                          <Text style={styles.artist}>{item.artist}</Text>
                        </View>

                        <TouchableOpacity style={styles.favicon2}>
                          <View >
                            <Ionicons name="heart-outline" size={20} color="#FA2A55" />
                            {/* <Ionicons name="heart" size={25} color="#FA2A55" /> */}
                          </View>
                        </TouchableOpacity>

                      </View>
                      
                    </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
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
    height: 55,
    paddingVertical:2.5,
    borderTopColor:'#BAB8B9',
    borderWidth:1
    // backgroundColor: 'red',
  },
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
    // borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: 'blue',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor:'#b7ced6'

  },
  title:
  {
    fontSize: 25,
    // color: "#C0C0C0",

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    
  },
  favicon2:
  {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0
  },
  favandsongdetail:
  {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'blue',
    paddingHorizontal: 10,
    height: 100,
    paddingVertical:20

    // backgroundColor: 'white',

  },
  songdetails:
  {
    // paddingHorizontal: 10,
    fontSize: 30,
    color: '#2f7693',
    
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
  top:
  {

    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
    // borderTopLeftRadius: 10,
    //  borderTopRightRadius: 10
  },
});
