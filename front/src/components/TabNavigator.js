import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING } from '../constants/colors';

import HomeScreen from '../screens/HomeScreen';
import NotificationSettingsScreen from '../screens/NotificationSettingsScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default function TabNavigator() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'notifications':
        return <NotificationSettingsScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Screen Content */}
      <View style={styles.screenContainer}>{renderScreen()}</View>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('home')}
        >
          <Text style={[styles.tabIcon, activeTab === 'home' && styles.activeTabIcon]}>
            🏠
          </Text>
          <Text style={[styles.tabLabel, activeTab === 'home' && styles.activeTabLabel]}>
            홈
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('notifications')}
        >
          <Text
            style={[
              styles.tabIcon,
              activeTab === 'notifications' && styles.activeTabIcon,
            ]}
          >
            🔔
          </Text>
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'notifications' && styles.activeTabLabel,
            ]}
          >
            알림
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('settings')}
        >
          <Text
            style={[styles.tabIcon, activeTab === 'settings' && styles.activeTabIcon]}
          >
            ⚙️
          </Text>
          <Text
            style={[styles.tabLabel, activeTab === 'settings' && styles.activeTabLabel]}
          >
            설정
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  screenContainer: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBackground,
    borderTopWidth: 1,
    borderTopColor: COLORS.background,
    paddingBottom: 8,
    paddingTop: 8,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.sm,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: SPACING.xs,
    opacity: 0.5,
  },
  activeTabIcon: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: FONT_SIZES.caption,
    color: COLORS.textMuted,
  },
  activeTabLabel: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});
