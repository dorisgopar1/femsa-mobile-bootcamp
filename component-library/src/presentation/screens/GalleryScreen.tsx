import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';

const imageUrls = [
  'https://www.civitatis.com/blog/wp-content/uploads/2022/11/angel-independencia-ciudad-mexico.jpg',
  'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=3145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://elviajista.com/wp-content/uploads/2023/06/oaxacahistorico.jpg',
  'https://media.gettyimages.com/id/155601951/es/foto/iglesia-en-colonial-taxco-méxico.jpg?s=612x612&w=gi&k=20&c=alcTLa_wVgYfO_AcB19SW8xgeFHF37VI-gP-nThTfks=',
];

const GalleryScreen = () => {
  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.imageContainer}>
      <FastImage
        style={styles.image}
        source={{ uri: item }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );

  return (
    <FlatList
      data={imageUrls}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item}-${index}`}
      initialNumToRender={5}
      windowSize={10}
      removeClippedSubviews={true}
      maxToRenderPerBatch={5}
      updateCellsBatchingPeriod={50}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default GalleryScreen;
