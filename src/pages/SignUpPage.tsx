import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import SignUpForm from '../components/auth/SignUpForm';

export default function SignUpPage() {
  return (
    <AuthLayout title="Create an account." subtitle="Join NOIR & SAGE for a personalized dining experience.">
      <SignUpForm />
    </AuthLayout>
  );
}
