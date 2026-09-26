import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
	Bell,
	ChevronRightIcon,
	GiftIcon,
	Lightbulb,
	MessageCircle,
	PlusIcon,
	UsersIcon,
} from "lucide-react-native";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ACCENT = "#0D9488";
const INK = "#14151A";
const MUTED = "#6B7280";

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
			description: "Yes, please",
		},
		{
			id: "13",
			image: "https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_02.png",
			text: "Spotify Playlist",
			description: "Show more",
		},
	];

	const listRows = [
		{
			id: "groups",
			icon: <UsersIcon size={18} stroke={ACCENT} />,
			title: "Groups",
			subtitle: "Connect, compete and discuss",
		},
		{
			id: "activities",
			icon: <Lightbulb size={18} stroke={ACCENT} />,
			title: "Game time activities",
			subtitle: "410 ekSathe hosted games",
		},
	];

	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="px-5 pt-2 pb-4 flex-row justify-between items-center">
				<View className="flex-1">
					<Text className="text-xs" style={{ color: MUTED }}>
						Location
					</Text>
					<Text className="text-lg font-semibold mt-0.5" style={{ color: INK }}>
						Dhaka, Bangladesh
					</Text>
				</View>

				<View className="flex-row gap-5 items-center ml-2">
					<MessageCircle size={20} stroke={INK} />
					<Bell size={20} stroke={INK} />
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

			<ScrollView className="px-5" showsVerticalScrollIndicator={false}>
				<TouchableOpacity className="flex-row items-center justify-between py-3 border-b" style={{ borderColor: "#ECECE9" }}>
					<View>
						<Text className="text-base font-medium" style={{ color: INK }}>
							Weekly fit goal
						</Text>
						<Text className="text-sm mt-0.5" style={{ color: MUTED }}>
							Set a target and keep yourself in shape
						</Text>
					</View>
					<ChevronRightIcon size={18} stroke={MUTED} />
				</TouchableOpacity>

				<View
					className="rounded-3xl p-5 mt-5"
					style={{ backgroundColor: "#F7F7F6", borderWidth: 1, borderColor: "#ECECE9" }}
				>
					<Text className="text-xs" style={{ color: MUTED }}>
						Start playing
					</Text>
					<Text className="text-xl font-semibold mt-1" style={{ color: INK }}>
						Create a game
					</Text>
					<Text className="text-sm mt-1" style={{ color: MUTED }}>
						No upcoming games in your calendar
					</Text>

					<View className="flex-row items-center justify-between mt-4">
						<TouchableOpacity>
							<Text className="text-sm font-medium" style={{ color: ACCENT }}>
								View my calendar
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							className="flex-row items-center gap-1.5 px-4 py-2.5 rounded-full"
							style={{ backgroundColor: ACCENT }}
						>
							<PlusIcon size={16} stroke="#fff" />
							<Text className="text-sm font-semibold text-white">Create</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View className="mt-6">
					{listRows.map((row, index) => (
						<TouchableOpacity
							key={row.id}
							className="flex-row items-center justify-between py-3.5"
							style={index < listRows.length - 1 ? { borderBottomWidth: 1, borderColor: "#ECECE9" } : undefined}
						>
							<View className="flex-row items-center gap-3">
								<View className="w-9 h-9 rounded-full items-center justify-center" style={{ backgroundColor: "#E9F5F3" }}>
									{row.icon}
								</View>
								<View>
									<Text className="text-base font-medium" style={{ color: INK }}>
										{row.title}
									</Text>
									<Text className="text-sm mt-0.5" style={{ color: MUTED }}>
										{row.subtitle}
									</Text>
								</View>
							</View>
							<ChevronRightIcon size={18} stroke={MUTED} />
						</TouchableOpacity>
					))}
				</View>

				<View className="flex-row justify-between mt-6">
					<TouchableOpacity className="w-[48%] rounded-2xl p-4" style={{ backgroundColor: "#F7F7F6" }}>
						<Text className="text-base font-medium" style={{ color: INK }}>
							Bookings
						</Text>
						<Text className="text-sm mt-0.5" style={{ color: MUTED }}>
							Game history
						</Text>
					</TouchableOpacity>

					<TouchableOpacity className="w-[48%] rounded-2xl p-4" style={{ backgroundColor: "#F7F7F6" }}>
						<Text className="text-base font-medium" style={{ color: INK }}>
							PlayPals
						</Text>
						<Text className="text-sm mt-0.5" style={{ color: MUTED }}>
							Manage players
						</Text>
					</TouchableOpacity>
				</View>

				<Text className="text-lg font-semibold mt-8 mb-3" style={{ color: INK }}>
					Spotlight
				</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{spotlightData.map((item) => (
						<TouchableOpacity
							className="mr-3 rounded-2xl w-48 overflow-hidden"
							style={{ borderWidth: 1, borderColor: "#ECECE9" }}
							key={item.id}
						>
							<Image resizeMode="cover" source={{ uri: item.image }} className="w-full h-56" />
							<View className="p-3">
								<Text className="text-base font-semibold" style={{ color: INK }}>
									{item.text}
								</Text>
								<Text className="text-sm" style={{ color: MUTED }}>
									{item.description}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>

				<View
					className="rounded-2xl p-4 mt-8 flex-row items-center"
					style={{ backgroundColor: "#F7F7F6" }}
				>
					<View className="w-10 h-10 rounded-full items-center justify-center mr-3" style={{ backgroundColor: "#E9F5F3" }}>
						<GiftIcon size={18} stroke={ACCENT} />
					</View>
					<View className="flex-1">
						<Text className="text-base font-medium" style={{ color: INK }}>
							Refer a sports enthusiast
						</Text>
						<Text className="text-sm mt-0.5" style={{ color: MUTED }}>
							Earn <Text style={{ color: ACCENT, fontWeight: "600" }}>50 bonus points</Text> by referring a friend
						</Text>
					</View>
				</View>

				<View className="items-center mt-5">
					<Text className="text-sm" style={{ color: MUTED }}>
						Follow us
					</Text>
					<View className="flex-row gap-5 mt-3">
						<TouchableOpacity>
							<FontAwesome5 name="facebook" size={18} color={MUTED} />
						</TouchableOpacity>
						<TouchableOpacity>
							<FontAwesome5 name="twitter" size={18} color={MUTED} />
						</TouchableOpacity>
						<TouchableOpacity>
							<FontAwesome5 name="instagram" size={18} color={MUTED} />
						</TouchableOpacity>
					</View>
				</View>

				<View className="items-center mt-8 mb-10">
					<Text className="text-2xl font-bold" style={{ color: ACCENT }}>
						ekSathe
					</Text>
					<Text className="text-sm mt-1" style={{ color: MUTED }}>
						Your sports community app
					</Text>

					<View className="flex-row justify-center gap-2 mt-3">
						<TouchableOpacity>
							<Text className="text-sm" style={{ color: MUTED }}>
								Privacy policy
							</Text>
						</TouchableOpacity>
						<Text style={{ color: MUTED }}>·</Text>
						<TouchableOpacity>
							<Text className="text-sm" style={{ color: MUTED }}>
								Terms of service
							</Text>
						</TouchableOpacity>
						<Text style={{ color: MUTED }}>·</Text>
						<TouchableOpacity>
							<Text className="text-sm" style={{ color: MUTED }}>
								Feedback
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
