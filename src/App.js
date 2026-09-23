import React, { useState } from 'react';
import './App.css';

function App() {
  const [tab, setTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [customerName] = useState('ياسمين فؤاد');


const categories = [
  { name: 'برجر', img: 'images/borgr.jpg' },
  { name: 'بيتزا', img: 'images/petza.jpg' },
  { name: 'مشويات', img: 'images/meshwiyat.jpg' },
  { name: 'لحوم', img: 'images/meat.jpg' },
  { name: 'شاورما', img: 'images/shwrma.jpg' },
  { name: 'أكل بيتي', img: 'images/homemad.jpg' },
  { name: 'حلويات', img: 'images/halwayat.jpg' },
  { name: 'سوبر ماركت', img: 'images/superma.jpg' },
  { name: 'معجنات', img: 'images/stuffed-veggies.jpg' },
  { name: 'خضروات', img: 'images/grocery-bag.jpg' },
  { name: 'فواكه', img: 'images/fruit.jpg' },
  { name: 'صيدلية', img: 'images/pharmacy.jpg' }
];
 
  

  return (
    <div style={{ 
      direction: 'rtl', 
      padding: '15px 15px 85px 15px', 
      maxWidth: '480px', 
      margin: '0 auto', 
      background: '#f8f9fa', 
      borderRadius: '20px', 
      minHeight: '100vh', 
      boxSizing: 'border-box', 
      position: 'relative',
      fontFamily: 'Cairo, sans-serif'
    }}>
      
      
      <header style={{ marginBottom: '12px', textAlign: 'center' }}>
        <h2 style={{ color: '#0b3b2c', margin: '5px 0', fontSize: '20px' }}>مرحباً بكِ، {customerName}</h2>
        <p style={{ color: '#666', fontSize: '13px' }}>تطبيق Becho Market جاهز لخدمتك</p>
      </header>

      
      <div style={{
        background: 'linear-gradient(135deg, #0b3b2c 0%, #144e3a 100%)',
        borderRadius: '16px',
        padding: '8px',
        margin: '10px 0 15px 0',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.25)',
        border: '1px solid #1e6b51',
        overflow: 'hidden'
      }}>
        <img 
          src={process.env.PUBLIC_URL + "/images/grocery-bag.jpg"}
          alt="First Order Offer" 
          style={{
            width: '100%',
            height: '130px',
            objectFit: 'cover',
            borderRadius: '12px',
            display: 'block'
          }} 
        />
      </div>

    
      <div style={{ marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="ابحث عن وجبة، دواء، أو خضروات..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 15px',
            borderRadius: '12px',
            border: '1px solid #ddd',
            outline: 'none',
            fontSize: '14px',
            background: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            boxSizing: 'border-box'
          }}
        />
      </div>

    
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h3 style={{ color: '#333', fontSize: '16px', margin: 0 }}>Category</h3>
          <span style={{ color: '#0b3b2c', fontSize: '13px', cursor: 'pointer', fontWeight: 'bold' }}>See All</span>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '8px',
          direction: 'rtl',
          textAlign: 'center' 
        }}>
          {categories.map((cat, index) => (
            <div key={index} style={{ background: '#fff', padding: '6px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <img 
                src={cat.img} 
                alt={cat.name} 
                style={{ width: '100%', height: '52px', objectFit: 'cover', borderRadius: '8px', display: 'block' }}
 />
              <span style={{ fontSize: '11px', display: 'block', marginTop: '4px', color: '#333', fontWeight: '600' }}>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h3 style={{ color: '#333', fontSize: '16px', marginBottom: '10px' }}>عروض مميزة لأجلك</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
  <img 
    src={`${process.env.PUBLIC_URL}/images/burger-comb.jpg`} 
    alt="عرض البرجر" 
    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} 
  />
  <h4 style={{ fontSize: '13px', margin: '8px 0 4px 0', color: '#0b3b2c' }}>وجبة برجر دابل</h4>
  <span style={{ fontSize: '12px', color: '#e74c3c', fontWeight: 'bold' }}>خصم 30%</span>
</div>

<div style={{ background: '#fff', padding: '10px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
  <img 
    src={`${process.env.PUBLIC_URL}/images/stuffed-veggies.jpg`} 
    alt="صينية المحشي" 
    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} 
  />
  <h4 style={{ fontSize: '13px', margin: '8px 0 4px 0', color: '#0b3b2c' }}>صينية محشي بيتي</h4>
  <span style={{ fontSize: '12px', color: '#27ae60', fontWeight: 'bold' }}>طازج وساخن</span>
</div>
          

        </div>
      </div>

     
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '480px',
        background: '#ffffff',
        borderTop: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        boxShadow: '0 -4px 10px rgba(0,0,0,0.08)',
        zIndex: 1000,
        direction: 'rtl'
      }}>
       <button 
          onClick={() => setTab('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'center', color: tab === 'home' ? '#0b3b2c' : '#888', flex: 1 }}
        >
          <div style={{ fontSize: '18px' }}>🏠</div>
          <span style={{ fontSize: '11px', fontWeight: tab === 'home' ? 'bold' : 'normal' }}>الرئيسية</span>
        </button>

        {/* زرار السلة مكان المفضلة */}
        <button 
          onClick={() => setTab('cart')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'center', color: tab === 'cart' ? '#0b3b2c' : '#888', flex: 1 }}
        >
          <div style={{ fontSize: '18px' }}>🛒</div>
          <span style={{ fontSize: '11px', fontWeight: tab === 'cart' ? 'bold' : 'normal' }}>السلة</span>
        </button>
<button 
          onClick={() => setTab('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'center', color: tab === 'home' ? '#0b3b2c' : '#888', flex: 1 }}
        >
          <div style={{ fontSize: '18px' }}>🏠</div>
          <span style={{ fontSize: '11px', fontWeight: tab === 'home' ? 'bold' : 'normal' }}>الرئيسية</span>
        </button>

        {/* زرار السلة مكان المفضلة */}
        <button 
          onClick={() => setTab('cart')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'center', color: tab === 'cart' ? '#0b3b2c' : '#888', flex: 1 }}
        >
          <div style={{ fontSize: '18px' }}>🛒</div>
          <span style={{ fontSize: '11px', fontWeight: tab === 'cart' ? 'bold' : 'normal' }}>السلة</span>
        </button>

        <button 
          onClick={() => setTab('orders')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'center', color: tab === 'orders' ? '#0b3b2c' : '#888', flex: 1 }}
        >
          <div style={{ fontSize: '18px' }}>📦</div>
          <span style={{ fontSize: '11px', fontWeight: tab === 'orders' ? 'bold' : 'normal' }}>الطلبات</span>
        </button>

        <button 
          onClick={() => setTab('profile')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'center', color: tab === 'profile' ? '#0b3b2c' : '#888', flex: 1 }}
        >
          <div style={{ fontSize: '18px' }}>👤</div>
          <span style={{ fontSize: '11px', fontWeight: tab === 'profile' ? 'bold' : 'normal' }}>حسابي</span>
        </button>
      </nav>


      {tab === 'cart' && (
        <div style={{ padding: '30px 20px', direction: 'rtl', textAlign: 'center' }}>
          <h2>سلة المشتريات 🛒</h2>
          <p>السلة فارغة حالياً</p>
        </div>
      )}

     
      {tab === 'orders' && (
        <div style={{ padding: '30px 20px', direction: 'rtl', textAlign: 'center' }}>
          <h2>الطلبات السابقة 📦</h2>
          <p>لا توجد طلبات سابقة</p>
        </div>
      )}

      {tab === 'profile' && (
        <div style={{ textAlign: 'center', padding: '30px 20px', direction: 'rtl' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>👤</div>
          <h2 style={{ color: '#0b3b2c', marginBottom: '15px' }}>حسابي</h2>
          
          <div style={{ background: '#fff', padding: '20px', borderRadius: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'right' }}>
            <p style={{ margin: '10px 0', fontSize: '14px', color: '#333' }}>
              <strong>اسم العميل:</strong>
            </p>
            <p style={{ margin: '10px 0', fontSize: '14px', color: '#333' }}>
              <strong>رقم الهاتف:</strong> 
            </p>
            <p style={{ margin: '10px 0', fontSize: '14px', color: '#333' }}>
              <strong>الطلب:</strong> 
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
        

