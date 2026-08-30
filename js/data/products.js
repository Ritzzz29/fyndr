/**
 * Fyndr — Product Data Layer
 * 
 * Normalized product data structure designed for future API integration.
 * Currently uses demo/synthetic data for prototype purposes.
 * 
 * Schema:
 *   id, name, brand, category, image, mrp, rating, reviewCount,
 *   badge, trendSignal, retailers[], priceHistory[], priceIntelligence, fyndrScore
 * 
 * Future: Replace this module with API calls to backend service.
 */

const FYNDR_PRODUCTS = [
  // ==================== KURTIS ====================
  {
    id: "prod_001",
    name: "Women Printed Cotton Kurta",
    brand: "LIBAS",
    category: "kurtis",
    image: "assets/images/kurti_01.png",
    mrp: 1499,
    rating: 4.4,
    reviewCount: 2381,
    badge: "Best Price",
    trendSignal: { direction: "up", percentage: 31, period: "30 days" },
    retailers: [
      { name: "AJIO", price: 849, delivery: "2–3 days", url: "#", rating: { score: 4.0, count: 2727 }, couponDiscount: 25, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "Myntra", price: 899, delivery: "Tomorrow", url: "#", rating: { score: 4.0, count: 1574 }, couponDiscount: 5, dealerName: "RetailNet", isVerifiedDealer: true },
      { name: "Amazon", price: 929, delivery: "2 days", url: "#", rating: { score: 4.0, count: 1458 }, couponDiscount: 5, dealerName: "SuperComNet", isVerifiedDealer: true },
      { name: "Flipkart", price: 949, delivery: "2–3 days", url: "#", rating: { score: 4.7, count: 2938 }, couponDiscount: 10, dealerName: "Apparel Hub", isVerifiedDealer: false }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1199 },
      { date: "2026-05-19", price: 1199 },
      { date: "2026-05-26", price: 1099 },
      { date: "2026-06-02", price: 1049 },
      { date: "2026-06-09", price: 999 },
      { date: "2026-06-16", price: 1099 },
      { date: "2026-06-23", price: 1149 },
      { date: "2026-06-30", price: 999 },
      { date: "2026-07-07", price: 949 },
      { date: "2026-07-14", price: 899 },
      { date: "2026-07-21", price: 799 },
      { date: "2026-07-28", price: 899 },
      { date: "2026-08-04", price: 849 },
      { date: "2026-08-10", price: 849 }
    ],
    priceIntelligence: {
      currentPrice: 849,
      avg90Day: 1049,
      lowestRecorded: 799,
      mrp: 1499
    },
    fyndrScore: 91
  },
  {
    id: "prod_002",
    name: "Women Chikankari Embroidered Straight Kurta",
    brand: "BIBA",
    category: "kurtis",
    image: "assets/images/kurti_02.png",
    mrp: 1999,
    rating: 4.6,
    reviewCount: 1874,
    badge: "Popular",
    trendSignal: { direction: "up", percentage: 18, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 1299, delivery: "Tomorrow", url: "#", rating: { score: 4.7, count: 2851 }, couponDiscount: 15, dealerName: "CityMart Retail", isVerifiedDealer: true },
      { name: "AJIO", price: 1349, delivery: "2–3 days", url: "#", rating: { score: 4.2, count: 964 }, couponDiscount: 5, dealerName: "TrueStyle", isVerifiedDealer: true },
      { name: "Flipkart", price: 1399, delivery: "2 days", url: "#", rating: { score: 4.8, count: 2001 }, couponDiscount: 5, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "Tata CLiQ", price: 1449, delivery: "3–4 days", url: "#", rating: { score: 4.3, count: 892 }, couponDiscount: 5, dealerName: "RetailNet", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1799 },
      { date: "2026-05-19", price: 1799 },
      { date: "2026-05-26", price: 1699 },
      { date: "2026-06-02", price: 1599 },
      { date: "2026-06-09", price: 1499 },
      { date: "2026-06-16", price: 1599 },
      { date: "2026-06-23", price: 1499 },
      { date: "2026-06-30", price: 1399 },
      { date: "2026-07-07", price: 1349 },
      { date: "2026-07-14", price: 1299 },
      { date: "2026-07-21", price: 1399 },
      { date: "2026-07-28", price: 1349 },
      { date: "2026-08-04", price: 1299 },
      { date: "2026-08-10", price: 1299 }
    ],
    priceIntelligence: {
      currentPrice: 1299,
      avg90Day: 1499,
      lowestRecorded: 1299,
      mrp: 1999
    },
    fyndrScore: 88
  },
  {
    id: "prod_003",
    name: "Women Floral Print A-Line Kurta",
    brand: "W",
    category: "kurtis",
    image: "assets/images/kurti_01.png",
    mrp: 1799,
    rating: 4.3,
    reviewCount: 956,
    badge: "Trending",
    trendSignal: { direction: "up", percentage: 42, period: "30 days" },
    retailers: [
      { name: "AJIO", price: 1079, delivery: "2–3 days", url: "#", rating: { score: 4.6, count: 1857 }, couponDiscount: 20, dealerName: "SuperComNet", isVerifiedDealer: true },
      { name: "Myntra", price: 1099, delivery: "Tomorrow", url: "#", rating: { score: 4.7, count: 2671 }, couponDiscount: 20, dealerName: "Apparel Hub", isVerifiedDealer: false },
      { name: "Amazon", price: 1149, delivery: "2 days", url: "#", rating: { score: 4.3, count: 588 }, couponDiscount: 5, dealerName: "CityMart Retail", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1599 },
      { date: "2026-05-19", price: 1499 },
      { date: "2026-05-26", price: 1499 },
      { date: "2026-06-02", price: 1399 },
      { date: "2026-06-09", price: 1299 },
      { date: "2026-06-16", price: 1399 },
      { date: "2026-06-23", price: 1299 },
      { date: "2026-06-30", price: 1199 },
      { date: "2026-07-07", price: 1149 },
      { date: "2026-07-14", price: 1099 },
      { date: "2026-07-21", price: 1149 },
      { date: "2026-07-28", price: 1099 },
      { date: "2026-08-04", price: 1079 },
      { date: "2026-08-10", price: 1079 }
    ],
    priceIntelligence: {
      currentPrice: 1079,
      avg90Day: 1312,
      lowestRecorded: 1079,
      mrp: 1799
    },
    fyndrScore: 94
  },
  {
    id: "prod_004",
    name: "Women Solid Rayon Anarkali Kurta",
    brand: "Aurelia",
    category: "kurtis",
    image: "assets/images/kurti_02.png",
    mrp: 2299,
    rating: 4.5,
    reviewCount: 1203,
    badge: "Big Drop",
    trendSignal: { direction: "up", percentage: 12, period: "30 days" },
    retailers: [
      { name: "Flipkart", price: 1149, delivery: "2 days", url: "#", rating: { score: 4.0, count: 1453 }, couponDiscount: 5, dealerName: "TrueStyle", isVerifiedDealer: true },
      { name: "Myntra", price: 1199, delivery: "Tomorrow", url: "#", rating: { score: 4.0, count: 175 }, couponDiscount: 25, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "AJIO", price: 1249, delivery: "2–3 days", url: "#", rating: { score: 4.8, count: 397 }, couponDiscount: 15, dealerName: "RetailNet", isVerifiedDealer: true },
      { name: "Amazon", price: 1299, delivery: "2 days", url: "#", rating: { score: 4.0, count: 1295 }, couponDiscount: 10, dealerName: "SuperComNet", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1999 },
      { date: "2026-05-19", price: 1899 },
      { date: "2026-05-26", price: 1799 },
      { date: "2026-06-02", price: 1699 },
      { date: "2026-06-09", price: 1599 },
      { date: "2026-06-16", price: 1499 },
      { date: "2026-06-23", price: 1399 },
      { date: "2026-06-30", price: 1349 },
      { date: "2026-07-07", price: 1299 },
      { date: "2026-07-14", price: 1249 },
      { date: "2026-07-21", price: 1199 },
      { date: "2026-07-28", price: 1199 },
      { date: "2026-08-04", price: 1149 },
      { date: "2026-08-10", price: 1149 }
    ],
    priceIntelligence: {
      currentPrice: 1149,
      avg90Day: 1518,
      lowestRecorded: 1149,
      mrp: 2299
    },
    fyndrScore: 96
  },

  // ==================== DRESSES ====================
  {
    id: "prod_005",
    name: "Women Floral Midi Dress",
    brand: "ONLY",
    category: "dresses",
    image: "assets/images/dress_01.png",
    mrp: 2799,
    rating: 4.3,
    reviewCount: 1127,
    badge: "Trending",
    trendSignal: { direction: "up", percentage: 27, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 1679, delivery: "Tomorrow", url: "#", rating: { score: 4.8, count: 450 }, couponDiscount: 20, dealerName: "Apparel Hub", isVerifiedDealer: false },
      { name: "AJIO", price: 1749, delivery: "2–3 days", url: "#", rating: { score: 4.1, count: 394 }, couponDiscount: 25, dealerName: "CityMart Retail", isVerifiedDealer: true },
      { name: "Amazon", price: 1799, delivery: "2 days", url: "#", rating: { score: 4.1, count: 1247 }, couponDiscount: 5, dealerName: "TrueStyle", isVerifiedDealer: true },
      { name: "Flipkart", price: 1849, delivery: "3 days", url: "#", rating: { score: 4.8, count: 2756 }, couponDiscount: 25, dealerName: "Official Store", isVerifiedDealer: false }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 2499 },
      { date: "2026-05-19", price: 2399 },
      { date: "2026-05-26", price: 2299 },
      { date: "2026-06-02", price: 2199 },
      { date: "2026-06-09", price: 1999 },
      { date: "2026-06-16", price: 2099 },
      { date: "2026-06-23", price: 1899 },
      { date: "2026-06-30", price: 1799 },
      { date: "2026-07-07", price: 1749 },
      { date: "2026-07-14", price: 1699 },
      { date: "2026-07-21", price: 1799 },
      { date: "2026-07-28", price: 1749 },
      { date: "2026-08-04", price: 1679 },
      { date: "2026-08-10", price: 1679 }
    ],
    priceIntelligence: {
      currentPrice: 1679,
      avg90Day: 2054,
      lowestRecorded: 1679,
      mrp: 2799
    },
    fyndrScore: 93
  },
  {
    id: "prod_006",
    name: "Women Solid Fit & Flare Party Dress",
    brand: "Vero Moda",
    category: "dresses",
    image: "assets/images/dress_02.png",
    mrp: 3499,
    rating: 4.5,
    reviewCount: 834,
    badge: "Best Price",
    trendSignal: { direction: "up", percentage: 15, period: "30 days" },
    retailers: [
      { name: "AJIO", price: 1749, delivery: "2–3 days", url: "#", rating: { score: 4.2, count: 1364 }, couponDiscount: 25, dealerName: "RetailNet", isVerifiedDealer: true },
      { name: "Myntra", price: 1799, delivery: "Tomorrow", url: "#", rating: { score: 4.3, count: 1379 }, couponDiscount: 5, dealerName: "SuperComNet", isVerifiedDealer: true },
      { name: "Tata CLiQ", price: 1899, delivery: "3–4 days", url: "#", rating: { score: 4.0, count: 1837 }, couponDiscount: 25, dealerName: "Apparel Hub", isVerifiedDealer: false }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 2999 },
      { date: "2026-05-19", price: 2799 },
      { date: "2026-05-26", price: 2599 },
      { date: "2026-06-02", price: 2499 },
      { date: "2026-06-09", price: 2399 },
      { date: "2026-06-16", price: 2299 },
      { date: "2026-06-23", price: 2099 },
      { date: "2026-06-30", price: 1999 },
      { date: "2026-07-07", price: 1899 },
      { date: "2026-07-14", price: 1849 },
      { date: "2026-07-21", price: 1799 },
      { date: "2026-07-28", price: 1799 },
      { date: "2026-08-04", price: 1749 },
      { date: "2026-08-10", price: 1749 }
    ],
    priceIntelligence: {
      currentPrice: 1749,
      avg90Day: 2249,
      lowestRecorded: 1749,
      mrp: 3499
    },
    fyndrScore: 95
  },
  {
    id: "prod_007",
    name: "Women Wrap Maxi Dress",
    brand: "AND",
    category: "dresses",
    image: "assets/images/dress_01.png",
    mrp: 2999,
    rating: 4.2,
    reviewCount: 642,
    badge: "Popular",
    trendSignal: { direction: "up", percentage: 8, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 1949, delivery: "Tomorrow", url: "#", rating: { score: 3.9, count: 1745 }, couponDiscount: 20, dealerName: "CityMart Retail", isVerifiedDealer: true },
      { name: "AJIO", price: 1999, delivery: "2–3 days", url: "#", rating: { score: 3.9, count: 78 }, couponDiscount: 10, dealerName: "TrueStyle", isVerifiedDealer: true },
      { name: "Amazon", price: 2099, delivery: "2 days", url: "#", rating: { score: 4.6, count: 1408 }, couponDiscount: 20, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "Flipkart", price: 2149, delivery: "2–3 days", url: "#", rating: { score: 4.1, count: 2298 }, couponDiscount: 5, dealerName: "RetailNet", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 2799 },
      { date: "2026-05-19", price: 2699 },
      { date: "2026-05-26", price: 2599 },
      { date: "2026-06-02", price: 2499 },
      { date: "2026-06-09", price: 2399 },
      { date: "2026-06-16", price: 2299 },
      { date: "2026-06-23", price: 2199 },
      { date: "2026-06-30", price: 2099 },
      { date: "2026-07-07", price: 2049 },
      { date: "2026-07-14", price: 1999 },
      { date: "2026-07-21", price: 2049 },
      { date: "2026-07-28", price: 1999 },
      { date: "2026-08-04", price: 1949 },
      { date: "2026-08-10", price: 1949 }
    ],
    priceIntelligence: {
      currentPrice: 1949,
      avg90Day: 2331,
      lowestRecorded: 1949,
      mrp: 2999
    },
    fyndrScore: 82
  },
  {
    id: "prod_008",
    name: "Women Printed Shirt Dress",
    brand: "H&M",
    category: "dresses",
    image: "assets/images/dress_02.png",
    mrp: 1999,
    rating: 4.1,
    reviewCount: 1532,
    badge: "Trending",
    trendSignal: { direction: "up", percentage: 35, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 1199, delivery: "Tomorrow", url: "#", rating: { score: 3.8, count: 2870 }, couponDiscount: 5, dealerName: "SuperComNet", isVerifiedDealer: true },
      { name: "Amazon", price: 1249, delivery: "2 days", url: "#", rating: { score: 3.8, count: 1271 }, couponDiscount: 20, dealerName: "Apparel Hub", isVerifiedDealer: false },
      { name: "Flipkart", price: 1299, delivery: "2–3 days", url: "#", rating: { score: 4.8, count: 1082 }, couponDiscount: 25, dealerName: "CityMart Retail", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1799 },
      { date: "2026-05-19", price: 1699 },
      { date: "2026-05-26", price: 1599 },
      { date: "2026-06-02", price: 1499 },
      { date: "2026-06-09", price: 1449 },
      { date: "2026-06-16", price: 1399 },
      { date: "2026-06-23", price: 1349 },
      { date: "2026-06-30", price: 1299 },
      { date: "2026-07-07", price: 1249 },
      { date: "2026-07-14", price: 1249 },
      { date: "2026-07-21", price: 1299 },
      { date: "2026-07-28", price: 1249 },
      { date: "2026-08-04", price: 1199 },
      { date: "2026-08-10", price: 1199 }
    ],
    priceIntelligence: {
      currentPrice: 1199,
      avg90Day: 1416,
      lowestRecorded: 1199,
      mrp: 1999
    },
    fyndrScore: 87
  },

  // ==================== SHIRTS ====================
  {
    id: "prod_009",
    name: "Men Slim Fit Oxford Shirt",
    brand: "Allen Solly",
    category: "shirts",
    image: "assets/images/shirt_01.png",
    mrp: 1699,
    rating: 4.3,
    reviewCount: 3214,
    badge: "Popular",
    trendSignal: { direction: "up", percentage: 9, period: "30 days" },
    retailers: [
      { name: "Amazon", price: 849, delivery: "2 days", url: "#", rating: { score: 3.9, count: 629 }, couponDiscount: 10, dealerName: "TrueStyle", isVerifiedDealer: true },
      { name: "Flipkart", price: 879, delivery: "2–3 days", url: "#", rating: { score: 4.7, count: 246 }, couponDiscount: 20, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "Myntra", price: 899, delivery: "Tomorrow", url: "#", rating: { score: 4.4, count: 2711 }, couponDiscount: 5, dealerName: "RetailNet", isVerifiedDealer: true },
      { name: "AJIO", price: 929, delivery: "2–3 days", url: "#", rating: { score: 4.2, count: 402 }, couponDiscount: 10, dealerName: "SuperComNet", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1299 },
      { date: "2026-05-19", price: 1199 },
      { date: "2026-05-26", price: 1149 },
      { date: "2026-06-02", price: 1099 },
      { date: "2026-06-09", price: 999 },
      { date: "2026-06-16", price: 949 },
      { date: "2026-06-23", price: 999 },
      { date: "2026-06-30", price: 949 },
      { date: "2026-07-07", price: 899 },
      { date: "2026-07-14", price: 879 },
      { date: "2026-07-21", price: 899 },
      { date: "2026-07-28", price: 879 },
      { date: "2026-08-04", price: 849 },
      { date: "2026-08-10", price: 849 }
    ],
    priceIntelligence: {
      currentPrice: 849,
      avg90Day: 1003,
      lowestRecorded: 849,
      mrp: 1699
    },
    fyndrScore: 90
  },
  {
    id: "prod_010",
    name: "Men Casual Check Flannel Shirt",
    brand: "Roadster",
    category: "shirts",
    image: "assets/images/shirt_02.png",
    mrp: 1299,
    rating: 4.2,
    reviewCount: 2847,
    badge: "Big Drop",
    trendSignal: { direction: "down", percentage: 5, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 649, delivery: "Tomorrow", url: "#", rating: { score: 4.9, count: 781 }, couponDiscount: 10, dealerName: "Apparel Hub", isVerifiedDealer: false },
      { name: "AJIO", price: 699, delivery: "2–3 days", url: "#", rating: { score: 4.8, count: 1236 }, couponDiscount: 25, dealerName: "CityMart Retail", isVerifiedDealer: true },
      { name: "Flipkart", price: 749, delivery: "2 days", url: "#", rating: { score: 4.8, count: 210 }, couponDiscount: 15, dealerName: "TrueStyle", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1099 },
      { date: "2026-05-19", price: 999 },
      { date: "2026-05-26", price: 949 },
      { date: "2026-06-02", price: 899 },
      { date: "2026-06-09", price: 849 },
      { date: "2026-06-16", price: 799 },
      { date: "2026-06-23", price: 849 },
      { date: "2026-06-30", price: 799 },
      { date: "2026-07-07", price: 749 },
      { date: "2026-07-14", price: 699 },
      { date: "2026-07-21", price: 749 },
      { date: "2026-07-28", price: 699 },
      { date: "2026-08-04", price: 649 },
      { date: "2026-08-10", price: 649 }
    ],
    priceIntelligence: {
      currentPrice: 649,
      avg90Day: 842,
      lowestRecorded: 649,
      mrp: 1299
    },
    fyndrScore: 85
  },
  {
    id: "prod_011",
    name: "Men Printed Casual Shirt",
    brand: "Peter England",
    category: "shirts",
    image: "assets/images/shirt_01.png",
    mrp: 1499,
    rating: 4.1,
    reviewCount: 1562,
    badge: "Best Price",
    trendSignal: { direction: "up", percentage: 14, period: "30 days" },
    retailers: [
      { name: "Amazon", price: 749, delivery: "Tomorrow", url: "#", rating: { score: 4.0, count: 297 }, couponDiscount: 10, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "Flipkart", price: 779, delivery: "2 days", url: "#", rating: { score: 4.0, count: 2046 }, couponDiscount: 15, dealerName: "RetailNet", isVerifiedDealer: true },
      { name: "Myntra", price: 799, delivery: "Tomorrow", url: "#", rating: { score: 4.4, count: 1319 }, couponDiscount: 25, dealerName: "SuperComNet", isVerifiedDealer: true },
      { name: "AJIO", price: 849, delivery: "2–3 days", url: "#", rating: { score: 4.9, count: 2002 }, couponDiscount: 5, dealerName: "Apparel Hub", isVerifiedDealer: false }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1199 },
      { date: "2026-05-19", price: 1149 },
      { date: "2026-05-26", price: 1099 },
      { date: "2026-06-02", price: 999 },
      { date: "2026-06-09", price: 949 },
      { date: "2026-06-16", price: 899 },
      { date: "2026-06-23", price: 949 },
      { date: "2026-06-30", price: 879 },
      { date: "2026-07-07", price: 829 },
      { date: "2026-07-14", price: 799 },
      { date: "2026-07-21", price: 799 },
      { date: "2026-07-28", price: 779 },
      { date: "2026-08-04", price: 749 },
      { date: "2026-08-10", price: 749 }
    ],
    priceIntelligence: {
      currentPrice: 749,
      avg90Day: 941,
      lowestRecorded: 749,
      mrp: 1499
    },
    fyndrScore: 92
  },
  {
    id: "prod_012",
    name: "Men Linen Blend Formal Shirt",
    brand: "Van Heusen",
    category: "shirts",
    image: "assets/images/shirt_02.png",
    mrp: 2199,
    rating: 4.4,
    reviewCount: 987,
    badge: "Popular",
    trendSignal: { direction: "up", percentage: 6, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 1319, delivery: "Tomorrow", url: "#", rating: { score: 4.2, count: 1055 }, couponDiscount: 10, dealerName: "CityMart Retail", isVerifiedDealer: true },
      { name: "Amazon", price: 1349, delivery: "2 days", url: "#", rating: { score: 4.8, count: 943 }, couponDiscount: 5, dealerName: "TrueStyle", isVerifiedDealer: true },
      { name: "Flipkart", price: 1399, delivery: "2 days", url: "#", rating: { score: 4.8, count: 895 }, couponDiscount: 5, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "Tata CLiQ", price: 1449, delivery: "3–4 days", url: "#", rating: { score: 3.8, count: 1016 }, couponDiscount: 20, dealerName: "RetailNet", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1899 },
      { date: "2026-05-19", price: 1849 },
      { date: "2026-05-26", price: 1799 },
      { date: "2026-06-02", price: 1699 },
      { date: "2026-06-09", price: 1599 },
      { date: "2026-06-16", price: 1549 },
      { date: "2026-06-23", price: 1499 },
      { date: "2026-06-30", price: 1449 },
      { date: "2026-07-07", price: 1399 },
      { date: "2026-07-14", price: 1379 },
      { date: "2026-07-21", price: 1349 },
      { date: "2026-07-28", price: 1349 },
      { date: "2026-08-04", price: 1319 },
      { date: "2026-08-10", price: 1319 }
    ],
    priceIntelligence: {
      currentPrice: 1319,
      avg90Day: 1566,
      lowestRecorded: 1319,
      mrp: 2199
    },
    fyndrScore: 83
  },

  // ==================== JEANS ====================
  {
    id: "prod_013",
    name: "Men Slim Fit Stretch Jeans",
    brand: "Levi's",
    category: "jeans",
    image: "assets/images/jeans_01.png",
    mrp: 2999,
    rating: 4.5,
    reviewCount: 4521,
    badge: "Popular",
    trendSignal: { direction: "up", percentage: 11, period: "30 days" },
    retailers: [
      { name: "Amazon", price: 1799, delivery: "Tomorrow", url: "#", rating: { score: 3.8, count: 2995 }, couponDiscount: 15, dealerName: "SuperComNet", isVerifiedDealer: true },
      { name: "Myntra", price: 1849, delivery: "Tomorrow", url: "#", rating: { score: 4.6, count: 541 }, couponDiscount: 15, dealerName: "Apparel Hub", isVerifiedDealer: false },
      { name: "Flipkart", price: 1899, delivery: "2 days", url: "#", rating: { score: 4.5, count: 2516 }, couponDiscount: 5, dealerName: "CityMart Retail", isVerifiedDealer: true },
      { name: "AJIO", price: 1949, delivery: "2–3 days", url: "#", rating: { score: 3.9, count: 1079 }, couponDiscount: 20, dealerName: "TrueStyle", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 2599 },
      { date: "2026-05-19", price: 2499 },
      { date: "2026-05-26", price: 2399 },
      { date: "2026-06-02", price: 2299 },
      { date: "2026-06-09", price: 2199 },
      { date: "2026-06-16", price: 2099 },
      { date: "2026-06-23", price: 2049 },
      { date: "2026-06-30", price: 1999 },
      { date: "2026-07-07", price: 1949 },
      { date: "2026-07-14", price: 1899 },
      { date: "2026-07-21", price: 1849 },
      { date: "2026-07-28", price: 1849 },
      { date: "2026-08-04", price: 1799 },
      { date: "2026-08-10", price: 1799 }
    ],
    priceIntelligence: {
      currentPrice: 1799,
      avg90Day: 2163,
      lowestRecorded: 1799,
      mrp: 2999
    },
    fyndrScore: 89
  },
  {
    id: "prod_014",
    name: "Women High-Rise Skinny Jeans",
    brand: "H&M",
    category: "jeans",
    image: "assets/images/jeans_02.png",
    mrp: 1999,
    rating: 4.2,
    reviewCount: 2156,
    badge: "Trending",
    trendSignal: { direction: "up", percentage: 38, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 999, delivery: "Tomorrow", url: "#", rating: { score: 4.4, count: 1610 }, couponDiscount: 10, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "AJIO", price: 1049, delivery: "2–3 days", url: "#", rating: { score: 4.8, count: 1069 }, couponDiscount: 25, dealerName: "RetailNet", isVerifiedDealer: true },
      { name: "Amazon", price: 1099, delivery: "2 days", url: "#", rating: { score: 4.5, count: 668 }, couponDiscount: 10, dealerName: "SuperComNet", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1699 },
      { date: "2026-05-19", price: 1599 },
      { date: "2026-05-26", price: 1499 },
      { date: "2026-06-02", price: 1399 },
      { date: "2026-06-09", price: 1299 },
      { date: "2026-06-16", price: 1249 },
      { date: "2026-06-23", price: 1199 },
      { date: "2026-06-30", price: 1149 },
      { date: "2026-07-07", price: 1099 },
      { date: "2026-07-14", price: 1049 },
      { date: "2026-07-21", price: 1099 },
      { date: "2026-07-28", price: 1049 },
      { date: "2026-08-04", price: 999 },
      { date: "2026-08-10", price: 999 }
    ],
    priceIntelligence: {
      currentPrice: 999,
      avg90Day: 1270,
      lowestRecorded: 999,
      mrp: 1999
    },
    fyndrScore: 91
  },
  {
    id: "prod_015",
    name: "Men Bootcut Mid-Rise Jeans",
    brand: "Wrangler",
    category: "jeans",
    image: "assets/images/jeans_01.png",
    mrp: 2499,
    rating: 4.3,
    reviewCount: 1834,
    badge: "Best Price",
    trendSignal: { direction: "down", percentage: 3, period: "30 days" },
    retailers: [
      { name: "Flipkart", price: 1249, delivery: "2 days", url: "#", rating: { score: 4.8, count: 2921 }, couponDiscount: 25, dealerName: "Apparel Hub", isVerifiedDealer: false },
      { name: "Amazon", price: 1299, delivery: "Tomorrow", url: "#", rating: { score: 4.5, count: 2389 }, couponDiscount: 20, dealerName: "CityMart Retail", isVerifiedDealer: true },
      { name: "Myntra", price: 1349, delivery: "Tomorrow", url: "#", rating: { score: 4.1, count: 1365 }, couponDiscount: 10, dealerName: "TrueStyle", isVerifiedDealer: true },
      { name: "AJIO", price: 1399, delivery: "2–3 days", url: "#", rating: { score: 4.0, count: 2517 }, couponDiscount: 15, dealerName: "Official Store", isVerifiedDealer: false }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 2199 },
      { date: "2026-05-19", price: 2099 },
      { date: "2026-05-26", price: 1999 },
      { date: "2026-06-02", price: 1899 },
      { date: "2026-06-09", price: 1799 },
      { date: "2026-06-16", price: 1699 },
      { date: "2026-06-23", price: 1599 },
      { date: "2026-06-30", price: 1499 },
      { date: "2026-07-07", price: 1399 },
      { date: "2026-07-14", price: 1349 },
      { date: "2026-07-21", price: 1299 },
      { date: "2026-07-28", price: 1299 },
      { date: "2026-08-04", price: 1249 },
      { date: "2026-08-10", price: 1249 }
    ],
    priceIntelligence: {
      currentPrice: 1249,
      avg90Day: 1670,
      lowestRecorded: 1249,
      mrp: 2499
    },
    fyndrScore: 86
  },
  {
    id: "prod_016",
    name: "Women Boyfriend Fit Ripped Jeans",
    brand: "ONLY",
    category: "jeans",
    image: "assets/images/jeans_02.png",
    mrp: 2799,
    rating: 4.4,
    reviewCount: 1123,
    badge: "Big Drop",
    trendSignal: { direction: "up", percentage: 22, period: "30 days" },
    retailers: [
      { name: "AJIO", price: 1399, delivery: "2–3 days", url: "#", rating: { score: 4.4, count: 1650 }, couponDiscount: 25, dealerName: "RetailNet", isVerifiedDealer: true },
      { name: "Myntra", price: 1449, delivery: "Tomorrow", url: "#", rating: { score: 3.9, count: 784 }, couponDiscount: 20, dealerName: "SuperComNet", isVerifiedDealer: true },
      { name: "Amazon", price: 1499, delivery: "2 days", url: "#", rating: { score: 3.9, count: 211 }, couponDiscount: 5, dealerName: "Apparel Hub", isVerifiedDealer: false },
      { name: "Flipkart", price: 1549, delivery: "2–3 days", url: "#", rating: { score: 4.5, count: 1487 }, couponDiscount: 20, dealerName: "CityMart Retail", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 2499 },
      { date: "2026-05-19", price: 2399 },
      { date: "2026-05-26", price: 2299 },
      { date: "2026-06-02", price: 2199 },
      { date: "2026-06-09", price: 1999 },
      { date: "2026-06-16", price: 1899 },
      { date: "2026-06-23", price: 1799 },
      { date: "2026-06-30", price: 1699 },
      { date: "2026-07-07", price: 1599 },
      { date: "2026-07-14", price: 1499 },
      { date: "2026-07-21", price: 1499 },
      { date: "2026-07-28", price: 1449 },
      { date: "2026-08-04", price: 1399 },
      { date: "2026-08-10", price: 1399 }
    ],
    priceIntelligence: {
      currentPrice: 1399,
      avg90Day: 1895,
      lowestRecorded: 1399,
      mrp: 2799
    },
    fyndrScore: 93
  },

  // ==================== TOPS ====================
  {
    id: "prod_017",
    name: "Women Embroidered Cotton Top",
    brand: "Global Desi",
    category: "tops",
    image: "assets/images/top_01.png",
    mrp: 1299,
    rating: 4.3,
    reviewCount: 1876,
    badge: "Best Price",
    trendSignal: { direction: "up", percentage: 19, period: "30 days" },
    retailers: [
      { name: "AJIO", price: 649, delivery: "2–3 days", url: "#", rating: { score: 4.6, count: 666 }, couponDiscount: 20, dealerName: "TrueStyle", isVerifiedDealer: true },
      { name: "Myntra", price: 679, delivery: "Tomorrow", url: "#", rating: { score: 4.0, count: 1453 }, couponDiscount: 5, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "Amazon", price: 699, delivery: "2 days", url: "#", rating: { score: 4.3, count: 1940 }, couponDiscount: 5, dealerName: "RetailNet", isVerifiedDealer: true },
      { name: "Flipkart", price: 749, delivery: "2–3 days", url: "#", rating: { score: 4.3, count: 1361 }, couponDiscount: 5, dealerName: "SuperComNet", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 1099 },
      { date: "2026-05-19", price: 999 },
      { date: "2026-05-26", price: 949 },
      { date: "2026-06-02", price: 899 },
      { date: "2026-06-09", price: 849 },
      { date: "2026-06-16", price: 799 },
      { date: "2026-06-23", price: 849 },
      { date: "2026-06-30", price: 799 },
      { date: "2026-07-07", price: 749 },
      { date: "2026-07-14", price: 699 },
      { date: "2026-07-21", price: 749 },
      { date: "2026-07-28", price: 699 },
      { date: "2026-08-04", price: 649 },
      { date: "2026-08-10", price: 649 }
    ],
    priceIntelligence: {
      currentPrice: 649,
      avg90Day: 842,
      lowestRecorded: 649,
      mrp: 1299
    },
    fyndrScore: 90
  },
  {
    id: "prod_018",
    name: "Women Striped Round Neck T-Shirt",
    brand: "H&M",
    category: "tops",
    image: "assets/images/top_02.png",
    mrp: 999,
    rating: 4.1,
    reviewCount: 3421,
    badge: "Trending",
    trendSignal: { direction: "up", percentage: 45, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 499, delivery: "Tomorrow", url: "#", rating: { score: 4.4, count: 1976 }, couponDiscount: 5, dealerName: "Apparel Hub", isVerifiedDealer: false },
      { name: "Amazon", price: 529, delivery: "2 days", url: "#", rating: { score: 4.2, count: 1530 }, couponDiscount: 10, dealerName: "CityMart Retail", isVerifiedDealer: true },
      { name: "Flipkart", price: 549, delivery: "2 days", url: "#", rating: { score: 4.0, count: 1762 }, couponDiscount: 15, dealerName: "TrueStyle", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 849 },
      { date: "2026-05-19", price: 799 },
      { date: "2026-05-26", price: 749 },
      { date: "2026-06-02", price: 699 },
      { date: "2026-06-09", price: 649 },
      { date: "2026-06-16", price: 599 },
      { date: "2026-06-23", price: 649 },
      { date: "2026-06-30", price: 599 },
      { date: "2026-07-07", price: 549 },
      { date: "2026-07-14", price: 529 },
      { date: "2026-07-21", price: 549 },
      { date: "2026-07-28", price: 529 },
      { date: "2026-08-04", price: 499 },
      { date: "2026-08-10", price: 499 }
    ],
    priceIntelligence: {
      currentPrice: 499,
      avg90Day: 660,
      lowestRecorded: 499,
      mrp: 999
    },
    fyndrScore: 88
  },
  {
    id: "prod_019",
    name: "Women Peplum Top with Ruffles",
    brand: "Zara",
    category: "tops",
    image: "assets/images/top_01.png",
    mrp: 2499,
    rating: 4.5,
    reviewCount: 762,
    badge: "Popular",
    trendSignal: { direction: "up", percentage: 16, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 1499, delivery: "Tomorrow", url: "#", rating: { score: 3.9, count: 182 }, couponDiscount: 10, dealerName: "Official Store", isVerifiedDealer: false },
      { name: "AJIO", price: 1549, delivery: "2–3 days", url: "#", rating: { score: 4.0, count: 1436 }, couponDiscount: 20, dealerName: "RetailNet", isVerifiedDealer: true },
      { name: "Tata CLiQ", price: 1599, delivery: "3–4 days", url: "#", rating: { score: 3.9, count: 1702 }, couponDiscount: 15, dealerName: "SuperComNet", isVerifiedDealer: true }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 2299 },
      { date: "2026-05-19", price: 2199 },
      { date: "2026-05-26", price: 2099 },
      { date: "2026-06-02", price: 1999 },
      { date: "2026-06-09", price: 1899 },
      { date: "2026-06-16", price: 1799 },
      { date: "2026-06-23", price: 1749 },
      { date: "2026-06-30", price: 1699 },
      { date: "2026-07-07", price: 1649 },
      { date: "2026-07-14", price: 1599 },
      { date: "2026-07-21", price: 1549 },
      { date: "2026-07-28", price: 1549 },
      { date: "2026-08-04", price: 1499 },
      { date: "2026-08-10", price: 1499 }
    ],
    priceIntelligence: {
      currentPrice: 1499,
      avg90Day: 1827,
      lowestRecorded: 1499,
      mrp: 2499
    },
    fyndrScore: 84
  },
  {
    id: "prod_020",
    name: "Women Oversized Graphic Tee",
    brand: "Bewakoof",
    category: "tops",
    image: "assets/images/top_02.png",
    mrp: 799,
    rating: 4.0,
    reviewCount: 5673,
    badge: "Big Drop",
    trendSignal: { direction: "up", percentage: 52, period: "30 days" },
    retailers: [
      { name: "Myntra", price: 399, delivery: "Tomorrow", url: "#", rating: { score: 4.0, count: 539 }, couponDiscount: 10, dealerName: "Apparel Hub", isVerifiedDealer: false },
      { name: "Amazon", price: 429, delivery: "2 days", url: "#", rating: { score: 3.9, count: 72 }, couponDiscount: 10, dealerName: "CityMart Retail", isVerifiedDealer: true },
      { name: "Flipkart", price: 449, delivery: "2 days", url: "#", rating: { score: 4.6, count: 1630 }, couponDiscount: 25, dealerName: "TrueStyle", isVerifiedDealer: true },
      { name: "AJIO", price: 469, delivery: "2–3 days", url: "#", rating: { score: 3.9, count: 2934 }, couponDiscount: 5, dealerName: "Official Store", isVerifiedDealer: false }
    ],
    priceHistory: [
      { date: "2026-05-12", price: 699 },
      { date: "2026-05-19", price: 649 },
      { date: "2026-05-26", price: 599 },
      { date: "2026-06-02", price: 549 },
      { date: "2026-06-09", price: 529 },
      { date: "2026-06-16", price: 499 },
      { date: "2026-06-23", price: 529 },
      { date: "2026-06-30", price: 499 },
      { date: "2026-07-07", price: 479 },
      { date: "2026-07-14", price: 449 },
      { date: "2026-07-21", price: 449 },
      { date: "2026-07-28", price: 429 },
      { date: "2026-08-04", price: 399 },
      { date: "2026-08-10", price: 399 }
    ],
    priceIntelligence: {
      currentPrice: 399,
      avg90Day: 525,
      lowestRecorded: 399,
      mrp: 799
    },
    fyndrScore: 87
  }
];

