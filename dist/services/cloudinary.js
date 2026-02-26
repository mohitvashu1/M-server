import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const uploadToCloudinary = async (base64Image) => {
    const result = await cloudinary.uploader.upload(base64Image, {
        folder: "projectx/tweets",
        resource_type: "image",
    });
    return result.secure_url;
};
//# sourceMappingURL=cloudinary.js.map