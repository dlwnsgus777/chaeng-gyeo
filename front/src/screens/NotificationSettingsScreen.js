import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS } from '../constants/colors';

export default function NotificationSettingsScreen() {
  // 알림 설정 상태
  const [notifications, setNotifications] = useState({
    umbrella: true,
    airQuality: false,
    weatherAlert: true,
  });

  const [notificationTime, setNotificationTime] = useState('07:00');

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>알림 설정</Text>
        </View>

        {/* 우산 챙기기 알림 */}
        <View style={styles.notificationCard}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationIcon}>☂️</Text>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTitle}>우산 챙기기</Text>
              <Text style={styles.notificationDescription}>강수확률 60% 이상</Text>
            </View>
          </View>
          <Switch
            value={notifications.umbrella}
            onValueChange={() => toggleNotification('umbrella')}
            trackColor={{ false: COLORS.textMuted, true: COLORS.primary }}
            thumbColor={COLORS.cardBackground}
          />
        </View>

        {/* 미세먼지 알림 */}
        <View style={styles.notificationCard}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationIcon}>😷</Text>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTitle}>미세먼지 알림</Text>
              <Text style={styles.notificationDescription}>81㎍/㎥ 이상 (나쁨)</Text>
            </View>
          </View>
          <Switch
            value={notifications.airQuality}
            onValueChange={() => toggleNotification('airQuality')}
            trackColor={{ false: COLORS.textMuted, true: COLORS.primary }}
            thumbColor={COLORS.cardBackground}
          />
        </View>

        {/* 폭염/한파 주의보 */}
        <View style={styles.notificationCard}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationIcon}>🔥</Text>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTitle}>폭염/한파 주의보</Text>
              <Text style={styles.notificationDescription}>기상청 특보 발령 시</Text>
            </View>
          </View>
          <Switch
            value={notifications.weatherAlert}
            onValueChange={() => toggleNotification('weatherAlert')}
            trackColor={{ false: COLORS.textMuted, true: COLORS.primary }}
            thumbColor={COLORS.cardBackground}
          />
        </View>

        {/* 알림 시간 설정 */}
        <View style={styles.timeSection}>
          <Text style={styles.sectionTitle}>⏰ 알림 시간</Text>
          <View style={styles.timeCard}>
            <Text style={styles.timeText}>매일 오전 {notificationTime}</Text>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>변경</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  headerTitle: {
    fontSize: FONT_SIZES.header,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  notificationCard: {
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.cardBackground,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  notificationIcon: {
    fontSize: 32,
    marginRight: SPACING.md,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: FONT_SIZES.body,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  notificationDescription: {
    fontSize: FONT_SIZES.bodySmall,
    color: COLORS.textMuted,
  },
  timeSection: {
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.subHeader,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  timeCard: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  timeText: {
    fontSize: FONT_SIZES.body,
    color: COLORS.text,
  },
  changeButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.sm,
  },
  changeButtonText: {
    fontSize: FONT_SIZES.bodySmall,
    color: COLORS.cardBackground,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: SPACING.xl,
  },
});
