"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    degree: "",
    university: "",
    cgpa: "",
    ielts: "",
    toefl: "",
    gre: "",
    preferredCountry: "",
    preferredField: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await fetch("../api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setSaved(true);
  };

  return (
    <main className="min-h-screen bg-[#0f1117] text-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-[#6c7aff] font-semibold mb-2">
            Scholar Profile
          </p>
          <h1 className="text-3xl font-bold text-white leading-tight">
            Tell us about yourself
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            This helps us match you with the right scholarships and programs.
          </p>
        </div>

        <div className="space-y-8">
          {/* Academic Section */}
          <section className="bg-[#1a1d2e] rounded-2xl p-6 border border-[#2a2d3e]">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6c7aff]" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#6c7aff]">
                Academic
              </h2>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                  Degree
                </label>
                <select
                  name="degree"
                  value={form.degree}
                  onChange={handleChange}
                  className="w-full bg-[#0f1117] border border-[#2a2d3e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6c7aff] transition-colors"
                >
                  <option value="">Select degree</option>
                  <option value="bachelor">Bachelor&apos;s</option>
                  <option value="master">Master&apos;s</option>
                  <option value="phd">PhD</option>
                  <option value="associate">Associate</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                  University
                </label>
                <input
                  type="text"
                  name="university"
                  value={form.university}
                  onChange={handleChange}
                  placeholder="e.g. University of Toronto"
                  className="w-full bg-[#0f1117] border border-[#2a2d3e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#6c7aff] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                  CGPA
                </label>
                <input
                  type="number"
                  name="cgpa"
                  value={form.cgpa}
                  onChange={handleChange}
                  placeholder="e.g. 3.8"
                  min="0"
                  max="4"
                  step="0.01"
                  className="w-full bg-[#0f1117] border border-[#2a2d3e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#6c7aff] transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Language Section */}
          <section className="bg-[#1a1d2e] rounded-2xl p-6 border border-[#2a2d3e]">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#a78bfa]">
                Language & Tests
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                  IELTS Score
                </label>
                <input
                  type="number"
                  name="ielts"
                  value={form.ielts}
                  onChange={handleChange}
                  placeholder="e.g. 7.5"
                  min="0"
                  max="9"
                  step="0.5"
                  className="w-full bg-[#0f1117] border border-[#2a2d3e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#a78bfa] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                  TOEFL Score
                </label>
                <input
                  type="number"
                  name="toefl"
                  value={form.toefl}
                  onChange={handleChange}
                  placeholder="e.g. 110"
                  min="0"
                  max="120"
                  className="w-full bg-[#0f1117] border border-[#2a2d3e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#a78bfa] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                  GRE Score
                </label>
                <input
                  type="number"
                  name="gre"
                  value={form.gre}
                  onChange={handleChange}
                  placeholder="e.g. 320"
                  min="260"
                  max="340"
                  className="w-full bg-[#0f1117] border border-[#2a2d3e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#a78bfa] transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="bg-[#1a1d2e] rounded-2xl p-6 border border-[#2a2d3e]">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#34d399]" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#34d399]">
                Preferences
              </h2>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                  Preferred Country
                </label>
                <select
                  name="preferredCountry"
                  value={form.preferredCountry}
                  onChange={handleChange}
                  className="w-full bg-[#0f1117] border border-[#2a2d3e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#34d399] transition-colors"
                >
                  <option value="">Select country</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="sweden">Sweden</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                  Preferred Field
                </label>
                <select
                  name="preferredField"
                  value={form.preferredField}
                  onChange={handleChange}
                  className="w-full bg-[#0f1117] border border-[#2a2d3e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#34d399] transition-colors"
                >
                  <option value="">Select field</option>
                  <option value="cs">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business / MBA</option>
                  <option value="medicine">Medicine</option>
                  <option value="law">Law</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="social">Social Sciences</option>
                  <option value="natural">Natural Sciences</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Save Button */}
          <div className="flex items-center justify-between pt-2">
            {saved && (
              <p className="text-sm text-[#34d399] flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Profile saved
              </p>
            )}
            {!saved && <span />}
            <button
              onClick={handleSubmit}
              className="bg-[#6c7aff] hover:bg-[#5a68f0] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
