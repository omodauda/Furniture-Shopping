import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import COLORS from '@constants/Colors';
import PRODUCTS from '@data/products';

// icons
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const {width, height} = Dimensions.get('window');

const ICON_SIZE = 20;
const ICON_COLOR = COLORS.gray;
const ITEM_ICON_COLOR = COLORS.white;
const PRODUCT_WIDTH = 0.42 * width;
const PRODUCT_HEIGHT = 0.31 * height;
const IMG_HEIGHT = 0.24 * height;

const DATA = [
  {
    id: '1',
    title: 'Popular',
    logo: <FontAwesome name="star" size={ICON_SIZE} color={ITEM_ICON_COLOR} />,
  },
  {
    id: '2',
    title: 'Chair',
    logo: (
      <FontAwesome5 name="chair" size={ICON_SIZE} color={ITEM_ICON_COLOR} />
    ),
  },
  {
    id: '3',
    title: 'Table',
    logo: (
      <MaterialCommunityIcons
        name="table-furniture"
        size={30}
        color={ITEM_ICON_COLOR}
      />
    ),
  },
  {
    id: '4',
    title: 'Armchair',
    logo: (
      <MaterialCommunityIcons
        name="chair-rolling"
        size={25}
        color={ITEM_ICON_COLOR}
      />
    ),
  },
  {
    id: '5',
    title: 'Bed',
    logo: <Ionicons name="bed-outline" size={25} color={ITEM_ICON_COLOR} />,
  },
  {
    id: '6',
    title: 'Lamp',
    logo: (
      <MaterialCommunityIcons
        name="lamp-outline"
        size={25}
        color={ITEM_ICON_COLOR}
      />
    ),
  },
];

export default function HomeScreen({navigation}) {
  const [selectedId, setSelectedId] = useState('1');

  const selectedCategory = DATA.find(
    category => selectedId === category.id,
  ).title;

  const CATALOG = PRODUCTS.find(
    product => product.category === selectedCategory,
  ).list;

  const handleItemPress = itemId => {
    setSelectedId(itemId);
  };

  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? COLORS.black : COLORS.blurGray;

    const labelColor = item.id === selectedId ? COLORS.black : COLORS.gray;

    // ITEM_ICON_COLOR = selectedId === item.id ? COLORS.white : COLORS.gray;

    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => handleItemPress(item.id)}>
        <View style={[styles.item, {backgroundColor}]}>{item.logo}</View>
        <Text style={[styles.scrollLabel, {color: labelColor}]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleProductPress = productId => {
    console.log(productId);
  };

  const productList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleProductPress(item.id)}
        style={[
          styles.productView,
          {width: PRODUCT_WIDTH, height: PRODUCT_HEIGHT},
        ]}>
        <View style={[styles.imageContainer]}>
          <Image
            source={item.image}
            style={[styles.image, {height: IMG_HEIGHT}]}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.bag}>
            <Fontisto name="shopping-bag" size={16} color={ITEM_ICON_COLOR} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>$ {item.price}.00</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Feather name="search" color={ICON_COLOR} size={ICON_SIZE} />
        <View>
          <Text style={[styles.headerText, styles.headerTextThin]}>
            Make home
          </Text>
          <Text style={[styles.headerText, styles.headerTextBold]}>
            BEAUTIFUL
          </Text>
        </View>
        <Feather name="shopping-cart" color={ICON_COLOR} size={ICON_SIZE} />
      </View>
      <View>
        <FlatList
          contentContainerStyle={styles.list}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.productList}>
        <FlatList
          data={CATALOG}
          renderItem={productList}
          key={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
