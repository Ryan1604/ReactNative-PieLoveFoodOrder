import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Food1, Food2, ICStar} from '../../../assets';

const Popular = ({label, thumbnail, time}) => {
  if (thumbnail === 'Cream') {
    return (
      <View style={styles.container}>
        <Image source={Food1} style={styles.thumbnail} />
        <View style={styles.time}>
          <Text style={styles.min}>{time}</Text>
        </View>
        <Text style={styles.text}>{label}</Text>
        <View style={styles.rating}>
          <ICStar style={styles.star} />
          <Text style={styles.angka}>4.5</Text>
        </View>
      </View>
    );
  }
  if (thumbnail === 'Double') {
    return (
      <View style={styles.container}>
        <Image source={Food2} style={styles.thumbnail} />
        <View style={styles.time}>
          <Text style={styles.min}>{time}</Text>
        </View>
        <Text style={styles.text}>{label}</Text>
        <View style={styles.rating}>
          <ICStar style={styles.star} />
          <Text style={styles.angka}>4.5</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={Food1} style={styles.thumbnail} />
      <Text style={styles.text}>{label}</Text>
      <View style={styles.rating}>
        <ICStar style={styles.star} />
        <Text style={styles.angka}>4.5</Text>
      </View>
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 150,
    height: 223,
    borderRadius: 15,
    padding: 12,
    marginRight: 12,
  },
  thumbnail: {
    width: 126,
    height: 136,
    borderRadius: 15,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#0E0943',
    paddingVertical: 12,
  },
  rating: {
    flexDirection: 'row',
  },
  star: {
    paddingBottom: 12,
  },
  angka: {
    fontFamily: 'Poppins-Medium',
    color: '#FA7854',
    fontSize: 12,
    marginLeft: 2,
  },
  time: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: 85,
    height: 25,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    top: 123,
    left: 12,
    opacity: 0.7,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  min: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#0E0943',
  },
});
