function previewFile({ 
    download_url = '', 
    mime_type = '', 
    a_file = '', 
    file = '', 
    name = '' 
}) {
    const { actions: { openPreview } } = this.props
    !a_file && openPreview ({
        a_file: PDF_FILE_API + a_file,
        download_url,
        mime_type,
        misc: file,
        name,
    })
}

import R from 'ramda'

function previewFile(file) {
    const { actions: { openPreview } } = this.props
    R.pickAll([
        // 'download_url', 
        // 'mime_type', 
        'a_file', 
        'file', 
        'name'
    ], file)

    !a_file && openPreview ({
        a_file: PDF_FILE_API + a_file,
        misc: file,
        download_url,
        mime_type,
        name,
    })
}