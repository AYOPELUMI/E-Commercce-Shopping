import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 md:px-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 max-w-4xl text-center mb-8">
        Welcome to ShopMaster, your number one source for all things shopping.
        We're dedicated to giving you the very best of products, with a focus on
        dependability, customer service, and uniqueness.
      </p>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-md text-gray-700 max-w-3xl text-center">
          Our mission is to revolutionize the shopping experience by providing
          innovative products and outstanding service. We strive to empower our
          customers, offering them the best options available to meet their
          needs.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <p className="text-md text-gray-700 max-w-3xl text-center">
          Our team is made up of passionate professionals dedicated to providing
          you with quality service. Each member brings a unique set of skills
          and expertise to ensure that your experience with us is nothing short
          of exceptional.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-md text-gray-700 max-w-3xl text-center">
          Have questions or feedback? We'd love to hear from you. Reach out to
          us through our contact page, and one of our team members will get back
          to you as soon as possible.
        </p>
      </section>
      <div className="mt-6">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default About;
