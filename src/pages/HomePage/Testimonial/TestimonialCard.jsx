import React from 'react';

const TestimonialCard = ({testimonial, index}) => {
    return (
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <div className="mb-4">
          <img
            src={testimonial.image}
            alt={`Client ${index + 1}`}
            className="mx-auto h-16 w-16 rounded-full object-cover"
          />
        </div>
        <p className="text-gray-600 text-lg leading-tight text-center ">
          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
            "
          </span>
          {testimonial.content}
          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
            "
          </span>
        </p>
        <div className="mt-4">
          <p className="font-bold">{testimonial.author}</p>
          <p className="text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    );
};

export default TestimonialCard;