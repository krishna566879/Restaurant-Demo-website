import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import SignUpForm from '../components/auth/SignUpForm';
import SEO from '../components/ui/SEO';

export default function SignUpPage() {
  return (
    <>
      <SEO
        title="Create an Account — NOIR & SAGE"
        description="Join NOIR & SAGE for a personalized contemporary fine dining experience in Indore."
      />
      <AuthLayout title="Create an account." subtitle="Join NOIR & SAGE for a personalized dining experience.">
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
