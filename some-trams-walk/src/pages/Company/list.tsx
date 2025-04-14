import { COMPANIES_LIST_QUERY } from "@/graphql/queries";
import { CreateButton, FilterDropdown, List , useTable } from "@refinedev/antd"
import { getDefaultFilter, useGo } from "@refinedev/core";
import { Table,Input , Space} from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const CompanyList = () => {
    const go = useGo();
    const {tableProps, filters} = useTable({
        
        resource: 'companies',
        pagination:{
            pageSize: 12
        },
        meta: {
            gqlQuery: COMPANIES_LIST_QUERY 
        }
    })
    return(
        <List
            breadcrumb={false}
            headerButtons = {() => (
                <CreateButton
                    onClick={()=>{
                        go({
                            to: {
                                resource: 'companies',
                                action: 'create'
                            },
                            options: {
                                keepQuery: true
                            },
                            type: 'replace'
                        })
                    }}
                />
            )}
        >
            <Table {...tableProps}
                pagination={{
                    ...tableProps.pagination,
                }}
            >
                <Table.Column
                    dataIndex= "name"
                    title="Company title"
                    defaultFilteredValue={getDefaultFilter('id',filters)}
                    filterIcon = {<SearchOutlined/>}
                    filterDropdown={(props) => (
                        <FilterDropdown{...props}>
                            <Input placeholder="Search Company"/>                        
                        </FilterDropdown>
                    )}
                    render ={(value ,record)=> (
                        <Space>
                        </Space>
                    )}
                />
            </Table>
        </List>
    )
};

