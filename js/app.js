/**
 * Fyndr — Application Core
 * 
 * SPA Router & Page Rendering
 * Hash-based routing: #/ (home), #/explore, #/product/:id, #/how
 */

/* ── State ── */
let currentPage = 'home';
let currentCategory = 'all';
let currentQuery = '';
let accountsLinked = false;

/* ── Router ── */
function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash || '#/';
  
  if (hash.startsWith('#/product/')) {
    const productId = hash.replace('#/product/', '');
    currentPage = 'product';
    renderPage('product', productId);
  } else if (hash.startsWith('#/explore')) {
    currentPage = 'explore';
    // Parse query params
    const params = new URLSearchParams(hash.split('?')[1] || '');
    currentQuery = params.get('q') || '';
    currentCategory = params.get('cat') || 'all';
    renderPage('explore');
  } else if (hash === '#/how') {
    currentPage = 'how';
    renderPage('how');
  } else if (hash === '#/login') {
    currentPage = 'login';
    renderPage('login');
  } else {
    currentPage = 'home';
    renderPage('home');
  }
  
  // Scroll to top on page change
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateTo(page, param) {
  switch (page) {
    case 'home':
      window.location.hash = '#/';
      break;
    case 'explore':
      window.location.hash = '#/explore';
      break;
    case 'product':
      window.location.hash = `#/product/${param}`;
      break;
    case 'how':
      window.location.hash = '#/how';
      break;
  }
}

/* ── Page Renderer ── */
function renderPage(page, param) {
  const app = document.getElementById('app');
  
  switch (page) {
    case 'home':
      app.innerHTML = renderHeader('home') + renderHomePage();
      break;
    case 'explore':
      app.innerHTML = renderHeader('explore') + renderExploreView();
      break;
    case 'login':
      app.innerHTML = renderHeader('login') + renderLoginView();
      break;
    case 'product':
      const product = getProductById(param);
      if (product) {
        app.innerHTML = renderHeader('explore') + renderProductDetail(product) + renderFooter();
        // Render charts after DOM update
        requestAnimationFrame(() => {
          renderPriceChart(product);
          renderTrendChart(product);
        });
      } else {
        app.innerHTML = renderHeader('home') + `
          <div class="explore-page">
            <div class="container">
              <div class="no-results">
                <div class="no-results-icon">😕</div>
                <h3>Product not found</h3>
                <p>The product you're looking for doesn't exist.</p>
              </div>
            </div>
          </div>
        ` + renderFooter();
      }
      break;
    case 'how':
      app.innerHTML = renderHeader('how') + renderHowPage() + renderFooter();
      break;
  }
  
  // Setup header scroll effect
  setupHeaderScroll();
}

/* ── Home Page Assembly ── */
function renderHomePage() {
  const trendingProducts = getAllProducts()
    .sort((a, b) => b.fyndrScore - a.fyndrScore)
    .slice(0, 8);

  return `
    ${renderHero()}
    <section class="section">
      <div class="container">
        <h2 class="section-title">Trending Apparel</h2>
        <p class="section-subtitle">Popular picks with strong value signals.</p>
        <div class="filter-chips" id="home-filters">
          ${getCategories().map(cat => `
            <button class="filter-chip ${currentCategory === cat.id ? 'active' : ''}"
                    onclick="filterHomeCategory('${cat.id}')">
              ${cat.label}
            </button>
          `).join('')}
        </div>
        <div class="products-grid" id="home-products">
          ${trendingProducts.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </section>
    ${renderHowItWorks()}
    ${renderWhyFyndr()}
    ${renderFooter()}
  `;
}

/* ── Explore Page ── */
function renderExploreView() {
  let products;
  
  if (currentQuery) {
    products = searchProducts(currentQuery);
    if (currentCategory !== 'all') {
      products = products.filter(p => p.category === currentCategory);
    }
  } else if (currentCategory !== 'all') {
    products = getProductsByCategory(currentCategory);
  } else {
    products = getAllProducts();
  }

  return renderExplorePage(products, currentCategory, currentQuery) + renderFooter();
}

/* ── Search Handlers ── */
function handleSearch() {
  const input = document.getElementById('hero-search-input');
  if (input && input.value.trim()) {
    currentQuery = input.value.trim();
    currentCategory = 'all';
    window.location.hash = `#/explore?q=${encodeURIComponent(currentQuery)}`;
  }
}

function handleTopSearch() {
  const input = document.getElementById('top-search-input');
  if (input && input.value.trim()) {
    currentQuery = input.value.trim();
    currentCategory = 'all';
    window.location.hash = `#/explore?q=${encodeURIComponent(currentQuery)}`;
  }
}

function handlePopularSearch(term) {
  // Map popular searches to categories
  const categoryMap = {
    'Kurtis': 'kurtis',
    'Dresses': 'dresses',
    'Shirts': 'shirts',
    'Jeans': 'jeans',
    'Tops': 'tops'
  };
  
  currentCategory = categoryMap[term] || 'all';
  currentQuery = '';
  window.location.hash = `#/explore?cat=${currentCategory}`;
}

