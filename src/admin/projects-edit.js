import { getProject, updateProject } from "../api/project";
import { useEffect, router, useState } from "../lib";

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
        const projectName = document.getElementById("project-name");
        const projectDesc = document.querySelector("#project-desc");
        const projectEmail = document.querySelector("#project-email");
        const projectSDT = document.querySelector("#project-sdt");
        const projectLink = document.querySelector("#project-link");
        const projectAuthor = document.getElementById("project-author");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const formData = {
                    id,
                    name: projectName.value,
                    desc: projectDesc.value,
                    email: projectEmail.value,
                    sdt: projectSDT.value,
                    link: projectLink.value,
                    author: projectAuthor.value,
                };
                await updateProject(formData);
                router.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });
    return `<div>
        <div class="container pt-5">
        <h1>Sửa dự án</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Tên Dự án</label>
                    <input type="text" class="form-control" id="project-name" value="${project.name}"/>
                </div>
                <div class="form-group">
                <label for="" class="form-label">Mô tả</label>
                <input type="text" class="form-control" id="project-desc" value="${project.desc}"/>
            </div>
            <div class="form-group">
            <label for="" class="form-label">Email</label>
            <input type="email" class="form-control" id="project-email" value="${project.email}"/>
        </div>
        <div class="form-group">
        <label for="" class="form-label">SDT</label>
        <input type="number" class="form-control" id="project-sdt" value="${project.sdt}"/>
    </div>
            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="project-link" value="${project.link}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Hình ảnh</label>
                <input type="file" multiple class="form-control" id="project-images" />
            </div>
                <div class="form-group">
                    <label for="" class="form-label">Tác giả</label>
                    <input type="text" class="form-control" id="project-author" value="${project.author}" />
                </div>
                <button class="btn btn-primary">Xác nhận sửa dự án</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;