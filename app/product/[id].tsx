
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Platform } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { colors } from "@/styles/commonStyles";
import { products } from "@/data/products";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: product.name,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          headerBackTitle: "Back",
        }}
      />
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View entering={FadeIn.duration(400)}>
            <Image
              source={{ uri: product.image }}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </Animated.View>

          <View style={styles.content}>
            <Animated.View
              entering={FadeInDown.delay(200).springify()}
              style={styles.headerSection}
            >
              <View style={styles.titleRow}>
                <Text style={styles.productName}>{product.name}</Text>
                <View style={[
                  styles.categoryBadge,
                  { backgroundColor: product.category === 'honey' ? colors.accent : colors.primary }
                ]}>
                  <IconSymbol
                    name={product.category === 'honey' ? 'drop.fill' : 'leaf.fill'}
                    color={colors.card}
                    size={16}
                  />
                  <Text style={styles.categoryText}>
                    {product.category === 'honey' ? 'Honey' : 'Farm'}
                  </Text>
                </View>
              </View>

              <View style={styles.priceRow}>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                <Text style={styles.unit}>{product.unit}</Text>
              </View>

              {!product.inStock && (
                <View style={styles.stockWarning}>
                  <IconSymbol name="exclamationmark.triangle.fill" color={colors.accent} size={20} />
                  <Text style={styles.stockWarningText}>Currently out of stock</Text>
                </View>
              )}
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(300).springify()}
              style={styles.section}
            >
              <Text style={styles.sectionTitle}>Description</Text>
              <Text style={styles.description}>{product.description}</Text>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(400).springify()}
              style={styles.section}
            >
              <Text style={styles.sectionTitle}>Details</Text>
              <Text style={styles.details}>{product.details}</Text>
            </Animated.View>

            {product.features && product.features.length > 0 && (
              <Animated.View
                entering={FadeInDown.delay(500).springify()}
                style={styles.section}
              >
                <Text style={styles.sectionTitle}>Features</Text>
                <View style={styles.featuresContainer}>
                  {product.features.map((feature, index) => (
                    <View key={index} style={styles.featureItem}>
                      <View style={styles.featureBullet}>
                        <IconSymbol name="checkmark" color={colors.primary} size={14} />
                      </View>
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
              </Animated.View>
            )}

            <Animated.View
              entering={FadeInDown.delay(600).springify()}
              style={styles.contactSection}
            >
              <Text style={styles.contactTitle}>Interested in this product?</Text>
              <Text style={styles.contactText}>
                Contact us to place an order or learn more about our products.
              </Text>
            </Animated.View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  heroImage: {
    width: '100%',
    height: 300,
    backgroundColor: colors.secondary,
  },
  content: {
    padding: 20,
  },
  headerSection: {
    marginBottom: 24,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  productName: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    flex: 1,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.card,
    textTransform: 'uppercase',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
    marginBottom: 8,
  },
  price: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.primary,
  },
  unit: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  stockWarning: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    gap: 8,
    marginTop: 8,
  },
  stockWarningText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 24,
  },
  details: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  featuresContainer: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureBullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 15,
    color: colors.text,
    flex: 1,
  },
  contactSection: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: 8,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  contactText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  errorText: {
    fontSize: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 40,
  },
});
