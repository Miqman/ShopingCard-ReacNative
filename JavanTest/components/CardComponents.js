import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../stores/actions/productAction";

// uriImage https://akcdn.detik.net.id/visual/2015/03/20/eba3b6ae-08da-4c6e-b258-25217da9d061_169.jpg?w=650

export default function CardComponent({ product }) {
  const dispatch = useDispatch();

  function buttonDelete(id) {
    // axios({
    //   method: "DELETE",
    //   url: `https://bc4d-103-144-175-236.ap.ngrok.io/products/${product.id}`,
    // })
    //   .then((result) => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });

    dispatch(deleteProduct(product.id));
  }

  const [amount, setAmount] = useState(0);

  function minusHandle() {
    if (amount === 0) {
      setAmount(0);
    } else {
      setAmount(amount - 1);
    }
  }

  function plusHandle() {
    setAmount(amount + 1);
  }
  return (
    <View style={styles.card}>
      <View style={styles.insideCard}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image
            style={{ flex: 2 / 3 }}
            source={{
              uri: product.image,
            }}
          />
          <View
            style={{
              flex: 1,
              marginLeft: 10,
              paddingVertical: 5,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "green", fontWeight: "bold" }}>
              {product.title}
            </Text>
            <TouchableOpacity style={styles.submit}>
              <Text style={styles.submitText}>Rp. {product.price}</Text>
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
              onPress={buttonDelete}
            >
              <Ionicons name="md-trash-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.plusMinus,
                { backgroundColor: "#4FC2F8", marginEnd: 3 },
              ]}
              onPress={plusHandle}
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
              {amount}
            </Text>
            <TouchableOpacity
              style={[styles.plusMinus, { backgroundColor: "#F44236" }]}
              onPress={minusHandle}
            >
              <Text style={[styles.submitText, { fontSize: 16 }]}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

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
});
