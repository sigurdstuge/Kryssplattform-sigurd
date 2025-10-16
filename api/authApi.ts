import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword, User } from "firebase/auth";


export async function signIn(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("User signed in ", userCredential);
    }).catch((error) => console.log("Oops, kunne ikke logge inn", error))
}

export async function signOut() {
    await auth.signOut();
}

export async function(email: string, password: string) {
    try {

    } catch(e) {
        console.log("ingen bruker ble opprettet", e)
    }
}

export async function setUserDisplayName(user: User, display: string) {
    try {

    } catch(e) {
        
    }
}