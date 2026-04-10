import React from 'react';

const MobileAppRedesign = () => {
    return (
        <div style={{ background: '#0a0a0a', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Arial' }}>
            <div style={{ width: '320px', height: '600px', background: '#1a1a1a', borderRadius: '30px', border: '8px solid #333', overflow: 'hidden', position: 'relative', color: '#fff' }}>
                
                {/* Status Bar */}
                <div style={{ height: '30px', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span>9:41</span>
                    <span>🔋 100%</span>
                </div>

                {/* Header */}
                <div style={{ padding: '20px' }}>
                    <h2 style={{ margin: 0, color: '#f39c12' }}>Inventory 2.0</h2>
                    <p style={{ fontSize: '12px', color: '#888' }}>Redesigned for Quick Access</p>
                </div>

                {/* Categories - Quick Scroll */}
                <div style={{ display: 'flex', gap: '10px', padding: '0 20px', overflowX: 'auto', marginBottom: '20px' }}>
                    {['Skins', 'Outfits', 'Emotes', 'Crates'].map(cat => (
                        <div key={cat} style={{ background: '#333', padding: '5px 15px', borderRadius: '15px', fontSize: '12px', whiteSpace: 'nowrap' }}>{cat}</div>
                    ))}
                </div>

                {/* Grid - Pain Point: Hard to find items */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '0 20px' }}>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} style={{ height: '100px', background: '#222', borderRadius: '10px', border: '1px solid #444', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '40px', height: '40px', background: '#444', borderRadius: '5px', marginBottom: '10px' }}></div>
                            <span style={{ fontSize: '10px' }}>Item {i}</span>
                        </div>
                    ))}
                </div>

                {/* Redesigned Floating CTA */}
                <button style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', background: '#f39c12', color: '#000', border: 'none', padding: '12px 40px', borderRadius: '25px', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(243, 156, 18, 0.3)' }}>
                    EQUIP NOW
                </button>
            </div>
        </div>
    );
};

export default MobileAppRedesign;
