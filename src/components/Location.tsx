import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const Location = () => {
    return (
        <section id="localizacao" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        <span className="text-orange-500">Nossa </span> Localização
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Venha nos visitar! Estamos localizados em um ponto estratégico
                        da cidade, com fácil acesso e estacionamento disponível.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Map */}
                    <div className="relative">
                        <div className="bg-white p-2 rounded-2xl shadow-xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1962829635767!2d-46.65844842404067!3d-23.561840862408547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1703123456789!5m2!1spt!2sbr"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl"
                            ></iframe>
                        </div>

                        {/* Quick Direction Button */}
                        <div className="absolute bottom-6 right-6">
                            <a
                                href="https://maps.google.com/?q=Avenida+Paulista,+São+Paulo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
                            >
                                <Navigation size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Information Cards */}
                    <div className="space-y-6">
                        {/* Address Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-orange-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Endereço</h3>
                                    <p className="text-gray-600 text-lg">
                                        Rua das Garage, 123<br />
                                        Centro - São Paulo/SP<br />
                                        CEP: 01000-000
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hours Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="text-orange-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
                                    <div className="space-y-2 text-gray-600">
                                        <p><span className="font-semibold">Segunda a Sexta:</span> 10h00 - 22h00</p>
                                        <p><span className="font-semibold">Sábado:</span> 10h00 - 20h00</p>
                                        <p><span className="font-semibold">Domingo:</span> Fechado</p>
                                    </div>
                                    <div className="mt-4 inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span>Aberto agora</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-orange-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Contato</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-gray-600">Telefone:</p>
                                            <a href="tel:+551133334444" className="text-lg font-semibold text-gray-900 hover:text-orange-500 transition-colors">
                                                (11) 3333-4444
                                            </a>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">WhatsApp:</p>
                                            <a
                                                href="https://wa.me/5511999999999"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg font-semibold text-gray-900 hover:text-orange-500 transition-colors"
                                            >
                                                (11) 99999-9999
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="bg-gray-900 rounded-2xl p-8 text-center">
                            <h3 className="text-white text-xl font-bold mb-4">
                                Faça seu pedido para delivery!
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Entregamos em toda a região central. Taxa de entrega a partir de R$ 5,00.
                            </p>
                            <a
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg"
                            >
                                <Phone size={20} />
                                <span>Pedir Delivery</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;