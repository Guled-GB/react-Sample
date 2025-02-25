import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-700">
      <div className="w-full max-w-lg p-8 bg-purple-700 text-white rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Contact me</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full p-2 border rounded bg-purple-800 text-white" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email Address</label>
            <input type="email" className="w-full p-2 border rounded bg-purple-800 text-white" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Type of enquiry</label>
            <select className="w-full p-2 border rounded bg-purple-800 text-white">
              <option>Freelance project proposal</option>
              <option>Job opportunity</option>
              <option>General inquiry</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Your message</label>
            <textarea className="w-full p-2 border rounded bg-purple-800 text-white h-24"></textarea>
          </div>
          <button className="w-full p-2 bg-purple-600 rounded text-white">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
