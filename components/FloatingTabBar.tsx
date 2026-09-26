import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MUTED = '#6B7280';
const SLATE = '#3A3D42';
const ACTIVE_BG = 'rgba(107,114,128,0.15)';

type FeatherName = React.ComponentProps<typeof Feather>['name'];

const TAB_ICONS: Record<string, FeatherName> = {
  index: 'home',
  play: 'play-circle',
  book: 'calendar',
  more: 'menu',
};

const TAB_LABELS: Record<string, string> = {
  index: 'Home',
  play: 'Play',
  book: 'Book',
  more: 'More',
};

export const TAB_BAR_HEIGHT = 68;

export default function FloatingTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const useGlass = Platform.OS === 'ios' && isLiquidGlassAvailable();

  const content = (
    <View style={styles.row}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const iconName = TAB_ICONS[route.name] ?? 'circle';

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={focused ? { selected: true } : {}}
            accessibilityLabel={descriptors[route.key].options.title ?? route.name}
            android_ripple={{ color: 'rgba(13,148,136,0.12)' }}
            style={styles.tabItem}
          >
            <View style={[styles.tabBubble, focused && { backgroundColor: ACTIVE_BG }]}>
              <Feather name={iconName} size={18} color={focused ? SLATE : MUTED} />
              <Text style={[styles.label, { color: focused ? SLATE : MUTED }]}>
                {TAB_LABELS[route.name] ?? route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );

  return (
    <View style={[styles.container, { bottom: insets.bottom + 12 }]} pointerEvents="box-none">
      {useGlass ? (
        <GlassView style={styles.bar} glassEffectStyle="regular">
          {content}
        </GlassView>
      ) : (
        <View style={[styles.bar, styles.androidBar]}>{content}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  bar: {
    height: TAB_BAR_HEIGHT,
    width: '100%',
    borderRadius: 22,
    overflow: 'hidden',
  },
  androidBar: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBubble: {
    minWidth: 76,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
  },
});
