import { useState, useEffect } from 'react';
import { auth, db } from '../../firebaseConnection';
import { signOut } from 'firebase/auth';
import { addDoc, collection, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import Header from '../../components/Header';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("date", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      let list = [];
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      })
      setEvents(list);
    })
    return () => unsub();
  }, [])

  async function handleRegister(e){
    e.preventDefault();
    if(title === '' || description === '') return;

    await addDoc(collection(db, "events"), {
      title, description, date, location
    })
    .then(() => {
      setTitle(''); setDescription(''); setDate(''); setLocation('');
    })
  }

  async function handleDelete(id){
    await deleteDoc(doc(db, "events", id));
  }

  return (
    <div>
      <Header />
      <div className="container animeLeft">
        
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
          <h1 style={{fontSize: '1.8rem'}}>Painel de Controle</h1>
          <button className="btn-logout" onClick={() => signOut(auth)}>Sair</button>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '3rem'}}>
          {/* Formulário */}
          <div style={{background: 'var(--surface)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)'}}>
            <h3 style={{marginBottom: '1.5rem'}}>Adicionar Novo Evento</h3>
            <form onSubmit={handleRegister}>
              <input placeholder="Nome do Evento" value={title} onChange={(e) => setTitle(e.target.value)} />
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{colorScheme:'dark'}}/>
                <input placeholder="Local" value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>

              <textarea placeholder="Descrição do evento..." rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
              
              <button type="submit" className="btn">Publicar na Agenda</button>
            </form>
          </div>

          {/* Lista */}
          <div>
            <h3 style={{marginBottom: '1rem'}}>Eventos Cadastrados</h3>
            {events.map((item) => (
              <div key={item.id} style={{
                background: 'var(--surface)', 
                padding: '1rem', 
                borderRadius: '8px', 
                border: '1px solid var(--border)', 
                marginBottom: '0.8rem',
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center'
              }}>
                <div>
                  <strong style={{display:'block'}}>{item.title}</strong>
                  <span style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>{item.date} • {item.location}</span>
                </div>
                <button onClick={() => handleDelete(item.id)} style={{background:'none', color:'var(--danger)', fontWeight:'600'}}>
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}