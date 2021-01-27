import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICDrink, ICFruit, ICSalty, ICSweetActive} from '../../../assets';
import {Gap} from '../../atoms';

const Category = ({label, icon, active}) => {
  if (icon === 'Salty') {
    return (
      <View style={styles.container}>
        <Gap height={12} />
        <View style={styles.card}>
          <View style={styles.cardContainer(active)}>
            <ICSalty />
          </View>
          <Text style={styles.text(active)}>{label}</Text>
        </View>
      </View>
    );
  }
  if (icon === 'Sweet') {
    return (
      <View style={styles.container}>
        <Gap height={12} />
        <View style={styles.card}>
          <View style={styles.cardContainer(active)}>
            <ICSweetActive />
          </View>
          <Text style={styles.text(active)}>{label}</Text>
        </View>
      </View>
    );
  }
  if (icon === 'Fruit') {
    return (
      <View style={styles.container}>
        <Gap height={12} />
        <View style={styles.card}>
          <View style={styles.cardContainer(active)}>
            <ICFruit />
          </View>
          <Text style={styles.text(active)}>{label}</Text>
        </View>
      </View>
    );
  }
  if (icon === 'Drinks') {
    return (
      <View style={styles.container}>
        <Gap height={12} />
        <View style={styles.card}>
          <View style={styles.cardContainer(active)}>
            <ICDrink />
          </View>
          <Text style={styles.text(active)}>{label}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Gap height={12} />
      <View style={styles.card}>
        <View style={styles.cardContainer}>
          <ICSalty />
        </View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: (active) => ({
    backgroundColor: active ? '#FA7854' : '#FFFFFF',
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: (active) => ({
    fontFamily: active ? 'Poppins-Medium' : 'Poppins-Regular',
    fontSize: 12,
    color: active ? '#0E0943' : '#B2AFCD',
    marginTop: 12,
  }),
  card: {
    width: 60,
    alignItems: 'center',
  },
});