/**
 * CATEGORIES — Expandable category system
 * Future categories can be added here without modifying the UI.
 */
const FYNDR_CATEGORIES = [
  { id: "all", label: "All", icon: "✦" },
  { id: "kurtis", label: "Kurtis", icon: "👗" },
  { id: "dresses", label: "Dresses", icon: "👘" },
  { id: "shirts", label: "Shirts", icon: "👔" },
  { id: "jeans", label: "Jeans", icon: "👖" },
  { id: "tops", label: "Tops", icon: "👚" }
  // Future: { id: "footwear", label: "Footwear", icon: "👟" },
  // Future: { id: "accessories", label: "Accessories", icon: "💍" },
];

/**
 * RETAILERS — Supported marketplace registry
 * Future retailers can be added here.
 */
const FYNDR_RETAILERS = [
  { id: "myntra", name: "Myntra", color: "#FF3F6C" },
  { id: "ajio", name: "AJIO", color: "#3B3B3B" },
  { id: "amazon", name: "Amazon", color: "#FF9900" },
  { id: "flipkart", name: "Flipkart", color: "#2874F0" },
  { id: "tatacliq", name: "Tata CLiQ", color: "#6C3483" }
];

/**
 * Data Access Functions
 * These functions abstract data access for future API replacement.
 */

function getAllProducts() {
  return FYNDR_PRODUCTS;
}

function getProductById(id) {
  return FYNDR_PRODUCTS.find(p => p.id === id) || null;
}

function getProductsByCategory(category) {
  if (category === "all") return FYNDR_PRODUCTS;
  return FYNDR_PRODUCTS.filter(p => p.category === category);
}

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return FYNDR_PRODUCTS;
  return FYNDR_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

function getCategories() {
  return FYNDR_CATEGORIES;
}

function getLowestPrice(product) {
  if (!product.retailers || product.retailers.length === 0) return null;
  return product.retailers.reduce((min, r) => r.price < min.price ? r : min, product.retailers[0]);
}

function getHighestPrice(product) {
  if (!product.retailers || product.retailers.length === 0) return null;
  return product.retailers.reduce((max, r) => r.price > max.price ? r : max, product.retailers[0]);
}

function getDiscountPercentage(mrp, price) {
  return Math.round(((mrp - price) / mrp) * 100);
}

function getSavingsAmount(product) {
  const lowest = getLowestPrice(product);
  const highest = getHighestPrice(product);
  if (!lowest || !highest) return 0;
  return highest.price - lowest.price;
}

