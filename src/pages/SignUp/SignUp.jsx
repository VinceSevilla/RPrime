import React, { useState } from 'react';
import { supabase } from '../../client';
import { Link } from 'react-router-dom';
import images from '../../assets/images/images';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { full_name: formData.fullname }
        }
      });
      if (error) throw error;
      alert('Check your email for the verification link');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-[#f1f4f8] via-[#e6ecf3] to-[#f1f4f8]">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl bg-white/90 backdrop-blur border border-slate-200">
        <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-[#2c3e50] via-slate-800 to-[#111827] p-10 overflow-hidden">
          <img
            src={images.dining1}
            alt="Fine dining"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="mx-auto w-full max-w-sm">
            <h1 className="text-3xl font-bold text-slate-900 text-center mb-8">Sign up</h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="fullname" className="text-sm font-medium text-slate-600">
                  Full name
                </label>
                <input
                  id="fullname"
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/30 focus:border-[#2c3e50] transition"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-email" className="text-sm font-medium text-slate-600">
                  Email address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/30 focus:border-[#2c3e50] transition"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-password" className="text-sm font-medium text-slate-600">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/30 focus:border-[#2c3e50] transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#2c3e50] to-[#1b2733] shadow-lg shadow-[#2c3e50]/30 hover:from-[#1b2733] hover:to-[#16202a] transition"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/" className="font-semibold text-[#2c3e50] hover:text-[#1b2733]">
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
