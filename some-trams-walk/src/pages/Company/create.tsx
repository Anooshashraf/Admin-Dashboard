import { Input, Modal, Select } from "antd"
import { CompanyList } from "./list"
import { useModalForm } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import { CREATE_COMPANY_MUTATION } from "@/graphql/mutations";
import { Form } from "antd";
import { useSelect } from "@refinedev/antd";
import { USERS_SELECT_QUERY } from "@/graphql/queries";


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
    const {selectProps , queryResults} = useSelect({
        resource: 'users',
        optionLabel: 'name',
        meta: {
            gqlQuery: USERS_SELECT_QUERY
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
                      <Form.Item
                        label="Sales Owner"
                        name= "SalesOnwerId"
                        rules={[{required: true}]}
                    >
                        <Select
                            placeholder="Please select a sales owner"
                            {...selectProps}
                            options = {
                                queryResults.data?.data.map((user) => ({
                                    values: user.id,
                                    label:{
                                        <SelectOptionWithAvatar
                                            name={user.name}
                                            avatarUrl = {user.avatarUrl ?? undefined}
                                        />
                                    }
                                }))
                            }
                        />
                        

                    </Form.Item> 
                </Form>
            </Modal>
        </CompanyList>
    )
} 

