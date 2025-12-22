// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const fetchArticles = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('https://beyondchats-assignment-production.up.railway.app/api/articles');
//       if (!response.ok) throw new Error('Failed to fetch articles');
//       const result = await response.json();
//       setArticles(result.data.data);

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   const truncateText = (text, maxLength = 180) => {
//     if (!text || typeof text !== 'string') return 'Content not available';
//     if (text.length <= maxLength) return text;
//     return text.substring(0, maxLength).trim() + '...';
//   };

//   return (
//     <div className="app">
//       <header className="header">
//         <div className="container">
//           <div className="logo-section">
//             <div className="logo-icon">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2L2 7l10 5 10-5-10-5z"/>
//                 <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
//               </svg>
//             </div>
//             <h1 className="logo-text">BeyondChats</h1>
//           </div>
//           <p className="tagline">AI-Powered Article Enhancement</p>
//         </div>
//       </header>

//       <main className="main">
//         <div className="container">
//           <div className="hero-section">
//             <h2 className="hero-title">Discover Enhanced Articles</h2>
          
//           </div>

//           {loading && (
//             <div className="articles-grid">
//               {[1, 2, 3, 4, 5, 6].map((n) => (
//                 <div key={n} className="article-card skeleton">
//                   <div className="skeleton-header"></div>
//                   <div className="skeleton-line"></div>
//                   <div className="skeleton-line short"></div>
//                   <div className="skeleton-footer"></div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {error && (
//             <div className="error-state">
//               <div className="error-icon">⚠️</div>
//               <h3>Unable to load articles</h3>
//               <p>{error}</p>
//               <button onClick={fetchArticles} className="retry-button">
//                 Try Again
//               </button>
//             </div>
//           )}

//           {!loading && !error && articles.length === 0 && (
//             <div className="empty-state">
//               <div className="empty-icon">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                   <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
//                 </svg>
//               </div>
//               <h3>No articles yet</h3>
//               <p>Check back soon for AI-enhanced content</p>
//             </div>
//           )}

//           {!loading && !error && articles.length > 0 && (
//             <div className="articles-grid">
//               {articles.map((article, index) => (
//                 <article key={index} className="article-card" style={{ animationDelay: `${index * 0.1}s` }}>
//                   <div className="article-header">
//                     <span className="article-badge">Enhanced</span>
//                     <time className="article-date">{formatDate(article.created_at)}</time>
//                   </div>
                  
//                   <h3 className="article-title">{article.title || 'Untitled Article'}</h3>
                  
//                   <p className="article-content">
//                     {truncateText(article.content)}
//                   </p>
                  
//                   <div className="article-footer">
//                     <a 
//                       href={article.source_url} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="read-more-button"
//                     >
//                       Read Original
//                       <svg viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
//                       </svg>
//                     </a>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           )}
//         </div>
//       </main>

//       <footer className="footer">
//         <div className="container">
//           <p className="footer-text">
//             © 2025 BeyondChats. Powered by AI to bring you better content.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://beyondchats-assignment-production.up.railway.app/api/articles'
      );
      
      console.log('📡 Response status:', response.status);
      
      if (!response.ok) throw new Error('Failed to fetch articles');
      
      const result = await response.json();
      
      // 🔍 DEBUG LOGS - Check your browser console
      console.log('===== API RESPONSE DEBUG =====');
      console.log('1. Full API Response:', result);
      console.log('2. result.data:', result.data);
      console.log('3. result.data.data:', result.data?.data);
      console.log('4. Type of result:', typeof result);
      console.log('5. Is result an array?', Array.isArray(result));
      console.log('6. Is result.data an array?', Array.isArray(result.data));
      console.log('7. Is result.data.data an array?', Array.isArray(result.data?.data));
      
      // Try multiple possible structures
      let articlesData = [];
      
      if (Array.isArray(result)) {
        articlesData = result;
        console.log('✅ Using: result (direct array)');
      } else if (Array.isArray(result?.data?.data)) {
        articlesData = result.data.data;
        console.log('✅ Using: result.data.data (paginated)');
      } else if (Array.isArray(result?.data)) {
        articlesData = result.data;
        console.log('✅ Using: result.data');
      } else {
        console.log('❌ Could not find articles array in response');
      }
      
      console.log('8. Final articles array:', articlesData);
      console.log('9. Articles count:', articlesData.length);
      console.log('10. First article (if exists):', articlesData[0]);
      console.log('==============================');
      
      setArticles(articlesData);
    } catch (err) {
      console.error('❌ Fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const truncateText = (text, maxLength = 180) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h1 className="logo-text">BeyondChats</h1>
          </div>
          <p className="tagline">AI-Powered Article Enhancement</p>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="hero-section">
            <h2 className="hero-title">Discover Enhanced Articles</h2>
            <p className="hero-subtitle">
              AI-curated summaries that cut through the noise and deliver insights
            </p>
          </div>

          {loading && (
            <div className="articles-grid">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="article-card skeleton">
                  <div className="skeleton-header"></div>
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line short"></div>
                  <div className="skeleton-footer"></div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="error-state">
              <div className="error-icon">⚠️</div>
              <h3>Unable to load articles</h3>
              <p>{error}</p>
              <button onClick={fetchArticles} className="retry-button">
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3>No articles yet</h3>
              <p>Check back soon for AI-enhanced content</p>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="articles-grid">
              {articles.map((article, index) => (
                <article key={article.id || index} className="article-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="article-header">
                    <span className="article-badge">Enhanced</span>
                    <time className="article-date">{formatDate(article.created_at)}</time>
                  </div>
                  
                  <h3 className="article-title">{article.title}</h3>
                  
                  <p className="article-content">
                    {truncateText(article.content)}
                  </p>
                  
                  <div className="article-footer">
                    <a 
                      href={article.source_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="read-more-button"
                    >
                      Read Original
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2024 BeyondChats. Powered by AI to bring you better content.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;