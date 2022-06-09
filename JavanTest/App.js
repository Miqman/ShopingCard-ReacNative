import { StatusBar } from "expo-status-bar";
import axios from "axios";
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import CardComponent from "./components/CardComponents";
import { Provider, useDispatch, useSelector } from "react-redux";

import store from "./stores";
import { createProduct, getProducts } from "./stores/actions/productAction";

function App() {
  // const [product, setProduct] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const { products } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productRender = ({ item }) => {
    return <CardComponent product={item}></CardComponent>;
  };

  function submitHandle() {
    // setModalVisible(!modalVisible);

    let dataBody = {
      title,
      description,
      stock,
      price,
      image: "https://picsum.photos/200/200",
    };

    dispatch(createProduct(dataBody)).then(() => {
      setModalVisible(!modalVisible);
    });
  }

  // async function addProduct(dataBody) {
  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       url: "https://bc4d-103-144-175-236.ap.ngrok.io/products",
  //       data: dataBody,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View style={{ flex: 3, paddingHorizontal: 15 }}>
          <FlatList
            data={products}
            renderItem={productRender}
            keyExtractor={(item) => item.id}
          />

          {/* <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  style={{ flex: 2 / 3 }}
                  source={{
                    uri: "https://akcdn.detik.net.id/visual/2015/03/20/eba3b6ae-08da-4c6e-b258-25217da9d061_169.jpg?w=650",
                  }}
                />
                <View
                  style={{ flex: 1, alignSelf: "flex-end", marginLeft: 10 }}
                >
                  <TouchableOpacity style={styles.submit}>
                    <Text style={styles.submitText}>Rp. 10000</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  // backgroundColor: "orange",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: "center",
                    // alignContent: "flex-end",
                    marginLeft: 10,
                    flexDirection: "row-reverse",
                  }}
                >
                  <TouchableOpacity
                    style={[styles.plusMinus, { backgroundColor: "#F44236" }]}
                  >
                    <Ionicons name="md-trash-outline" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.plusMinus,
                      { backgroundColor: "#4FC2F8", marginEnd: 3 },
                    ]}
                  >
                    <Text style={styles.submitText}>+</Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.submitText,
                      {
                        backgroundColor: "yellow",
                        marginVertical: 10,
                        marginHorizontal: 10,
                        color: "black",
                        fontSize: 20,
                      },
                    ]}
                  >
                    4
                  </Text>
                  <TouchableOpacity
                    style={[styles.plusMinus, { backgroundColor: "#F44236" }]}
                  >
                    <Text style={[styles.submitText, { fontSize: 16 }]}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  style={{ flex: 2 / 3 }}
                  source={{
                    uri: "https://akcdn.detik.net.id/visual/2015/03/20/eba3b6ae-08da-4c6e-b258-25217da9d061_169.jpg?w=650",
                  }}
                />
                <View
                  style={{ flex: 1, alignSelf: "flex-end", marginLeft: 10 }}
                >
                  <TouchableOpacity style={styles.submit}>
                    <Text style={styles.submitText}>Rp. 10000</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  // backgroundColor: "orange",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignSelf: "center",
                    // alignContent: "flex-end",
                    marginLeft: 10,
                    flexDirection: "row-reverse",
                  }}
                >
                  <TouchableOpacity
                    style={[styles.plusMinus, { backgroundColor: "#F44236" }]}
                  >
                    <Ionicons name="md-trash-outline" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.plusMinus,
                      { backgroundColor: "#4FC2F8", marginEnd: 3 },
                    ]}
                  >
                    <Text style={styles.submitText}>+</Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.submitText,
                      {
                        backgroundColor: "yellow",
                        marginVertical: 10,
                        marginHorizontal: 10,
                        color: "black",
                        fontSize: 20,
                      },
                    ]}
                  >
                    4
                  </Text>
                  <TouchableOpacity
                    style={[styles.plusMinus, { backgroundColor: "#F44236" }]}
                  >
                    <Text style={[styles.submitText, { fontSize: 16 }]}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View> */}
        </View>

        <View style={{ flex: 1 / 2, backgroundColor: "#DCDCDC" }}>
          <View style={styles.cardBottom}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Dummy product
            </Text>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Box w="100%">
                      <FormControl isRequired>
                        <Stack mx="4">
                          <FormControl.Label>Title</FormControl.Label>
                          <Input
                            _light={{
                              bg: "coolGray.100",
                            }}
                            _dark={{
                              bg: "coolGray.800",
                            }}
                            _hover={{
                              bg: "coolGray.200",
                            }}
                            shadow={2}
                            type="text"
                            placeholder="title"
                            value={title}
                            onChangeText={(value) => setTitle(value)}
                          />
                          <FormControl.Label>Description</FormControl.Label>
                          <Input
                            _light={{
                              bg: "coolGray.100",
                            }}
                            _dark={{
                              bg: "coolGray.800",
                            }}
                            _hover={{
                              bg: "coolGray.200",
                            }}
                            shadow={2}
                            type="text"
                            placeholder="description"
                            value={description}
                            onChangeText={(value) => setDescription(value)}
                          />
                          <FormControl.Label>Stock</FormControl.Label>
                          <Input
                            _light={{
                              bg: "coolGray.100",
                            }}
                            _dark={{
                              bg: "coolGray.800",
                            }}
                            _hover={{
                              bg: "coolGray.200",
                            }}
                            shadow={2}
                            type="number"
                            placeholder="stock"
                            value={stock}
                            onChangeText={(value) => setStock(value)}
                          />
                          <FormControl.Label>Price</FormControl.Label>
                          <Input
                            _light={{
                              bg: "coolGray.100",
                            }}
                            _dark={{
                              bg: "coolGray.800",
                            }}
                            _hover={{
                              bg: "coolGray.200",
                            }}
                            shadow={2}
                            type="number"
                            placeholder="price"
                            value={price}
                            onChangeText={(value) => setPrice(value)}
                          />
                        </Stack>
                      </FormControl>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={submitHandle}
                      >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                      </Pressable>
                    </Box>
                  </View>
                </View>
              </Modal>
            </View>
            <TouchableOpacity
              style={[styles.plusMinus, { backgroundColor: "#4CB050" }]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={[styles.submitText, { fontWeight: "bold" }]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.containerBottom}>
        <FontAwesome5 name="shopping-cart" size={24} color="black" />
        <Text>i'm one and only</Text>
      </View>
    </SafeAreaView>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <App></App>
      </NativeBaseProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  containerTop: {
    flex: 3,
    backgroundColor: "#DCDCDC",
  },
  containerBottom: {
    flex: 3 / 3,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "white",
    height: 100,
    padding: 10,
    marginVertical: 10,
  },
  insideCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottom: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  submit: {
    width: 80,
    padding: 4,
    borderRadius: 6,
    // borderWidth: 1,
    backgroundColor: "#4CB050",
  },
  submitText: {
    color: "white",
    textAlign: "center",
  },
  plusMinus: {
    width: 30,
    padding: 4,
    borderRadius: 6,
    // borderWidth: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
