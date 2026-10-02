import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import SignInForm from '../components/auth/SignInForm';
import SEO from '../components/ui/SEO';

export default function SignInPage() {
  return (
    <>
      <SEO
        title="Sign In — NOIR & SAGE"
        description="Sign in to your NOIR & SAGE account to manage your dining reservations and preferences."
      />
      <AuthLayout title="Welcome back." subtitle="Sign in to manage your reservations and preferences.">
        <SignInForm />
      </AuthLayout>
    </>
  );
}
