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
import TabCustomHeader from '@components/TabCustomHeader';
// import {useSelector, useDispatch} from 'react-redux';
import { addToFav } from '@store/slices/favourite';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@store/api/product';

// icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const {width, height} = Dimensions.get('window');

const ICON_SIZE = 20;
const ITEM_ICON_COLOR = COLORS.white;
const PRODUCT_WIDTH = 0.42 * width;
const PRODUCT_HEIGHT = 0.31 * height;
const IMG_HEIGHT = 0.24 * height;

const DATA = [
  // {
  //   id: '1',
  //   title: 'Popular',
  //   logo: <FontAwesome name="star" size={ICON_SIZE} color={ITEM_ICON_COLOR} />,
  // },
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
    title: 'Arm Chair',
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

// const queryCache = new QueryCache({
//   onError: error => {
//     console.log(error)
//   },
//   onSuccess: data => {
//     console.log(data)
//   }
// });

// const query = queryCache.find(['user']);
// console.log('user_query', query);

export default function HomeScreen({ navigation }) {
  // const PRODUCTS = useSelector(state => state.products);
  // const favProducts = useSelector(state => state.favourite.favouriteProducts);
  const [selectedId, setSelectedId] = useState('Chair');

  // const selectedCategory = DATA.find(
  //   category => selectedId === category.id,
  // ).title;

  // const CATALOG = PRODUCTS.find(
  //   product => product.category === selectedCategory,
  // ).list;

  const { data, error, isLoading, refetch } = useQuery(['product', selectedId], () => getCategories(selectedId), { enabled: true, retry: false});
  if (data) {
    console.log('data.products', data)
  
  } else {
    console.log('error.products', error)
  }
  // console.log('data', data)
  
  const handleItemPress = title => {
    setSelectedId(title);
  };

  // const dispatch = useDispatch();
  const favItem = item => {
    dispatch(addToFav({category: selectedCategory, productId: item.id}));
  };

  const renderItem = ({item}) => {
    const backgroundColor =
      item.title === selectedId ? COLORS.black : COLORS.blurGray;

    const labelColor = item.title === selectedId ? COLORS.black : COLORS.gray;

    // ITEM_ICON_COLOR = selectedId === item.id ? COLORS.white : COLORS.gray;

    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => handleItemPress(item.title)}>
        <View style={[styles.item, {backgroundColor}]}>{item.logo}</View>
        <Text style={[styles.scrollLabel, {color: labelColor}]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleProductPress = productId => {
    navigation.navigate('Product', {
      productId: productId,
    });
  };

  const productList = ({item}) => {
    // const isFav = favProducts.find(
    //   product =>
    //     product.category === selectedCategory && product.id === item.id,
    // );
    return (
      <TouchableOpacity
        onPress={() => handleProductPress(item.id)}
        style={[
          styles.productView,
          {width: PRODUCT_WIDTH, height: PRODUCT_HEIGHT},
        ]}>
        <View style={[styles.imageContainer]}>
          <Image
            source={{ uri: item.images[0].url }}
            lo
            style={[styles.image, {height: IMG_HEIGHT}]}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => favItem(item)}
            style={[
              styles.bag,
              // {backgroundColor: isFav ? COLORS.gray5 : COLORS.black3},
            ]}>
            <Fontisto
              name="shopping-bag"
              size={16}
              // color={isFav ? COLORS.black : ITEM_ICON_COLOR}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>$ {item.price}.00</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TabCustomHeader navigation={navigation}>
        <View>
          <Text style={[styles.headerText, styles.headerTextThin]}>
            Make home
          </Text>
          <Text style={[styles.headerText, styles.headerTextBold]}>
            BEAUTIFUL
          </Text>
        </View>
      </TabCustomHeader>
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
          data={data}
          renderItem={productList}
          key={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
