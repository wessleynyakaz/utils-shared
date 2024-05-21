const { default: axios } = require('axios')
const fs = require('fs')
const path = require('path')

export async function setBookImage(
    bookId: string,
    file_path: string,
): Promise<string> {
    const real_path = path.join(__dirname, `../${file_path}`)
    const image_bytes = fs.readFileSync(real_path)

    const file_blob = new Blob([image_bytes], { type: 'image/jpeg' })
    let formData = new FormData()
    formData.append('image', file_blob, path.basename(real_path))
    formData.append('bookId', bookId)

    let url = process.env.FILE_SERVER_URL + '/api/upload_book_image/'

    const response = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    return process.env.FILE_SERVER_URL + response.data.image
}
