import { useMemo, useState } from 'react';
import {
  Sparkles, Search, Menu, X, WandSparkles, Image, FileText,
  Code2, AudioLines, Video, Languages, MessageSquareText,
  ArrowUpRight, Zap, ShieldCheck, Crown, LayoutDashboard,
  Settings, CircleHelp, ChevronRight, Star
} from 'lucide-react';

const tools = [
  { name: 'AI Chat Assistant', desc: 'Ask questions, brainstorm ideas and get clear answers.', category: 'Chat', icon: MessageSquareText, tag: 'Popular', color: 'violet' },
  { name: 'AI Image Generator', desc: 'Turn your imagination into original visual concepts.', category: 'Images', icon: Image, tag: 'Creative', color: 'pink' },
  { name: 'Writing Assistant', desc: 'Create blogs, captions, emails and polished content.', category: 'Writing', icon: FileText, tag: 'Popular', color: 'blue' },
  { name: 'Code Assistant', desc: 'Understand code, debug issues and build faster.', category: 'Coding', icon: Code2, tag: 'Developer', color: 'green' },
  { name: 'Text to Speech', desc: 'Convert written content into natural-sounding speech.', category: 'Audio', icon: AudioLines, tag: 'Audio', color: 'orange' },
  { name: 'AI Video Ideas', desc: 'Plan scripts, scenes and concepts for your next video.', category: 'Video', icon: Video, tag: 'Creator', color: 'pink' },
  { name: 'Translator', desc: 'Translate text and make communication easier.', category: 'Productivity', icon: Languages, tag: 'Utility', color: 'blue' },
  { name: 'Prompt Studio', desc: 'Build better prompts for your favourite AI workflows.', category: 'Productivity', icon: WandSparkles, tag: 'New', color: 'violet' }
];

const categories = ['All Tools', 'Chat', 'Images', 'Writing', 'Coding', 'Audio', 'Video', 'Productivity'];

function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All Tools');
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');

  const visibleTools = useMemo(() => tools.filter(tool => {
    const matchesCategory = category === 'All Tools' || tool.category === category;
    const matchesQuery = (tool.name + ' ' + tool.desc + ' ' + tool.category).toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [query, category]);

  const openTool = (name) => setNotice(name + ' is part of the interface preview. Connect its AI provider/API to enable live generation.');
  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="brand"><div className="brand-mark"><Sparkles size={21}/></div><span>AI Tools <b>Hub</b></span><button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X/></button></div>
        <div className="workspace-label">WORKSPACE</div>
        <button className="side-link active"><LayoutDashboard size={18}/> Dashboard</button>
        <button className="side-link" onClick={() => setCategory('All Tools')}><WandSparkles size={18}/> Explore tools</button>
        <button className="side-link" onClick={() => setNotice('Your saved tools will appear here after account features are connected.')}><Star size={18}/> My favourites</button>
        <div className="workspace-label second-label">PREFERENCES</div>
        <button className="side-link" onClick={() => setNotice('Account settings will be enabled with Firebase authentication.')}><Settings size={18}/> Settings</button>
        <button className="side-link" onClick={() => setNotice('Help centre content will be added before launch.')}><CircleHelp size={18}/> Help centre</button>
        <div className="sidebar-bottom"><div className="upgrade-card"><div className="upgrade-icon"><Crown size={18}/></div><b>Unlock your potential</b><p>Explore premium AI workflows in one place.</p><button onClick={() => setNotice('Subscription checkout is not connected yet.')}>Explore plans <ArrowUpRight size={14}/></button></div><div className="profile"><div className="avatar">G</div><div><b>Guest account</b><small>Preview mode</small></div><ChevronRight size={16}/></div></div>
      </aside>
      {menuOpen && <button className="scrim" onClick={() => setMenuOpen(false)} aria-label="Close navigation"/>}
      <main className="main-content">
        <header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu/></button><div className="breadcrumb">Workspace <ChevronRight size={14}/> <b>Dashboard</b></div><div className="top-actions"><span className="status"><span/> Preview environment</span><button className="profile-button" onClick={() => setNotice('Sign-in with phone OTP will be added after Firebase setup.')}>Sign in <ArrowUpRight size={15}/></button></div></header>
        <section className="hero">
          <div className="hero-copy"><div className="eyebrow"><Sparkles size={14}/> YOUR AI-POWERED WORKSPACE</div><h1>One hub. <span>Infinite</span><br/>possibilities.</h1><p>Discover helpful AI tools for creating, writing, coding and getting more done — all from one simple workspace.</p><div className="hero-search"><Search size={19}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search AI tools..." /><kbd>⌘ K</kbd></div><div className="hero-foot"><span><ShieldCheck size={15}/> Designed with privacy in mind</span><span><Zap size={15}/> Simple, focused workspace</span></div></div>
          <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orb-core"><Sparkles size={48}/></div><div className="float-card float-one"><Image size={17}/><span>Image creation</span><i/></div><div className="float-card float-two"><Code2 size={17}/><span>Smart coding</span><i/></div><div className="float-card float-three"><FileText size={17}/><span>Content writing</span><i/></div><div className="spark spark-a">✦</div><div className="spark spark-b">✧</div></div>
        </section>
        <section className="tools-section"><div className="section-heading"><div><div className="eyebrow muted">THE TOOLKIT</div><h2>Explore AI tools</h2><p>Pick a tool and bring your next idea to life.</p></div><span className="tool-count">{visibleTools.length} tools</span></div>
          <div className="filters">{categories.map(item => <button key={item} className={category === item ? 'filter active-filter' : 'filter'} onClick={() => setCategory(item)}>{item}</button>)}</div>
          <div className="tool-grid">{visibleTools.map(tool => { const Icon = tool.icon; return <article className="tool-card" key={tool.name}><div className="card-top"><div className={`tool-icon ${tool.color}`}><Icon size={21}/></div><span className="tag">{tool.tag}</span></div><h3>{tool.name}</h3><p>{tool.desc}</p><button className="launch-button" onClick={() => openTool(tool.name)}>Explore tool <ArrowUpRight size={15}/></button></article>; })}</div>
          {visibleTools.length === 0 && <div className="empty-state">No tools found. Try another search.</div>}
        </section>
        <footer><div className="footer-brand"><Sparkles size={16}/> AI Tools Hub</div><span>One workspace for your ideas.</span><span>© 2026 AI Tools Hub</span></footer>
        {notice && <div className="notice" role="status"><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Dismiss"><X size={16}/></button></div>}
      </main>
    </div>
  );
}
export default App;