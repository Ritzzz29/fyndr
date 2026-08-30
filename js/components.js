/**
 * Fyndr — UI Component Library
 * 
 * Reusable component builder functions.
 * Each function returns an HTML string for rendering.
 */

/* ── HEADER ── */
function renderHeader(currentPage) {
  return `
    <header class="header ${!['home', 'explore'].includes(currentPage) ? 'show-search' : ''}" id="main-header">
      <div class="header-inner">
        <a class="header-logo" href="#/" onclick="navigateTo('home')">
          <img src="fyndr logos/fyndr main logo.png" alt="fyndr — Search less. Save more.">
        </a>
        <nav class="header-nav" id="desktop-nav">
          <a href="#/" onclick="navigateTo('home')" class="${currentPage === 'home' ? 'active' : ''}">Home</a>
          <a href="#/explore" onclick="navigateTo('explore')" class="${currentPage === 'explore' ? 'active' : ''}">Explore</a>
          <a href="#/how" onclick="navigateTo('how')" class="${currentPage === 'how' ? 'active' : ''}">How Fyndr Works</a>
        </nav>
        <div class="header-actions">
          <div class="header-search">
            <input type="text" placeholder="Find best prices" id="top-search-input" onkeypress="if(event.key === 'Enter') handleTopSearch()">
            <button onclick="handleTopSearch()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <button class="wishlist-btn" title="Saved items" onclick="showBuyToast('Wishlist is not yet available in this prototype.')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          ${typeof currentUser !== 'undefined' && currentUser 
            ? `<button class="login-btn" onclick="logOut()" style="background: var(--gray-800);">Logout</button>`
            : `<button class="login-btn" onclick="window.location.hash='#/login'">Login</button>`
          }
          <button class="mobile-menu-btn" id="mobile-menu-toggle" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
    <nav class="mobile-nav" id="mobile-nav">
      <a href="#/" onclick="navigateTo('home'); closeMobileMenu();">Home</a>
      <a href="#/explore" onclick="navigateTo('explore'); closeMobileMenu();">Explore</a>
      <a href="#/how" onclick="navigateTo('how'); closeMobileMenu();">How Fyndr Works</a>
      ${typeof currentUser !== 'undefined' && currentUser 
        ? `<a href="javascript:void(0)" onclick="logOut(); closeMobileMenu();" style="color: var(--pink);">Logout</a>`
        : `<a href="#/login" onclick="closeMobileMenu();" style="color: var(--purple); font-weight: 600;">Login / Sign Up</a>`
      }
    </nav>
  `;
}

/* ── HERO SECTION ── */
function renderHero() {
  return `
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">
          Find the clothes you want.<br>
          <span class="gradient-text">Pay the right price.</span>
        </h1>
        <p class="hero-subtitle">
          Search once. Fyndr compares apparel across marketplaces so you don't have to.
        </p>
        <div class="search-container">
          <div class="search-bar" id="hero-search-bar">
            <span class="search-icon">🔍</span>
            <input 
              type="text" 
              id="hero-search-input" 
              placeholder="Search for kurtis, dresses, shirts..."
              onkeydown="if(event.key==='Enter') handleSearch()"
            >
            <button class="search-btn" onclick="handleSearch()">Search</button>
          </div>
        </div>
        <div class="popular-searches">
          <span class="popular-label">Popular:</span>
          <button class="popular-tag" onclick="handlePopularSearch('Kurtis')">Kurtis</button>
          <button class="popular-tag" onclick="handlePopularSearch('Dresses')">Dresses</button>
          <button class="popular-tag" onclick="handlePopularSearch('Shirts')">Shirts</button>
          <button class="popular-tag" onclick="handlePopularSearch('Jeans')">Jeans</button>
          <button class="popular-tag" onclick="handlePopularSearch('Tops')">Tops</button>
        </div>
      </div>
    </section>
  `;
}

