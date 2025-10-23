import { useAuthSession } from "@/providers/authctx";
import * as userApi from "@/api/userApi";
import * as postApi from "@/api/postApi";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs} from "firebase/firestore"
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { auth, db } from "@/firebaseConfig";
import { PostData } from "@/types/post";

export default function ProfilePage() {
  const [userNameText, setUserNameText] = useState("");
  const { userNameSession, signIn, signOut } = useAuthSession();
  const [profile, setProfile] = useState(null);
  const [bio, setBio] = useState("");
  const [isEEditingBio, setIsEditingBio] = useState(false)
  const [posts, sePosts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;


  useEffect(() => {

  },[])
  async function getUserData(userId: string) {
    const userPosts = await userApi.getUserProfile(userId);
    return userPosts;
  }

async function getPosts(userId: string) {
  const userPosts = await getPosts(userId)
  sePosts(posts)
}

async function loadData() {
  setIsLoading(true);
  if(!user) return Alert.alert("du må være innlogget");
  const userData = await getUserData(user.uid);
  //setProfile(userData)

}
async function userProfile() {
  if(bio.length === 0) {
    alert("skriv litt om deg");
    return
  }

  if(profile === null) {
    // const newUserProfile: userData {
    //   name: userNameSession ?? "Feil oppstått",
    //   email: user?.email ?? "Feil oppstått",
    //   Bio: bio
    // };
    //await userApi.create
  }
}

  return (
    <View style={style.mainContainer}>
      <Text>Her er profilsiden!</Text>
      {userNameSession !== null && <Text>Hei på deg {userNameSession}</Text>}
      <Text>
        Trykk{" "}
        {
          <Link style={style.link} href={"/declarations"}>
            her
          </Link>
        }{" "}
        for informasjon om appen
      </Text>
      <View style={style.textInputContainer}>
        <TextInput
          style={style.textInput}
          value={userNameText}
          placeholder="Tittel"
          onChangeText={setUserNameText}
        />
      </View>
      <View style={style.buttonContainer}>
        <Pressable
          style={[style.button, { borderWidth: 2, borderColor: "gray" }]}
          onPress={() => {
            // signIn(userNameText);
          }}
        >
          <Text>Logg inn</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            signOut();
          }}
          style={[style.button, { backgroundColor: "gray" }]}
        >
          <Text>Logg ut</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecorationLine: "underline",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    // paddingHorizontal: 30,
    marginTop: 16,
  },
  textInputContainer: {
    gap: 16,
    alignItems: "center",
    width: "100%",
  },
  textInput: {
    borderBottomWidth: 1,
    width: "75%",
    fontSize: 18,
  },
  button: {
    // backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
