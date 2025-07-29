import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold text-orange-500 tracking-wider" aria-label="GARAGE FOOD homepage">GARAGE<span className="text-white">FOOD</span></a>
                    

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-orange-500 transition-colors">
                            Início
                        </button>
                        <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-orange-500 transition-colors">
                            Sobre
                        </button>
                        <button onClick={() => scrollToSection('cardapio')} className="text-gray-300 hover:text-orange-500 transition-colors">
                            Cardápio
                        </button>
                        <button onClick={() => scrollToSection('localizacao')} className="text-gray-300 hover:text-orange-500 transition-colors">
                            Localização
                        </button>
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
                        >
                            <Phone size={16} />
                            <span>Pedir Agora</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
                        <div className="flex flex-col space-y-4 pt-4">
                            <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-orange-400 transition-colors text-left">
                                Início
                            </button>
                            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-orange-400 transition-colors text-left">
                                Sobre
                            </button>
                            <button onClick={() => scrollToSection('cardapio')} className="text-white hover:text-orange-400 transition-colors text-left">
                                Cardápio
                            </button>
                            <button onClick={() => scrollToSection('localizacao')} className="text-white hover:text-orange-400 transition-colors text-left">
                                Localização
                            </button>
                            <a
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2 w-fit"
                            >
                                <Phone size={16} />
                                <span>Pedir Agora</span>
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;