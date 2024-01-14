import axios from "axios";

const uploadSingleVideo = async (files) => {
  try {
    const form = new FormData();
    form.append("file", files);
    form.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET
    );
    form.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      form
    );
    return res.data.secure_url;
  } catch (error) {
    return;
  }
};

export default uploadSingleVideo;
