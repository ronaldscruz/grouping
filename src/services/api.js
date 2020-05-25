import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkwMzY1OTE5LCJleHAiOjE1OTA5NzA3MTl9.FncSklOpCBL-e_OH1kBzp76j0XpQY8N0myJUngf8DBI",
  },
});
