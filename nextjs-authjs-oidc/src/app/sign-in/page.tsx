'use client';
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const handleSignIn = () => signIn('custom_oidc_provider');

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm rounded-xl bg-white border p-6 space-y-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Welcome
        </h1>
        <p className="text-sm text-gray-600">
        This is a sample web application built with Next.js and Auth.js to demonstrate the implementation of authentication using a custom OpenID Connect (OIDC) provider. It serves as a practical example for integrating custom OIDC authentication flows in modern web applications, showcasing the flexibility and simplicity of Auth.js for managing secure sign-in processes.
        <br />
        <br />
        The app is lightweight and modular, making it an excellent reference for developers seeking to implement similar authentication solutions in their projects.
        </p>
        <div className="space-y-4">
          <Button
            className="w-full flex items-center justify-center"
            onClick={handleSignIn}
            variant="outline"
          >
            Sign in
          </Button>
        </div>        
      </div>
    </div>
  );
}