import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} />,
          tabBarActiveTintColor: "#34c759",
          tabBarInactiveTintColor: "#666666"
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          title: 'Play',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name='person' color={color} />, tabBarActiveTintColor: "#34c759",
          tabBarInactiveTintColor: "#666666"
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
          title: 'Book',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name='calendar-month' color={color} />,
          tabBarActiveTintColor: "#34c759",
          tabBarInactiveTintColor: "#666666"
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name='menu' color={color} />,
          tabBarActiveTintColor: "#34c759",
          tabBarInactiveTintColor: "#666666"
        }}
      />
    </Tabs>
  );
}
