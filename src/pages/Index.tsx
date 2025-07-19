import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #F5E6D3 0%, #E8B4B8 50%, #D4A574 100%)' }}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="font-display text-2xl font-bold text-astro-charcoal">Хорарная Астрология</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="font-body text-astro-charcoal hover:text-astro-gold transition-colors">Услуги</a>
            <a href="#examples" className="font-body text-astro-charcoal hover:text-astro-gold transition-colors">Примеры</a>
            <a href="#about" className="font-body text-astro-charcoal hover:text-astro-gold transition-colors">Обо мне</a>
            <a href="#faq" className="font-body text-astro-charcoal hover:text-astro-gold transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-astro-charcoal mb-6 leading-tight">
            Получите <span className="text-astro-gold">точный ответ</span> на самый важный вопрос
          </h1>
          <p className="font-body text-xl text-astro-charcoal/80 mb-8 max-w-2xl mx-auto">
            Когда нет ответа, а решение нужно СЕЙЧАС. Хорарная астрология даёт конкретные "Да" или "Нет" на ваши жизненные вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-astro-gold hover:bg-astro-gold/90 text-white font-body text-lg px-8 py-4">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Получить ответ сейчас
            </Button>
            <Button variant="outline" className="border-astro-charcoal text-astro-charcoal hover:bg-astro-charcoal hover:text-white font-body text-lg px-8 py-4">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-astro-charcoal mb-16">Варианты Консультаций</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Express Service */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-astro-rose shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <Icon name="Zap" className="mx-auto mb-4 text-astro-gold" size={48} />
                <h3 className="font-display text-2xl font-bold text-astro-charcoal mb-4">Экспресс-Разбор</h3>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-astro-gold">500₽</span>
                </div>
                <p className="font-body text-astro-charcoal/80 mb-6">
                  Точный короткий ответ "Да" или "Нет", "Когда" или "Где" на ваш самый волнующий вопрос
                </p>
                <ul className="font-body text-sm text-astro-charcoal/70 space-y-2 mb-8">
                  <li>• Прямой ответ без деталей</li>
                  <li>• Быстрое получение результата</li>
                  <li>• Идеально для срочных решений</li>
                </ul>
                <Button className="w-full bg-astro-gold hover:bg-astro-gold/90 text-white font-body">
                  Заказать экспресс-разбор
                </Button>
              </div>
            </Card>

            {/* Full Service */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-astro-gold border-2 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-astro-gold text-white px-4 py-1 rounded-full text-sm font-body">Популярный</span>
              </div>
              <div className="text-center">
                <Icon name="Stars" className="mx-auto mb-4 text-astro-gold" size={48} />
                <h3 className="font-display text-2xl font-bold text-astro-charcoal mb-4">Полная Консультация</h3>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-astro-gold">2990₽</span>
                </div>
                <p className="font-body text-astro-charcoal/80 mb-6">
                  Детальный разбор ситуации с индивидуальными рекомендациями к действию
                </p>
                <ul className="font-body text-sm text-astro-charcoal/70 space-y-2 mb-8">
                  <li>• Детальный разбор хорарной карты</li>
                  <li>• Исчерпывающий прогноз</li>
                  <li>• Конкретный план действий</li>
                  <li>• Полная ясность и уверенность</li>
                </ul>
                <Button className="w-full bg-astro-charcoal hover:bg-astro-charcoal/90 text-white font-body">
                  Заказать полную консультацию
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-astro-charcoal mb-16">Реальные Истории из Практики</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <Icon name="Heart" className="text-astro-rose mb-4" size={32} />
              <h3 className="font-display text-xl font-bold text-astro-charcoal mb-3">Вернется ли мой бывший?</h3>
              <p className="font-body text-astro-charcoal/80 text-sm mb-4">
                Марина полгода ждала возвращения бывшего парня. Хорар показал, что возвращение маловероятно...
              </p>
              <p className="font-body text-astro-gold text-sm font-semibold">
                Результат: Через 3 месяца она узнала о его новых отношениях и смогла отпустить прошлое
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <Icon name="Briefcase" className="text-astro-gold mb-4" size={32} />
              <h3 className="font-display text-xl font-bold text-astro-charcoal mb-3">Получу ли повышение?</h3>
              <p className="font-body text-astro-charcoal/80 text-sm mb-4">
                Анастасия сомневалась в своих шансах на руководящую должность. Карта показала "Да"...
              </p>
              <p className="font-body text-astro-gold text-sm font-semibold">
                Результат: Через 1.5 месяца получила повышение и новую позицию
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <Icon name="Baby" className="text-astro-rose mb-4" size={32} />
              <h3 className="font-display text-xl font-bold text-astro-charcoal mb-3">Забеременею ли я?</h3>
              <p className="font-body text-astro-charcoal/80 text-sm mb-4">
                Елизавета 2 года не могла забеременеть. Хорар указал на необходимость медицинского вмешательства...
              </p>
              <p className="font-body text-astro-gold text-sm font-semibold">
                Результат: После процедуры через 2 месяца наступила беременность
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-astro-charcoal mb-8">Что такое Хорарная Астрология?</h2>
            <p className="font-body text-lg text-astro-charcoal/80 mb-8">
              Представьте, что у каждой проблемы или вопроса есть свой "момент рождения". Как и у человека, у этого момента есть своя "карта" — карта звездного неба.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/80 p-6 rounded-lg">
                <Icon name="Target" className="text-astro-gold mb-3" size={32} />
                <h3 className="font-display text-xl font-bold text-astro-charcoal mb-3">Точность и конкретика</h3>
                <p className="font-body text-astro-charcoal/80">
                  Не общие прогнозы, а конкретные ответы: "Да/Нет", "Когда", "При каких условиях"
                </p>
              </div>
              <div className="bg-white/80 p-6 rounded-lg">
                <Icon name="Clock" className="text-astro-rose mb-3" size={32} />
                <h3 className="font-display text-xl font-bold text-astro-charcoal mb-3">Мгновенный ответ</h3>
                <p className="font-body text-astro-charcoal/80">
                  Карта строится на момент вопроса, ответ получаете быстро
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-astro-charcoal mb-16">Частые Вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white/80 rounded-lg px-6 border-astro-rose">
                <AccordionTrigger className="font-body font-semibold text-astro-charcoal">
                  Как быстро я получу ответ?
                </AccordionTrigger>
                <AccordionContent className="font-body text-astro-charcoal/80">
                  Экспресс-разбор готов в течение дня, полная консультация — в течение 2-3 дней. Все зависит от сложности вопроса.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white/80 rounded-lg px-6 border-astro-rose">
                <AccordionTrigger className="font-body font-semibold text-astro-charcoal">
                  Нужна ли моя дата рождения?
                </AccordionTrigger>
                <AccordionContent className="font-body text-astro-charcoal/80">
                  Нет! Мне нужна только дата, время и место, когда вы задали вопрос. Это главное отличие хорарной астрологии.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white/80 rounded-lg px-6 border-astro-rose">
                <AccordionTrigger className="font-body font-semibold text-astro-charcoal">
                  Какие вопросы можно задавать?
                </AccordionTrigger>
                <AccordionContent className="font-body text-astro-charcoal/80">
                  Любые конкретные вопросы: отношения, карьера, здоровье, финансы, переезды, поиск пропавших вещей. Главное — чтобы вопрос был важным для вас.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white/80 rounded-lg px-6 border-astro-rose">
                <AccordionTrigger className="font-body font-semibold text-astro-charcoal">
                  Насколько точны предсказания?
                </AccordionTrigger>
                <AccordionContent className="font-body text-astro-charcoal/80">
                  Хорарная астрология — один из самых точных методов предсказания. В моей практике точность составляет более 85%.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-astro-gold to-astro-rose">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Готовы получить ответ на свой вопрос?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Не оставайтесь в неопределенности. Получите точный ответ прямо сейчас через Telegram
          </p>
          <Button className="bg-white text-astro-charcoal hover:bg-white/90 font-body text-lg px-8 py-4">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Написать в Telegram
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-astro-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body">&copy; 2024 Хорарная Астрология. Точные ответы на жизненные вопросы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;