import { Phone, ShoppingCart } from 'lucide-react';

const Menu = () => {
    const menuItems = [
        {
            id: 1,
            name: "Coxinha de Frango",
            description: "Massa dourada e crocante com recheio suculento de frango desfiado",
            price: "R$ 6,50",
            image: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=400",
            popular: true
        },
        {
            id: 2,
            name: "Pastel de Queijo",
            description: "Massa fininha e crocante com queijo derretido no ponto certo",
            price: "R$ 5,00",
            image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 3,
            name: "Esfiha de Carne",
            description: "Massa macia com recheio temperado de carne bovina especial",
            price: "R$ 4,50",
            image: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 4,
            name: "Pão de Açúcar",
            description: "Salgado tradicional com massa doce e recheio de queijo cremoso",
            price: "R$ 7,00",
            image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400",
            popular: true
        },
        {
            id: 5,
            name: "Kibe Assado",
            description: "Kibe de carne com trigo, assado até ficar dourado e crocante",
            price: "R$ 5,50",
            image: "https://images.pexels.com/photos/7426869/pexels-photo-7426869.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 6,
            name: "Empada de Palmito",
            description: "Massa amanteigada com recheio cremoso de palmito e temperos",
            price: "R$ 6,00",
            image: "https://images.pexels.com/photos/4686818/pexels-photo-4686818.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 7,
            name: "Bolinha de Queijo",
            description: "Salgado crocante por fora e cremoso por dentro, pura delícia",
            price: "R$ 4,00",
            image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 8,
            name: "Croquete de Carne",
            description: "Massa crocante com recheio de carne temperada e bem saborosa",
            price: "R$ 5,50",
            image: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 9,
            name: "Risoles de Camarão",
            description: "Massa fininha com recheio especial de camarão e temperos únicos",
            price: "R$ 8,00",
            image: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=400",
            popular: true
        }
    ];

    const handleOrder = (itemName: string) => {
        const message = `Olá! Gostaria de fazer um pedido: ${itemName}`;
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="cardapio" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 relative inline-block">
                        <span className="text-orange-500">Nossos </span> Salgados
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500"></div>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Descubra nossa seleção especial de salgados artesanais, feitos com
                        ingredientes frescos e muito carinho para proporcionar uma experiência única.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {menuItems.map((item) => (
                        <div key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                {/* Popular Badge */}
                                {item.popular && (
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        Popular
                                    </div>
                                )}

                                {/* Price Badge */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full font-bold">
                                    {item.price}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                                <button
                                    onClick={() => handleOrder(item.name)}
                                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 font-semibold"
                                >
                                    <ShoppingCart size={18} />
                                    <span>Pedir Agora</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gray-800 rounded-2xl p-8 border-2 border-orange-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Faça seu pedido agora mesmo!
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Atendimento rápido via WhatsApp. Delivery disponível para toda a região.
                    </p>
                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold"
                    >
                        <Phone size={20} />
                        <span>WhatsApp: (11) 99999-9999</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Menu;