"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    company: z.string().min(2),
    message: z.string().min(10)
});

export async function submitLead(formData: z.infer<typeof contactSchema>) {
    // In a real app, you would save to database using Prisma
    // await prisma.lead.create({ data: formData });

    console.log("Lead Received:", formData);

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
}
