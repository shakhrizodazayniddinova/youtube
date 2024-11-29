import axios from "axios"

const getVideos = async () => {
    try {
        const res = await axios.get("http://localhost:5000/videos");
        return res.data
    } catch (error) {
        console.error("Failed to fetch videos:", error);
        throw error;
    }
}

export {getVideos};