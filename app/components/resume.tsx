import Link from 'next/link';
import React from 'react';

const Resume = () => {
  return (
    <div className="p-6 text-gray-800">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Abel J. Villareal</h1>
        <p className="text-sm">
          Immokalee, FL, USA | abejevilla55@gmail.com | (239) 888-5428 | <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500">LinkedIn</a> | <Link href="https://github.com/ajv55" className="text-blue-500">GitHub</Link>
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl mb-1 font-semibold">Experience</h2>
        <hr className='border-[1px] border-zinc-950' />
        <div className="mt-2">
          <h3 className="text-xl font-semibold">Developer | MyFitGenius (Calorie & Exercise Tracking App)</h3>
          <p className="text-sm">January 2024 - Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Built a comprehensive <strong>SaaS</strong> for fitness tracking using <strong>Next.js, Tailwind CSS, MongoDB, and Prisma</strong>.</li>
            <li>Implemented user registration and authentication with <strong>NextAuth</strong>, enabling secure user data management.</li>
            <li>Developed features for tracking <strong>calorie intake, exercise logs,</strong> and providing <strong>analytics</strong> on user progress.</li>
            <li>Integrated <strong>Stripe</strong> for managing subscriptions and payment processing for premium features.</li>
            <li>Created and managed RESTful APIs for data retrieval and manipulation, ensuring efficient data flow and integration with frontend services.</li>
            <li>Configured domain name and <strong>DNS records</strong>, including email services integration using <strong>Resend</strong>.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Web Developer | Cupcake Pastries & Floral Arrangements E-commerce</h3>
          <p className="text-sm">August 2023 - December 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed a full-featured e-commerce platform using <strong>Next.js, Tailwind CSS, and MongoDB</strong>.</li>
            <li>Built a secure admin panel with <strong>NextAuth</strong> for managing products and orders.</li>
            <li>Enhanced user experience with functionalities for updating product listings and viewing <strong>sales analytics</strong>.</li>
            <li>Improved the user interface, incorporating <strong>responsive design principles</strong> and modern web standards for a seamless shopping experience.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Full-stack Developer | Freelance</h3>
          <p className="text-sm">February 2023 - July 2023</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed an AI-driven idea expansion platform with <strong>Next.js, Tailwind CSS, and MongoDB</strong>.</li>
            <li>Integrated the <strong>OpenAI API</strong> to provide creative suggestions to users.</li>
            <li>Managed user data and authentication using <strong>NextAuth and Prisma</strong>.</li>
            <li>Deployed the application on <strong>Vercel</strong> for high performance and scalability.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Front-end:</strong> HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</li>
          <li><strong>Back-end:</strong> Node.js, Express, MongoDB, Prisma, RESTful APIs</li>
          <li><strong>Tools:</strong> Git, Vercel, Stripe, Framer Motion, Resend</li>
          <li><strong>Testing:</strong> Jest, React Testing Library</li>
          <li><strong>DevOps:</strong> Domain & DNS setup, Deployment</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="mt-2">Self-Taught Web Developer</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc list-inside mt-2">
          <li><strong>MyFitGenius (Calorie & Exercise Tracking App)</strong> - <Link href="https://www.myfitgenius.com/" className="text-blue-500">Link to Project</Link></li>
          <li><strong>Cupcake Pastries & Floral Arrangements E-commerce</strong> - <a href="https://cupcakeshop.com" className="text-blue-500">Link to Project</a></li>
          <li><strong>AI-Driven Idea Expansion Platform</strong> - <Link href="https://ideatracker.vercel.app/" className="text-blue-500">Link to Project</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;

