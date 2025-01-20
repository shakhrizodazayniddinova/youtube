import { get, ref } from "firebase/database";
import { db } from "../Firebase/Firebase";

const getVideos = async () => {
  try {
    const dbRef = ref(db, 'videos');
    const snapshot = await get(dbRef);  // get snapshot

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error("Error getting data: ", error);
    throw error;
  }
}

export { getVideos };
