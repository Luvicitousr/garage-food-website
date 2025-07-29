import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                    <span className="text-orange-500">GARAGE</span>FOOD</h3>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Há mais de 10 anos servindo os melhores salgados artesanais da cidade. 
              Qualidade, sabor e tradição em cada mordida.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/garagefood" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/garagefood" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-orange-400 mt-1" size={18} />
                <div>
                  <p className="text-gray-400 text-sm">Telefone</p>
                  <a href="tel:+551133334444" className="text-white hover:text-orange-400 transition-colors">
                    (11) 3333-4444
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="text-orange-400 mt-1" size={18} />
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-400 mt-1" size={18} />
                <div>
                  <p className="text-gray-400 text-sm">Endereço</p>
                  <p className="text-white">
                    Rua das Garage, 123<br />
                    Centro - São Paulo/SP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-white text-xl font-bold mb-6">Funcionamento</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="text-orange-400" size={16} />
                <div>
                  <p className="text-white text-sm">Segunda - Sexta</p>
                  <p className="text-gray-400 text-sm">10h00 - 22h00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="text-orange-400" size={16} />
                <div>
                  <p className="text-white text-sm">Sábado</p>
                  <p className="text-gray-400 text-sm">10h00 - 20h00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="text-orange-400" size={16} />
                <div>
                  <p className="text-white text-sm">Domingo</p>
                  <p className="text-gray-400 text-sm">Fechado</p>
                </div>
              </div>

              <div className="mt-6 bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-green-400 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Aberto agora</span>
                </div>
                <p className="text-gray-400 text-sm">Delivery disponível</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GARAGE FOOD. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Termos de Uso
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Fazer Pedido
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;