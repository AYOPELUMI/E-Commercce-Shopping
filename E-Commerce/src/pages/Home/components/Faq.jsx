import { Accordion } from './Accordion';

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: 'Why should I Buy From ShopMaster?',
      answer:
        'At ShopMaster, we offer a wide range of high-quality products at competitive prices. Our commitment to excellent customer service, fast shipping, and secure payment options ensures a seamless shopping experience. Plus, we have a hassle-free return policy for your peace of mind.',
    },
    {
      id: 2,
      question: 'How do I place an order?',
      answer:
        'To place an order, simply browse our products, add your desired items to the cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.',
    },
    {
      id: 3,
      question: 'Do you offer refunds?',
      answer:
        'We accept returns within 30 days of purchase. Items must be unused and in their original packaging. Contact our support team to initiate a return.To return an item, contact our customer service team to receive a return authorization. Follow the provided instructions to send back your item.',
    },
    {
      id: 4,
      question: 'What payment methods do you accept?',
      answer:
        'We accept major credit cards, PayPal, and other secure payment options. You can choose your preferred method at checkout. You can change or cancel your order within 24 hours of placing it by contacting our customer service team. After this period, changes may not be possible.',
    },
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Question in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
