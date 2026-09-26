import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ACCENT = '#0D9488';
const MUTED = '#6B7280';
const ICON_TINT = '#E9F5F3';

type FeatherName = React.ComponentProps<typeof Feather>['name'];

const TAB_ICONS: Record<string, FeatherName> = {
  index: 'home',
  play: 'play-circle',
  book: 'calendar',
  more: 'menu',
};

export const TAB_BAR_HEIGHT = 56;

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
            style={styles.tabItem}
          >
            <View style={[styles.iconBubble, focused && { backgroundColor: ICON_TINT }]}>
              <Feather name={iconName} size={22} color={focused ? ACCENT : MUTED} />
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
    borderRadius: 28,
    overflow: 'hidden',
  },
  androidBar: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBubble: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
