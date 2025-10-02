import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";

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
  <MapView>
   
  <Marker coordinate={{}}>

  </Marker>
  </MapView>
  </View>
)
}


