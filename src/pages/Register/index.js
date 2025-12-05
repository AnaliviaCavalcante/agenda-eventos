import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  async function handleAuth(e){
    e.preventDefault();
    if(email !== '' && password !== ''){
      try {
        if(isLogin){
          await signInWithEmailAndPassword(auth, email, password);
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
        }
        navigate('/admin', { replace: true });
      } catch(error) {
        console.log(error);
        alert("Erro ao acessar. Verifique seus dados.");
      }
    }
  }

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <div className="animeLeft" style={{width: '100%', maxWidth: '400px', padding: '2rem'}}>
        
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <h1 style={{fontSize: '2rem', fontWeight: '800'}}>Agenda<span style={{color:'var(--primary)'}}>.</span></h1>
          <p style={{color: 'var(--text-muted)'}}>Veja compromissos</p>
        </div>

        <form onSubmit={handleAuth} style={{background: 'var(--surface)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)'}}>
          <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem'}}>Email</label>
          <input 
            type="email" 
            placeholder="exemplo@email.com"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          
          <label style={{display: 'block', marginBottom: '8px', fontSize: '0.9rem'}}>Senha</label>
          <input 
            type="password" 
            placeholder="********"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          <button type="submit" className="btn" style={{marginTop: '1rem'}}>
            {isLogin ? 'Entrar na Agenda' : 'Criar Conta Grátis'}
          </button>
        </form>

        <button 
          onClick={() => setIsLogin(!isLogin)} 
          style={{marginTop: '1.5rem', background: 'transparent', color: 'var(--text-muted)', width: '100%', fontSize: '0.9rem'}}
        >
          {isLogin ? ''}
        </button>
        
        <div style={{textAlign: 'center', marginTop: '2rem'}}>
           <Link to="/" style={{color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem'}}>Voltar para o início</Link>
        </div>
      </div>
    </div>
  );
}
