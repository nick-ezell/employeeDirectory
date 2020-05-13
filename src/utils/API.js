import axios from "axios";

export default {
  getPeople: () => {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
