import React, { useState } from 'react';
import { supabase } from '../../client';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/images/images';

const Login = ({ setToken }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  // Email + password login
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      setToken(data);
      navigate('/homepage');
    } catch (error) {
      alert(error.message);
    }
  }

  // Google login
  async function handleGoogleLogin() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:5173/homepage',
          queryParams: {
            prompt: 'select_account',
          },
        },
      });
      if (error) throw error;
      console.log('Google login started:', data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-[#f1f4f8] via-[#e6ecf3] to-[#f1f4f8]">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl bg-white/90 backdrop-blur border border-slate-200">
        <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-[#2c3e50] via-slate-800 to-[#111827] p-10 overflow-hidden">
          <img
            src={images.hotel1}
            alt="RPrime hotel"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="mx-auto w-full max-w-sm">
            <h1 className="text-3xl font-bold text-slate-900 text-center mb-8">Sign in</h1>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-600">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/30 focus:border-[#2c3e50] transition"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-600">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/30 focus:border-[#2c3e50] transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#2c3e50] to-[#1b2733] shadow-lg shadow-[#2c3e50]/30 hover:from-[#1b2733] hover:to-[#16202a] transition"
              >
                Login
              </button>
            </form>

            <div className="my-6">
              <span className="block h-px bg-slate-200"></span>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-transparent bg-[#ea4335] text-white font-semibold shadow-sm shadow-red-200/60 hover:bg-[#d33527] transition"
            >
              Continue with Google
            </button>

            <p className="mt-8 text-center text-sm text-slate-500">
              Need an account?{' '}
              <Link
                to="/signup"
                className="font-semibold text-[#2c3e50] hover:text-[#1b2733]"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