/* ── PRODUCT CARD ── */
function renderProductCard(product) {
  const lowest = getLowestPrice(product);
  const discount = getDiscountPercentage(product.mrp, lowest.price);
  const badgeClass = product.badge.toLowerCase().replace(/\s+/g, '-');
  const trendDir = product.trendSignal.direction;
  
  const aggregateRating = (product.retailers.reduce((acc, r) => acc + (r.rating ? r.rating.score : 0), 0) / product.retailers.length).toFixed(1);
  const aggregateReviewCount = product.retailers.reduce((acc, r) => acc + (r.rating ? r.rating.count : 0), 0);

  return `
    <div class="product-card animate-in" onclick="navigateTo('product', '${product.id}')">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-badge ${badgeClass}">${product.badge}</span>
        <span class="product-trend-mini ${trendDir}">
          ${trendDir === 'up' ? '↑' : '↓'} ${product.trendSignal.percentage}%
        </span>
      </div>
      <div class="product-card-body">
        <div class="product-card-brand">${product.brand}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-pricing">
          <span class="product-card-price">₹${lowest.price.toLocaleString('en-IN')}</span>
          <span class="product-card-mrp">₹${product.mrp.toLocaleString('en-IN')}</span>
          <span class="product-card-discount">${discount}% off</span>
        </div>
        <div class="product-card-meta">
          <span class="product-card-rating">
            <span class="star">★</span> ${aggregateRating}
          </span>
          <span>•</span>
          <span>${aggregateReviewCount.toLocaleString('en-IN')} reviews</span>
        </div>
      </div>
    </div>
  `;
}

/* ── PRODUCT GRID WITH FILTERS ── */
function renderProductGrid(products, activeCategory, searchQuery) {
  const categoryChips = getCategories().map(cat => `
    <button class="filter-chip ${activeCategory === cat.id ? 'active' : ''}"
            onclick="filterByCategory('${cat.id}')">
      ${cat.label}
    </button>
  `).join('');

  const cards = products.length > 0
    ? products.map(p => renderProductCard(p)).join('')
    : `<div class="no-results">
         <div class="no-results-icon">🔍</div>
         <h3>No products found</h3>
         <p>Try a different search term or browse all categories.</p>
       </div>`;

  return `
    <div class="filter-chips">${categoryChips}</div>
    <div class="products-grid">${cards}</div>
  `;
}

