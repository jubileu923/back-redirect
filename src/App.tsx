import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Star, Shield, Zap, Heart, Timer, Gift } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePurchase = () => {
    window.open('https://checkout.winsspay.com.br/checkout/cmbtswm4b00w911agx6i3o9mn?offer=F742885', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Alert */}
      <div className="bg-gray-800 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Gift className="w-4 h-4" />
          <span>OFERTA ESPECIAL ATIVA - APENAS PARA VOCÊ!</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Main Announcement */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg mb-6 shadow-md">
            <Star className="w-5 h-5" />
            PARABÉNS! VOCÊ FOI SELECIONADA!
            <Star className="w-5 h-5" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Você acaba de ganhar <span className="text-green-600">R$ 12,00</span> de desconto no nosso exclusivo
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Plano de Jejum Personalizado!
          </h2>
        </div>

        {/* Timer */}
        <div className="bg-red-600 text-white rounded-lg p-6 mb-8 text-center shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Timer className="w-6 h-6" />
            <span className="text-lg font-semibold">Oferta expira em:</span>
          </div>
          <div className="text-4xl font-bold font-mono">
            {formatTime(timeLeft)}
          </div>
          <p className="text-sm mt-2 opacity-90">Não perca esta oportunidade única!</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
          <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
            <p>
              Eu não quero que o dinheiro seja um problema quando se trata de <strong>transformar sua saúde</strong> e conquistar o corpo que você merece...
            </p>
            
            <p>
              É por isso que estamos comprometidos em oferecer soluções <strong>acessíveis, eficazes e comprovadas</strong>.
            </p>
            
            <p>
              E para tornar tudo ainda melhor, criamos uma oferta única — que talvez nunca mais se repita — para mulheres determinadas como você!
            </p>
          </div>

          {/* Selection Process */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-gray-400">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Como você foi selecionada:</h3>
                <p className="text-gray-700">
                  A cada <strong>50 visitantes</strong> da nossa página, apenas <strong>UMA</strong> é escolhida para desbloquear um desconto exclusivo.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>E hoje, essa pessoa é você!</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Price Highlight */}
          <div className="text-center mb-8">
            <p className="text-xl text-gray-700 mb-4">
              Sim, você foi sorteada para receber acesso imediato ao nosso protocolo de jejum com <strong>R$ 100,00 de desconto</strong>
            </p>
            
            <div className="bg-gray-800 text-white rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-sm opacity-90">De</p>
                  <p className="text-2xl line-through">R$ 100,00</p>
                </div>
                <div className="text-4xl font-bold">→</div>
                <div className="text-center">
                  <p className="text-sm opacity-90">Por apenas</p>
                  <p className="text-4xl font-bold">R$ 21,00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-800">Essa é sua chance real de:</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Mudar sua rotina</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Acelerar seu metabolismo</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Queimar gordura até durante o sono</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Alcançar a versão mais saudável do seu corpo</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-bold text-gray-800">O que você vai receber:</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Plano completo de jejum personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Acesso vitalício ao protocolo Turbo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Estratégias naturais para eliminar gordura abdominal</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Método simples, baseado em ciência, aprovado por nutricionistas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="text-center mb-8">
            <div className="bg-gray-800 text-white rounded-lg p-6 inline-block">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5" />
                <span className="font-bold text-lg">Tudo isso por apenas:</span>
              </div>
              <div className="text-3xl font-bold mb-2">R$ 21,00 à vista</div>
              <div className="text-lg">ou 2x de R$ 13,50 no cartão</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8">
            <button
              onClick={handlePurchase}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-colors duration-300"
            >
              QUERO MEU DESCONTO AGORA
            </button>
          </div>

          {/* Transformation Promise */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border">
            <p className="text-lg text-gray-700 leading-relaxed">
              Essa pode ser a <strong>virada de chave</strong> que você precisava. Imagine eliminar o inchaço, reduzir a ansiedade, secar a barriga e ainda se sentir mais leve, confiante e cheia de energia…
            </p>
          </div>

          {/* Method Description */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-gray-600" />
              <h4 className="text-xl font-bold text-gray-800">Nosso método é:</h4>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Prático, 100% natural</strong> e já ajudou <strong>milhares de mulheres</strong> a saírem do efeito sanfona e retomarem o controle do corpo e da mente.
            </p>
            <p className="text-gray-700">
              Você não precisa fazer academia, nem dietas malucas. <strong>Só seguir o protocolo.</strong>
            </p>
          </div>

          {/* Urgency Warning */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-6 h-6 text-red-600" />
              <h4 className="text-xl font-bold text-red-800">⚠️ Atenção:</h4>
            </div>
            <p className="text-red-700 font-medium">
              Essa condição especial com desconto só está ativa para este momento! Assim que a página for fechada, o valor volta ao normal.
            </p>
          </div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg border">
              <Shield className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Compra 100% segura</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border">
              <Star className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Resultados reais e comprovados</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border">
              <CheckCircle className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="font-medium text-gray-800">Sem riscos – garantia total</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button
              onClick={handlePurchase}
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg transition-colors duration-300 w-full md:w-auto"
            >
              CLIQUE AQUI PARA LIBERAR AGORA SEU DESCONTO E INICIAR SUA TRANSFORMAÇÃO
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p className="text-lg font-medium">SIMPLES...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
