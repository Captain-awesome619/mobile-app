import { Text } from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'react-native';
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center" >
    <Text className="text-3xl text-purple-600 font-pbold"> AwesomeTube</Text>
    <StatusBar  />
    <Link href="/home" style={{color: "red"}}>Home</Link>
    </View>
  );
}