/* ── RETAILER COMPARISON TABLE ── */
function renderRetailerTable(product) {
  // Determine effective prices and lowest/highest based on accountsLinked
  let lowest = null;
  let highest = null;
  
  const mappedRetailers = product.retailers.map(r => {
    let effectivePrice = r.price;
    if (typeof accountsLinked !== 'undefined' && accountsLinked) {
      effectivePrice = Math.round(r.price * (1 - (r.couponDiscount || 0) / 100));
    }
    return { ...r, effectivePrice };
  });
  
  mappedRetailers.forEach(r => {
    if (!lowest || r.effectivePrice < lowest.effectivePrice) lowest = r;
    if (!highest || r.effectivePrice > highest.effectivePrice) highest = r;
  });
  
  const savings = highest.effectivePrice - lowest.effectivePrice;

  const rows = mappedRetailers.map((r, i) => {
    const isBest = r.effectivePrice === lowest.effectivePrice;
    
    // Rating string
    let ratingHtml = '-';
    if (r.rating) {
        ratingHtml = `<span class="retailer-rating" style="display: flex; align-items: center; gap: 4px; font-weight: 600;">★ ${r.rating.score} <span class="rating-count" style="font-weight: 400; color: var(--gray-500); font-size: 0.85em;">(${r.rating.count.toLocaleString('en-IN')})</span></span>`;
    }
    
    // Price string
    let priceHtml = `₹${r.price.toLocaleString('en-IN')}`;
    if (typeof accountsLinked !== 'undefined' && accountsLinked && r.couponDiscount) {
        priceHtml = `<span class="original-price" style="text-decoration: line-through; color: var(--gray-400); font-size: 0.85em; margin-right: 4px;">₹${r.price.toLocaleString('en-IN')}</span><span class="final-price" style="color: var(--success); font-weight: 700;">₹${r.effectivePrice.toLocaleString('en-IN')}</span>`;
    }

    // Dealer string
    let dealerHtml = r.dealerName || 'Unknown Dealer';
    if (r.isVerifiedDealer) {
      dealerHtml += ` <span class="verified-badge" title="Verified by Fyndr — consistent quality guaranteed.">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </span>`;
    }

    return `
      <tr class="${isBest ? 'best-row' : ''}">
        <td class="retailer-name">${isBest ? '🏆 ' : ''}${r.name}</td>
        <td class="dealer">${dealerHtml}</td>
        <td class="rating">${ratingHtml}</td>
        <td class="price">${priceHtml}</td>
        <td class="delivery">${r.delivery}</td>
        <td>
          <button class="buy-btn ${isBest ? 'primary' : ''}" 
                  onclick="event.stopPropagation(); showBuyToast('${r.name}')">
            Buy${isBest ? ' →' : ''}
          </button>
        </td>
      </tr>
    `;
  }).join('');
  
  let integrationBanner = '';
  if (typeof accountsLinked !== 'undefined' && !accountsLinked) {
    integrationBanner = `
      <div class="integration-banner" style="background: linear-gradient(135deg, rgba(255, 77, 182, 0.1), rgba(123, 77, 255, 0.1)); border: 1px solid var(--purple); border-radius: var(--radius-md); padding: var(--space-lg); margin-top: var(--space-xl); text-align: center;">
        <h4 style="margin-bottom: var(--space-sm); color: var(--dark);">Connect your apps for hidden discounts</h4>
        <p style="color: var(--gray-600); font-size: 0.9rem; margin-bottom: var(--space-md);">Link your Amazon, Myntra, and AJIO accounts to securely apply your personal coupons and calculate the true final price.</p>
        <button id="link-accounts-btn" class="btn primary" onclick="linkAccounts()" style="width: 100%; max-width: 250px;">Link Accounts</button>
      </div>
    `;
  }

  let bestPriceHtml = '';
  if (typeof accountsLinked !== 'undefined' && accountsLinked) {
    const unlinkedLowest = product.retailers.reduce((min, r) => r.price < min.price ? r : min, product.retailers[0]);
    const extraSavings = unlinkedLowest.price - lowest.effectivePrice;
    
    // Fallback if the personalized price isn't actually lower than the public lowest
    if (extraSavings > 0) {
      bestPriceHtml = `
        <h4>✨ YOUR PERSONALIZED PRICE - ₹${lowest.effectivePrice.toLocaleString('en-IN')} at ${lowest.name}</h4>
        <p style="color: var(--success); font-weight: 500;">You unlocked an extra ₹${extraSavings.toLocaleString('en-IN')} off the lowest public price! Definitely buy this now.</p>
      `;
    } else {
      bestPriceHtml = `
        <h4>BEST PRICE - ₹${lowest.effectivePrice.toLocaleString('en-IN')} at ${lowest.name}</h4>
        <p>You save <span>₹${savings.toLocaleString('en-IN')}</span> compared with the highest listed price.</p>
      `;
    }
  } else {
    bestPriceHtml = `
      <h4>BEST PRICE - ₹${lowest.effectivePrice.toLocaleString('en-IN')} at ${lowest.name}</h4>
      <p>You save <span>₹${savings.toLocaleString('en-IN')}</span> compared with the highest listed price.</p>
    `;
  }

  return `
    <div class="comparison-section">
      <h3 class="comparison-title">🛒 Where can I buy it?</h3>
      <div class="table-responsive">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Marketplace</th>
              <th>Sold By</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Delivery</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      ${integrationBanner}
    </div>
    <div class="best-price-banner">
      <span class="best-price-icon">🔥</span>
      <div class="best-price-info">
        ${bestPriceHtml}
      </div>
    </div>
  `;
}

