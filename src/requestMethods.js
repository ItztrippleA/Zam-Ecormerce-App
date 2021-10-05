import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGIyZDc3M2RiZGI2MzdjNGE5NDRjOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzQ0NDAzMywiZXhwIjoxNjMzNzAzMjMzfQ.03X26ume77zfdx_Vrwvhy0UF2S7MBVS-7LZyf--tqjM";

export const publicRequest = axios.create({
  BASE_URL,
});

export const userRequest = axios.create({
  BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
