import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

export const Axios = axios.create({
  baseURL: `${baseUrl}/api/profile`,
  headers: { Authorization: cookie.get("token") }
});




export const profileUpdate = async (picUrl,info) => {
  try {


    await Axios.post(`/update`, {
      picUrl,info
    });

    
    window.location.reload();
  } catch (error) {
    setError(catchErrors(error));
    setLoading(false);
  }
};