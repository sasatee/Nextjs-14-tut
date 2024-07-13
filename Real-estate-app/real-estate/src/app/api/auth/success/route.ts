import prisma from '@/lib/prisma'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextResponse } from 'next/server'
import { randomBytes } from 'crypto' // Import crypto for random password generation

export async function GET () {
  try {
    const { getUser } = await getKindeServerSession()
    const user = await getUser()

    if (!user || !user.id) {
      throw new Error('Authentication failed: No user data found')
    }

    // Use the user.id directly as a string
    const dbUser = await prisma.admin.findUnique({
      where: { id: user.id }
    })

    if (!dbUser) {
      await prisma.admin.create({
        data: {
          id: user.id, // Using user.id as a string
          firstname: user.given_name ?? '',
          lastname: user.family_name ?? '',
          email: user.email ?? '',
          password: randomBytes(16).toString('hex'),
          avatarUrl: user.picture ?? '' // Generate a random password
        }
      })
    }

    return NextResponse.redirect('http://localhost:3000')
  } catch (error) {
    console.error('Error handling GET request:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
