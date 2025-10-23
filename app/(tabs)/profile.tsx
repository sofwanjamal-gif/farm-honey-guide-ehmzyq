
import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Linking, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { colors } from "@/styles/commonStyles";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ProfileScreen() {
  const handleContact = (type: 'phone' | 'whatsapp' | 'instagram' | 'email') => {
    if (type === 'phone') {
      Linking.openURL('tel:+96560000000');
    } else if (type === 'whatsapp') {
      Linking.openURL('https://wa.me/96560000000');
    } else if (type === 'instagram') {
      Linking.openURL('https://instagram.com/lostup');
    } else if (type === 'email') {
      Linking.openURL('mailto:info@althunayanhoney.com');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          style={styles.header}
        >
          <View style={styles.logoContainer}>
            <IconSymbol name="leaf.fill" size={60} color={colors.primary} />
          </View>
          <Text style={styles.farmName}>Al-Thunayan Honey Farms</Text>
          <Text style={styles.tagline}>Premium Natural Honey Products</Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>About Our Farm</Text>
          <Text style={styles.aboutText}>
            Al-Thunayan Honey Farms is a Kuwait-based honey producer offering premium natural honey products, including royal blends, white royal honey, and kids&apos; honey.
          </Text>
          <Text style={styles.aboutText}>
            Located in the heart of Al-Wafra, we are dedicated to producing the finest quality honey using traditional methods combined with modern quality standards. Our commitment to excellence ensures that every jar of honey meets the highest standards of purity and taste.
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(300).springify()}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Contact Us</Text>
          
          <Pressable
            style={styles.contactItem}
            onPress={() => handleContact('phone')}
          >
            <View style={styles.contactIcon}>
              <IconSymbol name="phone.fill" size={20} color={colors.primary} />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactValue}>+965 6000 0000</Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
          </Pressable>

          <Pressable
            style={styles.contactItem}
            onPress={() => handleContact('email')}
          >
            <View style={styles.contactIcon}>
              <IconSymbol name="envelope.fill" size={20} color={colors.primary} />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>info@althunayanhoney.com</Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
          </Pressable>

          <Pressable
            style={styles.contactItem}
            onPress={() => handleContact('whatsapp')}
          >
            <View style={[styles.contactIcon, { backgroundColor: '#25D366' }]}>
              <IconSymbol name="message.fill" size={20} color="#FFFFFF" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>WhatsApp</Text>
              <Text style={styles.contactValue}>+965 6000 0000</Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
          </Pressable>

          <Pressable
            style={styles.contactItem}
            onPress={() => handleContact('instagram')}
          >
            <View style={[styles.contactIcon, { backgroundColor: '#E4405F' }]}>
              <IconSymbol name="camera.fill" size={20} color="#FFFFFF" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Instagram</Text>
              <Text style={styles.contactValue}>@lostup</Text>
            </View>
            <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
          </Pressable>

          <View style={styles.contactItem}>
            <View style={styles.contactIcon}>
              <IconSymbol name="location.fill" size={20} color={colors.primary} />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Location</Text>
              <Text style={styles.contactValue}>Al-Wafra, Kuwait</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).springify()}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Business Hours</Text>
          <View style={styles.hoursContainer}>
            <View style={styles.hourRow}>
              <Text style={styles.dayText}>Saturday - Thursday</Text>
              <Text style={styles.timeText}>8:00 AM - 6:00 PM</Text>
            </View>
            <View style={styles.hourRow}>
              <Text style={styles.dayText}>Friday</Text>
              <Text style={styles.timeText}>Closed</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(500).springify()}
          style={styles.certificationSection}
        >
          <IconSymbol name="checkmark.seal.fill" size={40} color={colors.primary} />
          <Text style={styles.certificationTitle}>Premium Quality</Text>
          <Text style={styles.certificationText}>
            100% Natural • Pure Honey • Kuwait Produced
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(600).springify()}
          style={styles.developerSection}
        >
          <Text style={styles.developerLabel}>Developed by</Text>
          <Text style={styles.developerName}>Moayed Abd Algader</Text>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  farmName: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)',
    elevation: 2,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  hoursContainer: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06)',
    elevation: 2,
  },
  hourRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  dayText: {
    fontSize: 15,
    color: colors.text,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  certificationSection: {
    backgroundColor: colors.card,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: 8,
    marginBottom: 32,
  },
  certificationTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: 12,
    marginBottom: 8,
  },
  certificationText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  developerSection: {
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
  },
  developerLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  developerName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
});
