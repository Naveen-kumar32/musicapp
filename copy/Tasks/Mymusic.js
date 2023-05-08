import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TextInput, Button, TouchableOpacity, StyleSheet, Dimentions, StatusBar, Image } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
// import Slider from  'react-native-community/slider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Audio } from 'expo-av';
// import Musiclist from './Musiclist'
// import Sound from 'react-native-sound';


const Mymusic = () => {

const deImg = 'https://images.pexels.com/photos/1885213/pexels-photo-1885213.jpeg?auto=compress&cs=tinysrgb&w=600'

const defcolor = ['#663399', "#4B0150", "#36013F", "#0C090A", "#000000"]
  const [music, setmusic] = useState([

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
   
  ])

  const [modalVisible, setModalVisible] = useState(false);
  const [playPause, setPlayPause] = useState({ play: true, pause: false });
  const [musicItem,setMusicItem] = useState([]);


  const [currentsongindex, setcurrentsong] = useState(0);
  const [audio, setaudio] = useState()

   




  const playsong = async(item) => {
setMusicItem(item)
    setModalVisible(false)
    setPlayPause({play:false,pause:true})

const {audi} =await Audio.Sound.createAsync({uri:music.song});

setaudio(audi);
await audi.playAsync();

  }

  useEffect (()=>{

return audio 
? () => {
audio.unloadAsync();
} :
undefined;

  },[audio])


  const back = async () => {
    if (audio) {
      await audio.stopAsync();
      await audio.unloadAsync();
    }

    // if (index.id==(music.id && 1)){
    //play id 1 song
    // }
    // else if (index.id ==(music.id))
    // {
    //play (id-1)
    setcurrentsong(currentsongindex == 0 ? song.length - 1 : currentsongindex - 1)
  }

  const next = async () => {
    if (audio) {

      await audio.stopAsync();
      await audio.unloadAsync()
      // if (index.id==(music.id && 5)){
      //play id 1 song
    }
    // else if (index.id ==(music.id))
    // {
    //   //play (id+1)
    // }

    setcurrentsong(currentsongindex == music.length - 1 ? 0 : currentsongindex + 1)
  }

  const pauseplay = () => {
    if (audio) {
      if (music.isPlaying) {
        // await audio.pauseAsync();
        setPlayPause({play:!play,pause:!pause})
      }

    }
  }


  //#4B0150
  // <Image source={require('../assets/img/domer-ulord-u.jpg')} />

  return (
    <>
      
      <View style={styles.container}>
        <LinearGradient
          colors={defcolor} style={{ flex: 1 }} >

<View style={styles.title}>
                  <Text style={{ fontSize: 30, color: '#C0C0C0' }}>NaviMusics</Text>
                </View>

          <View style={styles.top}>

            {/*<View style={styles.favicon1}>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={32} color="white" />
              </TouchableOpacity>
            </View> */ }

            <View style={styles.img}>
              <Image style={{ width: 280, height: 280, borderRadius: 16 }} source={{ uri: musicItem.img || deImg }} />
            </View>

          </View >
          <View style={styles.favandsongdetail}>
            <TouchableOpacity style={styles.favicon2}>
              <Ionicons name="heart-outline" size={40} color="white" style={{ top: 0 }} />
              {/*<Ionicons name="heart" size={25} color="#FA2A55" /> */}
            </TouchableOpacity>
            <View style={{ left: 40 }}>
              <Text style={styles.songdetails}>{musicItem.title || '' }</Text>
              <Text style={{fontSize:18, color: '#eeeeee', }}>{musicItem.artist || ''}</Text>
            </View>
          </View>
          {/* slide */}


          {/* BPF */}

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

          <View style={styles.bottomnav}>


            <TouchableOpacity style={styles.nav}>
              <Ionicons onPress={() => setModalVisible(true)} name="musical-notes" size={28} color="#C0C0C0" />
              <Text style={{ fontSize: 10, color: "#C0C0C0" }}>Songs </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav}>
              <Ionicons name="home" size={28} color="#C0C0C0" />
              <Text style={{ fontSize: 10, color: "#C0C0C0" }}>Home </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav}>
              <Ionicons name="heart" size={28} color="#C0C0C0" />
              <Text style={{ fontSize: 10, color: "#C0C0C0" }}>Favoirtes</Text>
            </TouchableOpacity>

          </View>

</LinearGradient>

          <Modal visible={modalVisible}>

            <StatusBar backgroundColor={'#008B8B'} />
            
              <LinearGradient
                colors={['#008B8B', "#045F5F", "#033E3E", "#000000", "#000000"]} style={{ flex: 1 }} >
                <View style={styles.title}>
                  <Text style={{ fontSize: 30, color: '#C0C0C0' }}>Songs</Text>
                </View>
                {music.map((music, index) => (
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
                            {/*<Ionicons name="heart" size={25} color="#FA2A55" /> */}
                          </View>
                        </TouchableOpacity>

                      </View>
                      
                    </View>
                  </TouchableOpacity>
                ))}</LinearGradient>
            

          </Modal>

        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',



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
  // navtext:
  // {
  //   color:'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',

  // }
});


export default Mymusic;

