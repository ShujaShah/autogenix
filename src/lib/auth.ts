import { betterAuth, check } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from '@/lib/db';

import { polar, checkout, portal, usage, webhooks } from "@polar-sh/better-auth";
import { polarClient } from "./polar";


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", 
    }),
    emailAndPassword: {
      enabled: true,
      autoSignIn: true,
    },
    plugins: [
      polar({
        client: polarClient,
        createCustomerOnSignUp: true,
        use: [
          checkout({
            products:[
              {
                productId: '4e7e0dde-aabd-467e-b0f0-c696a6840d74',
                slug: 'pro'
              }
            ],
            successUrl: process.env.POLAR_SUCCESS_URL,
            authenticatedUsersOnly: true
          }),
          portal()
        ]
      })
    ]
});