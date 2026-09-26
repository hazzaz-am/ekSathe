import { Tabs } from 'expo-router';
import FloatingTabBar from '../../components/FloatingTabBar';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, animation: 'shift' }}
      tabBar={(props) => <FloatingTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="play" />
      <Tabs.Screen name="book" />
      <Tabs.Screen name="more" />
    </Tabs>
  );
}
