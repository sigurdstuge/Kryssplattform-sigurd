import { db } from "@/firebaseConfig";
import { collection,addDoc, getDoc, deleteDoc, getDocs, doc, query, where  } from "firebase/firestore";
import { PostComment } from "@/types/post";
const commentRef = await collection(db, "comments");
export  async function uploadComment(commentData: PostComment) {
try {
	const docRef = await addDoc(commentRef, {
		...commentData,
		createdAt: new Date()
	})
	console.log("opplsatet kommentar med id", docRef.id)
	return docRef
} catch(e) {
	console.log("får ikke lastet opp kommentar", e)
}
}

export  async function getlistWithComments(ids: string[]) {
	try {
	
			// const querResult = await getDocs(collection(db, "comments"));
			// const targetComment = querResult.docs.filter((doc) => ids.includes(doc.id));

			// const comment = targetComment.map((doc) =>({
			// 	...doc.data(),
			// 	id: doc.id
			// }  as PostComment)); 
	} catch(e) {
		console.log("fikk ikke hentet kommentar", e)
	}
} 

export async function deleteComment(id: string) {
	try {
		await deleteDoc(doc(db, "comments", id));
		console.log(`kommentar slettet ${id}`)
	} catch(e) {
		console.log("fikk ikke slettet kommentar", e)
	}
}