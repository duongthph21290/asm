import { deleteProject, getProjects } from "../api/project";
import { useEffect, useState } from "../lib";
import axios from "axios";

const AdminProjectsPage = () => {
    // localStorage
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setProjects(await getProjects());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", async function (e) {
                try {
                    const id = this.dataset.id;

                    deleteProject(id).then(() => {
                        const newProjects = projects.filter((project) => project.id != id);
                        setProjects(newProjects);
                    });
                } catch (error) {
                    console.log(error);
                }
            });
        }
    });

    return `<div class="container pt-5">
    <h1>Quản lý dự án</h1>
    <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên dự án</th>
                    <th>Tác giả</th>
                    <th>Gmail</th>
                    <th>SDT</th>
                    <th>Link Github</th>
                    <th>Image</th>
                    <th>Mô tả</th>
                    <th>Nút ấn</th>
                </tr>
            </thead>
            <tbody>
                ${projects
                    .map((project, index) => {
                        return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${project.name}</td>
                            <td>${project.desc}</td> 
                            <td>${project.email}</td>
                            <td>${project.sdt}</td>
                            <td>${project.link}</td>
                            <td></td>
                            <td>${project.author}</td>
                            <td>
                            <button data-name="Vu" data-id="${project.id}"class="btn btn-danger btn-remove" onclick="return confirm('Bạn có muốn xóa sản phẩm không???')">Xóa</button>
                            <a href="/admin/projects/${project.id}/edit" class="btn btn-primary btn-edit">Sửa</a>
                            </td>
                        </tr>
                    `;
                    })
                    .join("")} 
                
                
            </tbody>
        </table>



        
</div>`;

};

export default AdminProjectsPage;