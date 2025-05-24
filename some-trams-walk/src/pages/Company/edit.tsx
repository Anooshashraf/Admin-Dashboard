import React from 'react'
import { Col , Row} from 'antd'
import { Edit , useForm } from '@refinedev/antd'
import { UPDATE_COMPANY_MUTATION } from '@/graphql/mutations'


const EditPage = () => {
  const { saveButtonProps , formProps , formLoading , queryResult} = useForm({
    redirect: false,
    meta: {
      gqlMutation : UPDATE_COMPANY_MUTATION //gqlMutation for updating anything here we're updating the company
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
            />
          </Col>
        </Row>
    </div>
  )
}

export default EditPage