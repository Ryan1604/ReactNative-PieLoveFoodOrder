import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Category, Gap, Header, Popular, TextInput} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Header
          title="Hello, Shadam"
          subTitle="What Pie you want to try today?"
        />
        <TextInput placeholder="Find your favorite Pie" />
        <Gap height={60} />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Category</Text>
        <Gap height={7} />
        <View style={styles.category}>
          <Category label="Salty Pie" icon="Salty" />
          <Category label="Sweet Pie" icon="Sweet" active />
          <Category label="Fruit Pie" icon="Fruit" />
          <Category label="Drinks" icon="Drinks" />
        </View>
        <Gap height={30} />
        <Text style={styles.title}>Popular Sweet Pie</Text>
        <Gap height={7} />
        <View style={styles.popular}>
          <Popular label="Cream Sweet Pie" thumbnail="Cream" time="20-30 Min" />
          <Popular
            label="DoubleJumbo Pie"
            thumbnail="Double"
            time="30-45 Min"
          />
          <Popular
            label="Fruit's Small Pie"
            thumbnail="Double"
            time="10-25 Min"
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {backgroundColor: '#554AB2', paddingHorizontal: 30},
  card: {
    flex: 1,
    backgroundColor: '#F6F5FF',
    marginTop: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  category: {
    flexDirection: 'row',
    marginLeft: -35,
  },
  popular: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#0E0943',
  },
});
