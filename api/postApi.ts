import { PostData } from "@/types/post";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function createPost(post: PostData) {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("feil oppstått", e);
  }
}

export async function getAllPosts() {
  try {
    const queryResults = await getDocs(collection(db, "posts"));
    const posts = queryResults.docs.map(
      (doc) =>
        ({
          ...doc.data(),
          id: doc.id,
        } as PostData)
    );
    console.log(posts);
    return posts;
  } catch (e) {
    console.log("feil", e);
    return [];
  }
}
