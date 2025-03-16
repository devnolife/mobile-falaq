import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

export default function PrayersScreen() {
  const prayers = [
    { id: "1", name: "Morning Prayer", time: "5:00 AM", completed: true },
    { id: "2", name: "Noon Prayer", time: "12:00 PM", completed: false },
    { id: "3", name: "Evening Prayer", time: "6:00 PM", completed: false },
    { id: "4", name: "Night Prayer", time: "9:00 PM", completed: false },
  ];

  return (
    <View className="flex-1 bg-primary">
      <StatusBar style="light" />
      <View className="px-4 pt-4 flex-1">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-white text-xl font-bold">My Prayers</Text>
          <TouchableOpacity className="bg-accent rounded-full p-2">
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={prayers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity className="bg-dark-100 rounded-xl p-4 mb-3 flex-row justify-between items-center">
              <View className="flex-row items-center">
                <View 
                  className={`w-10 h-10 rounded-full items-center justify-center mr-3 ${
                    item.completed ? "bg-accent/20" : "bg-light-300/10"
                  }`}
                >
                  {item.completed ? (
                    <Ionicons name="checkmark" size={20} color="#AB8BFF" />
                  ) : (
                    <Ionicons name="time-outline" size={20} color="#9CA4AB" />
                  )}
                </View>
                <View>
                  <Text className="text-white font-semibold">{item.name}</Text>
                  <Text className="text-light-300 text-sm">{item.time}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA4AB" />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          className="flex-1"
        />
      </View>
    </View>
  );
} 
