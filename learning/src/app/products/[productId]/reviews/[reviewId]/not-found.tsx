export default function ReviewNotFound() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      margin: '2rem'
    }}>
      <h1 style={{ color: '#dc3545', fontSize: '2rem' }}>🔍 Review Not Found</h1>
      <p style={{ fontSize: '1.1rem', color: '#6c757d', marginBottom: '1rem' }}>
        The review you're looking for doesn't exist or has been removed.
      </p>
      <p style={{ fontSize: '0.9rem', color: '#6c757d' }}>
        Review IDs must be 1000 or less.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="/" 
          style={{ 
            color: '#007bff', 
            textDecoration: 'none',
            marginRight: '1rem',
            padding: '0.5rem 1rem',
            border: '1px solid #007bff',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
