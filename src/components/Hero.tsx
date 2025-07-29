import { Clock, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0"><img src="https://roboneo-public.meitudata.com/public/html_imgs/05mfd3n4nchd19mm/2d20cfc022cc484cb06290c1c1582c87.png" alt="GARAGE FOOD hero image" className="w-full h-full object-cover opacity-40" /><div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div></div>

            <div className="container mx-auto px-4 py-20 relative z-10 text-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">


                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            <span className="block text-orange-500">GARAGE</span>
                            <span className="block">FOOD</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                            Os melhores salgados da cidade! Feitos com ingredientes frescos e muito sabor.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-8">
                            <a
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center space-x-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <Phone size={20} />
                                <span>Fazer Pedido</span>
                            </a>

                            <button
                                onClick={() => document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg font-semibold"
                            >
                                Ver Cardápio
                            </button>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                                <div className="flex items-center space-x-3">
                                    <Clock className="text-orange-400" size={20} />
                                    <div>
                                        <p className="text-white font-semibold">Aberto agora</p>
                                        <p className="text-gray-400 text-sm">Seg-Sáb 10h-22h</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                                <div className="flex items-center space-x-3">
                                    <Phone className="text-orange-400" size={20} />
                                    <div>
                                        <p className="text-white font-semibold">Delivery</p>
                                        <p className="text-gray-400 text-sm">30-45 min</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down text-white opacity-70" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>
        </section>
    );
};

export default Hero;