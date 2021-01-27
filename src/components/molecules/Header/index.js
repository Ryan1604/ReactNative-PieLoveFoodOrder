import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {User} from '../../../assets';

const Header = ({title, subTitle, onPress}) => {
  return (
    <View style={styles.container}>
      <Image source={User} style={styles.profile} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#554AB2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 18,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#FFFFFF',
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#9B8FFF',
  },
});
