// Critical CSS for above-the-fold content - mobile optimized
export default function CriticalCSS() {
  return (
    <style jsx>{`
      /* Mobile-first critical styles for instant loading */
      .hero-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .hero-content {
        text-align: center;
        color: white;
        max-width: 90%;
      }
      
      .hero-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        line-height: 1.2;
      }
      
      .hero-subtitle {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 2rem;
        line-height: 1.5;
      }
      
      /* Mobile optimizations */
      @media (max-width: 768px) {
        .hero-section {
          min-height: 70vh;
          padding: 1rem;
        }
        
        .hero-title {
          font-size: 1.75rem;
        }
        
        .hero-subtitle {
          font-size: 0.9rem;
        }
      }
      
      /* Optimize font loading */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400 700;
        font-display: swap;
        src: url('/fonts/inter-var.woff2') format('woff2');
      }
      
      /* Loading states */
      .skeleton {
        background: linear-gradient(90deg, #374151 25%, #4b5563 37%, #374151 63%);
        background-size: 400% 100%;
        animation: skeleton 1.4s ease-in-out infinite;
      }
      
      @keyframes skeleton {
        0% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      /* Reduce motion for users who prefer it */
      @media (prefers-reduced-motion: reduce) {
        .skeleton {
          animation: none;
          background: #374151;
        }
      }
    `}</style>
  );
}