
import React from "react";
import { Stack, Link } from "expo-router";
import { ScrollView, Pressable, StyleSheet, View, Text, Image, Platform } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { colors } from "@/styles/commonStyles";
import { products } from "@/data/products";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function HomeScreen() {
  const honeyProducts = products.filter(p => p.category === 'honey');
  const farmProducts = products.filter(p => p.category === 'farm');

  const renderHeaderRight = () => (
    <View style={styles.headerButtonContainer}>
      <IconSymbol name="leaf.fill" color={colors.primary} size={24} />
    </View>
  );

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "Al-Thunayan Honey Farms",
            headerRight: renderHeaderRight,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
          }}
        />
      )}
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.contentContainer,
            Platform.OS !== 'ios' && styles.contentContainerWithTabBar
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>Al-Thunayan Honey Farms</Text>
            <Text style={styles.heroSubtitle}>
              Premium honey products and fresh farm goods from our family farm
            </Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <IconSymbol name="drop.fill" color={colors.accent} size={24} />
              <Text style={styles.sectionTitle}>Our Honey Collection</Text>
            </View>
            {honeyProducts.map((product, index) => (
              <Animated.View
                key={product.id}
                entering={FadeInDown.delay(index * 100).springify()}
              >
                <Link href={`/product/${product.id}` as any} asChild>
                  <Pressable style={styles.productCard}>
                    <Image
                      source={{ uri: product.image }}
                      style={styles.productImage}
                      resizeMode="cover"
                    />
                    <View style={styles.productInfo}>
                      <View style={styles.productHeader}>
                        <Text style={styles.productName}>{product.name}</Text>
                        {!product.inStock && (
                          <View style={styles.outOfStockBadge}>
                            <Text style={styles.outOfStockText}>Out of Stock</Text>
                          </View>
                        )}
                      </View>
                      <Text style={styles.productDescription} numberOfLines={2}>
                        {product.description}
                      </Text>
                      <View style={styles.productFooter}>
                        <Text style={styles.productPrice}>
                          {product.price.toFixed(3)} {product.unit}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                </Link>
              </Animated.View>
            ))}
          </View>

          {farmProducts.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <IconSymbol name="leaf.fill" color={colors.primary} size={24} />
                <Text style={styles.sectionTitle}>Fresh Farm Products</Text>
              </View>
              {farmProducts.map((product, index) => (
                <Animated.View
                  key={product.id}
                  entering={FadeInDown.delay((honeyProducts.length + index) * 100).springify()}
                >
                  <Link href={`/product/${product.id}` as any} asChild>
                    <Pressable style={styles.productCard}>
                      <Image
                        source={{ uri: product.image }}
                        style={styles.productImage}
                        resizeMode="cover"
                      />
                      <View style={styles.productInfo}>
                        <View style={styles.productHeader}>
                          <Text style={styles.productName}>{product.name}</Text>
                          {!product.inStock && (
                            <View style={styles.outOfStockBadge}>
                              <Text style={styles.outOfStockText}>Out of Stock</Text>
                            </View>
                          )}
                        </View>
                        <Text style={styles.productDescription} numberOfLines={2}>
                          {product.description}
                        </Text>
                        <View style={styles.productFooter}>
                          <Text style={styles.productPrice}>
                            ${product.price.toFixed(2)}
                          </Text>
                          <Text style={styles.productUnit}>{product.unit}</Text>
                        </View>
                      </View>
                    </Pressable>
                  </Link>
                </Animated.View>
              ))}
            </View>
          )}
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
    paddingVertical: 16,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  headerButtonContainer: {
    padding: 6,
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  productCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
    backgroundColor: colors.secondary,
  },
  productInfo: {
    padding: 16,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  outOfStockBadge: {
    backgroundColor: colors.textSecondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  outOfStockText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.card,
  },
  productDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.primary,
  },
  productUnit: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
