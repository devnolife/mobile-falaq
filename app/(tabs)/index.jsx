import { StatusBar } from "expo-status-bar"
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { useFonts } from "expo-font"
import { Feather, Ionicons } from "@expo/vector-icons"

export default function App() {

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />
      <ScrollView className="flex-1 px-4 pt-2">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-6 mb-4">
          <View>
            <Text className="text-sm text-gray-600 ">Assalamualaikum,</Text>
            <Text className="text-2xl font-semibold text-gray-900 ">Abdul Qadir</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity className="mr-4">
              <View className="relative">
                <Feather name="bell" size={24} color="#333" />
                <View className="absolute w-3 h-3 bg-red-500 rounded-full -top-1 -right-1"></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="menu" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quran Completion */}
        <TouchableOpacity className="flex-row items-center justify-between p-4 mb-4 bg-white shadow-sm rounded-xl">
          <View className="flex-1">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-base font-medium text-gray-900 ">Quran completion</Text>
              <Feather name="chevron-right" size={20} color="#666" />
            </View>
            <Text className="mb-1 text-xs text-gray-600">Last read Al-Baqarah 117</Text>
            <View className="h-1.5 bg-gray-200 rounded-full w-full mb-1">
              <View className="h-1.5 bg-teal-500 rounded-full" style={{ width: "4%" }}></View>
            </View>
            <Text className="text-xs text-right text-gray-600">4%</Text>
          </View>
          <View className="items-center justify-center w-16 h-20 ml-4 bg-gray-200 rounded-lg">
            <Feather name="book" size={24} color="#666" />
          </View>
        </TouchableOpacity>

        {/* Prayer Time */}
        <View className="mb-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-base font-medium text-gray-900 ">Prayer time</Text>
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="location" size={16} color="#f43f5e" />
              <Text className="ml-1 mr-1 text-sm text-gray-700">Yogyakarta</Text>
              <Feather name="chevron-down" size={16} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Prayer Card */}
          <View className="p-4 mb-2 bg-teal-500 rounded-xl">
            <View className="mb-1">
              <Text className="text-sm text-white opacity-90">Saturday, June 1, 2024</Text>
              <Text className="text-sm text-white">Dhul-Qi'dah 24</Text>
            </View>
            <View className="mb-4">
              <Text className="text-3xl font-bold text-white">Dzhuhur 11:40</Text>
              <View className="flex-row items-center">
                <Ionicons name="time-outline" size={16} color="white" />
                <Text className="ml-1 text-xs text-white opacity-80">-00:05:45</Text>
              </View>
            </View>

            {/* Prayer Times */}
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-xs text-white opacity-80">Subuh</Text>
                <Text className="text-sm text-white ">04:25</Text>
              </View>
              <View className="items-center">
                <Text className="text-xs font-medium text-white opacity-80">Dzhuhur</Text>
                <Text className="text-sm font-bold text-white">11:40</Text>
                <View className="w-0 h-0 mt-1 border-b-8 border-l-4 border-r-4 border-l-transparent border-r-transparent border-b-white"></View>
              </View>
              <View className="items-center">
                <Text className="text-xs text-white opacity-80">Ashar</Text>
                <Text className="text-sm text-white ">14:59</Text>
              </View>
              <View className="items-center">
                <Text className="text-xs text-white opacity-80">Maghrib</Text>
                <Text className="text-sm text-white ">17:30</Text>
              </View>
              <View className="items-center">
                <Text className="text-xs text-white opacity-80">Isya</Text>
                <Text className="text-sm text-white ">18:44</Text>
              </View>
            </View>
          </View>

          {/* Find Nearest Mosque */}
          <TouchableOpacity className="flex-row items-center justify-between p-4 bg-white shadow-sm rounded-xl">
            <View className="flex-row items-center">
              <View className="p-2 mr-3 bg-teal-100 rounded-lg">
                <Ionicons name="home-outline" size={20} color="#0d9488" />
              </View>
              <Text className="text-sm text-gray-800 ">Find nearest mosque</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Learning Access */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-base font-medium text-gray-900">Learning access</Text>
            <Feather name="chevron-right" size={20} color="#666" />
          </View>

          <View className="flex-row justify-between">
            {/* Material Card */}
            <TouchableOpacity className="bg-white rounded-xl p-4 shadow-sm w-[48%]">
              <Text className="mb-2 text-base font-medium text-gray-800">Material</Text>
              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-gray-600">11/30</Text>
                <View className="items-center justify-center w-12 h-12 rounded-lg bg-amber-50">
                  <Feather name="book-open" size={24} color="#d97706" />
                </View>
              </View>
            </TouchableOpacity>

            {/* Murajaah Card */}
            <TouchableOpacity className="bg-white rounded-xl p-4 shadow-sm w-[48%]">
              <Text className="mb-2 text-base font-medium text-gray-800">Murajaah</Text>
              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-gray-600">22/50</Text>
                <View className="items-center justify-center w-12 h-12 rounded-lg bg-pink-50">
                  <Feather name="mic" size={24} color="#ec4899" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}
