const { default: axios } = require('axios')
const fs = require('fs')
const path = require('path')

export async function setTeacherPicture(
    studentId: string,
    file_path: string,
): Promise<string> {
    const image_bytes = fs.readFileSync(file_path)

    const file_blob = new Blob([image_bytes], { type: 'image/jpeg' })
    let formData = new FormData()
    formData.append('image', file_blob, path.basename(file_path))
    formData.append('userId', studentId)

    let url = process.env.FILE_SERVER_URL + '/api/upload_teacher_image/'

    const response = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    return process.env.FILE_SERVER_URL + response.data.image
}
