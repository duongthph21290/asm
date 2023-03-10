import { getProject, updateProject } from "../api/project";
import { useEffect, router, useState } from "../lib";
import axios from "axios";

const AdminProjectEditPage = ({ id }) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setProject(await getProject(id));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const projectName = document.getElementById("project-name")
        const projectDesc = document.querySelector("#project-desc");
        const projectDesc1 = document.querySelector("#project-desc1");
        const projectEmail = document.querySelector("#project-email");
        const projectSDT = document.querySelector("#project-sdt");
        const projectLink = document.querySelector("#project-link");
        const projectAuthor = document.getElementById("project-author");
        const projectImages = document.querySelector("#project-images");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const urls = await uploadFiles(projectImages.files);
            try {
                const formData = {
                    id,
                    name: projectName.value,
                    desc: projectDesc.value,
                    desc1: projectDesc1.value,
                    email: projectEmail.value,
                    sdt: projectSDT.value,
                    link: projectLink.value,
                    author: projectAuthor.value,
                    images: urls,
                
                };
                await updateProject(formData);
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
    return `<div>
        <div class="container pt-5">
        <h1>S???a d??? ??n</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">T??n D??? ??n</label>
                    <input type="text" class="form-control" id="project-name" value="${project.name}"/>
                </div>
                <div class="form-group">
                <label for="" class="form-label">Gi???i thi???u</label>
                <input type="text" class="form-control" id="project-desc" value="${project.desc}"/>
            </div>
            <div class="form-group">
            <label for="" class="form-label">Gi???i thi???u th??m</label>
            <input type="text" class="form-control" id="project-desc1" value="${project.desc1}"/>
        </div>
            <div class="form-group">
            <label for="" class="form-label">Email</label>
            <input type="text" class="form-control" id="project-email" value="${project.email}"/>
        </div>
        <div class="form-group">
        <label for="" class="form-label">SDT</label>
        <input type="text" class="form-control" id="project-sdt" value="${project.sdt}"/>
    </div>
            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="project-link" value="${project.link}"/>
            </div>
            <div class="form-group">
            <label for="" class="form-label">H??nh ???nh</label>
            <input type="file" multiple class="form-control" multiple id="project-images"/>
        </div>
                <div class="form-group">
                    <label for="" class="form-label">M?? t???</label>
                    <input type="text" class="form-control" id="project-author" value="${project.author}" />
                </div>
                <button class="btn btn-primary">X??c nh???n s???a d??? ??n</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;