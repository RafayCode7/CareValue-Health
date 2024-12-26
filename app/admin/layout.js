import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import WalletConnect from '../components/WalletConnect';

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen text-black flex-col">
          <Header />
          
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
