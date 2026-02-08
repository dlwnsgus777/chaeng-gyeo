import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS } from '../constants/colors';

export default function SettingsScreen() {
  // 임시 권한 상태
  const permissions = {
    location: true,
    notification: true,
    currentLocation: '서울시 강남구',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>설정</Text>
        </View>

        {/* 위치 권한 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📍 위치 권한</Text>
          <View style={styles.card}>
            <View style={styles.permissionRow}>
              <Text style={styles.statusIcon}>✅</Text>
              <Text style={styles.statusText}>권한 허용됨</Text>
            </View>
            <Text style={styles.locationText}>{permissions.currentLocation}</Text>
          </View>
        </View>

        {/* 알림 권한 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔔 알림 권한</Text>
          <View style={styles.card}>
            <View style={styles.permissionRow}>
              <Text style={styles.statusIcon}>✅</Text>
              <Text style={styles.statusText}>권한 허용됨</Text>
            </View>
          </View>
        </View>

        {/* 앱 정보 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ℹ️ 앱 정보</Text>
          <View style={styles.card}>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>버전: 1.0.0</Text>
            </View>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>문의하기</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>오픈소스 라이선스</Text>
              <Text style={styles.arrow}>›</Text>
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
  section: {
    marginBottom: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.subHeader,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },
  card: {
    marginHorizontal: SPACING.lg,
    backgroundColor: COLORS.cardBackground,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  permissionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  statusIcon: {
    fontSize: 20,
    marginRight: SPACING.sm,
  },
  statusText: {
    fontSize: FONT_SIZES.body,
    color: COLORS.success,
    fontWeight: '600',
  },
  locationText: {
    fontSize: FONT_SIZES.bodySmall,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
  infoRow: {
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
  },
  infoText: {
    fontSize: FONT_SIZES.body,
    color: COLORS.text,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
  },
  menuText: {
    fontSize: FONT_SIZES.body,
    color: COLORS.text,
  },
  arrow: {
    fontSize: 24,
    color: COLORS.textMuted,
  },
  bottomSpacer: {
    height: SPACING.xl,
  },
});