/* ── PRICE INTELLIGENCE ── */
function renderPriceIntelligence(product) {
  const pi = product.priceIntelligence;
  const isBelowAvg = pi.currentPrice < pi.avg90Day;
  const verdictText = isBelowAvg 
    ? 'Current price is below the historical average.' 
    : 'Current price is above the historical average.';

  return `
    <div class="intelligence-section">
      <h3 class="intelligence-title">📊 Price Intelligence</h3>
      <div class="price-metrics">
        <div class="price-metric">
          <div class="price-metric-label">Current Price</div>
          <div class="price-metric-value current">₹${pi.currentPrice.toLocaleString('en-IN')}</div>
        </div>
        <div class="price-metric">
          <div class="price-metric-label">90-Day Average</div>
          <div class="price-metric-value avg">₹${pi.avg90Day.toLocaleString('en-IN')}</div>
        </div>
        <div class="price-metric">
          <div class="price-metric-label">Lowest Recorded</div>
          <div class="price-metric-value lowest">₹${pi.lowestRecorded.toLocaleString('en-IN')}</div>
        </div>
        <div class="price-metric">
          <div class="price-metric-label">MRP</div>
          <div class="price-metric-value mrp">₹${pi.mrp.toLocaleString('en-IN')}</div>
        </div>
      </div>
      <div class="chart-container">
        <canvas id="price-chart"></canvas>
      </div>
      <div class="price-verdict">
        <span class="price-verdict-icon">${isBelowAvg ? '✅' : '⚠️'}</span>
        <div>
          <h4>${isBelowAvg ? 'Good time to buy' : 'Price is above average'}</h4>
          <p>${verdictText}</p>
        </div>
      </div>
    </div>
  `;
}

/* ── TREND SIGNAL ── */
function renderTrendSignal(product) {
  const trend = product.trendSignal;
  const isUp = trend.direction === 'up';

  return `
    <div class="trend-section">
      <h3 class="intelligence-title">📈 Trend Signal</h3>
      <div class="trend-header">
        <div class="trend-stat">
          <span class="trend-arrow ${trend.direction}">${isUp ? '↑' : '↓'}</span>
          <span class="trend-percentage ${trend.direction}">${trend.percentage}%</span>
        </div>
      </div>
      <p class="trend-desc">
        Interest in this product has ${isUp ? 'increased' : 'decreased'} over the last ${trend.period}.
      </p>
      <div class="chart-container">
        <canvas id="trend-chart"></canvas>
      </div>
      <p class="trend-demo-note">* Trend data is simulated for prototype purposes.</p>
    </div>
  `;
}

/* ── FYNDR INSIGHT / SCORE ── */
function renderFyndrInsight(product) {
  const score = product.fyndrScore;
  const isGood = score >= 80;
  const pi = product.priceIntelligence;
  const trend = product.trendSignal;

  return `
    <div class="fyndr-insight">
      <div class="fyndr-insight-header">
        <h3 class="fyndr-insight-title">✧ Fyndr Insight</h3>
      </div>
      <div class="fyndr-insight-body">
        <div class="fyndr-insight-verdict">
          <h4>${isGood ? '✓ Good time to buy' : '⟰ Consider waiting'}</h4>
          <p>
            ${isGood 
              ? `The current price is significantly below the recent average${trend.direction === 'up' ? ' and demand is trending upward' : ''}.`
              : `The current price is close to or above the recent average. You may want to wait for a better deal.`
            }
          </p>
        </div>
        <div>
          <div class="fyndr-score-circle" style="--score: ${score}">
            <div class="fyndr-score-inner">
              <span class="fyndr-score-value">${score}</span>
              <span class="fyndr-score-max">/ 100</span>
            </div>
          </div>
        </div>
      </div>
      <p class="fyndr-insight-note">Fyndr Score is a prototype/demo metric combining price position, discount, historical pricing, and trend data.</p>
    </div>
  `;
}

