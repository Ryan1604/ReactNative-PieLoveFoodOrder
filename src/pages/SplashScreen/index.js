import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BG, ICLike, ILPict} from '../../assets';
import {Button, Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Image source={BG} style={styles.background} />
      <Image source={ILPict} style={styles.pict} />
      <ICLike style={styles.icon} />
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>PieLove Anetto</Text>
          <Text style={styles.subTitle}>Let's taste the Pie Cake made</Text>
          <Text style={styles.subTitle}>by Chef Bimo Semesta</Text>
          <Gap height={50} />
          <Button
            text="Let's Order"
            onPress={() => navigation.replace('Home')}
          />
          <Gap height={40} />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#554AB2',
    justifyContent: 'flex-end',
  },
  background: {
    position: 'absolute',
    top: 219,
    left: 0,
    width: 415,
    height: 670,
  },
  pict: {
    width: 375,
    height: 474,
    position: 'absolute',
    top: 10,
    left: 15,
  },
  icon: {
    position: 'absolute',
    width: 66,
    height: 66,
    left: 287,
    top: 155,
  },
  card: {
    backgroundColor: '#FFFFFF',
    height: 291,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  content: {
    paddingHorizontal: 68,
    paddingTop: 50,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#0E0943',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#AFAFAF',
    textAlign: 'center',
  },
});
