'use client';

import React, { useState } from 'react';

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      
      // シミュレーション用の遅延
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setFormData({
        childName: '',
        parentName: '',
        email: '',
        phone: '',
        message: '',
      });

      // 3秒後にメッセージを消す
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8 bg-gradient-to-br from-theme-100/30 to-theme-200/20 rounded-3xl shadow-lg border border-theme-200/20">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-2">入園申込フォーム</h3>
        <p className="text-text-light">必要事項をご記入の上、送信ボタンを押してください。</p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100/80 border border-green-400 text-green-800 rounded-xl text-center font-semibold">
          ✓ ご申込ありがとうございます！確認メールをお送りします。
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* お子様のお名前 */}
        <div className="flex flex-col">
          <label htmlFor="childName" className="text-sm font-semibold text-text-main mb-2 flex items-center gap-1">
            お子様のお名前
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="childName"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            placeholder="例：田中太郎"
            autoComplete='name'
            required
            className="px-4 py-3 bg-white/80 border border-theme-200/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-200 focus:border-transparent transition-all"
          />
        </div>

        {/* 保護者のお名前 */}
        <div className="flex flex-col">
          <label htmlFor="parentName" className="text-sm font-semibold text-text-main mb-2 flex items-center gap-1">
            保護者のお名前
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="例：田中花子"
            autoComplete='name'
            required
            className="px-4 py-3 bg-white/80 border border-theme-200/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-200 focus:border-transparent transition-all"
          />
        </div>

        {/* メールアドレス */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold text-text-main mb-2 flex items-center gap-1">
            メールアドレス
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="例：example@email.com"
            autoComplete='email'
            required
            className="px-4 py-3 bg-white/80 border border-theme-200/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-200 focus:border-transparent transition-all"
          />
        </div>

        {/* 電話番号 */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold text-text-main mb-2 flex items-center gap-1">
            電話番号
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="例：090-1234-5678"
            autoComplete='tel'
            required
            className="px-4 py-3 bg-white/80 border border-theme-200/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-200 focus:border-transparent transition-all"
          />
        </div>

        {/* その他のお問い合わせ */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold text-text-main mb-2">
            その他のお問い合わせ（任意）
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="ご質問やご要望などがあればお書きください..."
            rows={5}
            className="px-4 py-3 bg-white/80 border border-theme-200/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-200 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-theme-200 to-theme-300 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? '送信中...' : '申込を送信'}
          </button>
          <button
            type="reset"
            className="flex-1 py-3 px-6 bg-gray-200 text-text-main font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300"
            onClick={() => setFormData({
              childName: '',
              parentName: '',
              email: '',
              phone: '',
              message: '',
            })}
          >
            クリア
          </button>
        </div>
      </form>

      <p className="text-xs text-text-light text-center mt-6">
        プライバシーポリシーに同意の上、送信してください。<br />
        通常24時間以内にご連絡させていただきます。
      </p>
    </div>
  );
}
