import { auth, signOut } from '@/auth'
import { Button } from "@/components/ui/button"

function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <Button type="submit" variant="outline">Sign out</Button>
    </form>
  )
}

export async function Header() {
  const session = await auth()

  return (
    <header className='p-4 bg-gray-100'>
      <nav className='flex justify-between items-center'>
        <p className='font-bold'>Next Auth v5 + Next.js + OIDC</p>
        <div className="flex items-center space-x-4">
          <span>{session?.user?.name}</span>          
          <SignOutButton />
        </div>
      </nav>
    </header>
  )
}