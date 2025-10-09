export async function uploadImageToFirebase(uri: string) {
	const fetchResponse = await fetch(uri);
	const blob = await fetchResponse.blob();
	const imageName = uri.split("/").pop()?.split(".")

}