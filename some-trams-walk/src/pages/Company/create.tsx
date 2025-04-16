import { Input, Modal } from "antd"
import { CompanyList } from "./list"
import { useModalForm } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import { CREATE_COMPANY_MUTATION } from "@/graphql/mutations";
import { Form } from "antd";


export const Create = () => {
    const go = useGo ()  //refine uses useGo() for navigation
    const goToListPage = () => {
        go({
            to: {resource:'companies' , action: 'list'},
            options:{ keepQuery: true },
            type: 'replace'

        })
    }

    const { formProps , modalProps } = useModalForm({
        action: 'create',
        defaultVisible: true,
        resource: 'companies',
        redirect: false,
        mutationMode: 'pessimistic',
        onMutationSuccess: goToListPage,
        meta: {
            gqlMutation: CREATE_COMPANY_MUTATION 
        }
    })
    return (
        <CompanyList>
            <Modal
                {...modalProps}
                mask={true}
                onCancel={goToListPage}
                title='Create a new Company'
                width={512}
            >
                <Form {...formProps} layout="vertical">
                    <Form.Item
                        label="Company Name"
                        name= "name"
                        rules={[{required: true}]}
                    >
                        <Input placeholder="Please enter a company name"/>
                    </Form.Item>
                </Form>
            </Modal>
        </CompanyList>
    )
} 

