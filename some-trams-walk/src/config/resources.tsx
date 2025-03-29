import { IResourceItem } from "@refinedev/core";
import {
    DashboardOutlined,
    ProjectOutlined,
    ShopOutlined,
  } from "@ant-design/icons";

export const resources: IResourceItem[] = [
    /*
    * A resourse in Refine performs these actions:
    * List -> Get all the records (Read)
    * create -> Create a record (Create)
    * shoW -> get a single record (Read)
    * edit -> update a record (Update)
    * delete -> Delete a record (delete)
    * or clone
    */
   {
    name:"dashboard",
    list: "/",
    meta: {
        label: 'Dashboard',
        icon: <DashboardOutlined/>
    }
   },
   {
    name:"companies",
    list: "/companies",
    show:'/companies/id',
    create: '/companies/new',
    edit: '/companies/edit/:id',
    meta: {
        label: 'Companies',
        icon: <ShopOutlined/>
    }
    },
   {
    name:"tasks",
    list: "/tasks",
    create: '/tasks/new',
    edit: '/tasks/edit/:id',
    meta: {
        label: 'Tasks',
        icon: <ProjectOutlined/>
    }
   }
]