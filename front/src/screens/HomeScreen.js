import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS } from '../constants/colors';

export default function HomeScreen() {
  // 임시 데이터
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? '좋은 아침이에요!' : currentTime < 18 ? '좋은 오후예요!' : '좋은 저녁이에요!';

  const weatherData = {
    location: '서울시 강남구',
    temp: 23,
    condition: '맑고 화창해요',
    icon: '🌤️',
    high: 26,
    low: 18,
    rainProbability: 10,
  };

  const alerts = [
    { id: 1, icon: '☂️', text: '우산 필요 없어요' },
    { id: 2, icon: '😷', text: '미세먼지 보통' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* 헤더 */}
        <View style={styles.header}>
          <Text style={styles.greeting}>{greeting}</Text>
          <Text style={styles.location}>{weatherData.location}</Text>
        </View>

        {/* 날씨 카드 */}
        <View style={styles.weatherCard}>
          <View style={styles.weatherIconContainer}>
            <Text style={styles.weatherIcon}>{weatherData.icon}</Text>
            <Text style={styles.temperature}>{weatherData.temp}°C</Text>
            <Text style={styles.weatherCondition}>{weatherData.condition}</Text>
          </View>

          <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailRow}>
              <Text style={styles.weatherDetailText}>
                최고 {weatherData.high}° / 최저 {weatherData.low}°
              </Text>
            </View>
            <View style={styles.weatherDetailRow}>
              <Text style={styles.weatherDetailText}>
                강수확률 {weatherData.rainProbability}%
              </Text>
            </View>
          </View>
        </View>

        {/* 오늘의 알림 섹션 */}
        <View style={styles.alertSection}>
          <Text style={styles.sectionTitle}>📌 오늘의 알림</Text>

          {alerts.map((alert) => (
            <View key={alert.id} style={styles.alertCard}>
              <Text style={styles.alertText}>
                {alert.icon} {alert.text}
              </Text>
            </View>
          ))}
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
  greeting: {
    fontSize: FONT_SIZES.header,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  location: {
    fontSize: FONT_SIZES.body,
    color: COLORS.textMuted,
  },
  weatherCard: {
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
    backgroundColor: COLORS.cardBackground,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
  },
  weatherIconContainer: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  weatherIcon: {
    fontSize: 80,
    marginBottom: SPACING.md,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  weatherCondition: {
    fontSize: FONT_SIZES.body,
    color: COLORS.textMuted,
  },
  weatherDetails: {
    borderTopWidth: 1,
    borderTopColor: COLORS.background,
    paddingTop: SPACING.md,
    marginTop: SPACING.md,
  },
  weatherDetailRow: {
    paddingVertical: SPACING.xs,
  },
  weatherDetailText: {
    fontSize: FONT_SIZES.body,
    color: COLORS.text,
    textAlign: 'center',
  },
  alertSection: {
    paddingHorizontal: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.subHeader,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  alertCard: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  alertText: {
    fontSize: FONT_SIZES.body,
    color: COLORS.text,
  },
  bottomSpacer: {
    height: SPACING.xl,
  },
});
