import axios from "axios";

const BaseURL = "http://localhost:5000/videos";

const getVideos = async () => {
    try {
        const res = await axios.get(BaseURL);
        return res.data;
    } catch (error) {
        console.error("Failed to fetch videos:", error);
        throw error;
    }
}

export { getVideos };