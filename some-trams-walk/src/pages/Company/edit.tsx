import { Col , Form, InputNumber, Row , Select} from 'antd'
import { Edit , useForm } from '@refinedev/antd'
import { UPDATE_COMPANY_MUTATION } from '@/graphql/mutations'
import CustomAvatar from '@/components/custom-avatar'
import { USERS_SELECT_QUERY } from "@/graphql/queries";
import { getNameInitials } from '@/utilities'
import { useSelect } from '@refinedev/antd'
import { GetFieldsFromList } from "@refinedev/nestjs-query";
import { UsersSelectQuery } from "@/graphql/types";
import SelectOptionWithAvatar from "@/components/select-option-with-avatar";
import { companySizeOptions, industryOptions } from '@/constants';


const EditPage = () => {
  const { saveButtonProps , formProps , formLoading , queryResult} = useForm({
    redirect: false,
    meta: {
      gqlMutation : UPDATE_COMPANY_MUTATION //gqlMutation for updating anything here we're updating the company
    }
  });
  const {avatarUrl , name} =queryResult?.data?.data  || {}
  const {selectProps , queryResult : queryResultUsers} = useSelect<GetFieldsFromList<UsersSelectQuery>>({
    resource: 'users',
    optionLabel: 'name',
    pagination: {
      mode: 'off'
    },
    meta: {
        gqlQuery: USERS_SELECT_QUERY
    }
  })
  return (
    <div>
        <Row gutter={[32,32]}>
          <Col xs={24} xl={32}>
            <Edit
              isLoading = {formLoading}
              saveButtonProps={saveButtonProps}
              breadcrumb={false}
            >
              <Form {...formProps} layout='vertical'>
                <CustomAvatar shape='circle' src={avatarUrl} name={getNameInitials(name || '')}
                />
                <Form.Item
                  label="Sales owner"
                  name= "salesOwnerId"
                  initialValue={formProps?.initialValues?.salesOwner?.id}
                >
                  <Select
                      placeholder="Please select a sales owner"
                      {...selectProps}
                      options = {
                          queryResultUsers.data?.data.map((user) => ({
                              value: user.id,
                              label:(
                                  <SelectOptionWithAvatar
                                      name={user.name}
                                      avatarUrl = {user.avatarUrl ?? undefined}
                                  />
                              )
                          })) ?? []
                      }
                  />
                </Form.Item> 
                <Form.Item>
                  <Select options={companySizeOptions}
                  />
                </Form.Item>
                <Form.Item>
                  <InputNumber
                    autoFocus
                    addonBefore = '$'
                    min={0}
                    placeholder='0,00'
                  />
                </Form.Item>
                <Form.Item label="industry">
                  <Select options={industryOptions}
                  />
                </Form.Item>
                <Form.Item label="Business type">
                  <Select options={}
                  />
                </Form.Item >
                <Form.Item label="Country">
                  <Select options={}
                  />
                </Form.Item > 
                <Form.Item label="website">
                  <Select options={}
                  />
                </Form.Item> 

              </Form>
            </Edit>  
          </Col>
        </Row>
    </div>
  )
}

export default EditPage