/* ── PRODUCT DETAIL PAGE ── */
function renderProductDetail(product) {
  const lowest = getLowestPrice(product);
  const discount = getDiscountPercentage(product.mrp, lowest.price);
  const badgeClass = product.badge.toLowerCase().replace(/\s+/g, '-');
  
  // Calculate aggregate rating from retailers
  let totalReviews = 0;
  let weightedScoreSum = 0;
  
  if (product.retailers && product.retailers.length > 0) {
      product.retailers.forEach(r => {
          if (r.rating) {
              totalReviews += r.rating.count;
              weightedScoreSum += (r.rating.score * r.rating.count);
          }
      });
  }
  
  const aggregateRating = totalReviews > 0 ? (weightedScoreSum / totalReviews).toFixed(1) : product.rating;
  const aggregateReviewCount = totalReviews > 0 ? totalReviews : product.reviewCount;

  return `
    <div class="product-detail">
      <div class="container">
        <div class="product-detail-back" onclick="window.history.back()">
          ← Back to results
        </div>
        <div class="product-detail-grid">
          <div class="product-detail-left">
            <div class="product-detail-image">
              <img src="${product.image}" alt="${product.name}">
              <span class="product-badge product-detail-badge ${badgeClass}">${product.badge}</span>
            </div>
            ${renderSimilarProducts(product)}
          </div>
          <div class="product-detail-info">
            <div class="product-detail-brand">${product.brand}</div>
            <h1 class="product-detail-name">${product.name}</h1>
            <div class="product-detail-rating">
              <span class="rating-badge">★ ${aggregateRating}</span>
              <span class="rating-count">${aggregateReviewCount.toLocaleString('en-IN')} reviews</span>
            </div>
            ${renderRetailerTable(product)}
            ${renderPriceIntelligence(product)}
            ${renderTrendSignal(product)}
            ${renderFyndrInsight(product)}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* 🛍 SIMILAR PRODUCTS */
function renderSimilarProducts(currentProduct) {
  const similar = FYNDR_PRODUCTS.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 4);
  if (similar.length === 0) return '';
  
  return `
    <div class="similar-products-section">
      <h3>You Might Also Like</h3>
      <div class="similar-products-grid">
        ${similar.map(p => renderProductCard(p)).join('')}
      </div>
    </div>
  `;
}

/* ⚙ HOW IT WORKS SECTION (Homepage) ⚙ */
function renderHowItWorks() {
  return `
    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">Search once. Let Fyndr do the hunting.</h2>
        <p class="section-subtitle">Four simple steps to smarter shopping.</p>
        <div class="steps-grid">
          <div class="step-card animate-in">
            <div class="step-number">01</div>
            <div class="step-icon">🔍</div>
            <h3>Search</h3>
            <p>Search for the apparel you want.</p>
          </div>
          <div class="step-card animate-in">
            <div class="step-number">02</div>
            <div class="step-icon">⚖️</div>
            <h3>Compare</h3>
            <p>Fyndr compares availability and prices across marketplaces.</p>
          </div>
          <div class="step-card animate-in">
            <div class="step-number">03</div>
            <div class="step-icon">📊</div>
            <h3>Understand</h3>
            <p>Check price history and trend signals.</p>
          </div>
          <div class="step-card animate-in">
            <div class="step-number">04</div>
            <div class="step-icon">🛒</div>
            <h3>Buy</h3>
            <p>Choose where you want to purchase.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── WHY FYNDR SECTION ── */
function renderWhyFyndr() {
  return `
    <section class="section-alt">
      <div class="container">
        <h2 class="section-title">Why Fyndr?</h2>
        <p class="section-subtitle">Smart shopping, simplified.</p>
        <div class="benefits-grid">
          <div class="benefit-card animate-in">
            <div class="benefit-icon search">🔍</div>
            <h3>One Search</h3>
            <p>No need to check multiple websites manually.</p>
          </div>
          <div class="benefit-card animate-in">
            <div class="benefit-icon price">💡</div>
            <h3>Best Price</h3>
            <p>See where the same product is currently cheapest.</p>
          </div>
          <div class="benefit-card animate-in">
            <div class="benefit-icon history">📊</div>
            <h3>Price History</h3>
            <p>Understand whether today's price is actually a good deal.</p>
          </div>
          <div class="benefit-card animate-in">
            <div class="benefit-icon trend">📈</div>
            <h3>Trend Signals</h3>
            <p>See whether interest in a product is rising or falling.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* ── FOOTER ── */
function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <img src="fyndr logos/fyndr main logo.png" alt="fyndr">
            <span class="footer-tagline">Search less. Save more.</span>
          </div>
          <div class="footer-right">
            <div class="footer-demo">This is a prototype / demo experience.</div>
            <div class="footer-copy">&copy; 2026 fyndr. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/* ── BUY TOAST ── */
function showBuyToast(retailer) {
  const overlay = document.createElement('div');
  overlay.className = 'toast-overlay';
  overlay.id = 'buy-toast';
  
  let message;
  if (retailer.includes('prototype') || retailer.includes('Wishlist')) {
    message = retailer;
  } else {
    message = `This button would redirect you to <strong>${retailer}</strong> using an affiliate/referral link.`;
  }

  overlay.innerHTML = `
    <div class="toast-card">
      <div class="toast-icon">🔗</div>
      <h3>Prototype Notice</h3>
      <p>${message}</p>
      <button class="toast-close-btn" onclick="closeBuyToast()">Got it</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeBuyToast();
  });
}

