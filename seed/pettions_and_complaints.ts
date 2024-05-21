import { prisma } from './prisma'

export async function createPetitions(
    mobilizerId: string,
    issuerId: string,
    voterId: string,
) {
    await prisma.petition.create({
        data: {
            description: 'Build a Cafeteria',
            mobilizerId: mobilizerId,
            ballot: {
                createMany: {
                    data: [
                        {
                            vote: 'NEUTRAL',
                            voterId: voterId,
                        },
                    ],
                },
            },
        },
    })
    await prisma.petition.create({
        data: {
            description: 'Build a Chess Gazebo',
            mobilizerId: mobilizerId,
        },
    })
    await prisma.petition.create({
        data: {
            description: 'Do sports competition with other schools',
            mobilizerId: mobilizerId,
            issuedDate: new Date('2023-11-23'),
            submittedDate: new Date('2023-12-01'),
            status: 'ACCEPTED',
            ballot: {
                createMany: {
                    data: [
                        {
                            vote: 'AGREE',
                            voterId: voterId,
                        },
                    ],
                },
            },
        },
    })
}
