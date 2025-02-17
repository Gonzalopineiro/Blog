import { signIn, signOut, auth } from "@/../auth"
 
export default async function SignIn() {
  const session = await auth()

  if (session) {
    return (
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <div className="flex gap-4">
          <a
            href="/admin"
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            Admin
          </a>
          <button 
            type="submit"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
          >
            Sign out
          </button>
        </div>
      </form>
    )
  }

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button 
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        Sign in with Google
      </button>
      
    </form>
  )
}