function handleExploreSearch() {
  const input = document.getElementById('explore-search-input');
  if (input) {
    currentQuery = input.value.trim();
    currentCategory = 'all';
    if (currentQuery) {
      window.location.hash = `#/explore?q=${encodeURIComponent(currentQuery)}`;
    } else {
      window.location.hash = '#/explore';
    }
  }
}

function filterByCategory(category) {
  currentCategory = category;
  if (currentQuery) {
    window.location.hash = `#/explore?q=${encodeURIComponent(currentQuery)}&cat=${category}`;
  } else {
    window.location.hash = `#/explore?cat=${category}`;
  }
}

function filterHomeCategory(category) {
  currentCategory = category;
  const grid = document.getElementById('home-products');
  const chips = document.getElementById('home-filters');
  
  if (!grid || !chips) return;
  
  // Update active chip
  chips.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Filter and re-render products
  let products;
  if (category === 'all') {
    products = getAllProducts().sort((a, b) => b.fyndrScore - a.fyndrScore).slice(0, 8);
  } else {
    products = getProductsByCategory(category);
  }
  
  grid.innerHTML = products.map(p => renderProductCard(p)).join('');
  
  if (products.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column: 1/-1;">
        <div class="no-results-icon">🔍</div>
        <h3>No products in this category yet</h3>
        <p>Check back soon — we're adding more products.</p>
      </div>
    `;
  }
}

/* ── Mobile Menu ── */
function toggleMobileMenu() {
  const btn = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('mobile-nav');
  btn.classList.toggle('open');
  nav.classList.toggle('open');
}

function closeMobileMenu() {
  const btn = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('mobile-nav');
  if (btn) btn.classList.remove('open');
  if (nav) nav.classList.remove('open');
}

/* ── Header Scroll Effect ── */
function setupHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;
  
  const onScroll = () => {
    // Basic header styling on scroll
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Search bar visibility logic (only matters on pages where it's initially hidden)
    if (currentPage === 'home') {
      if (window.scrollY > 350) {
        header.classList.add('show-search');
      } else {
        header.classList.remove('show-search');
      }
    } else if (currentPage === 'explore') {
      if (window.scrollY > 150) {
        header.classList.add('show-search');
      } else {
        header.classList.remove('show-search');
      }
    }
  };
  
  window.removeEventListener('scroll', onScroll);
  window.addEventListener('scroll', onScroll);
  onScroll();
}

/* ── Account Linking ── */
function linkAccounts() {
  if (typeof currentUser === 'undefined' || !currentUser) {
    // Not logged in, redirect or show message
    const toast = document.createElement('div');
    toast.style.cssText = 'position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: var(--error, #e53e3e); color: white; padding: 12px 24px; border-radius: 30px; z-index: 1000; box-shadow: 0 10px 25px rgba(0,0,0,0.2); font-weight: 500; text-align: center;';
    toast.innerHTML = '🔒 You must log in to Fyndr first to link your apps.';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
    
    // Redirect to login after a brief moment
    setTimeout(() => {
      window.location.hash = '#/login';
    }, 1500);
    return;
  }

  const btn = document.getElementById('link-accounts-btn');
  if (btn) btn.innerHTML = '<span class="loader"></span> Linking...';
  
  // Simulate API delay
  setTimeout(() => {
    accountsLinked = true;
    
    // Create a simple toast notification
    const toast = document.createElement('div');
    toast.style.cssText = 'position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: var(--dark); color: white; padding: 12px 24px; border-radius: 30px; z-index: 1000; box-shadow: 0 10px 25px rgba(0,0,0,0.2); font-weight: 500; text-align: center;';
    toast.innerHTML = '✨ Accounts linked! Hidden discounts applied.';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
    
    // Re-render the product page to show new prices
    if (currentPage === 'product') {
      const productId = window.location.hash.replace('#/product/', '');
      renderPage('product', productId);
    }
  }, 1500);
}

/* ── Auth UI Handlers ── */
let authMode = 'login';

function toggleAuthMode() {
  authMode = authMode === 'login' ? 'signup' : 'login';
  
  const submitBtn = document.getElementById('auth-submit-btn');
  const toggleText = document.getElementById('auth-toggle-text');
  const toggleBtn = document.getElementById('auth-toggle-btn');
  const title = document.querySelector('.login-container h2');
  
  if (authMode === 'login') {
    submitBtn.innerText = 'Sign In';
    toggleText.innerText = "Don't have an account?";
    toggleBtn.innerText = 'Sign Up';
    title.innerText = 'Welcome to Fyndr';
  } else {
    submitBtn.innerText = 'Create Account';
    toggleText.innerText = 'Already have an account?';
    toggleBtn.innerText = 'Sign In';
    title.innerText = 'Create your account';
  }
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;
  
  let result;
  if (authMode === 'login') {
    result = logIn(email, password);
  } else {
    result = signUp(email, password);
  }
  
  if (result.success) {
    window.location.hash = '#/';
    window.location.reload();
  } else {
    alert(result.error);
  }
}

/* ── Initialize ── */
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
});
