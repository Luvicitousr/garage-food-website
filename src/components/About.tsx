import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: Award,
            title: "Qualidade Premium",
            description: "Ingredientes frescos e receitas artesanais para garantir o melhor sabor"
        },
        {
            icon: Users,
            title: "Tradição Familiar",
            description: "Mais de 10 anos servindo a comunidade com amor e dedicação"
        },
        {
            icon: Clock,
            title: "Sempre Fresquinho",
            description: "Salgados preparados diariamente para garantir frescor e sabor"
        },
        {
            icon: Heart,
            title: "Feito com Amor",
            description: "Cada salgado é preparado com carinho e atenção aos detalhes"
        }
    ];

    return (
        <section id="sobre" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
                    <div className="md:w-1/2 relative">
                        <div className="aspect-square max-w-md mx-auto relative z-10 overflow-hidden rounded-sm">
                            <img
                                src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Interior da lanchonete"
                                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                            <span className="text-orange-500">NOSSA </span>
                            HISTÓRIA
                            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-orange-500"></div>
                        </h2>
                        <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
                            Nascemos da paixão por criar salgados excepcionais. Nossa lanchonete combina
                            tradição familiar com inovação, oferecendo produtos frescos e saborosos em
                            um ambiente acolhedor e descontraído.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Content */}
                    <div>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            O GARAGE FOOD nasceu do sonho de criar um espaço onde a qualidade e o sabor
                            se encontram. Inspirados pelo conceito industrial e urbano, criamos um ambiente
                            único que reflete nossa personalidade autêntica.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Cada receita foi desenvolvida com cuidado, usando apenas ingredientes
                                    selecionados e técnicas artesanais que garantem sabor incomparável em
                                    cada mordida.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-300 text-lg font-semibold mb-2">Nossa Missão</p>
                                <div>
                                    <p className="text-gray-400">
                                        "Servir os melhores salgados da cidade, criando momentos especiais
                                        para nossos clientes através do sabor e qualidade excepcionais."
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Icon className="text-orange-500" size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;