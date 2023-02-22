import axios from "axios";
import { addProject } from "../api/project";
import { useEffect, router } from "../lib";

const AdminProjectsAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectDesc = document.querySelector("#project-desc");
        const projectDesc1 = document.querySelector("#project-desc1");
        const projectEmail = document.querySelector("#project-email");
        const projectSDT = document.querySelector("#project-sdt");
        const projectLink = document.querySelector("#project-link");
        const projectImages = document.querySelector("#project-images");
        const projectAuthor = document.querySelector("#project-author");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

          const urls = await uploadFiles(projectImages.files);
            try {
                // Tạo proejct mới
    const formData = {
                    name: projectName.value,
                    desc: projectDesc.value,
                    desc1: projectDesc1.value,
                    email: projectEmail.value,
                    sdt: projectSDT.value,
                    link: projectLink.value,
                    author: projectAuthor.value,
                    images: urls,
                };
                await addProject(formData);
                router.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });
    const uploadFiles = async (files) => {
        if (files) {
            const COULD_NAME = "dhu2jopbs";
            const PRESET_NAME = "upload_asm";
            const FOLDER_NAME = "ECMA";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${COULD_NAME}/image/upload`;

            const formData = new FormData(); //key: value
            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);
                const reponse = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },

                });
                urls.push(reponse.data.secure_url);

            }
            return urls;
        }

    };
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Tên Dự án</label>
                <input type="text" class="form-control" id="project-name" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Giới thiệu</label>
                <input type="text" class="form-control" id="project-desc" />
            </div>
            <div class="form-group">
            <label for="" class="form-label">Giới thiệu thêm</label>
            <input type="text" class="form-control" id="project-desc1" />
        </div>
            <div class="form-group">
            <label for="" class="form-label">Email</label>
            <input type="email" class="form-control" id="project-email" />
        </div>
            <div class="form-group">
            <label for="" class="form-label">SDT</label>
            <input type="text" class="form-control" id="project-sdt" />
              </div>
            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="project-link" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Hình ảnh</label>
                <input type="file" multiple class="form-control" multiple id="project-images" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Mô tả</label>
                <input type="text" class="form-control" id="project-author" />
            </div>
            <button class="btn btn-primary">Thêm sản phẩm</button>
        </form>
        </div>`;
};

export default AdminProjectsAddPage;