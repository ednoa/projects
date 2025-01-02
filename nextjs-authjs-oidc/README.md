# Integrating Custom OIDC Provider with Next.js and Next Auth v5
### Learn how to implement secure authentication in Next.js with Next Auth v5 and custom OpenID Connect (OIDC) for a seamless user experience.

👉 Integrate NextAuth v5 + OIDC in 7 steps.
🔒 Secure, scalable, and headache-free.

📝 Read now full documentation: [(https://codeandscale.hashnode.dev/integrating-custom-oidc-provider-with-nextjs-and-next-auth-v5-a-step-by-step-guide)]

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Download Node.js: https://nodejs.org/en/download/package-manager
- pnpm
  ```sh
  npm install -g pnpm
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ednoa/projects.git
   ```
1. Open folder
   ```sh
   cd .\nextjs-authjs-oidc\
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```
3. Add AUTH_SECRET environment variable 
   ```sh
   npx auth secret
   ```   
4. Add following environment variables in `.env.local`
   ```sh
   AUTH_OIDC_CLIENT_ID= # The client ID for your OIDC provider.    
   AUTH_OIDC_CLIENT_SECRET= # The client secret for your OIDC provider.    
   AUTH_OIDC_ISSUER= # The OIDC provider's issuer URL.
   ```
5. Run the application
   ```sh
   pnpm run dev
   ```   
5. Open the webapp
[(http://localhost:3000)]