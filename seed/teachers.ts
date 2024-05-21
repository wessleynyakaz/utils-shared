import { setTeacherPicture } from "@/prisma/seed/utils"
import { prisma } from "@/utils/prismaClient"
import { hash } from "bcrypt"
const path = require("path")
const TEACHER_DATA = [
    {
        name: 'Rumbidzai Chidembo',
        firstName: 'Rumbidzai',
        lastName: 'Chidembo',
        image: 'b.jpg',
        email: 'rumbidzai.chidembo@example.com',
    },
    {
        name: 'Grace Mangwende',
        firstName: 'Grace',
        lastName: 'Mangwende',
        image: 'c.jpg',
        email: 'grace.mangwende@example.com',
    },
    {
        name: 'Takudzwa Mukono',
        firstName: 'Takudzwa',
        lastName: 'Mukono',
        image: 'e.jpg',
        email: 'takudzwa.mukono@example.com',
    },
    {
        name: 'Eunice Mukarati',
        firstName: 'Eunice',
        lastName: 'Mukarati',
        image: 'g.jpg',
        email: 'eunice.mukarati@example.com',
    },
    {
        name: 'Tafadzwa Chigumira',
        firstName: 'Tafadzwa',
        lastName: 'Chigumira',
        image: 'h.jpg',
        email: 'tafadzwa.chigumira@example.com',
    },
    {
        name: 'Gift Mugadza',
        firstName: 'Gift',
        lastName: 'Mugadza',
        image: 'm.jpg',
        email: 'gift.mugadza@example.com',
    },
]

const TEACHER_IMAGE_INDICES = [3, 4]

export default async function createTeachers() {
    const password = await hash('test', 12)
    const teacherIds: string[] = []
    const teacherImages: string[] = []

    for (const teacherData of TEACHER_DATA) {
        const teacher = await prisma.teacher.create({
            data: {
                first_name: teacherData.firstName,
                last_name: teacherData.lastName,
                email: teacherData.email,
                password,
            },
        })

        teacherIds.push(teacher.id)

        const updatedTeacher = await prisma.teacher.update({
            where: {
                id: teacher.id,
            },
            data: {
                image: await setTeacherPicture(
                    teacher.id,
                    path.join(__dirname, `./images/teachers/${teacherData.image}`),
                ),
            },
        })

        if (TEACHER_IMAGE_INDICES.includes(TEACHER_DATA.indexOf(teacherData))) {
            teacherImages.push(updatedTeacher.image ?? '')
        }
    }

    return {
        teacher_ids: teacherIds,
        teacher_images: teacherImages,
    }
}
