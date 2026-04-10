import React from 'react';

const LandingPageRedesign = () => {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#333', margin: 0 }}>
            {/* Modern Navigation */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <h2 style={{ color: '#6366f1', margin: 0 }}>NexGen</h2>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <span>Home</span>
                    <span>Features</span>
                    <button style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Get Started</button>
                </div>
            </nav>

            {/* Hero Section (The Redesign) */}
            <header style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '0 20px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#1e293b' }}>Modernize Your Workflow</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', color: '#475569', lineHeight: '1.6' }}>
                    Experience the next generation of productivity with our redesigned, lightning-fast interface.
                </p>
                <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                    <button style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '15px 30px', fontSize: '1rem', borderRadius: '8px', cursor: 'pointer' }}>Start Free Trial</button>
                    <button style={{ background: 'transparent', border: '2px solid #6366f1', color: '#6366f1', padding: '15px 30px', fontSize: '1rem', borderRadius: '8px', cursor: 'pointer' }}>Watch Demo</button>
                </div>
            </header>
        </div>
    );
};

export default LandingPageRedesign;
