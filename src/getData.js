import axios from "axios";

export const getDestination = async () => {
  try {
    const respons = await axios.get(
      "https://space-lvxa.onrender.com/api/destination"
    );
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCrew = async () => {
  try {
    const respons = await axios.get("https://space-lvxa.onrender.com/api/crew");
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTechnology = async () => {
  try {
    const respons = await axios.get(
      "https://space-lvxa.onrender.com/api/technology"
    );
    return respons.data;
  } catch (error) {
    console.log(error);
  }
};
