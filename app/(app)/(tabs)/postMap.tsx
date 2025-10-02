import { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {Image, StyleSheet, Text, View } from "react-native";
import { PostData } from "@/types/post";
import { getData } from "@/utils/local-storage";
import { Router } from "expo-router";

type Post = {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
};

export default function PostMapPage() {
  const [posts, setposts] = useState<Post[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem("posts");

    if(stored) {
      try {
       {posts.map(inlegg)} setposts(JSON.parse(stored))
      } catch(e) {
        console.log("feil ved ", e)
      }
    }
  }, []);

return (
  <View>
  <MapView initialRegion={{
    latitude: 59.917104578,
    longitude: 10.727706144,
    latitudeDelta: 0.0422,
    longitudeDelta: 0.0421,
  }}>
   
  <Marker coordinate={{}}>

  </Marker>
  </MapView>
  </View>
)
}


