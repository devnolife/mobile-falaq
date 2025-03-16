import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-primary">
      <StatusBar style="light" />
      <ScrollView className="flex-1 px-4 pt-4">
        <View className="bg-dark-100 rounded-xl p-6 shadow-md mb-4">
          <Text className="text-xl font-bold text-white mb-2">Welcome</Text>
          <Text className="text-light-200">
            This is a template for Expo Router with NativeWind and JavaScript.
          </Text>
        </View>
        
        <View className="bg-dark-100 rounded-xl p-6 shadow-md mb-4">
          <Text className="text-xl font-bold text-white mb-2">Features</Text>
          <View className="space-y-2">
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-accent mr-2" />
              <Text className="text-light-200">Expo Router</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-accent mr-2" />
              <Text className="text-light-200">NativeWind (Tailwind CSS)</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-accent mr-2" />
              <Text className="text-light-200">Tab Navigation</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-accent mr-2" />
              <Text className="text-light-200">JavaScript</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 
