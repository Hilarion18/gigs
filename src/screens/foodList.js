import React from 'react';
import {
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  Text
} from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood } from '../actions/food';

const FoodList = () => {

  const dispatch = useDispatch();

  const deleteCurrent = (key) => dispatch(deleteFood(key))

  const foods = useSelector(state => state.foodReducer.foodList)
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  console.log("foods: ", foods)
  console.log("DATA: ", DATA)


  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text></Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const renderFood = ({ item }) => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Item title={item.name} />
      <Item title={item.name} />
    </View>
  );

  const list = [
    {
      id: 1,
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      id: 2,
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ];

  return (
    <View>
      {
        foods.length > 0 ? 
        <Text>{foods[foods.length - 1].name}</Text>
        : null
      }
      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
        <Icon
          name='trash-bin-outline'/>
      </View>
      

      <FlatList style={styles.listContainer}
        data={foods}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={
          (data) =>
            <ListItem
              title={data.item.name}
              bottomDivider
              rightIcon={<Icon
                name='delete'
                size={36}
                onPress={() => deleteCurrent(data.item.key)} />
              }
            />
        }
      />
      <FlatList
        contentContainerStyle={{alignSelf: 'flex-start'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={foods}
        renderItem={renderFood}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FoodList;