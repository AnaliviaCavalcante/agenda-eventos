import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebaseConnection';
import Header from '../../components/Header';

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const eventsRef = collection(db, "events");
      const q = query(eventsRef, orderBy("date", "asc"));
      const querySnapshot = await getDocs(q);
      
      let list = [];
      querySnapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setEvents(list);
    }
    loadEvents();
  }, []);

  return (
    <div>
      <Header />
      <div className="container animeLeft">
        <div style={{marginBottom: '3rem', textAlign: 'center'}}>
          <h1 style={{fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem'}}>Próximos Eventos</h1>
          <p style={{color: 'var(--text-muted)'}}>Fique por dentro do que vai acontecer.</p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', paddingBottom: '3rem'}}>
          {events.map((item) => (
            <article key={item.id} style={{
              background: 'var(--surface)', 
              borderRadius: '12px', 
              border: '1px solid var(--border)',
              overflow: 'hidden',
              transition: 'transform 0.2s'
            }}>
              <div style={{padding: '1.5rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                  <span style={{
                    background: 'rgba(59, 130, 246, 0.1)', 
                    color: 'var(--primary)', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem', 
                    fontWeight: '600'
                  }}>
                    {item.date}
                  </span>
                </div>

                <h3 style={{fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: '1.4'}}>{item.title}</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                  {item.description}
                </p>
                
                <div style={{borderTop: '1px solid var(--border)', paddingTop: '1rem', color: 'var(--text)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  📍 {item.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}