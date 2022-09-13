import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchStorage = async(key) => {
  const value = await AsyncStorage.getItem(key);
  return value;
};

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log(error)
  }
}

export {fetchStorage, storeData}