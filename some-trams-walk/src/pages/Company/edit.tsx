import React from 'react'
import { Col , Row} from 'antd'
import { Edit , useForm } from '@refinedev/antd'
import { UPDATE_COMPANY_MUTATION } from '@/graphql/mutations'


const EditPage = () => {
  const { } = useForm({
    redirect: 'false',
    meta: {
      gqlMutation : UPDATE_COMPANY_MUTATION //gqlMutation for updating anything here we're updating the company
    }
  })
  return (
    <div>
        <Row gutter={[32,32]}>
          <Col xs={24} xl={32}>
            <Edit/>
          </Col>
        </Row>
    </div>
  )
}

export default EditPage