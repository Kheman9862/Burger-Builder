import axios from "axios";

const instances = axios.create({
  baseURL: "https://burger-builder-943de.firebaseio.com/",
});

export default instances;
