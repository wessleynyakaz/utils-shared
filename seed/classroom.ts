import { prisma } from './prisma'

export async function createClassRoom(teacher_id: string[]) {
    const klass = await prisma.classRoom.create({
        data: {
            name: '4 Fountain',
        },
    })


    teacher_id.map(async(id) => {
         await prisma.classRoom.update({
            where: {
                id: klass.id,
            },
            data: {
                class_teacher: {
                    connect: {
                        id: id
                    }
                }
            }
        })})
    return klass.id
}
