//Action Creator
import { FETCH_PRODUCTS } from "./actionType";
import axios from "axios";

export const fetchProduct = function (payload) {
  return {
    type: FETCH_PRODUCTS,
    payload,
  };
};

const baseUrl = "https://969f-103-144-175-236.ap.ngrok.io";

export const getProducts = function () {
  return (dispatch) => {
    axios({
      method: "get",
      url: `${baseUrl}/products`,
    })
      .then((data) => {
        dispatch(fetchProduct(data.data));
        // console.log("masuk<<<<<<<<<");
      })
      .catch((err) => {
        console.log(err);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });
  };
};

export const deleteProduct = function (id) {
  // console.log(id, "><><><><><");
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `${baseUrl}/products/${id}`,
    })
      .then(() => {
        dispatch(getProducts());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createProduct = function (dataBody) {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${baseUrl}/products`,
      data: dataBody,
    })
      .then(() => {
        dispatch(getProducts());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const updateMovies = function (dataBody, id) {
//   return (dispatch) => {
//     fetch(`${baseUrl}/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(dataBody),
//       headers: {
//         "Content-Type": "application/json",
//         access_token: localStorage.access_token,
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Masuk Error nih guys");
//         }
//         return res.json();
//       })
//       .then(() => {
//         Swal.fire({
//           title: "Edit Success",
//           icon: "succes",
//           confirmButtonText: "Ok",
//         });
//         dispatch(fetchMovies());
//       })
//       .catch((err) => {
//         Swal.fire({
//           title: "Edit failed",
//           icon: "error",
//           text: err,
//           confirmButtonText: "Ok",
//         });
//       });
//   };
// };
