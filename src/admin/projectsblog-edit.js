import { getBlog, updateBlog } from "../api/projectsblog";
import { useEffect, router, useState } from "../lib";
import axios from "axios";

const AdminProjectEditBlog = ({ id }) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setProject(await getBlog(id));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const projectName = document.getElementById("project-name")
        const projectAuthor = document.getElementById("project-author");
        const projectImages = document.querySelector("#project-images");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const urls = await uploadFiles(projectImages.files);
            try {
                const formData = {
                    id,
                    name: projectName.value,
                    author: projectAuthor.value,
                    images: urls,

                };
                await updateBlog(formData);
                router.navigate("/admin/blog");
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
    return `<div>
        <div class="container pt-5">
        <h1>Sửa Blog</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Tên Dự án</label>
                    <input type="text" class="form-control" id="project-name" value="${project.name}"/>
                </div>
            <div class="form-group">
            <label for="" class="form-label">Hình ảnh</label>
            <input type="file" multiple class="form-control" multiple id="project-images"/>
             </div>
                <div class="form-group">
                    <label for="" class="form-label">Mô tả</label>
                    <input type="text" class="form-control" id="project-author" value="${project.author}" />
                </div>
                <button class="btn btn-primary">Xác nhận sửa dự án</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditBlog;