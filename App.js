/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      entries : entries,
      activeSlide: entries.length/2
    }
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity onPress={() => alert(`item ${index} pressed`)}>
      <View style={styles.slide}>
        <Image source={{ uri: item.imageUrl }} style={styles.slideImage} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View >
      </TouchableOpacity>
    );
  }

  get pagination () {
    const { entries, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          containerStyle={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            marginBottom: 340,
            borderRadius: 15,
          }}
          dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 3,
              marginHorizontal: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={entries}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={300}
          firstItem={entries.length/2}
          layout={'default'}
          layoutCardOffset={1}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
        />
        { this.pagination }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 50,
  },
  titleContainer: {
    backgroundColor: 'black',
    width: 300,
    height: 30,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontSize: 18
  },
  slideImage: { 
    width: 298, 
    height: 150, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10 
  }
});

const entries = [
  {
    title: 'This is',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD28ckua9GRHQ50nFl5p_t71xa35ZtyvuNwuKzOV5CrmnwCum-'
  },
  {
    title: 'A Good',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisH0DvTvdSutNnY7xaPA0UjUVnDs8TYnrnxD6zkihfLCdSQzq'
  },
  {
    title: 'Looking',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bESiIfMfadjWKrsOZwK0uh_Ha9b7c1CbJFsDhnZcQKEsdEzMgA'
  },
  {
    title: 'Things',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwmqgLVb9MXUUWD0Ykdj4FH-Soc6iiH6pnt9eDF5xqZcXW_zr'
  },
  {
    title: 'Carousel',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisH0DvTvdSutNnY7xaPA0UjUVnDs8TYnrnxD6zkihfLCdSQzq'
  },
  {
    title: 'More',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bESiIfMfadjWKrsOZwK0uh_Ha9b7c1CbJFsDhnZcQKEsdEzMgA'
  },
  {
    title: 'Things',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwmqgLVb9MXUUWD0Ykdj4FH-Soc6iiH6pnt9eDF5xqZcXW_zr'
  },
];