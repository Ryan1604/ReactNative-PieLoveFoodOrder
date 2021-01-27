import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICHome,
  ICHomeActive,
  ICCart,
  ICCartActive,
  ICLove,
  ICLoveActive,
  ICProfile,
  ICProfileActive,
} from '../../../assets';

const Icon = ({label, active}) => {
  switch (label) {
    case 'Home':
      return active ? <ICHomeActive /> : <ICHome />;
    case 'Cart':
      return active ? <ICCartActive /> : <ICCart />;
    case 'Love':
      return active ? <ICLoveActive /> : <ICLove />;
    case 'Profile':
      return active ? <ICProfileActive /> : <ICProfile />;

    default:
      <ICHomeActive />;
  }
  return <ICHomeActive />;
};

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.menu}>
            <Icon label={label} active={isFocused} />
            <Text style={styles.text(isFocused)}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: (isFocused) => ({
    fontFamily: isFocused ? 'Poppins-Medium' : 'Poppins-Regular',
    fontSize: 14,
    color: isFocused ? '#FA7854' : '#AFAFAF',
  }),
  menu: {
    alignItems: 'center',
  },
});
