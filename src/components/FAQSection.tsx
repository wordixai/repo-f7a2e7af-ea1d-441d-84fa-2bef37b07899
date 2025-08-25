import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div className="bg-silicon-bg-card rounded-lg overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full p-6 text-left flex items-center justify-between hover:bg-silicon-bg-card/80 transition-colors"
    >
      <span className="text-lg font-medium text-secondary-foreground">{question}</span>
      <div className="w-8 h-8 rounded-full bg-silicon-bg-card flex items-center justify-center">
        <ChevronDown className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
    </button>
    {isOpen && (
      <div className="px-6 pb-6">
        <p className="text-silicon-text-muted leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of models can I deploy on your platform?",
      answer: "You can deploy a wide range of AI models including LLMs, image generation models, video models, audio models, and multimodal models. Our platform supports both open-source and commercial models."
    },
    {
      question: "How does your pricing structure work?",
      answer: "We offer flexible pricing options including pay-per-use for serverless inference, reserved capacity for predictable workloads, and custom pricing for enterprise deployments."
    },
    {
      question: "Can I customize the models to fit my specific needs?",
      answer: "Yes, we offer comprehensive fine-tuning capabilities that allow you to adapt base models to your specific data and use cases with built-in monitoring and elastic compute."
    },
    {
      question: "What kind of support do you offer for developers?",
      answer: "We provide comprehensive documentation, SDKs for multiple programming languages, dedicated support channels, and a community forum for developers."
    },
    {
      question: "How do you ensure the performance and reliability of your APIs?",
      answer: "Our platform is built with enterprise-grade infrastructure, automated scaling, comprehensive monitoring, and SLA guarantees to ensure consistent performance and reliability."
    },
    {
      question: "Is your platform compatible with OpenAI standards?",
      answer: "Yes, our APIs are fully OpenAI-compatible, making it easy to migrate existing applications or integrate with tools that support OpenAI's API format."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header */}
          <div>
            <div className="tag-badge mb-6">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently asked questions
            </h2>
          </div>

          {/* Right - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full opacity-10 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=650&h=1000&fit=crop"
            alt="FAQ illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;