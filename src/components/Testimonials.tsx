import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Prathamesh's problem-solving skills and dedication to learning are remarkable. His contributions to team projects have consistently demonstrated strong technical abilities.",
    author: "Dr. Rajesh Kumar",
    role: "Professor, Computer Science Department"
  },
  {
    quote: "A quick learner with excellent coding practices. His work on the university project showed great attention to detail and innovative thinking.",
    author: "Prof. Sneha Patil",
    role: "Project Mentor"
  }
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.quote}"</p>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}