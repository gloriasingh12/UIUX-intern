import React from 'react';

const ResponsivePage = () => {
    return (
        <div style={{ margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'Arial, sans-serif' }}>
            {/* Header / Navbar */}
            <header style={{ 
                background: '#333', color: '#fff', padding: '15px', textAlign: 'center' 
            }}>
                <h1>Responsive Design</h1>
            </header>

            {/* Responsive Container */}
            <div style={{ 
                display: 'flex', flexWrap: 'wrap', padding: '20px', gap: '20px' 
            }}>
                {/* Main Content (Wide on Desktop, Full on Mobile) */}
                <main style={{ 
                    flex: '3 1 400px', background: '#f4f4f4', padding: '20px', borderRadius: '8px' 
                }}>
                    <h2>Main Section</h2>
                    <p>Is page ka layout device ki width ke hisaab se adjust hota hai.</p>
                </main>

                {/* Sidebar (Next to Main on Desktop, Below on Mobile) */}
                <aside style={{ 
                    flex: '1 1 200px', background: '#ddd', padding: '20px', borderRadius: '8px' 
                }}>
                    <h3>Sidebar</h3>
                    <ul style={{ paddingLeft: '20px' }}>
                        <li>Mobile: Stacked</li>
                        <li>Desktop: Side-by-side</li>
                    </ul>
                </aside>
            </div>

            {/* Footer */}
            <footer style={{ 
                background: '#333', color: '#fff', textAlign: 'center', padding: '10px', marginTop: '20px' 
            }}>
                <p>Task 53: Responsive Implementation</p>
            </footer>
        </div>
    );
};

export default ResponsivePage;