function closeBuyToast() {
  const toast = document.getElementById('buy-toast');
  if (toast) toast.remove();
}

/* ── CHART RENDERING ── */
function renderPriceChart(product) {
  const ctx = document.getElementById('price-chart');
  if (!ctx) return;

  const labels = product.priceHistory.map(p => {
    const d = new Date(p.date);
    return d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
  });
  const data = product.priceHistory.map(p => p.price);
  const avgLine = new Array(data.length).fill(product.priceIntelligence.avg90Day);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Price',
          data,
          borderColor: '#7B4DFF',
          backgroundColor: 'rgba(123, 77, 255, 0.08)',
          fill: true,
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: '#7B4DFF',
          borderWidth: 2.5
        },
        {
          label: '90-day Average',
          data: avgLine,
          borderColor: '#D1D5DB',
          borderDash: [6, 4],
          borderWidth: 1.5,
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0F172A',
          titleFont: { family: 'Inter', size: 12 },
          bodyFont: { family: 'Inter', size: 13, weight: '600' },
          padding: 10,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              return `₹${context.parsed.y.toLocaleString('en-IN')}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 11 }, color: '#9CA3AF', maxTicksLimit: 7 }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: {
            font: { family: 'Inter', size: 11 },
            color: '#9CA3AF',
            callback: function(value) { return '₹' + value.toLocaleString('en-IN'); }
          }
        }
      }
    }
  });
}

function renderTrendChart(product) {
  const ctx = document.getElementById('trend-chart');
  if (!ctx) return;

  // Generate synthetic trend data
  const isUp = product.trendSignal.direction === 'up';
  const baseVal = 40;
  const trendData = [];
  const labels = [];
  
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i * 2);
    labels.push(d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }));
    
    const noise = (Math.random() - 0.5) * 15;
    const trendComponent = isUp ? (13 - i) * 3 : -(13 - i) * 1.5;
    trendData.push(Math.max(10, Math.round(baseVal + trendComponent + noise)));
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Interest',
        data: trendData,
        borderColor: isUp ? '#10B981' : '#EF4444',
        backgroundColor: isUp ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
        fill: true,
        tension: 0.4,
        pointRadius: 2,
        pointHoverRadius: 5,
        pointBackgroundColor: isUp ? '#10B981' : '#EF4444',
        borderWidth: 2.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0F172A',
          titleFont: { family: 'Inter', size: 12 },
          bodyFont: { family: 'Inter', size: 13, weight: '600' },
          padding: 10,
          cornerRadius: 8,
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 11 }, color: '#9CA3AF', maxTicksLimit: 7 }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: { font: { family: 'Inter', size: 11 }, color: '#9CA3AF' },
          min: 0
        }
      }
    }
  });
}

/* ── HOW IT WORKS PAGE (Full Page) ── */
function renderHowPage() {
  return `
    <div class="how-page">
      <div class="container">
        <div class="how-page-hero">
          <h1>How <span class="gradient-text">Fyndr</span> Works</h1>
          <p>Fyndr removes the tedious part of online shopping. Instead of checking multiple apps, you search once and we do the rest.</p>
        </div>
        
        <div class="how-step-detailed">
          <div class="how-step-number">01</div>
          <div class="how-step-content">
            <h2>Search for what you want</h2>
            <p>Enter the apparel item you're looking for — a kurta, dress, shirt, jeans, or top. Fyndr understands what you need and searches across multiple fashion marketplaces simultaneously.</p>
          </div>
        </div>
        
        <div class="how-step-detailed">
          <div class="how-step-number">02</div>
          <div class="how-step-content">
            <h2>Compare prices across marketplaces</h2>
            <p>See the same product listed on Myntra, AJIO, Amazon, Flipkart, and other participating platforms — with prices, delivery estimates, and availability all in one view.</p>
          </div>
        </div>
        
        <div class="how-step-detailed">
          <div class="how-step-number">03</div>
          <div class="how-step-content">
            <h2>Understand if the price is right</h2>
            <p>Check price intelligence — including 90-day averages, historical lows, and trend signals — so you know whether today's price is genuinely a good deal or if you should wait.</p>
          </div>
        </div>
        
        <div class="how-step-detailed">
          <div class="how-step-number">04</div>
          <div class="how-step-content">
            <h2>Buy from the marketplace you choose</h2>
            <p>When you're ready, click "Buy" and you'll be redirected to the retailer's website. You complete your purchase directly with them — Fyndr just helps you find the best deal.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── EXPLORE / SEARCH RESULTS PAGE ── */
function renderExplorePage(products, category, query) {
  const title = query 
    ? `Results for "${query}"` 
    : (category && category !== 'all') 
      ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
      : 'Explore Apparel';
  
  const count = products.length;

  return `
    <div class="explore-page">
      <div class="container">
        <div class="explore-header">
          <h1 class="explore-title">${title}</h1>
          <p class="explore-count">${count} product${count !== 1 ? 's' : ''} found</p>
        </div>
        <div class="explore-search">
          <div class="search-bar">
            <span class="search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input 
              type="text" 
              id="explore-search-input" 
              placeholder="Search for kurtis, dresses, shirts..."
              value="${query || ''}"
              onkeydown="if(event.key==='Enter') handleExploreSearch()"
            >
            <button class="search-btn" onclick="handleExploreSearch()">Search</button>
          </div>
        </div>
        ${renderProductGrid(products, category || 'all', query)}
      </div>
    </div>
  `;
}


/* -- LOGIN VIEW -- */
function renderLoginView() {
  return `
    <div class="login-page" style="min-height: calc(100vh - 70px); display: flex; align-items: center; justify-content: center; background: var(--gray-50); padding: var(--space-xl);">
      <div class="login-container" style="background: white; border-radius: var(--radius-lg); padding: var(--space-2xl); width: 100%; max-width: 400px; box-shadow: var(--shadow-lg);">
        <div style="text-align: center; margin-bottom: var(--space-xl);">
          <img src="fyndr logos/fyndr main logo.png" alt="Fyndr" style="height: 40px; margin-bottom: var(--space-md);">
          <h2 style="font-size: 1.5rem; color: var(--dark);">Welcome to Fyndr</h2>
          <p style="color: var(--gray-600); margin-top: 8px;">Sign in to securely link your accounts and unlock personalized prices.</p>
        </div>

        <form id="auth-form" onsubmit="handleAuthSubmit(event)">
          <div style="margin-bottom: var(--space-md);">
            <label style="display: block; font-size: 0.9rem; font-weight: 500; margin-bottom: 8px; color: var(--dark);">Email Address</label>
            <input type="email" id="auth-email" required placeholder="you@example.com" style="width: 100%; padding: 12px 16px; border: 1px solid var(--gray-300); border-radius: var(--radius-md); font-family: inherit; font-size: 1rem;">
          </div>
          
          <div style="margin-bottom: var(--space-xl);">
            <label style="display: block; font-size: 0.9rem; font-weight: 500; margin-bottom: 8px; color: var(--dark);">Password</label>
            <input type="password" id="auth-password" required placeholder="••••••••" style="width: 100%; padding: 12px 16px; border: 1px solid var(--gray-300); border-radius: var(--radius-md); font-family: inherit; font-size: 1rem;">
          </div>

          <button type="submit" id="auth-submit-btn" class="btn primary" style="width: 100%; justify-content: center; font-size: 1rem; padding: 14px;">Sign In</button>
        </form>

        <div style="text-align: center; margin-top: var(--space-xl); font-size: 0.9rem; color: var(--gray-600);">
          <span id="auth-toggle-text">Don't have an account?</span> 
          <a href="javascript:void(0)" onclick="toggleAuthMode()" id="auth-toggle-btn" style="color: var(--purple); font-weight: 600; text-decoration: none;">Sign Up</a>
        </div>
      </div>
    </div>
  `;
}

