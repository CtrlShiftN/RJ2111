import React, { useState } from 'react'

function FileUploadPage() {
    // khai báo: lưu trữ file và tình trạng xem là đã chọn file hay chưa
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    // Khi người dùng chọn 1 file, lấy thông tin về file đó đồng thời set trạng thái đã chọn file
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]); // lấy thồn tin file đang được chọn
        setIsFilePicked(true); // set trạng thái báo hiệu đã chọn file
    };

    const handleSubmission = (e) => {
        e.preventDefault(); // chặn sự kiện gửi đi mặc định
        // xử lý các sự kiện sau khi người dùng nhấn vào nút submit
    };

    // Cấu trúc của 1 file ảnh được upload lên:
    // {
    //     lastModified: 1588350162449
    //     lastModifiedDate: Fri May 01 2020 17: 22: 42 GMT + 0100(British Summer Time) { } // Date object
    //     name: "Pluralsight_logo.png"
    //     size: 68317
    //     type: "image/png"
    //     webkitRelativePath: ""
    //     __proto__: File
    // }


    return (
        <form onSubmit={handleSubmission}>
            <input type="file" name="file" onChange={changeHandler} />
            {isFilePicked ? (<div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>lastModifiedDate:{''}
                    {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
            </div>
            ) : (<p>Select a file to show details</p>)}
            <input type='submit'></input>
        </form>)
}
export default FileUploadPage;