import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
	ArrowRightSquare,
	Bell,
	ChevronRightIcon,
	GiftIcon,
	Lightbulb,
	MessageCircle,
	UsersIcon,
} from "lucide-react-native";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
	const spotlightData = [
		{
			id: "10",
			image: "https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png",
			text: "Learn Tennis",
			description: "Know more",
		},
		{
			id: "11",
			image: "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png",
			text: "Up Your Game",
			description: "Find a coach",
		},
		{
			id: "12",
			image: "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_03.png",
			text: "Hacks to win",
			description: "Yes, Please!",
		},
		{
			id: "13",
			image: "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_02.png",
			text: "Spotify Playlist",
			description: "Show more",
		},
	];

	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="px-4 py-3 bg-white flex-row justify-between items-center border-b border-gray-200">
				<View className="flex-1">
					<Text className="text-gray-400 text-xs">Location</Text>
					<Text className="text-lg font-semibold">Dhaka, Bangladesh</Text>
				</View>

				<View className="flex-row gap-4 items-center ml-2">
					<MessageCircle size={20} stroke="#333" />
					<Bell size={20} stroke="#333" />
					<Pressable>
						<Image
							className="w-8 h-8 rounded-full"
							source={{
								uri: "https://lh3.googleusercontent.com/ogw/AF2bZyiIS1vzA378fU6wHxrya9RROn2Teu1hjwbdKGXEFC6_KqE=s64-c-mo",
							}}
						/>
					</Pressable>
				</View>
			</View>

			<ScrollView className="px-4" showsVerticalScrollIndicator={false}>
				<View className="bg-[#f4f4f5] rounded-2xl p-4 mt-4 flex-row items-center justify-between">
					<View>
						<Text className="text-lg font-semibold">Set your Weekly Fit Goal</Text>
						<Text className="text-gray-500 text-sm mt-1">KEEP YOURSELF IN SHAPE</Text>
					</View>
					<ArrowRightSquare size={30} stroke="#000" />
				</View>

				<View className="bg-white border border-gray-200 rounded-2xl p-4 mt-4 shadow-sm relative">
					<Text className="text-sm font-semibold text-gray-400">START PLAYING</Text>

					<View className="flex-row items-center justify-between">
						<View>
							<Text className="text-xl font-semibold mt-2">Create Game</Text>
							<Text className="text-base text-gray-500 mt-1">No Upcoming games in your calendar</Text>
						</View>

						<TouchableOpacity className="bg-white px-4 py-2 border border-gray-300 rounded-md">
							<Text className="text-base font-semibold">Create</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity className="mt-3 self-center">
						<Text className="text-base font-semibold text-[#222] underline">View My Calendar</Text>
					</TouchableOpacity>
				</View>

				<View className="#f9fafb mt-5 rounded-2xl p-4 space-y-4">
					<TouchableOpacity className="flex-row items-center justify-between">
						<View className="flex-row items-center gap-3">
							<View className="bg-green-100 p-2 rounded-full">
								<UsersIcon size={20} stroke="#16a34a" />
							</View>
							<View>
								<Text className="text-lg font-semibold text-gray-800">Groups</Text>
								<Text className="text-gray-500 text-sm">Connect, Compete and Discuss</Text>
							</View>
						</View>
						<ChevronRightIcon size={20} stroke="#333" />
					</TouchableOpacity>

					<TouchableOpacity className="flex-row items-center justify-between mt-6">
						<View className="flex-row items-center gap-3">
							<View className="bg-yellow-100 p-2 rounded-full">
								<Lightbulb size={20} stroke="#facc15" />
							</View>
							<View>
								<Text className="text-lg font-semibold text-gray-800">Game Time Activities</Text>
								<Text className="text-gray-500 text-sm">410 ekSathe Hosted games</Text>
							</View>
						</View>
						<ChevronRightIcon size={20} stroke="#333" />
					</TouchableOpacity>
				</View>

				<View className="flex-row justify-between mt-5">
					<TouchableOpacity className="bg-white w-[48%] rounded-2xl border border-gray-200 p-4 shadow-sm">
						<Text className="text-base font-semibold text-black">Bookings</Text>
						<Text className="text-gray-500 text-sm">Game History</Text>
					</TouchableOpacity>

					<TouchableOpacity className="bg-white w-[48%] rounded-2xl border border-gray-200 p-4 shadow-sm">
						<Text className="text-base font-semibold text-black">PlayPals</Text>
						<Text className="text-gray-500 text-sm">Manage Players</Text>
					</TouchableOpacity>
				</View>

				<Text className="text-xl font-bold mt-6 mb-2">SpotLight</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{spotlightData.map((item, index) => (
						<TouchableOpacity className="mr-4 bg-white rounded-xl w-48 overflow-hidden shadow-sm" key={item.id}>
							<Image resizeMode="cover" source={{ uri: item.image }} className="w-full h-56" />
							<View className="p-3">
								<Text className="text-base font-bold text-gray-800 mt-2">{item.text}</Text>
								<Text className="text-gray-600 text-sm">{item.description}</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>

				<View className="items-center mt-5 mb-6">
					<Text className="text-sm text-gray-500">FOLLOW US ON</Text>
					<View className="flex-row gap-4 mt-2">
						<TouchableOpacity>
							<View className="bg-blue-500 p-2 rounded-full">
								<FontAwesome5 name="facebook" size={18} color="#fff" />
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View className="bg-blue-400 p-2 rounded-full">
								<FontAwesome5 name="twitter" size={18} color="#fff" />
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View className="bg-pink-500 p-2 rounded-full">
								<FontAwesome5 name="instagram" size={18} color="#fff" />
							</View>
						</TouchableOpacity>
					</View>
				</View>

				<View className="bg-[#f9fafb] rounded-2xl p-4 mb-6 flex-row items-center">
					<View className="bg-gray-100 p-3 rounded-full mr-3">
						<GiftIcon size={20} stroke="#333" />
					</View>
					<View className="flex-1">
						<Text className="text-base font-semibold">Refer a Sports Enthusiast</Text>
						<Text className="text-gray-600 text-sm">
							Earn <Text className="text-blue-500">50 bonus points</Text> by referring a friend
						</Text>
					</View>
				</View>

				<View className="items-center mt-4 mb-10">
					<Text className="text-2xl font-bold text-[#14b8a6]">ekSathe</Text>
					<Text className="text-gray-500 text-sm mt-1">Your Sports Community App</Text>

					<View className="flex-row justify-center gap-2 mt-2">
						<TouchableOpacity>
							<Text className="text-blue-500 underline text-sm">Privacy Policy</Text>
						</TouchableOpacity>
						<Text className="text-gray-500">•</Text>
						<TouchableOpacity>
							<Text className="text-blue-500 underline text-sm">Terms of Service</Text>
						</TouchableOpacity>
						<Text className="text-gray-500">•</Text>
						<TouchableOpacity>
							<Text className="text-blue-500 underline text-sm">Feedback</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
