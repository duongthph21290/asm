import { deleteContact, getContact, getContacts } from "../api/projectscontact";
import { useEffect, useState } from "../lib";
import axios from "axios";
import headeradm from "@/components/HeaderAdmin";

const AdminProjectsContact = () => {
    // localStorage
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setProjects(await getContacts());
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

                    deleteContact(id).then(() => {
                        const newProjects = projects.filter((project) => project.id != id);
                        setProjects(newProjects);
                    });
                } catch (error) {
                    console.log(error);
                }
            });
        }
    });

    return `
    ${headeradm()}
    <div class="container pt-5">
    <h1>Quản lý Contact</h1>
    <button style="	margin-bottom:25px; width: 150px;border-radius: 5px;"><a style="color: blue; font-weight: bold;font-size: 16px; text-decoration: none ;" href="/admin/projectsaddcontact">Thêm sản phẩm</a></button>
    <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên dự án</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Gmail</th>
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
                            <td>${project.hotline}</td>
                            <td>${project.address}</td>
                            <td>${project.gmail}</td>
                            <td>
                            <button data-name="Duong" data-id="${project.id}"class="btn btn-danger" onClick="confirm('Bạn có chắc chắn xóa không?')">Xóa</button>
                            <a href="/admin/projectseditcontact/${project.id}/edit" class="btn btn-primary btn-edit">Sửa</a>
                            </td>
                        </tr>
                    `;
            })
            .join("")} 
                
                
            </tbody>
        </table>



        
</div>`;

};

export default AdminProjectsContact;