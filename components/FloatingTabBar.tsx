import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { useEffect } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MUTED = '#6B7280';
const ACCENT = '#0D9488';
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

function TabButton({
  focused,
  iconName,
  label,
  accessibilityLabel,
  onPress,
}: {
  focused: boolean;
  iconName: FeatherName;
  label: string;
  accessibilityLabel: string;
  onPress: () => void;
}) {
  const progress = useSharedValue(focused ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(focused ? 1 : 0, { duration: 220 });
  }, [focused, progress]);

  const bubbleStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ scale: 0.85 + progress.value * 0.15 }],
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(focused ? 1.08 : 1, { damping: 12, stiffness: 180 }) }],
  }));

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel}
      android_ripple={{ color: 'rgba(13,148,136,0.12)' }}
      style={styles.tabItem}
    >
      <View style={styles.tabBubble}>
        <Animated.View style={[StyleSheet.absoluteFillObject, styles.bubbleBackground, bubbleStyle]} />
        <Animated.View style={iconStyle}>
          <Feather name={iconName} size={18} color={focused ? ACCENT : MUTED} />
        </Animated.View>
        <Text style={[styles.label, { color: focused ? ACCENT : MUTED }]}>{label}</Text>
      </View>
    </Pressable>
  );
}

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
          <TabButton
            key={route.key}
            focused={focused}
            iconName={iconName}
            label={TAB_LABELS[route.name] ?? route.name}
            accessibilityLabel={descriptors[route.key].options.title ?? route.name}
            onPress={onPress}
          />
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
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  bubbleBackground: {
    backgroundColor: ACTIVE_BG,
    borderRadius: 12,
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
  },
});
