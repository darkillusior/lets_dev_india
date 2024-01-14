import axios from "axios";

const uploadPic = async (files) => {
  let pick = [];

  for (let i = 0; i < files.length; i++) {
    const element = files[i];
    try {
      const form = new FormData();
      form.append("file", element);
      form.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET
      );
      form.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
      console.log("no mola 2");
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        form
      );

      pick.push(res.data.secure_url);
    } catch (error) {
      return;
    }
  }
  return pick;
};

export default uploadPic;
