import axios from "axios";
export const request = (url,method,data) => {
    return axios({
      method:method || 'post',
      url: `https://d27e-41-141-233-66.ngrok-free.app/api/users/register`,
      data:data,
    });
}
