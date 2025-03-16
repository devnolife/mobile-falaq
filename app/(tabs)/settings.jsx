import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [reminders, setReminders] = useState(false);

  return (
    <View className="flex-1 bg-primary">
      <StatusBar style="light" />
      <ScrollView className="flex-1 px-4 pt-4">
        <Text className="text-white text-xl font-bold mb-6">Settings</Text>

        <View className="space-y-4">
          {/* Profile Section */}
          <View className="bg-dark-100 rounded-xl p-4">
            <View className="flex-row items-center mb-4">
              <View className="w-14 h-14 rounded-full bg-accent/20 items-center justify-center mr-3">
                <Text className="text-accent text-xl font-bold">JD</Text>
              </View>
              <View>
                <Text className="text-white font-semibold text-lg">John Doe</Text>
                <Text className="text-light-300">john.doe@example.com</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-dark-200 rounded-lg p-3 flex-row justify-center items-center">
              <Ionicons name="person-outline" size={18} color="#AB8BFF" className="mr-2" />
              <Text className="text-accent ml-2">Edit Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Preferences Section */}
          <View className="bg-dark-100 rounded-xl p-4">
            <Text className="text-white font-semibold mb-4">Preferences</Text>
            
            <View className="space-y-4">
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <Ionicons name="notifications-outline" size={20} color="#9CA4AB" />
                  <Text className="text-light-200 ml-3">Notifications</Text>
                </View>
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                  trackColor={{ false: "#151312", true: "#221F3D" }}
                  thumbColor={notifications ? "#AB8BFF" : "#9CA4AB"}
                />
              </View>
              
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <Ionicons name="moon-outline" size={20} color="#9CA4AB" />
                  <Text className="text-light-200 ml-3">Dark Mode</Text>
                </View>
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                  trackColor={{ false: "#151312", true: "#221F3D" }}
                  thumbColor={darkMode ? "#AB8BFF" : "#9CA4AB"}
                />
              </View>
              
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <Ionicons name="time-outline" size={20} color="#9CA4AB" />
                  <Text className="text-light-200 ml-3">Daily Reminders</Text>
                </View>
                <Switch
                  value={reminders}
                  onValueChange={setReminders}
                  trackColor={{ false: "#151312", true: "#221F3D" }}
                  thumbColor={reminders ? "#AB8BFF" : "#9CA4AB"}
                />
              </View>
            </View>
          </View>

          {/* About Section */}
          <View className="bg-dark-100 rounded-xl p-4">
            <Text className="text-white font-semibold mb-4">About</Text>
            
            <TouchableOpacity className="flex-row justify-between items-center py-3">
              <View className="flex-row items-center">
                <Ionicons name="information-circle-outline" size={20} color="#9CA4AB" />
                <Text className="text-light-200 ml-3">App Version</Text>
              </View>
              <Text className="text-light-300">1.0.0</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row justify-between items-center py-3">
              <View className="flex-row items-center">
                <Ionicons name="document-text-outline" size={20} color="#9CA4AB" />
                <Text className="text-light-200 ml-3">Terms of Service</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#9CA4AB" />
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row justify-between items-center py-3">
              <View className="flex-row items-center">
                <Ionicons name="shield-outline" size={20} color="#9CA4AB" />
                <Text className="text-light-200 ml-3">Privacy Policy</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#9CA4AB" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 
