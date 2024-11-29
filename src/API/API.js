import axios from "axios"

const getVideos = async () => {
    try {
        const res = await axios.get("http://localhost:5000/videos");
        return res.data
    } catch (error) {}
}

export {getVideos};