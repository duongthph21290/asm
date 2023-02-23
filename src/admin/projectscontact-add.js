import axios from "axios";
import { addContact } from "../api/projectscontact";
import { useEffect, router } from "../lib";

const AdminProjectsAddContact = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectHotline = document.querySelector("#project-hotline");
        const projectAddress = document.querySelector("#project-address");
        const projectGmail = document.querySelector("#project-gmail");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            // const urls = await uploadFiles(projectImages.files);
            try {
                // Tạo proejct mới
                const formData = {
                    name: projectName.value,
                    hotline: projectHotline.value,
                    address: projectAddress.value,
                    gmail: projectGmail.value,
                };
                await addContact(formData);
                router.navigate("/admin/contact");
            } catch (error) {
                console.log(error);
            }
        });
    });
    // const uploadFiles = async (files) => {
    //     if (files) {
    //         const COULD_NAME = "dhu2jopbs";
    //         const PRESET_NAME = "upload_asm";
    //         const FOLDER_NAME = "ECMA";
    //         const urls = [];
    //         const api = `https://api.cloudinary.com/v1_1/${COULD_NAME}/image/upload`;

    //         const formData = new FormData(); //key: value
    //         formData.append("upload_preset", PRESET_NAME);
    //         formData.append("folder", FOLDER_NAME);

    //         for (const file of files) {
    //             formData.append("file", file);
    //             const reponse = await axios.post(api, formData, {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data"
    //                 },

    //             });
    //             urls.push(reponse.data.secure_url);

    //         }
    //         return urls;
    //     }

    // };
    return `
    <div class="container pt-5">  
         <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Tên Dự án</label>
                <input type="text" class="form-control" id="project-name" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Số điện thoại</label>
                <input type="text" class="form-control"  id="project-hotline" />
            </div>
            <div class="form-group">
            <label for="" class="form-label">Địa chỉ</label>
            <input type="text" class="form-control"  id="project-address" />
        </div>
          <div class="form-group">
                <label for="" class="form-label">Gmail</label>
                <input type="text" class="form-control" id="project-gmail" require />
            </div>
       <button class="btn btn-primary">Thêm Contact</button>
          
        </form>
        </div>`;
};

export default AdminProjectsAddContact;